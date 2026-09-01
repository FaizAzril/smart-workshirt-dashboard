function FallStatus({ status }) {
  const isFall = status === "FALL_CONFIRMED";

  return (
    <div className={`status-card ${isFall ? "danger" : "safe"}`}>

      <p className="label">FALL STATUS</p>

      <h2>
        {isFall ? "FALL DETECTED" : "NORMAL"}
      </h2>

      <p>
        {isFall
          ? "Emergency event detected"
          : "No fall detected"}
      </p>

    </div>
  );
}

export default FallStatus;