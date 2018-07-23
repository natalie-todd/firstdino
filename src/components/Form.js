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
    const key = event.target.name
    const value = event.target.value

    this.setState({
      [key]: value
    }, () => console.log(this.state))
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(dinoData, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(newPost => {
      console.log(newPost.created)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='title-box'>Title</label>
        <input id='title-box'
          type='text'
          value={this.state.title}
          //name is the input that has just been changed
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
        <button type='submit'>Submit</button>
      </form>

    )
  }


}

export default Form