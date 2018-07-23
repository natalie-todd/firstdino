import React, { Component } from 'react';

const dinoData = './listings.json'
//class component allows it to have state and methods
class Form extends Component {
  state = {
    //     title: '',
    //     pay: '',
    //     description: 
  }
  render() {
    return (
      <form>
        <label htmlFor='title-box'>Title</label>
        <input id='title-box' type='text' />
        <label htmlFor='comp-box'>Compensation</label>
        <input id='comp-box' type='text' />
        <label htmlFor='description-box'>Description</label>
        <input id='description-box' type='text' />
        <button type='submit'>Submit</button>
      </form>

    )
  }
}



export default Form