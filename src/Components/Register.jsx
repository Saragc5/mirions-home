import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';

function Register({ text }) {

  const navigate = useNavigate();

  return (
    <form>
    <h1 className="w-44 h-44 text-indigo-700 font-extralight text-6xl text-center mt-10 mb-10 textMirionsColor">LOGO</h1>
    <div className="inputClassDiv">
          <label>NOMBRE</label>
          <input
            className="inputBox"
            id="emailfield"
            type="text"
            autoComplete="useremail"
            name="email"
            placeholder="Gandalf José Pérez"
          ></input>
        </div>
    <div className="inputClassDiv">
          <label>EMAIL</label>
          <input
            className="inputBox"
            id="emailfield"
            type="text"
            autoComplete="useremail"
            name="email"
            placeholder="estoesuncorreo@gmail.com"
          ></input>
        </div>
        <div className="inputClassDiv">
          <label>CONTRASEÑA</label>
          <input
            className="inputBox"
            id="passwordfield"
            type="password"
            autoComplete="userpassword"
            name="password"
            placeholder="*************"
          />
        </div>
        <div className="inputClassDiv">
          <label>REPETIR CONTRASEÑA</label>
          <input
            className="inputBox"
            id="passwordfield"
            type="password"
            autoComplete="userpassword"
            name="password"
            placeholder="*************"
          />
        </div>
        <div className="grid-cols-1 grid-rows-2 gap-3 mt-8 ml-4 ">
          <Button text={"Register"} />
          <button className="ml-24 mt-8 text-sm font-thin" onClick={() => navigate("/login")}>Have an account? Log in!</button>
        </div>

    </form>
  )
}

export default Register