import React, {Component} from 'react';

class StudentList extends Component {
    render() {
        console.log(this.props)
        const { students } = this.props;
        const studentList = students.length ? (
            students.map(student => {
                return (
                    <div className="student card" key={student.id}>
                        <div className="card-content">
                                <span className="card-title red-text">{student.firstName} {student.lastName} </span>
                             <p>{student.hobbies}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No student post yet!</div>
        )
        return (
            <div className="container student-list">
                <h4 className="center">Student blog</h4>
                {studentList}
            </div>
        )
    }
}

export default StudentList;