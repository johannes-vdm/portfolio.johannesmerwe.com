import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/search?term=${searchTerm}`);
      setSearchResults(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              {loading ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : (
                'Search'
              )}
            </button>
          </div>
        </div>
      </div>
      {searchResults.length > 0 ? (
        <div className="row">
          <div className="col-md-12">
            <h3>SEARCH RESULTS</h3>
            <table className="table table-striped table-bordered" id="myTable">
              <thead>
                <tr>
                  <th style={{ color: 'lightgray' }}>DB ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Nickname</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>No</th>
                  <th>Status</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((result) => (
                  <tr key={result.id}>
                    <td style={{ color: 'lightgray' }}>{result.id}</td>
                    <td>{result.info_first_name}</td>
                    <td>{result.info_surname}</td>
                    <td>{result.info_nickname}</td>
                    <td>{result.info_email}</td>
                    <td style={{ textTransform: 'capitalize' }}>{result.type}</td>
                    <td>
                      {result.person_number && result.person_number}
                    </td>
                    <td>
                      {result.status ? (
                        result.status === 0 ? (
                          <small
                            style={{
                              backgroundColor: '#4BB543',
                              color: '#FFFFFF',
                              padding: '5px',
                              borderRadius: '25px',
                            }}
                          >
                            Active
                          </small>
                        ) : (
                          <small
                            style={{
                              backgroundColor: '#df4759',
                              color: '#FFFFFF',
                              padding: '5px',
                              borderRadius: '25px',
                            }}
                          >
                            Blocked
                          </small>
                        )
                      ) : result.cl_status ? (
                        result.cl_status === 1 ? (
                          <small
                            style={{
                              backgroundColor: '#000000',
                              color: '#FFFFFF',
                              padding: '5px',
                              borderRadius: '25px',
                            }}
                          >
                            <i className="fas fa-plus" aria-hidden="true"></i>{' '}
                            Lead
                          </small>
                        ) : result.cl_status === 2 ? (
                          <small
                            style={{
                              backgroundColor: '#000000',
                              color: '#FFFFFF',
                              padding: '5px',
                              borderRadius: '25px',
                            }}
                          >
                            <i className="fas fa-check" aria-hidden="true"></i>{' '}
                            Converted
                          </small >
                        ) : result.cl_status === 3 ? (
                          <small
                            style={{
                              backgroundColor: '#000000',
                              color: '#FFFFFF',
                              padding: '5px',
                              borderRadius: '25px',
                            }}
                          >
                            <i className="fas fa-times" aria-hidden="true"></i>{' '}
                            Lost
                          </small>
                        ) : null
                      ) : null}
                    </td >
                  </tr >
                ))}
              </tbody >
            </table >
          </div >
        </div >
      ) : null}
    </div>
  );
};
