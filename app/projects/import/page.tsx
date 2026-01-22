'use client'

import { useState } from 'react'
import { createProject } from '../../../lib/projects'

export default function ImportProjectPage() {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [platform, setPlatform] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await createProject({
        user_id: 'TEMP_USER_ID', // depois entra auth real
        name,
        source_platform: platform,
        source_url: url,
      })

      setSuccess(true)
      setName('')
      setUrl('')
      setPlatform('')
    } catch (err: any) {
      setError(err.message || 'Erro ao importar projeto')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Importar Projeto
      </h1>

      <p className="text-sm text-gray-600 mb-6">
        ✔ Apenas <strong>1 projeto ativo</strong> por usuário<br />
        ✔ Até <strong>60%</strong> do projeto é gratuito
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nome do projeto"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="w-full border rounded p-2"
        />

        <input
          type="url"
          placeholder="URL / domínio do projeto"
          value={url}
          onChange={e => setUrl(e.target.value)}
          required
          className="w-full border rounded p-2"
        />

        <select
          value={platform}
          onChange={e => setPlatform(e.target.value)}
          required
          className="w-full border rounded p-2"
        >
          <option value="">Selecione a plataforma</option>
          <option value="lovable">Lovable</option>
          <option value="base44">Base44</option>
          <option value="other">Outra</option>
        </select>

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        {success && (
          <p className="text-green-600 text-sm">
            Projeto importado com sucesso
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded w-full"
        >
          {loading ? 'Importando...' : 'Continuar projeto'}
        </button>
      </form>
    </div>
  )
}
