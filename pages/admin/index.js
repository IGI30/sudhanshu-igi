import React from 'react'
import Head from 'next/head'
import {
  useAuthUser,
  withAuthUser,
  AuthAction,
} from 'next-firebase-auth'
import Header from '../../components/Auth/Header'
import FullPageLoader from '../../components/util/FullPageLoader'
import getAbsoluteURL from '../../utils/getAbsoluteURL'
import { useCallback, useEffect, useState } from 'react'

const styles = {
  content: {
    padding: 32,
  },
  infoTextContainer: {
    marginBottom: 32,
  },
}

const Admin = () => {
  const AuthUser = useAuthUser()

  const [isAdmin, setAdmin] = useState()
  // const fetchData = useCallback(async () => {
  //   console.log(AuthUser);
  //   const idTokenResult = await AuthUser.getIdToken()

  //   console.log(idTokenResult);

  //   return idTokenResult
  // }, [AuthUser])

  // useEffect(() => {
  //   const fetchAdminClaim = async () => {
  //     const data = await fetchData()
  //     setAdmin(data ? true : false)
  //   }
  //   fetchAdminClaim()
  // }, [fetchData])

  useEffect(() => {
    setAdmin(AuthUser.claims.admin)
    if (AuthUser.claims.admin) {
      console.log('Admin user')
    } else {
      console.log('Not Admin user')
      AuthUser.signOut()
    }
  }, [AuthUser]);

  return (
    <div>
      <Header email={AuthUser.email} signOut={AuthUser.signOut} />
      <Head>
          <title>Admin Home</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" 
              content="Welcome to Admin Dashboard" />
      </Head>
      {isAdmin ? (
        <div style={styles.content}>
          <div style={styles.infoTextContainer}>
            <h3>Example: static + loader</h3>
            <p>
              This page requires is static but requires authentication. Before the
              Firebase client SDK initializes, it shows a loader. After
              initializing, if the user is not authenticated, it client-side
              redirects to the login page.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

// Note that this is a higher-order function.
// export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  LoaderComponent: FullPageLoader,
})(Admin)