import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfnH1LGgxpQxDihtOq-seZgJPWSFiSmpM",
  authDomain: "pelatihan-sintak-h4.firebaseapp.com",
  projectId: "pelatihan-sintak-h4",
  storageBucket: "pelatihan-sintak-h4.firebasestorage.app",
  messagingSenderId: "980318848430",
  appId: "1:980318848430:web:3ce868fa4d3fe545e7f43f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// const analytics = getAnalytics(app);
export { db };
