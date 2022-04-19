import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxBF2Vhc2Zdir_bz3kx9EHQ0S2Rnll5jQ",
  authDomain: "linkedin-clone-9569f.firebaseapp.com",
  projectId: "linkedin-clone-9569f",
  storageBucket: "linkedin-clone-9569f.appspot.com",
  messagingSenderId: "46969775745",
  appId: "1:46969775745:web:e4e24988127f2c6784cf80",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getFirestore(firebaseApp);

export { database, auth };
