import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Addproduct = () => {  
    // id, image, name, price descr, category   


    const [id, setId]=useState() 
    const [title, setTitle]=useState("") 
    const [category, setCategory]=useState("") 
    const [des, setDes]=useState("") 
    const [image, setImage]=useState("") 
    const  [price, setPrice]=useState()    

    const [data, setData]=useState(null)

// Note we cant use useEffect inside an handler,
//  if u want to use create a state and it should be null 
 

// useEffect(()=>{
//     if (data) {
//       axios.post('https://fakestoreapi.com/products', data)
//         .then((res) => {
//           console.log('Response:', res.data);
//         })
//         .catch((err) => {
//           console.error('Error:', err);
//         });
//     }
// },[data])  

// const handler=()=>{
//     const obj = {
//       id: id,
//       title: title,
//       price: price,
//       category: category,
//       description: des,
//       image: image
//     };
//     setData(obj); 
// }



    const handler=(e)=>{ 
        // e.preventDefault()   

        const obj={
            // key : value  
            id:id, 
            title:title, 
            price:price, 
            category:category, 
            description:des,  
            image:image 
        }    

        console.log(obj, "obj")

        
            axios.post("https://fakestoreapi.com/products", obj) 
            .then((res)=>console.log(res))
            .catch ((err)=>console.log(err))
    }      


  return (
    <div>  
        <label> Id</label>
        <input value={id} onChange={(e)=>setId(e.target.value)}/>  

        <label> Title</label>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/> 

        <label> price</label>
        <input value={price} onChange={(e)=>setPrice(e.target.value)}/> 

        <label> Category</label>
        <input value={category} onChange={(e)=>setCategory(e.target.value)}/> 

        <label> Descrption</label>
        <input value={des} onChange={(e)=>setDes(e.target.value)}/>  

        <label>Image </label>  
        <input type='file'  value={image} onChange={(e)=>setImage(e.target.value)}/>


      <button onClick={handler} type='button'> Submit</button>  
    </div>
  )
}

export default Addproduct



  