const admin = require('firebase-admin')
const serviceAccount = require('./secrets.json')

export const verifyIdToken = (token) => {
  if (!firebase.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://usuarios-lp-default-rtdb.firebaseio.com',
    })
  }
  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error
    })
}
