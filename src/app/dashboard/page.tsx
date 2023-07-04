import Link from "next/link";
// const session = null;  
const session = "authenticated"

export default function Dashboard() {
  if (!session) throw new Error("Auth is required!")

  return (
    <>
        <div>Dashboard</div>
        <Link href={"/"}>Home</Link>
    </>
  )
}
