import { handleAuth } from '@/app/actions/handle-auth';
import { auth } from '@/app/lib/auth';
import Link from "next/link";
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await auth();

  if(!session){
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Pretected Dashboard</h1>
      <p>Email do usuário: {session?.user?.email ? session?.user?.email : "Não está logado"}</p>
      {
        session.user?.email && (
          <form action={handleAuth}>
            <button type="submit" className="border rounded-md px-4 py-1 cursor-pointer">Logout</button>
          </form>
      )}
      <Link href="/pagamentos">Pagamentos</Link>
    </div>
  );
}