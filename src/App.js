import { useState } from 'react';
import './App.css';
// import { storage } from './firebase';
import { getDatabase } from "firebase/database";
import firebase from "firebase/compat/app";

import "firebase/compat/firestore"
import { db, auth, storage } from "./firebase";
 
import {} from "firebase/firestore";
import {
  
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// const ContactForm = (props) => {
function App() 
{
  const [fileUrl, setFileUrl] = useState("");
  const initialFieldValues = {
    image : fileUrl,
    
  }

  // for image upload

  const [image, setImage] = useState(initialFieldValues);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const metadata = {
    contentType: "image/jpeg",
  };
  // for upload url

  const handelUpload = (e) => {
    // const uploadTask = ref(`images/${image.name}`).put(image);

    // const file = e.target.files[0]
    const imageRef = ref(storage, "/todo-demo" + image.name);
    uploadBytesResumable(imageRef, image, metadata)
      .then((snapshot) => {
        // Let's get a download URL for the file.
        getDownloadURL(snapshot.ref).then((url) => {
          console.log("url=====>",url);
          setFileUrl(url);
          // ...
        });
      })
      .catch((error) => {
        console.error("Upload failed", error);
        // ...
      });
  };
 

  return(
    <div>
    <div>
        <input type="file" onChange={handleChange}></input>
        <br />
        <br />
        <button onClick={handelUpload}>Upload</button>
        <div>{fileUrl}</div>
      </div>
  </div>
  )
}

export default App;
