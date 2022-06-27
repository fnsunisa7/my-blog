import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAGBxxrjZ-ceZ6lidcvzcyp4a7sb2cO2aQ",
  authDomain: "my-blog-fnsunisa7.firebaseapp.com",
  projectId: "my-blog-fnsunisa7",
  storageBucket: "my-blog-fnsunisa7.appspot.com",
  messagingSenderId: "20150900726",
  appId: "1:20150900726:web:5af8e5705e7d4e58c819d7",
  measurementId: "G-WYH13S9XZS"
};

const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  analytics = getAnalytics(app);
}
