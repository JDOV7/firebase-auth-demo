import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB_BofGUG2wzyET1OdLoEPWaAAmKlPjhs8",
//   authDomain: "fir-auth-46b30.firebaseapp.com",
//   projectId: "fir-auth-46b30",
//   storageBucket: "fir-auth-46b30.appspot.com",
//   messagingSenderId: "981882871602",
//   appId: "1:981882871602:web:bd3f960084de26f802c12b",
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_AUTH_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_AUTH_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_AUTH_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_AUTH_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_AUTH_APP_ID,
};
// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
