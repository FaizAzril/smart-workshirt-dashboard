function Header() {
  return (
    <header className="header">

      <div>
        <h1>SMART WORKSHIRT</h1>
        <p>K3 Worker Monitoring System</p>
      </div>

      <div className="system-status">
        <span className="status-dot"></span>
        SYSTEM ONLINE
      </div>

    </header>
  );
}

export default Header;