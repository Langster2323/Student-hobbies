import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class StudentList extends Component {
    

    render() {
        console.log(this.props)
        const { students, filteredStudents } = this.props;
        const studentList = students.length ? (
            filteredStudents.map((student, i) => {
                return (
                    <div className="student card" key={student.id}>
                        <div className="card-content">
                            <Link to={'/' + student.id}>
                                <span className="card-title red-text">{student.firstName} {student.lastName} </span>
                            </Link>
                                
                             <input
                                 type="text"
                                 value={student.hobbies}
                                 onKeyDown={e => this.props.handleKeyDown(e, i)}
                                 onChange={e => this.props.updateHobby(e, i)}
                              />
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