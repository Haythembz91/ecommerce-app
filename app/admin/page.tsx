import { auth } from '@clerk/nextjs/server'

export default async function Home() {
  const { userId } = await auth.protect({ permission: 'org:dashboard:admin' })

  return <p>{userId} is authorized to access this page.</p>
}