import { auth } from '@clerk/nextjs/server'
import DashboardForm from '@/componants/DashboardForm'
import { clerkClient } from "@clerk/clerk-sdk-node";
export default async function Home() {
  const { userId } = await auth.protect({ permission: 'org:dashboard:admin' })
  const users = await clerkClient.users.getUserList();
  console.log(users,userId);

  return (
      <DashboardForm/>
  )
}