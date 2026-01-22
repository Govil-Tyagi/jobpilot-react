import { useEffect, useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("jobs"));
    if (stored) setJobs(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  function addJob(job) {
    setJobs([...jobs, job]);
  }

  function updateStatus(id, status) {
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, status } : job
      )
    );
  }

  const filteredJobs =
    filter === "All"
      ? jobs
      : jobs.filter((job) => job.status === filter);

  return (
    <div className="app">
      <h1>JobPilot 🚀</h1>

      <JobForm addJob={addJob} />

      <div className="filters">
        {["All", "Applied", "Interview", "Offer", "Rejected"].map((f) => (
          <button key={f} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <JobList jobs={filteredJobs} updateStatus={updateStatus} />
    </div>
  );
}

export default App;
