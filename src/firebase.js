import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCGUIgjnNKBICTXEo0MJAoERtm0Hz3vIyQ",
    authDomain: "fir-468af.firebaseapp.com",
    projectId: "fir-468af",
    storageBucket: "fir-468af.appspot.com",
    messagingSenderId: "952432636885",
    appId: "1:952432636885:web:b388d7219f56a57a8a435c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };