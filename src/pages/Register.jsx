import React, { useState } from "react";
import Add from "../img/images.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';


const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const[avatar,setAvatar]=useState(null);


  const handleFileInputChange=(e)=>{
    const file =e.target.files[0];
    setAvatar(file);
  }

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">We Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
        <div className="email">
         <span> <PersonIcon/></span>
          <input required type="text" placeholder="UserName" />
          </div>
          <div className="email">
         <span> <EmailIcon/></span>
          <input required type="email" placeholder="Email Id" />
          </div>
          <div className="email">
          <span> <HttpsIcon/></span>
          <input required type="password" placeholder="Password" />
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
         <span>
          {
            avatar ? (
              <img src={URL.createObjectURL(avatar)} alt="avatar"  style={{width:'50px',
              height:'50px',objectFit:'cover',borderRadius:'50px'
            }}/>
            ) :(
                 <AccountCircleIcon style={{height:'50px',width:'50px' ,margin:'0px'}}/>
            )
          }
         </span>
          <label htmlFor="file" className="profile-img">
            
            <span style={{marginLeft:'10px'}}>Upload an Profile Image</span>
            <input required style={{ display: "none" }}
             onChange={handleFileInputChange} type="file" id="file" />
          </label>
          </div>



          <button disabled={loading}>Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Already have an account ?<Link to="/login"> <span>Login</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
