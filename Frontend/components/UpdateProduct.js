import React,{Component} from 'react';


class UpdateProduct extends Component {

    constructor(){
        super();
        this.state={
            
            name:null,
            category:null,
            price:null,
            description:null,
            image:null,
            id: null

        }
    }
    componentDidMount(){
        fetch('http://localhost:8093/api/products/'+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                this.setState({
                    name:result.name,
                    category:result.category,
                    price:result.price,
                    id:result.id,
                    description:result.description,
                    image:result.image
                })
            })

        })
    }
    update(){
        fetch('http://localhost:8093/api/products/'+this.state.id, {
            method:'PUT',
            headers:{
                "Content-Type":'application/json',
            },
            body:JSON.stringify(this.state)})
            .then((result) => {
                result.json().then((resp)=>{
                })
            })
            alert("Product Updated")
    }
    render() {

        return (
                <div className="col-sm-6 offset-sm-3">
                <h1>Product Update</h1>
                    {/* Id:<input onChange={(event) => {this.setState({id: event.target.value})}} className="form-control"
                      placeholder="Id" value={this.state.id} /><br/> */}
                    Product Name:<input onChange={(event) => {this.setState({name: event.target.value})}} className="form-control"
                      placeholder="Name" value={this.state.name} /><br/>
                    Category:<input onChange={(event) => {this.setState({category: event.target.value})}} className="form-control"
                      placeholder="Category" value={this.state.category} /><br/>
                    Price:<input onChange={(event) => {this.setState({price: event.target.value})}}className="form-control"
                      placeholder="Price" value={this.state.price}/><br/>
                    Description:<input onChange={(event) => {this.setState({description: event.target.value})}} className="form-control"
                      placeholder="Description" value={this.state.description}/><br/>
                     Image:<input onChange={(event) => {this.setState({image: event.target.value})}} className="form-control"
                      placeholder="Image" value={this.state.image}/><br/>
                      <button onClick={() => {this.update()}} className="btn btn-primary">Update Product</button>
                </div>
         
        )
    }
}

export default UpdateProduct
