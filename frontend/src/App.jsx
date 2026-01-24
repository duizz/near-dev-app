import { useState } from "react"
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário Github</label>
            <input type="text" placeholder="Insira seu usuario" id="github_username" name="github_username" required/>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" placeholder="Insira as tecnologias" id="techs" name="techs" required/>
          </div>

          <button input="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/176503437?v=4" alt="" />
              <div className="user-info">
                <strong>Luiz</strong>
                <span>ReactJS, React Native, Node.js, Spring Boot</span>
              </div>
            </header>
            <p>Sem informação!</p>
            <a href="https://github.com/duizz">Acessar perfil GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/176503437?v=4" alt="" />
              <div className="user-info">
                <strong>Luiz</strong>
                <span>ReactJS, React Native, Node.js, Spring Boot</span>
              </div>
            </header>
            <p>Sem informação!</p>
            <a href="https://github.com/duizz">Acessar perfil GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/176503437?v=4" alt="" />
              <div className="user-info">
                <strong>Luiz</strong>
                <span>ReactJS, React Native, Node.js, Spring Boot</span>
              </div>
            </header>
            <p>Sem informação!</p>
            <a href="https://github.com/duizz">Acessar perfil GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/176503437?v=4" alt="" />
              <div className="user-info">
                <strong>Luiz</strong>
                <span>ReactJS, React Native, Node.js, Spring Boot</span>
              </div>
            </header>
            <p>Sem informação!</p>
            <a href="https://github.com/duizz" target="_parent">Acessar perfil GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App
