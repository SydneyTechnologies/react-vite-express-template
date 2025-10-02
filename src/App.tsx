import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import expressLogo from '/expressjs.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiMessage, setApiMessage] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const fetchFromAPI = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/hello')
      const data = await response.json()
      setApiMessage(data.message)
    } catch (error) {
      setApiMessage('Error connecting to API')
      console.error('API Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://expressjs.com" target="_blank">
          <img src={expressLogo} className="logo express" alt="Express logo" />
        </a>
      </div>
      <h1>Vite + React + Express</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button onClick={fetchFromAPI} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch from API'}
        </button>
        {apiMessage && (
          <p style={{ marginTop: '1rem', color: '#61dafb' }}>
            API Response: {apiMessage}
          </p>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
