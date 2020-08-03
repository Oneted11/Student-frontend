import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class StudentTableRow extends Component {
  constructor(props) {
    super(props);
    // this.deleteStudent = this.deleteStudent.bind(this);
  }

  // deleteStudent() {
  //   axios
  //     .delete(
  //       "https://student-end-back.herokuapp.com/students/delete-student/" +
  //         this.props.obj._id
  //     )
  //     .then((res) => {
  //       console.log("Student successfully deleted!");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.rollno}</td>
        <td>
          <Link
            className="edit-link"
            style={{ padding: "1.5em" }}
            to={"/edit-student/" + this.props.obj._id}
          >
            Edit
          </Link>
          <Button
            onClick={this.props.deleteStudent(this.props.obj._id)}
            size="sm"
            variant="danger"
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
