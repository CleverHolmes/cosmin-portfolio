export const fetcher = async (url: string) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('エラーが発生したため、データの取得に失敗しました。')
  }

  const json = await response.json()
  return json
}
