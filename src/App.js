import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      picture: '',
      name: ''
    };
  }

  updatePicture(value) {
    this.setState({
      picture:value
    })
  }
  updateName(value) {
    this.setState({
      name:value
    })
  }

  addFriend() {
    console.log("test")
    const {friends,picture,name} = this.state;
    let newFriends = friends.slice();

    newFriends.push({picture,name});
    this.setState({
      friends:newFriends,
      picture:"",
      name:""
    })
  }

  render() {
    console.log(this.state.name)
    console.log(this.state.picture)
    const friends = this.state.friends.map((el,index) => (
      <div key={ `${index}-${el.name}`} >
        <img width='200px' src={el.picture} alt='error'/>
        <span>{el.name}</span>
      </div>
    ))
    return (
      <div>
        <span>Picture:</span>
        <input onChange={event => this.updatePicture(event.target.value)} value={this.state.picture}/>

        <span>Name:</span>
        <input onChange={event => this.updateName(event.target.value)} value={this.state.name}/>

        <button onClick={ () => this.addFriend() }>Add Friend</button>
        { friends }
      </div>
    );
  }
}

export default App;