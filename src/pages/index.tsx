import { FormEvent, useState } from 'react'
import { useAuth } from 'hooks/useAuth'

import * as S from './styles'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  async function hanldeSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      email,
      password,
    }

    await signIn(data)
  }

  return (
    <S.Container>
      <form onSubmit={hanldeSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </S.Container>
  )
}
