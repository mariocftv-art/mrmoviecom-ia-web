# Regras Base — Bloco 1

## Server x Client
- Server Actions → sempre com 'use server'
- Component Client → 'use client' apenas quando necessário

## Variáveis de ambiente
- Nunca acessar process.env fora do server
- Nunca commitar .env.local com valores reais

## Organização
- Nada de lógica grande em pages
- Lógica vai para /lib
