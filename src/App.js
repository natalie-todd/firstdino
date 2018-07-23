import React, { Component } from 'react';

import './index.css';

import Joblists from './components/Joblists'
import Header from './components/Header'
import Form from './components/Form'

const dinoData = './listings.json'

class App extends Component {
  state = {
    other: ['I hope this works', 'and this', 'this too'],
  }
  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
    return fetch(dinoData)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  createJob = data => {
    const { jobs } = this.state;
    data.unshift(data);
    return this.setState({ jobs });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <section id="job-listings">
            <h2>Job Listings</h2>
            <ul id="job-listings">
              <Joblists data={this.state.data} />
            </ul>
          </section>
          <aside id="side-bar">
            <h2>Add a Job</h2>
            <Form createJob={this.createJob} />
          </aside>
        </main>
      </React.Fragment>
    )
  }
}

export default App;
