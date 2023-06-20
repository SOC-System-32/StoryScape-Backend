import { Auth } from '@supabase/auth-ui-react'
import {
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabaseUrl = process.env.CONNECTION_URL
const supabaseKey = process.env.CONNECTION_STRING
export const supabase = createClient(supabaseUrl, supabaseKey);
const app = express();
const port = 3001;

// Configure middleware, routes, and other server settings
app.use(cors());
app.use(express.json());

// function App() {

//   const [userId, setUserId] = useState('');
//   const [media, setMedia] = useState([]);

//   const getUser = async () => {

//     try {
//       const { data: { user } } = await supabase.auth.getUser()
//       if (user !== null) {
//         setUserId(user.id);
//       } else {
//         setUserId('');
//       }
//     } catch (e) {
//     }



//   }


//   async function uploadImage(e) {
//     let file = e.target.files[0];


//     const { data, error } = await supabase
//       .storage
//       .from('media')
//       .upload(userId + "/" + uuidv4(), file)

//     if (data) {
//       getMedia();

//     } else {
//       console.log(error);
//     }
//   }

//   async function getMedia() {

//     const { data, error } = await supabase.storage.from('uploads').list(userId + '/', {
//       limit: 10,
//       offset: 0,
//       sortBy: {
//         column: 'name', order:
//           'asc'
//       }
//     });

//     if (data) {
//       setMedia(data);
//     } else {
//       console.log(71, error);
//     }
//   }


//   const signout = async () => {
//     setUserId('');
//     await supabase.auth.signOut();
//   }




//   useEffect(() => {
//     getUser();
//     getMedia();
//   }, [userId])

//   return (
//     <div className='mt-5'>
//       {userId == '' ? <Auth
//         supabaseClient={supabase}
//         appearance={{ theme: ThemeSupa }}
//       /> : <>

//         <input type="file" onChange={(e) => uploadImage(e)} />
//         <div className='mt-5'>
//           My Uploads
//         </div>

//         {media.map((media) => {
//           return (<>
//             <div>
//               <img src={`https://ovlhvogwndcqxaskukrv.supabase.co/storage/v1/object/public/uploads/8cde5d0d-7beb-4ab0-99aa-eaf24e8d2557/${media.name}`} />
//             </div>
//           </>
//           )
//         })}
//         <div className='mt-5'>
//           <button onClick={signout}>
//             Logout
//           </button>
//         </div>
//       </>}
//     </div >
//   )
// }


app.get("/test", async (req, res) => {
  const { data, error } = await supabase.from("users").select();
  console.log(data);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// export default App;