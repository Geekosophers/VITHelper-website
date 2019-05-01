import React from 'react';
import { connect } from 'react-redux';
import {TeachersListItem} from './TeachersListItem';
import selectTeachers from '../selectors/teachers';
const TeachersList = (props) => {
    return(
        <div className="content-container">
            <div className="list-header">
                <div>Teachers</div>
            </div>
            {props.teachers.map((teacher) => {
                return <TeachersListItem key={teacher.id} teacher={teacher} />; 
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        teachers: selectTeachers(state.teachers,state.filter)
    };
};

export default connect(mapStateToProps)(TeachersList);