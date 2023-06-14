import type { LoaderArgs } from '@remix-run/node'
import { authenticator } from '~/utils/auth.server.ts'

export let loader = ({ request }: LoaderArgs) => {
  return authenticator.authenticate('google', request, {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  })
}