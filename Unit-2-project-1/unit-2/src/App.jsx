import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from "./Header";
import StudentCard from "./StudentCard";
import SubjectList from "./SubjectList";
import Footer from "./Footer";
import "./App.css";
import Student from "./assets/me.jpeg";

function App() {
  const subjects = [
    "Java",
    "Python",
    "DBMS",
    "React",
    "Data Structures"
  ];

  return (
    <div>

      <Header
        collegeName="ABC College of Engineering"
      />

      <StudentCard
      photo = {Student}
        name="Kalaiarasi"
        studentId="STU101"
        regNo="12345"
        dept="AI & Data Science"
        year="2rd Year"
        sem="3rd Semester"
        cgpa="8.5"
        attendance="85%"
      />

      <SubjectList
        subjects={subjects}
      />

      <Footer
        eligibility="Eligible for Semester"
        placement="Eligible"
      />

    </div>
  );
}


export default App
