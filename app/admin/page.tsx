import { auth } from '@clerk/nextjs/server'
import DashboardForm from "@/componants/DashboardForm";
import Users from "@/componants/Users";

export default async function Home() {
  const { userId } = await auth.protect({ permission: 'org:dashboard:admin' })

  return (
      <Users></Users>
  )
}