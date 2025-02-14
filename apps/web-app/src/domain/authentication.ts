export type User = {
  id: string
  email: string
  name: string
}
export type AuthenticationState =
  | { status: 'authenticated', user: User }
  | { status: 'unauthenticated' }
