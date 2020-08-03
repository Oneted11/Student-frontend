import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class StudentTableRow extends Component {
  render() {
    const StudentDelete = () => {
      console.log("it gets to studentDelete", this.props.obj._id);
      this.props.deleteStudent(this.props.obj._id);
      console.log("after calling studentdelete");
    };
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
          <Button onClick={() => StudentDelete()} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
