import { auth } from '@clerk/nextjs/server'
import DashboardForm from "@/componants/DashboardForm";

export default async function Home() {
  const { userId } = await auth.protect({ permission: 'org:dashboard:admin' })

  return (
      <DashboardForm></DashboardForm>
  )
}