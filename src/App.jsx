import { useState } from 'react'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <header className="bg-[#282c34] min-h-[100vh] flex flex-col items-center justify-center text-xl text-white">
        
        <img src={logo} /* remove \n to make it work */ className="animate-spin h-[40vmin]\n pointer-events-none" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" className="text-xl" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-[#61dafb]"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-[#61dafb]"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
