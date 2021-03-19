import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCJG-1x0Ab3AWQrKHqeH1c5NV0MUr8ee3A',
    authDomain: 'quizz-35a1e.firebaseapp.com',
    databaseURL: 'https://quizz-35a1e-default-rtdb.firebaseio.com',
    projectId: 'quizz-35a1e',
    storageBucket: 'quizz-35a1e.appspot.com',
    messagingSenderId: '456505895258',
    appId: '1:456505895258:web:cc424043b3935978fe6b63',
  };
  
  const app = Firebase.initializeApp(firebaseConfig);
  
  export const db = app.database();
  