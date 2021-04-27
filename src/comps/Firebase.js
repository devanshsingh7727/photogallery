import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCltAIryCTRn_UK5rHSuwfZmBb999Hqgwo",
    authDomain: "photogallery-9e300.firebaseapp.com",
    projectId: "photogallery-9e300",
    storageBucket: "photogallery-9e300.appspot.com",
    messagingSenderId: "504269507069",
    appId: "1:504269507069:web:80a06ea49fff91f64e7194",
    measurementId: "G-GYQ7HDXF23"
  });

  const projectStorage=firebase.storage();
  const projectFirestore=firebase.firestore()
  export const  timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage,projectFirestore}

