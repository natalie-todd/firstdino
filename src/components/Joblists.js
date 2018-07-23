import React from 'react';

export default function Joblists({ jobs }) {
  if (!jobs || jobs.length < 1) return <h3>No Jobs Found</h3>;
  console.log(jobs);
  return (
  <ul id="job-listings">
    {jobs.map(job => <li key={job.id}>
          <h4>{job.title}</h4>
          <small>{job.pay}</small>
          <p>{job.description}</p>
          <small>{`${job.interested.length} dinos are interested in this job`}</small>
        </li>)}
  </ul >
  )
}
