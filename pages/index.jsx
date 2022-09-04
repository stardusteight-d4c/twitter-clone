import Head from 'next/head'
import { getProviders, getSession, useSession } from 'next-auth/react'

import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login'
import Modal from '../components/Modal'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Widgets from '../components/Widgets'

export const getServerSideProps = async (context) => {
  const trendingResults = await fetch('https://jsonkeeper.com/b/D3NP').then(
    (res) => res.json()
  )
  const followResults = await fetch(' https://jsonkeeper.com/b/5BJH').then(
    (res) => res.json()
  )
  const providers = await getProviders()
  const session = await getSession(context)

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  }
}

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useRecoilState(modalState)

  if (!session) return <Login providers={providers} />

  return (
    <>
      <Head>
        <title>Início / Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#15202b] min-h-screen flex max-w-[1260px] mx-auto">
        <Sidebar />
        <Feed />
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />

        {isOpen && <Modal />}
      </main>
    </>
  )
}
