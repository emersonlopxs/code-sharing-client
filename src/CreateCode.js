import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Link } from 'react-router-dom';

class CreateCode extends Component {
  state = {
    title: '',
    code: ''
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('hello world!');

    const data = this.state;

    const submitData = async code => {
      try {
        const url = 'https://dry-peak-50782.herokuapp.com/api';
        const data = await fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(code), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const response = await data.json();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    submitData(data);
  };
  render() {
    return (
      <div className="App">
      {/* <Router></Router> */}
        <Link to="/">See All Codes</Link>
        <br />
        <form action="">
          <p style={{ display: 'inline' }}>Title: </p>
          <input
            onChange={this.handleChange}
            style={{ width: '400px', height: '20px' }}
            type="text"
            name="title"
            placeholder="title"
          />
          <p>Code: </p>
          <textarea
            onChange={this.handleChange}
            name="code"
            id="code"
            cols="150"
            rows="40"
          />
          <button type="submit" onClick={this.handleSubmit}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default CreateCode;
