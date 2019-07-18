import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCMV2NEhmsyAfAzdoyP9clZyf7y_JpWGg",
  authDomain: "swapnilsrivastava-ab702.firebaseapp.com",
  databaseURL: "https://swapnilsrivastava-ab702.firebaseio.com",
  projectId: "swapnilsrivastava-ab702",
  storageBucket: "swapnilsrivastava-ab702.appspot.com",
  messagingSenderId: "47180743033",
  appId: "1:47180743033:web:591e802188d20458"
};

const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;
