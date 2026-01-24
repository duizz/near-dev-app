import { useEffect, useState } from "react"
import axios from "axios"
import './App.css'
import './Sidebar.css'
import './Main.css'
import api from "./services/api"

function App() {

  const [login, setLogin ] = useState('')
  const [techs, setTechs] = useState('')
  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/list")
      setDevs(response.data)
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
          {devs.map(dev => (
            <li key={dev.id} className="dev-item">
              <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs}</span>
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
