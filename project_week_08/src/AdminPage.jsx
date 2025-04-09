// App.jsx
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

export default function AdminPage() {
  return (
    <Router>
      <div className="flex min-h-screen font-sans text-gray-800">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-10">
              <div className="w-8 h-8 bg-pink-500 rounded-full mr-2" />
              <h1 className="text-xl font-bold">Logo</h1>
            </div>
            <nav className="flex flex-col space-y-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded text-lg font-medium transition ${
                    isActive
                    ? "bg-pink-500 text-white"
                    : "text-gray-700 hover:bg-pink-500 hover:text-white"
                  }`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded text-lg font-medium transition ${
                    isActive
                    ? "bg-pink-500 text-white"
                    : "text-gray-700 hover:bg-pink-500 hover:text-white"
                  }`
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/teams"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded text-lg font-medium transition ${
                    isActive
                    ? "bg-pink-500 text-white"
                    : "text-gray-700 hover:bg-pink-500 hover:text-white"
                  }`
                }
              >
                Teams
              </NavLink>
              <NavLink
                to="/analytics"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded text-lg font-medium transition ${
                    isActive
                    ? "bg-pink-500 text-white"
                    : "text-gray-700 hover:bg-pink-500 hover:text-white"
                  }`
                }
              >
                Analytics
              </NavLink>
              <NavLink
                to="/messages"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded text-lg font-medium transition ${
                    isActive
                    ? "bg-pink-500 text-white"
                    : "text-gray-700 hover:bg-pink-500 hover:text-white"
                  }`
                }
              >
                Messages
              </NavLink>
              <NavLink
                to="/integrations"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded text-lg font-medium transition ${
                    isActive
                    ? "bg-pink-500 text-white"
                    : "text-gray-700 hover:bg-pink-500 hover:text-white"
                  }`
                }
              >
                Integrations
              </NavLink>
            </nav>
          </div>
          <div className="mt-10 bg-blue-100 rounded p-4 text-center">
            <p className="text-sm font-medium">V2.0 is available</p>
            <button className="mt-2 text-blue-600 text-sm underline">Try now</button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-gray-50 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
