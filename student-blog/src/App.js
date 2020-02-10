import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import Student from './components/Student';
import SearchBox from './components/SearchBox';
import { connect } from 'react-redux';

class App extends Component {

  updateHobby = (e, i) => {
    const newHobby = [...this.props.students]
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
    const newHobby = [...this.props.students];
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
    let filteredStudents = this.props.students.filter(student => {
      return student.firstName.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
    })
    return (
      <BrowserRouter>
        <div className="App">
          <SearchBox search={this.props.search} updateSearch={this.updateSearch}  />
          <Route exact path="/"><StudentList 
          filteredStudents={filteredStudents} 
          handleKeyDown={this.handleKeyDown} 
          updateHobby={this.updateHobby} 
          students={this.props.students}
           /></Route>
          <Route path="/:student_id" component={Student} />
        </div>
      </BrowserRouter>
      
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
    search: state.search
  }
}

export default connect(mapStateToProps)(App);
