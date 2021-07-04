import React, { Component } from 'react'
import Product from "./Product"
import Title from "./Title"
import {storeProducts} from "../data"
import { ProductConsumer } from "../Context";
import Banner from "./Banner"
export default class ProductList extends Component {
    state ={
        products:storeProducts
    }
    render() {
        
        return (
            <React.Fragment>
                <Banner />
            <div className="py-5">
                <div style={{maxWidth:"1148px"}} className="container">
                        <Title name="Our" title="Products" />
                        

                    <div className="row">
                        <ProductConsumer>
                            {(value) => {

                            

                                return value.products.map(product =>{
                                    return <Product key={product.id} product={product} /> 
                                })
                            
                            }}
                        </ProductConsumer>

                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}
