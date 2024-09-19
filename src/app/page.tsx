import Link from "next/link";

export default function Page() {
  return <div>
    <h1>Hello, Next.js!</h1>
    <Link href="/dashboard"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Dashboard</button></Link>
  </div>
}