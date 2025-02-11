'use client'

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

export function Header() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState<string | null>(searchParams.get('query'))
  const router = useRouter()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
    const params = new URLSearchParams(searchParams.toString())
    params.set('query', e.target.value)
    router.push('?' + params.toString())
  }

  return (
    <header className="h-14 flex items-center px-4">
      <div className="flex-1 flex border border-border rounded-3xl py-2">
        <div className="px-4">
          <Search />
        </div>
        <input placeholder="Pesquisar" className="outline-none flex-1" value={query || ''} onChange={handleChange} />
      </div>
    </header>
  )
}