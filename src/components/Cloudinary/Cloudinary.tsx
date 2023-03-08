// import React, { ReactElement, useEffect } from "react";

// declare global {
//     interface Window {
//       cloudinary: any;
//     }
// }


// export function CloudinaryUpload(): ReactElement {
//   const cloudName = "tu_nombre_de_cloudinary"; // Reemplazar con tu propio nombre de cloud
//   const uploadPreset = "tu_upload_preset"; // Reemplazar con tu propio upload preset

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
//     script.type = "text/javascript";
//     script.async = true;
//     document.head.appendChild(script);

//     const myWidget = window.cloudinary.createUploadWidget(
//       {
//         cloudName: cloudName,
//         uploadPreset: uploadPreset,
//       },
//       (error:any, result:any) => {
//         if (!error && result && result.event === "success") {
//           console.log("¡Hecho! Aquí está la información de la imagen: ", result.info);
//         }
//       }
//     );

//     document.getElementById("upload_widget").addEventListener(
//       "click",
//       () => {
//         myWidget.open();
//       },
//       false
//     );
//   }, []);

//   return (
//     <div>
//       <button id="upload_widget">Cargar imagen</button>
//     </div>
//   );
// };

// import { Container, FormGroup, Input } from "@mui/material";
// import React, { useState } from "react";

// export const CloudinaryUpload = () => {

//     const [image, setImage] = useState("");
//     const [loading, setLoading] = useState(false);

//     const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
//         const files = event.target.files;
//         const data = new FormData();
//         data.append("file",files[0])
//         data.append("upload_preset","Products")
//         setLoading(true)
//         const res = await fetch(
//             "https://api.cloudinary.com/v1_1/dbusey8hf/image/upload/Products/",
//             {
//                 method: "POST",
//                 body: data,
//             })
//             const file = await res.json();
//             // console.log(res)
//             setImage(file.secure_url)
//             console.log(file.secure_url)
//             setLoading(false)
//     }

//     return(
//         <div>
//             <Container>
//                 <h1>
//                     Subir Imagen
//                 </h1>
//             </Container>
//             <FormGroup>
//                 <Input
//                     type = "file"
//                     name = "file"
//                     placeholder = "Choose your product"
//                     onChange = {uploadImage}
//                 />
//                 {loading?(<h3>Cargando Imagenes...</h3>):(<img src = {image} style = {{width: "300px"}}/>)}
//             </FormGroup>
//         </div>
//     );
// }

// import React, { useState } from "react";
// import { Container, FormGroup, Input } from "@mui/material";


// export const CloudinaryUpload = () => {
//     const [image, setImage] = useState("");
//     const [loading, setLoading] = useState(false);
  
//     const upload = async (event: React.ChangeEvent<HTMLInputElement>) => {
//       const files = event.target.files[0];
//       const data = new FormData();
//       data.append("file",files)
//       data.append("upload_preset", "products");
//       setLoading(true)
//       const res = await fetch(`https://api.cloudinary.com/v1_1/dqkucfw4m/image/upload`, 
//           { method: "POST", body: data })
      
//       const img_url = await res.json();
//       console.log(res)
//       setImage(img_url.secure_url)
//       console.log(img_url.secure_url)
//       setLoading(false)
//     };
  
//     return (
//         <div>
//             <Container>
//                 <h1 style = {{marginLeft: "-15px"}}>
//                     Upload Imagen
//                 </h1>
//                 {loading?(<h3>Loading Imagen...</h3>):(<img src = {image} style = {{width: "300px", marginLeft: "-15px"}}/>)}
//             </Container>
//              <FormGroup>
//               <Input
//                     type = "file"
//                     name = "file"
//                     placeholder = "Choose your product"
//                     onChange = {upload}
//                     style = {{width: "157px" , marginLeft: "40px"}}
//               />
//             </FormGroup>
//           </div>
//     );
// }
