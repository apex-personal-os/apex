export function cumulativeMomentum(entries: readonly number[], startingValue = 0): number {
  return entries.reduce((total, value) => total + value, startingValue)
}
