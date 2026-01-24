import { useEffect, useState } from "react"
import './App.css'
import DevForm from './components/DevForm/index.jsx'
import DevItem from "./components/DevItem/index.jsx"
import './Main.css'
import api from "./services/api"
import './Sidebar.css'

function App() {

  const [devs, setDevs] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadDevs() {
      try {
        const response = await api.get("/list")
        setDevs(response.data)
      } catch (error) {
        const errMessage = error.response?.data?.error
        setError(errMessage)
      }
    }
    loadDevs()
  }, [])

  async function handleAddDev(data) {
    const response = await api.post(
      "/save", 
      data)

    setDevs([...devs, response.data])
    setError(null)
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {error && (
            <li key="error" className="dev-item">
              <label className="dev-error">{error}</label>
            </li>
          )}
          {devs.map(dev => (
            <DevItem key={dev.id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
