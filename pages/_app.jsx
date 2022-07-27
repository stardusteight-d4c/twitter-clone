import { SessionProvider } from 'next-auth/react'
import '../styles/global.css'
import { RecoilRoot } from 'recoil'

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}

export default App
