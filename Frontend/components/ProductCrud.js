import React, {useState} from 'react'
import "./Product.css"

function ProductCrud()
{
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")
    const [image,setImage]=useState("")

    async function createProduct(){
        let items={id,name,category,price,description,image}
        console.warn(items)

        let result = await fetch("http://localhost:8093/api/products/create",{
            method:'POST',
            body:JSON.stringify(items),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result=await result.json()
       alert("Product added");
        
    }

    return(
        <div className="col-sm-6 offset-sm-3 addProduct">
       
            <h1>Add Product</h1>
            <form>
            {/* ProductId:    <input type="text" value={id} onChange={(e) =>setId(e.target.value)} className="form-control" placeholder="id" /> <br /> */}
            ProductName:     <input type="text" value={name} onChange={(e) =>setName(e.target.value)} className="form-control" placeholder="name" /> <br />
            Category:     <input type="text" value={category} onChange={(e) =>setCategory(e.target.value)} className="form-control" placeholder="category" /> <br/>
            Price:        <input type="number" value={price} onChange={(e) =>setPrice(e.target.value)} className="form-control" placeholder="price" /> <br />
            Description:  <textarea type="text" value={description} onChange={(e) =>setDescription(e.target.value)} className="form-control" placeholder="description" /><br />
            Image:  <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="form-control" placeholder="image" /><br />
           </form>
            
            <button onClick={createProduct}  className="btn btn-primary">Add Product</button>
          
        </div>
    )
}

export default ProductCrud;