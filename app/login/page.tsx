import { login } from './actions'

export default function LoginPage() {
  return (
    <form action={login}>
      <h1>Login</h1>

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Senha"
        required
      />

      <button type="submit">Entrar</button>
    </form>
  )
}
