import Link from 'next/link'
import Login from './Login'
import Logged from './Logged'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../pages/api/auth/[...nextauth]'

export default async function Nav() {
    const session = await getServerSession(authOptions)

    return (
        <nav className="flex justify-between items-center px-2 py-4 max-w-[1280px] mx-auto bg-[#B7361A]">
            <Link href={'/'}>
                <h1 className="font-bold text-2xl text-white">D&J</h1>
            </Link>

            <ul className="flex items-center gap-6">
                {!session?.user && <Login />}
                {session?.user && <Logged image={session.user?.image || ''} />}
            </ul>
        </nav>
    )
}
