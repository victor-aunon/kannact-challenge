type Email = string
type DateTimeString = string
type UUID = `${string}-${string}-${string}-${string}-${string}`
type WeightInKg = number
type HeightInCm = number

declare module '*.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
