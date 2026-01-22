import { useState } from "react";

function JobForm({ addJob }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!company || !role) return;

    addJob({
      id: Date.now(),
      company,
      role,
      status: "Applied",
    });

    setCompany("");
    setRole("");
  }

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <input
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button>Add Job</button>
    </form>
  );
}

export default JobForm;
