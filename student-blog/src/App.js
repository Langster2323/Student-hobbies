import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import Student from './components/Student';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      students: [
        { id: 1, firstName: 'Ahkeem', lastName: 'Lang', age: 27, hobbies: 'Sand Volleyball, RTS video games, bouldering, running, kickboxing, breakdancing, reading, traveling'},
        { id: 2, firstName: 'Albert', lastName: 'Wash', age: 44, hobbies: 'Walking dog, watching James Bond movies'},
        { id: 3, firstName: 'Becky', lastName: 'Chen', age: 33, hobbies: 'Sand Volleyball, kickboxing, reading, listening to podcast, playing with puppy'},
        { id: 4, firstName: 'John', lastName: 'Hob', age: 25, hobbies: 'Learning Japanese, kite flying, bouldering'},
        { id: 5, firstName: 'Steve', lastName: 'James', age: 32, hobbies: 'Indoor Volleyball, video games, bouldering'},
        { id: 6, firstName: 'Jake', lastName: 'Fang', age: 41, hobbies: 'Football, RTS video games, bouldering'},
        { id: 7, firstName: 'Jenyy', lastName: 'Colbolt', age: 53, hobbies: 'Soccer, RTS video games, hiking'},
        { id: 8, firstName: 'Jude', lastName: 'Beatle', age: 62, hobbies: 'Baseball, board games, bouldering'},
        { id: 9, firstName: 'Ali', lastName: 'Long', age: 29, hobbies: 'Rugby, board games, bouldering'},
        { id: 10, firstName: 'Alison', lastName: 'Long', age: 25, hobbies: 'Sand Volleyball, RTS video games, hiking'}
      ],
      search: ''
    }
  }

  updateHobby = (e, i) => {
    const newHobby = [...this.state.students]
    newHobby[i].hobbies = e.target.value;
    this.setState({
      newHobby
    })
  }

  handleKeyDown = (e, i) => {
    if(e.key === 'enter') {
      this.createHobbyAtIndex(e, i);
    }
  }

  createHobbyAtIndex = (e, i) => {
    const newHobby = [...this.state.students];
    newHobby.splice(i + 1, {
      hobbies: ''
    });
    this.setState({
      newHobby
    })
  }

  updateSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render(){
    let filteredStudents = this.state.students.filter(student => {
      return student.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    })
    return (
      <BrowserRouter>
        <div className="App">
          <SearchBox search={this.state.search} updateSearch={this.updateSearch}  />
          <Route exact path="/"><StudentList 
          filteredStudents={filteredStudents} 
          handleKeyDown={this.handleKeyDown} 
          updateHobby={this.updateHobby} 
          students={this.state.students}
           /></Route>
          <Route path="/:student_id" component={Student} />
        </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
