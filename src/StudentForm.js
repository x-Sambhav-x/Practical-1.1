import React, { useState } from "react";
import "./form.css";

export default function StudentForm() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!student.name || !student.email || !student.course || !student.age) {
      alert("Please fill all fields!");
      return;
    }
    alert("Student Registered ✅");
    console.log(student);
  };

  return (
    <div className="form-container">
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter student name"
          value={student.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={student.email}
          onChange={handleChange}
        />

        <label>Course</label>
        <select name="course" value={student.course} onChange={handleChange}>
          <option value="">Select course</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="B.Tech">B.Tech</option>
          <option value="MCA">MCA</option>
        </select>

        <label>Age</label>
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={student.age}
          onChange={handleChange}
        />

        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
}
