import React, { Component } from 'react';

import './index.css';

import Joblists from './components/Joblists'
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'

const dinoData = './listings.json'

class App extends Component {
  state = { jobs: [] }

  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
    return fetch(dinoData)
      .then(response => response.json())
      .then(jobs => this.setState({ jobs }));
  }

  createJob = job => {
    const { jobs } = this.state;
    jobs.unshift(job);
    return this.setState({ jobs });
  };

  render() {
    return (
      <main>
        <Header />
        <section>
          <h2>Job Listings</h2>
          <ul id='job-listings'>
            <Joblists jobs={this.state.jobs} />
          </ul>
        </section>
        <aside id="side-bar">
          <h2>Add a Job</h2>
          <Form createJob={this.createJob} />
        </aside>
        <Footer />
      </main>
    )
  }
}

export default App;
