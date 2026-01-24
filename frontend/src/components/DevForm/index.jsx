import React from "react";
import { useState } from "react";

function DevForm({ onSubmit }) {

    const [login, setLogin ] = useState('')
    const [techs, setTechs] = useState('')
  
    async function handleSubmit(e) {
        e.preventDefault();
        const techsArray = techs.split(',').map(tech => tech.trim());

        await onSubmit({
            login,
            techs: techsArray
        });

        setLogin('')
        setTechs('')
    }

    return (
        <form onSubmit={handleSubmit}>
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
    )
}

export default DevForm;