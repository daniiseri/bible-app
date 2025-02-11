'use client'

import { api } from "@/lib/api";
import { env } from "@/lib/env";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') || ''

  useQuery({
    queryKey: [query],
    queryFn: async () => {
      const response = await api(`${env.BIBLE_ID}/search?query=${query}`)

      return response.json()
    }
  })

  return (
    <div>

    </div>
  );
}
