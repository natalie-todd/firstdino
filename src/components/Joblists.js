import React from 'react';

// import ListItems from './ListItems'

export default function List({ data }) {
  if (!data || data.length < 1) return <h3>No Jobs Found</h3>;
  console.log(data);
  return (
    <ul id="job-listings">
      {
        data.map(job => (
          <li key={job.id}>
            <h4>{job.title}</h4>
            <small>{job.pay}</small>
            <p>{job.description}</p>
            <small>{`${job.interested.length} dinos are interested in this job`}</small>
          </li>
        ))}
    </ul >
  );
}
