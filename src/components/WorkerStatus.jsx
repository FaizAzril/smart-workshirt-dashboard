function WorkerStatus({ worker, workerId }) {
  const online = worker?.status === "ONLINE";

  return (
    <section className="worker-status">

      <div>
        <p className="label">WORKER</p>
        <h2>{worker?.name || workerId}</h2>
        <p>{workerId}</p>
      </div>

      <div className={online ? "online" : "offline"}>
        <span className="status-dot"></span>
        {online ? "ONLINE" : "OFFLINE"}
      </div>

    </section>
  );
}

export default WorkerStatus;