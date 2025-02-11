'use client'

import { api } from "@/lib/api";
import { env } from "@/lib/env";
import { ignoreCaseMatch } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

type Verse = {
  bibleId: string
  bookId: string
  chapterId: string
  id: string
  reference: string
  text: string
}

type Response = {
  data: {
    limit: number
    offset: number
    total: number
    verseCount: number
    verses: Verse[]
  }
}

export default function Home() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') || ''

  const { data, isLoading } = useQuery<Response['data'] | null>({
    queryKey: [query],
    queryFn: async () => {
      if (!query) return null

      const response = await api(`${env.BIBLE_ID}/search?query=${query}`)
      const data = await response.json() as Response
      return data?.data
    }
  })

  return (
    <div className="px-4">
      {
        isLoading
          ? (<div className="h-screen w-full flex justify-center items-center">
            <Loader2 className="animate-spin text-blue-500" />
          </div>
          ) : (
            <ul>
              {
                data?.verses.map(({ id, reference, text }) => (
                  <li key={id}>
                    <p className="font-semibold">{reference}</p>
                    <p dangerouslySetInnerHTML={{ __html: text.replace(ignoreCaseMatch(query), `<span class="text-blue-500">${query}</span>`) }} />
                  </li>
                ))
              }
            </ul>
          )
      }
    </div>
  );
}
