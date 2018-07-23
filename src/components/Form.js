import React, { Component } from 'react'

const dinoData = './listings.json'
//class component allows it to have state and methods
class Form extends Component {
  state = {
    title: '',
    pay: '',
    description: ''
  }
  //essentially an event handler
  handleChange = (event) => {
    console.log('working')
  }
  render() {
    return (
      <form>
        <label htmlFor='title-box'>Title</label>
        <input id='title-box'
          type='text'
          value={this.state.title}
          onChange={this.handleChange} />
        <label htmlFor='pay-box'>Compensation</label>
        <input id='pay-box'
          type='text'
          value={this.state.pay}
          onChange={this.handleChange} />
        <label htmlFor='description-box'>Description</label>
        <input id='description-box'
          type='text'
          value={this.state.description}
          onChange={this.handleChange} />
        <button type='submit'>Submit</button>
      </form>

    )
  }


}

export default Form