import { useEffect, useState } from "react";

import StudentProfile from "./components/StudentProfile";
import SummaryCards from "./components/SummaryCards";
import SemesterSelector from "./components/SemesterSelector";
import SubjectTable from "./components/SubjectTable";
import SemesterSummary from "./components/SemesterSummary";
import PerformanceChart from "./components/PerformanceChart";

import "./App.css";


const gradePoints = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5,
  F: 0
};


function App() {

  // =========================
  // STATE
  // =========================

  const [studentData, setStudentData] =
    useState(null);

  const [selectedSemester, setSelectedSemester] =
    useState(1);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  // =========================
  // FETCH DATA
  // =========================

  useEffect(() => {

    fetch("/students.json")

      .then((response) => {

        if (!response.ok) {
          throw new Error(
            "Failed to load student data"
          );
        }

        return response.json();
      })

      .then((data) => {

        setStudentData(data);
        setLoading(false);

      })

      .catch((error) => {

        console.error(error);

        setError(
          "Unable to load student report."
        );

        setLoading(false);
      });

  }, []);


  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="loading">
        Loading Student Report...
      </div>
    );
  }


  // =========================
  // ERROR
  // =========================

  if (error) {
    return (
      <div className="error">
        {error}
      </div>
    );
  }


  if (!studentData) {
    return null;
  }


  const {
    student,
    semesters
  } = studentData;


  // =========================
  // SEMESTER GPA CALCULATION
  // =========================

  const semesterResults =
    semesters.map((semester) => {

      let totalCredits = 0;
      let totalPoints = 0;

      semester.subjects.forEach(
        (subject) => {

          const gradePoint =
            gradePoints[subject.grade];

          totalCredits += subject.credits;

          totalPoints +=
            subject.credits * gradePoint;
        }
      );

      const gpa =
        totalCredits === 0
          ? 0
          : totalPoints / totalCredits;

      return {
        semester: semester.semester,
        gpa: Number(gpa.toFixed(2)),
        credits: totalCredits
      };

    });


  // =========================
  // CGPA
  // =========================

  let totalCredits = 0;
  let totalCreditPoints = 0;

  semesterResults.forEach((semester) => {

    totalCredits += semester.credits;

    totalCreditPoints +=
      semester.gpa * semester.credits;

  });


  const cgpa =
    totalCredits === 0
      ? 0
      : totalCreditPoints / totalCredits;


  // =========================
  // AVERAGE GPA
  // =========================

  const averageGpa =
    semesterResults.length === 0
      ? 0
      : semesterResults.reduce(
          (sum, item) =>
            sum + item.gpa,
          0
        ) / semesterResults.length;


  // =========================
  // CURRENT SEMESTER
  // =========================

  const currentSemester =
    semesters.find(
      (semester) =>
        semester.semester === selectedSemester
    );


  if (!currentSemester) {
    return null;
  }


  const currentResult =
    semesterResults.find(
      (semester) =>
        semester.semester === selectedSemester
    );


  // =========================
  // RENDER
  // =========================

  return (

    <div className="app">

      {/* HEADER */}

      <header className="header">

        <div>
          <h1>
            Student Academic Portal
          </h1>

          <p>
            Complete Semester Performance Report
          </p>
        </div>

        <div className="header-badge">
          ACADEMIC REPORT
        </div>

      </header>


      <main className="container">

        {/* PROFILE */}

        <StudentProfile
          student={student}
        />


        {/* SUMMARY */}

        <SummaryCards

          cgpa={cgpa.toFixed(2)}

          averageGpa={
            averageGpa.toFixed(2)
          }

          totalCredits={totalCredits}

          attendance={student.attendance}

        />


        {/* PERFORMANCE CHART */}

        <PerformanceChart
          semesterResults={semesterResults}
        />


        {/* SEMESTER SECTION */}

        <section className="report-section">

          <div className="section-heading">

            <div>
              <h2>
                Semester Report
              </h2>

              <p>
                View subject-wise academic performance
              </p>
            </div>

            <div className="current-gpa">

              <span>
                Current GPA
              </span>

              <strong>
                {currentResult.gpa}
              </strong>

            </div>

          </div>


          {/* SEMESTER BUTTONS */}

          <SemesterSelector

            semesters={semesters}

            selectedSemester={
              selectedSemester
            }

            setSelectedSemester={
              setSelectedSemester
            }

          />


          {/* SUBJECT TABLE */}

          <SubjectTable
            subjects={
              currentSemester.subjects
            }
          />


          {/* SEMESTER SUMMARY */}

          <SemesterSummary

            subjects={
              currentSemester.subjects
            }

            semesterGpa={
              currentResult.gpa
            }

            totalCredits={
              currentResult.credits
            }

          />

        </section>


        {/* FINAL RESULT */}

        <section className="final-result">

          <div>

            <h2>
              Overall Academic Result
            </h2>

            <p>
              Performance calculated from
              all 8 semesters.
            </p>

          </div>

          <div className="final-cgpa">

            <span>
              FINAL CGPA
            </span>

            <strong>
              {cgpa.toFixed(2)}
            </strong>

            <small>
              / 10.00
            </small>

          </div>

        </section>


        {/* FOOTER */}

        <footer>

          <p>
            © 2026 {student.college}
          </p>

          <p>
            Student Academic Management System
          </p>

        </footer>

      </main>

    </div>
  );
}

export default App;