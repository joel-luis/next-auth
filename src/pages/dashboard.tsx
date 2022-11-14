import { useAuth } from 'hooks/useAuth'

export default function Dashboard() {
  const { user } = useAuth()

  return <h1>{user?.email}</h1>
}
