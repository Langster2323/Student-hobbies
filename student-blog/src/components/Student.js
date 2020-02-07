import React, { Component } from 'react';

class Student extends Component {
    state = {
        student: null
    }

    componentDidMount(){
        console.log(this.props)
        let id = this.props.match.params.student_id;
        this.setState({
            id
        })
    }
    render(){
        const { students } = this.props
        const student = students ? (
            <div className="student">
                <h4 className="center">{students.firstName} {students.lastName}</h4>
                <p>{students.hobbies}</p>
            </div>
        ) : (
            <div className="center">Loading information...</div>
        )
        return (
            <div className="container">
                {student}
            </div>
        )
    }
}

export default Student;
