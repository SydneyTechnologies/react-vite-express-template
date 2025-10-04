import { Link } from "react-router";

function Overview() {
  return (
    <div className="p-8 text-left mx-auto bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <nav className="mb-8">
        <Link
          to="/"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
        >
          ← Back to Home
        </Link>
      </nav>

      <div className="leading-relaxed">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            Project Overview
          </h1>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
            What's Included
          </h2>
          <ol className="space-y-1 pl-6 text-gray-700 dark:text-gray-300">
            <li className="list-decimal">React 19 with TypeScript</li>
            <li className="list-decimal">Vite build tool with HMR</li>
            <li className="list-decimal">Express.js server with TypeScript</li>
            <li className="list-decimal">React Router for navigation</li>
            <li className="list-decimal">
              Docker support (dev and production)
            </li>
            <li className="list-decimal">ESLint configuration</li>
            <li className="list-decimal">Concurrent development scripts</li>
            <li className="list-decimal">API proxy in development</li>
            <li className="list-decimal">Static file serving in production</li>
            <li className="list-decimal">Configuration for Tailwind CSS</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
            API Endpoints
          </h2>
          <ol className="space-y-1 pl-6 text-gray-700 dark:text-gray-300">
            <li className="list-decimal">GET /api/health</li>
            <li className="list-decimal">GET /api/hello</li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default Overview;
