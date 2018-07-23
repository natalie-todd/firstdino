import React, { Component } from 'react';
// import logo from './logo.svg';
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
    fetch(dinoData)
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
        console.log(data)
      })
  }
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
            <h3>Add a Job</h3>
            <Form />
        </aside>
      </main>
      </React.Fragment>
            )
          }
        }
        
        export default App;
