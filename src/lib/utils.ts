export function ignoreCaseMatch(text: string) {
  return new RegExp(text, 'gi')
}

export function removeAccents(text: string) {
  return text.normalize("NFC").replace(/[\u0300-\u036f]/g, "")
}