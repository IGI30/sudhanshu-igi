import React from 'react'
import Head from 'next/head'
import { withAuthUser, AuthAction } from 'next-firebase-auth'
import FirebaseAuth from '../../components/Auth/FirebaseAuth'

const styles = {
  content: {
    padding: `8px 32px`,
    marginTop: `1em`,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: 16,
  },
}

const Auth = () => (
  <div style={styles.content}>
    <Head>
        <title>Admin Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" 
            content="Login to Admin panel" />
    </Head>
    <h5>Sign in</h5>
    <div style={styles.textContainer}>
      <p>
        This auth page is <b>static</b>. It will redirect on the client side if
        the user is already authenticated.
      </p>
    </div>
    <div>
      <FirebaseAuth />
    </div>
  </div>
)

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER,
})(Auth)
