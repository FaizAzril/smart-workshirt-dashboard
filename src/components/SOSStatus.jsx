function SOSStatus({ active }) {
  return (
    <div className={`status-card ${active ? "danger" : "safe"}`}>

      <p className="label">SOS STATUS</p>

      <h2>
        {active ? "SOS ACTIVE" : "SAFE"}
      </h2>

      <p>
        {active
          ? "SOS button is active"
          : "No SOS signal"}
      </p>

    </div>
  );
}

export default SOSStatus;