export const pickRandomItemsFromArray = <T>(
  data: T[] | undefined,
  count: number = 4,
): T[] => {
  if (!data || data.length === 0) {
    return []
  }

  const shuffled = [...data].sort(() => 0.5 - Math.random())

  return shuffled.slice(0, count)
}
