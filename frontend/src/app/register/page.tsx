// app/register/page.tsx
import './register.css';

export default function Register() {
  return (
    <div className="container">
      <h1>Cadastro</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nome Completo</label>
          <input type="text" className="form-control" id="name" placeholder="Digite seu nome completo" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Senha</label>
          <input type="password" className="form-control" id="password" placeholder="Digite sua senha" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirmar Senha</label>
          <input type="password" className="form-control" id="confirmPassword" placeholder="Confirme sua senha" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
      </form>
    </div>
  );
}
