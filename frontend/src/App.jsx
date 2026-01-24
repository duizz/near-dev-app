import { useEffect, useState } from "react"
import './App.css'
import './Sidebar.css'
import './Main.css'
import api from "./services/api"

function App() {

  const [login, setLogin ] = useState('')
  const [techs, setTechs] = useState('')
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

  async function handleAddDev(e) {
    e.preventDefault();

    const techsArray = techs.split(',').map(tech => tech.trim());

    const response = await api.post(
      "/save", 
      { login, techs: techsArray})

    setLogin('');
    setTechs('');
    setDevs([...devs, response.data])
    setError(null)

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário Github</label>
            <input 
              type="text"
              placeholder="Insira seu usuario"
              id="github_username"
              name="github_username"
              value={login}
              onChange={e => setLogin(e.target.value)}
              required
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              type="text"
              placeholder="Insira as tecnologias"
              id="techs"
              name="techs"
              value={techs}
              onChange={e => setTechs(e.target.value)}
              required
            />
          </div>
          <button input="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          {error && (
            <li key="error" className="dev-item">
              <label className="dev-error">{error}</label>
            </li>
          )}
          {devs.map(dev => (
            <li key={dev.id} className="dev-item">
              <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs?.join(', ')}</span>
                </div>
              </header>
              <p>{dev.bio ? dev.bio : "Sem informação!"}</p>
              <a href={`https://github.com/${dev.login}`}>Acessar perfil GitHub</a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
