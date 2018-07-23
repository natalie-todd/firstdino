import React from 'react'

const addJob = { title: '', pay: '', description: '', interested: [] };
//class component allows it to have state and methods
export default class Form extends React.Component {
  state = {
    statusMessage: '',
    job: { ...addJob }
  };
  //essentially an event handler
  handleChange = (event) => {
    const job = this.state.data;
    job[event.target.name] = event.target.value;
    this.setState({ job: job, statusMessage: null });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    if (!this.props.createJob)
      throw new Error("Form requires a props.createJob function!");
    if (!this.state.title) {
      this.setState({ statusMessage: "Please Enter a Title" });
      return;
    }
    if (!this.state.data.pay) {
      this.setState({ statusMessage: "Please Enter Salary Fields" });
      return;
    }
    this.props.createJob(this.state.data);
    this.setState({
      job: { ...addJob },
      statusMessage: 'Job Successfully Added!'
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='title-box'>Title</label>
        <input id='title-box'
          type='text'
          value={this.state.title}
          name='title'
          onChange={this.handleChange} />
        <label htmlFor='pay-box'>Compensation</label>
        <input id='pay-box'
          type='text'
          value={this.state.pay}
          name='pay'
          onChange={this.handleChange} />
        <label htmlFor='description-box'>Description</label>
        <input id='description-box'
          type='text'
          value={this.state.description}
          name='description'
          onChange={this.handleChange} />
        <input type='submit' name='submit' value='Submit' />
        <div className='status-bar'>{this.state.statusMessage}</div>
        {/* <button type='submit'>Submit</button> */}
      </form>
    )
  }
}
