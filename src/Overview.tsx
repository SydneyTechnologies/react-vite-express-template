import { Link } from "react-router";
import "./Overview.css";

function Overview() {
  return (
    <div className="overview-container">
      <nav className="overview-nav">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </nav>

      <div className="overview-content">
        <header className="overview-header">
          <h1>Project Overview</h1>
        </header>

        <section className="overview-section">
          <h2>What's Included</h2>
          <ol>
            <li>React 19 with TypeScript</li>
            <li>Vite build tool with HMR</li>
            <li>Express.js server with TypeScript</li>
            <li>React Router for navigation</li>
            <li>Docker support (dev and production)</li>
            <li>ESLint configuration</li>
            <li>Concurrent development scripts</li>
            <li>API proxy in development</li>
            <li>Static file serving in production</li>
          </ol>
        </section>

        <section className="overview-section">
          <h2>API Endpoints</h2>
          <ol>
            <li>GET /api/health</li>
            <li>GET /api/hello</li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default Overview;
