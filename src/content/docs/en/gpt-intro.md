---
title: "GPT INTRO"
---



This project uses an Dynamic Express Server to power reponses from a local instance. The local instance listens to active image changes under the <a href="https://github.com/johannes-vdm/watchtower/tree/master/media" target="_blank">/media</a> folder.

The local instance then converts the image to text using python tesseract, sends converted text to OpenAI using the specified model and sends that response to the express server, using endpoint `api/watchtower`/

The watchtower actively listens to the latest reponse to the `api/watchtower` endpoint and places the text in html using Typescript.
 
## Video
<a href="./../../../../gpt.mkv" title="Link Title" target="_blank" download="false"><img src="./../../../../wil.png" alt="Alternate Text" /></a>
