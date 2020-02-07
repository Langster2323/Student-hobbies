import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      students: [
        {firstName: 'Ahkeem', lastName: 'Lang', age: 27, hobbies: 'Sand Volleyball, RTS video games, bouldering, running, kickboxing, breakdancing, reading, traveling'},
        {firstName: 'Albert', lastName: 'Wash', age: 44, hobbies: 'Walking dog, watching James Bond movies'},
        {firstName: 'Becky', lastName: 'Chen', age: 33, hobbies: 'Sand Volleyball, kickboxing, reading, listening to podcast, playing with puppy'},
        {firstName: 'John', lastName: 'Hob', age: 25, hobbies: 'Learning Japanese, kite flying, bouldering'},
        {firstName: 'Steve', lastName: 'James', age: 32, hobbies: 'Indoor Volleyball, video games, bouldering'},
        {firstName: 'Jake', lastName: 'Fang', age: 41, hobbies: 'Football, RTS video games, bouldering'},
        {firstName: 'Jenyy', lastName: 'Colbolt', age: 53, hobbies: 'Soccer, RTS video games, hiking'},
        {firstName: 'Jude', lastName: 'Beatle', age: 62, hobbies: 'Baseball, board games, bouldering'},
        {firstName: 'Ali', lastName: 'Long', age: 29, hobbies: 'Rugby, board games, bouldering'},
        {firstName: 'Alison', lastName: 'Long', age: 25, hobbies: 'Sand Volleyball, RTS video games, hiking'}
      ]
    }
  }

  render(){
    return (
      <div className="App">
        
      </div>
    );
  }
  
}

export default App;
