import React from "react";
import { connect } from "react-redux";
import * as courseAction from "../redux/actions/courseAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch(error => {
      alert("loading courses failed" + error);
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: ""
      }
    };
  }

  handleChange = event => {
    const course = {
      ...this.state.course,
      title: event.target.value
    };

    this.setState({ course: course });
  };

  handleSubmit = event => {
    event.preventDefault();

    // this.props.dispatch(courseAction.createCourse(this.state.course)); // without mapDispatchToProps in connect
    // this.props.createCourse(this.state.course); // with mapDispatchToProps in connect
    this.props.actions.createCourse(this.state.course); // with mapDispatchToProps in connect and bindActionCreators

    // alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h2>Add Courses</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  // dispatch: PropTypes.func.isRequired
  // createCourse: PropTypes.func.isRequired
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseAction.createCourse(course)) // using mannually
    actions: bindActionCreators(courseAction, dispatch) // using bindActionCreators // binding all of the actions in the course action to dispatch in one line
  };
}

// Note: using mapDispatchToProps with object
// const mapDispatchToProps = {
//   createCourse: courseAction.createCourse
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
