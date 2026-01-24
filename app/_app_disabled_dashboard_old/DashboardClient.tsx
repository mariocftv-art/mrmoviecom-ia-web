'use client'

import { logout } from '@/app/login/actions'

export default function DashboardClient() {
  return (
    <form action={logout}>
      <button
        type="submit"
        style={{
          padding: 10,
          background: 'black',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Sair (Logout)
      </button>
    </form>
  )
}
