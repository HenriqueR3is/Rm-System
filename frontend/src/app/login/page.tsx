// app/login/page.tsx
import React from 'react';
import './login.css'; 

export default function Login() {
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite sua senha" />
        <button type="submit">Entrar</button>
      </form>
      <a href="/register"><p>Não possui uma conta? clique Aqui!</p></a>
    </div>
  );
}
