import { env } from "./env";

export function api(endPoint: string) {
  return fetch(`${env.URL}/${endPoint}`, {
    method: 'GET',
    headers: {
      'X-API-KEY': env.API_KEY!,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
}