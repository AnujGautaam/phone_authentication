import logo from './logo.svg';
import './App.css';
import { auth } from './firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

function App() {

// const getRecaptcha=()=>{
//   // const auth = getAuth();
//   if(!window.recaptchaVerifier){
//     window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
//   'size': 'invisible',
//   'callback': (response) => {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     // onSignInSubmit();
//     verifyPhone()
//     console.log(response, "this is the response from the response")
//   }
// });
//   }

// }

// const verifyPhone = ()=>{

// // const phoneNumber = getPhoneNumberFromUserInput();
// const phoneNumber = "+977 9849632777"
// const appVerifier = window.recaptchaVerifier;
// getRecaptcha()

// // const auth = getAuth();
// signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
//       console.log("this is an error", error)
//     });

// }

// const verifyCode=()=>{
//   const code = "345678"
  
//   window.confirmationResult.confirm(code).then((result) => {
//     // User signed in successfully.
//     const user = result.user;
//     console.log(user)
//     // ...
//   }).catch((error) => {
//     // User couldn't sign in (bad verification code?)
//     // ...
//     console.log(error, "this is the error from the code verification section")
//   });
// }

  return (
<>

<h1>this is the app component</h1>
{/* <p>first will be the firebae configuration</p>
<div id='sign-in-button'></div>
<button onClick={verifyPhone}>click here for the recaptcha</button>
<button onClick={verifyCode}>click here for the verification of the code</button> */}


</>
  );
}

export default App;
