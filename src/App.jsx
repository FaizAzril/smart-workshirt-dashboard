import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";

function App() {
  const [telemetry, setTelemetry] = useState(null);

  useEffect(() => {
    const telemetryRef = ref(db, "telemetry/WS001");

    const unsubscribe = onValue(
      telemetryRef,
      (snapshot) => {
        const data = snapshot.val();

        console.log("Firebase data:", data);

        setTelemetry(data);
      },
      (error) => {
        console.error("Firebase error:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Smart Workshirt K3</h1>

      <h2>Worker: WS001</h2>

      {!telemetry ? (
        <p>Menunggu data Firebase...</p>
      ) : (
        <div>
          <p>
            Temperature: {telemetry.temperature} °C
          </p>

          <p>
            Humidity: {telemetry.humidity} %
          </p>

          <p>
            Latitude: {telemetry.latitude}
          </p>

          <p>
            Longitude: {telemetry.longitude}
          </p>

          <p>
            Fall Status: {telemetry.fallStatus}
          </p>

          <p>
            SOS: {telemetry.sosStatus ? "ACTIVE" : "SAFE"}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;