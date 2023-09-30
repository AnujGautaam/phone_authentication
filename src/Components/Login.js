// this is for the loggin in of the user in the application and this is going to work for sure this time 
// import logo from './logo.svg';
// import './App.css';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { auth } from '../firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useState } from 'react';

const Login=()=> {
const [phone, setPhone] = useState("0000000000")
const [code, setCode] = useState("123456")
// const [loading, setLoading] = useState(false)

// const [visible, setVisible] = useState(true)
// for the moment, i am going to try to let the user confirm the number and send the verification code to the number 

const [wait, setWait] = useState(false)







const getRecaptcha=()=>{
  // const auth = getAuth();
  if(!window.recaptchaVerifier){
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    // onSignInSubmit();
    verifyPhone()
    // console.log(response, "this is the response from the response")
  }
});
  }
  else{
    alert("there seems to be some error while loading the recaptcha")
  }

}

const verifyPhone = (event)=>{
  event.preventDefault()

// const phoneNumber = getPhoneNumberFromUserInput();
// const phoneNumber = "+977 9820135187"
console.log(phone)


getRecaptcha()
// setVisible(true)
setWait(false)
const appVerifier = window.recaptchaVerifier;
// const auth = getAuth();
signInWithPhoneNumber(auth, phone, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      alert(`OTP code has been sent to ${phone}`)
      // setWait(false)
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log("this is an error", error)
    });

}
// this is a new comment after the addition of the files in the github repository 
const verifyCode=(event)=>{
  // const code = "345678"
  event.preventDefault()
  
  window.confirmationResult.confirm(code).then((result) => {
    // User signed in successfully.
    const user = result.user;
    console.log(user)
    alert("Congratulations!!!")
    // ...
  }).catch((error) => {
    // User couldn't sign in (bad verification code?)
    // ...
    console.log(error, "this is the error from the code verification section")
  });
}



  return (
<>
<div id='sign-in-button'></div>

{wait?<Box sx={{display:"flex", justifyContent:"center", flexDirection:"column", width:"450px", height:"400px", marginLeft:"400px", marginTop:"150px", bgcolor:"#1BE7ED"}}>
  {/* one of the reasons i suspect is that the button and the text fields should be handled using forms and that would ease the process  */}
  <Typography variant='h5' sx={{marginLeft:"100px", marginBottom:"30px"}}>Super Water Controller</Typography>
<Card >
<CardContent>
  
 
  <form onSubmit={verifyPhone}>
 <Box sx={{display:"flex", flexDirection:"row"}}>
   <TextField sx={{marginLeft:"10px", width:"90px"}}variant='outlined' value={"+977"} disabled />
<TextField sx={{marginLeft:"0px"}}variant='outlined' label="phone number" onChange={(e)=>{setPhone(`+977 ${e.target.value}`)}}/>
 </Box>

 
 <Button sx={{marginLeft:"100px", width:"200px", marginTop:"30px", bgcolor:"info"}} variant='outlined' type='submit'>Verify Phone</Button>




  



  </form>
 

 
</CardContent>
</Card>

</Box>:<>
<Box sx={{display:"flex", justifyContent:"center", flexDirection:"column", width:"450px", height:"400px", marginLeft:"400px", marginTop:"150px",  bgcolor:"#1BE7ED"}}>
<Typography variant='h5' sx={{marginLeft:"100px", marginBottom:"30px"}}>Super Water Controller</Typography>


  <Card >
  <CardContent>

    <form onSubmit={verifyCode}>

        <Box sx={{display:"flex", flexDirection:"row"}}>

     {/* <TextField sx={{marginLeft:"10px", width:"90px"}}variant='outlined' value={"+977"} disabled /> */}
 <TextField sx={{marginLeft:"90px"}}variant='outlined' label="OTP" onChange={(e)=>{setCode(e.target.value)}}/>
   </Box>

   
   
<Button sx={{marginLeft:"100px", width:"200px", marginTop:"30px", bgcolor:"info"}} variant='outlined' type='submit'>Verify OTP</Button>


<Box sx={{display:"flex", flexDirection:"row", marginTop:"40px"}}><Typography  sx={{color:"info.main"}}>Did not receive the OTP?</Typography> <Button sx={{marginLeft:"10px", width:"150px", bgcolor:"info"}} variant='outlined' type='submit'>Resend OTP</Button>
</Box>

    
    </form>
 

   
  </CardContent>
</Card>
  
</Box>

</>}




{/* <p>first will be the firebae configuration</p> */}
{/* <button onClick={verifyPhone}>click here for the recaptcha</button> */}
{/* <button onClick={verifyCode}>click here for the verification of the code</button>
 */}
 {/* both of these functions have been duplicated in the above exammples */}
</>
  );
}
// one of the reasons why i think the code is taking time to execute is due to the fact that the buttons and the text fields are yet to be wrapped inside of a function and that might be causing some 
export default Login;


// the next thing is to do is to install the material ui and then handle everything accordingly 
