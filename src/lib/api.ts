import { env } from "./env";

export function api(endPoint: string) {
  return fetch(`${env.URL}/${endPoint}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': env.API_KEY!
    },
  })
}