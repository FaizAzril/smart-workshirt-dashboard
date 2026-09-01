function GPSMap({ latitude, longitude }) {
  return (
    <div className="gps-card">

      <p className="label">LOCATION</p>

      <h2>GPS POSITION</h2>

      <p>Latitude: {latitude ?? "--"}</p>
      <p>Longitude: {longitude ?? "--"}</p>

    </div>
  );
}

export default GPSMap;