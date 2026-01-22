import JobCard from "./JobCard";

function JobList({ jobs, updateStatus }) {
  if (jobs.length === 0) {
    return <p className="empty">No applications found</p>;
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          updateStatus={updateStatus}
        />
      ))}
    </div>
  );
}

export default JobList;
