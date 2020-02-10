import React, { Component } from 'react';
import { connect } from 'react-redux';

class Student extends Component {
   
    render(){
        console.log(this.props);
        
        const student = this.props.student ? (
            <div className="student">
                <h4 className="center">{this.props.student.firstName} {this.props.student.lastName}</h4>
                <p>{this.props.student.hobbies}</p>
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

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.student_id;
    return {
        student: state.students
    }
}

export default connect(mapStateToProps)(Student);
