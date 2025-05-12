import { auth } from '@clerk/nextjs/server'
import ProductForm from
'@/components/ProductForm'

export default async function Home() {
  const { userId } = await auth.protect({ permission: 'org:dashboard:admin' })

  return (
      <ProductForm/>
  )
}