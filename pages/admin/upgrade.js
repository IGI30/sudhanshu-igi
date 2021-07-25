import { getFirebaseAdmin, withAuthUser } from 'next-firebase-auth'
// ...other imports

const Upgrade = ({result}) => {
  return (
    <div>
      {result? 'Admin User': 'None'} 
    </div>
  )
}

export async function getServerSideProps() {
  const uid = 'bRnTnP7tAhUnNdDJTMpWdA8Hrsh2';
  const setResponse = await getFirebaseAdmin().auth().setCustomUserClaims(uid, { admin: true });
  const userRecord = await getFirebaseAdmin().auth().getUser(uid);

  console.log('is user admin: ' + userRecord.customClaims['admin']);

  return {
    props: {
      result: userRecord.customClaims['admin']
    }
  }
}

export default withAuthUser()(Upgrade)