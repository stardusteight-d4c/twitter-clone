# Twitter Clone | Firebase, NextAuth.js & Handless UI

![banner](banner.png)

> Twitter feed clone, where the user can authenticate and create a session through the Google provider implemented with NextAuth. Accessing the home feed, it is possible to send texts, emojis and image files through a post. The user will be able to view, like and comment on posts made by other users, in which the data is stored in Firebase through the Firestore Database and Storage services.

:arrow_right: NextAuth.js | Authentication & Session <br />
:arrow_right: Firebase - Backend as Service <br />
:arrow_right: Headless UI - Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS. <br />

## NextAuth.js | Authentication & Session

With NextAuth it is possible to implement a user session (interval/period of time in which there is a communication between two or more devices) in a matter of minutes. 

### Add API route

To add NextAuth.js to a project create a file called  `[...nextauth].js` in `pages/api/auth`. This contains the dynamic route handler for NextAuth.js which will also contain all of your global NextAuth.js configurations.

```js
// pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async session({ session, token }) {
      session.user.tag = session.user.name.split(' ').join('').toLowerCase()

      session.user.uid = token.sub
      return session
    },
  },
})
```

### Configure Shared session state

To be able to use `useSession` first you'll need to expose the session context, `<SessionProvider />`, at the top level of your application:

```jsx
// pages/_app.jsx

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
```
