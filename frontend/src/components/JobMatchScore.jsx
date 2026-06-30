function JobMatchScore({ score }) {
  return (
    <div className="card">

      <h2>Job Match Score</h2>

      <div className="score-circle">
        <span>{score}%</span>
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        Strong Match for this Role
      </p>

    </div>
  );
}

export default JobMatchScore;