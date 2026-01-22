function JobCard({ job, updateStatus }) {
  return (
    <div className="job-card">
      <h3>{job.company}</h3>
      <p>{job.role}</p>

      <select
        value={job.status}
        onChange={(e) => updateStatus(job.id, e.target.value)}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
    </div>
  );
}

export default JobCard;
