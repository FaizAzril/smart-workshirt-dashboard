function SensorCard({ title, value, unit }) {
  return (
    <div className="sensor-card">

      <p className="label">{title}</p>

      <div className="sensor-value">
        {value ?? "--"}
        <span>{unit}</span>
      </div>

    </div>
  );
}

export default SensorCard;