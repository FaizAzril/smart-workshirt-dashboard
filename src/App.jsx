import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";

import Header from "./components/Header";
import WorkerStatus from "./components/WorkerStatus";
import SensorCard from "./components/SensorCard";
import FallStatus from "./components/FallStatus";
import SOSStatus from "./components/SOSStatus";
import GPSMap from "./components/GPSMap";
import EventHistory from "./components/EventHistory";

function App() {
  const [telemetry, setTelemetry] = useState(null);
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    const telemetryRef = ref(db, "telemetry/WS001");
    const workerRef = ref(db, "workers/WS001");

    const unsubscribeTelemetry = onValue(telemetryRef, (snapshot) => {
      setTelemetry(snapshot.val());
    });

    const unsubscribeWorker = onValue(workerRef, (snapshot) => {
      setWorker(snapshot.val());
    });

    return () => {
      unsubscribeTelemetry();
      unsubscribeWorker();
    };
  }, []);

  if (!telemetry || !worker) {
    return (
      <div className="loading">
        <h2>Smart Workshirt K3</h2>
        <p>Menghubungkan ke sistem...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Header />

      <main className="dashboard-content">

        <WorkerStatus
          worker={worker}
          workerId="WS001"
        />

        <section className="sensor-grid">
          <SensorCard
            title="Temperature"
            value={telemetry.temperature}
            unit="°C"
          />

          <SensorCard
            title="Humidity"
            value={telemetry.humidity}
            unit="%"
          />

          <SensorCard
            title="Acceleration"
            value={telemetry.accelMagnitude}
            unit="m/s²"
          />

          <SensorCard
            title="Gyroscope"
            value={telemetry.gyroMagnitude}
            unit="rad/s"
          />
        </section>

        <section className="status-grid">

          <FallStatus
            status={telemetry.fallStatus}
          />

          <SOSStatus
            active={telemetry.sosStatus}
          />

        </section>

        <section className="location-section">

          <GPSMap
            latitude={telemetry.latitude}
            longitude={telemetry.longitude}
          />

        </section>

        <section className="events-section">

          <EventHistory />

        </section>

      </main>
    </div>
  );
}

export default App;