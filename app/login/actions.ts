'use server'

export async function login(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  console.log('LOGIN TESTE:', { email, password })

  // por enquanto só teste
}
