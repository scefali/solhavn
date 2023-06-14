import { redirect, type ActionArgs } from '@remix-run/node'
import { authenticator } from '~/utils/auth.server.ts'

export let action = ({ request }: ActionArgs) => {
	return authenticator.authenticate('google', request)
}


export async function loader() {
	return redirect('/')
}

