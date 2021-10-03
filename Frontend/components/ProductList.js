import React,{useState,useEffect} from 'react'
import _ from 'lodash';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'
function ProductList() {
    const pageSize=6;
    const [data,setData]=useState([]);
    const [paginatedData, setPaginatedData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get("http://localhost:8093/api/products/").then((res) => {
             console.log(res.data);
             setData(res.data);
             setPaginatedData(_(res.data).slice(0).take(pageSize).value());
        });
     
    }, []);
    const pageCount = data? Math.ceil(data.length/pageSize) :0;
    if (pageCount ===1) return null;
    const pages =_.range(1, pageCount+1)

    const pagination=(pageNo)=>{
        setCurrentPage(pageNo);
        const startIndex = (pageNo -1)*pageSize;
        const paginatedData=_(data).slice(startIndex).take(pageSize).value();
        setPaginatedData(paginatedData);
    }

    return (
        
        <div className="products">
            
        {paginatedData.map(function(p,index){
            return(
            
            <div className="card">
                <div>
                    <img className="product-image"
                    src={p.image}
                    alt={p.name}
                    />
                </div>
                <div>
                    <h3 className="product-name">{p.name}</h3>
                </div>
                <div className="product-price">₹{p.price}</div>
                <div><Button variant="outline-success" as={Link} to={`/view/${p.id}`}>View Details</Button></div>
            </div>
        
        )})}
         <nav className="d-flex justify-content-center">
                <ul className="pagination">
                     {
                         pages.map((page) => (
                             <li className={
                                 page === currentPage? "page-item active":"page-item"
                             }><p className="page-link"
                             onClick={() => pagination(page)}>
                                 {page}
                                 </p>
                            </li>
                     ))
                     }
                  
                </ul>
            </nav>
    </div>
    //     <div>
    //        <h1 style={{textAlign:"center"}}>Our Catalog</h1>
           
    //         <Table>
    //             <thead>
    //             <tr>
    //                 <th>Image</th>
    //                 <th>Name</th>
    //                 <th>Category</th>
    //                 <th>Price</th>
    //                 <th>View Details</th>
    //             </tr>
    //             </thead>
    //             {
    //                 paginatedData.map((item) =>
    //                 <tr>
    //                 <td><img style={{width:150}} src={item.image} /></td>
    //                 <td>{item.name}</td>
    //                 <td>{item.category}</td>
    //                 <td>₹{item.price}</td>

    //                 <td><Button variant="outline-success" as={Link} to={`/view/${item.id}`}>View Details</Button></td>
    //                 {/* <td><button as={Link} to={"/addCart:id"} style={{backgroundColor:'lightblue'}}>Add to cart</button></td>
    //  */}
                    
    //             </tr>

    //                 )
    //             }
               
    //         </Table>
    //         <nav className="d-flex justify-content-center">
    //             <ul className="pagination">
    //                 {
    //                     pages.map((page) => (
    //                         <li className={
    //                             page === currentPage? "page-item active":"page-item"
    //                         }><p className="page-link"
    //                         onClick={() => pagination(page)}>
    //                             {page}
    //                             </p>
    //                             </li>
    //                     ))
    //                 }
                  
    //             </ul>
    //         </nav>
    
    //     </div>

       
    )
}
export default ProductList;
