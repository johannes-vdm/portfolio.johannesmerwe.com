import type { MarkdownHeading } from 'astro';
import type { FunctionalComponent } from 'preact';
import { unescape } from 'html-escaper';
import { useState, useEffect, useRef } from 'preact/hooks';

type ItemOffsets = {
    id: string;
    topOffset: number;
};

const TableOfContents: FunctionalComponent<{ headings: MarkdownHeading[] }> = ({
    headings = [],
}) => {
    const toc = useRef<HTMLUListElement>();
    const onThisPageID = 'on-this-page-heading';
    const itemOffsets = useRef<ItemOffsets[]>([]);
    const [currentID, setCurrentID] = useState('');

    useEffect(() => {
        const getItemOffsets = () => {
            const titles = document.querySelectorAll('article :is(h1, h2, h3, h4)');
            itemOffsets.current = Array.from(titles).map((title) => ({
                id: title.id,
                topOffset: title.getBoundingClientRect().top + window.scrollY,
            }));
        };

        getItemOffsets();
        window.addEventListener('resize', getItemOffsets);

        return () => {
            window.removeEventListener('resize', getItemOffsets);
        };
    }, []);

    useEffect(() => {
        if (!toc.current) return;

        const setCurrent: IntersectionObserverCallback = (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const { id } = entry.target;
                    if (id === onThisPageID) continue;
                    setCurrentID(entry.target.id);
                    break;
                }
            }
        };

        const observerOptions: IntersectionObserverInit = {
            rootMargin: '-100px 0% -66%',
            threshold: 1,
        };

        const headingsObserver = new IntersectionObserver(setCurrent, observerOptions);

        document.querySelectorAll('article :is(h1,h2,h3)').forEach((h) => headingsObserver.observe(h));

        return () => headingsObserver.disconnect();
    }, [toc.current]);

    const onLinkClick = (e: Event) => {
        if (e.target instanceof HTMLAnchorElement) {
            setCurrentID(e.target.getAttribute('href')?.replace('#', '') || '');
        }
    };

    return (
        <>
            <h2 id={onThisPageID}>On this page</h2>
            <ul ref={toc}>
                {headings
                    .filter(({ depth }) => depth > 1 && depth < 4)
                    .map((heading) => (
                        <li key={heading.slug}
                            className={`header-link depth-${heading.depth} ${
                                currentID === heading.slug ? 'current-header-link' : ''
                            }`.trim()}>
                            <a href={`#${heading.slug}`} >
                                {unescape(heading.text)}
                            </a>
                        </li>
                    ))}
            </ul>
        </>
    );
};

export default TableOfContents;