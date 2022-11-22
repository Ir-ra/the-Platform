import firebase  from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAFpXcR8P3WxJKi2VSz6Ba5ncLHWKuOzCw",
    authDomain: "the-chat-platform.firebaseapp.com",
    projectId: "the-chat-platform",
    storageBucket: "the-chat-platform.appspot.com",
    messagingSenderId: "1098024740362",
    appId: "1:1098024740362:web:81d31dd0beb602e86921f3"
  };

  //initialize firebase (цей метод підєднує до нашої Firebase backend)
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, timestamp}