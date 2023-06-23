export type RepositoryType = {
  id: string
  name: string
  description: string
  languages: {
    [key: string]: number
  }
  url: string
}
