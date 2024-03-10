import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { setProducts } from "../redux/actions/productActions";
import { ProductComponents } from "./ProductComponent";

export const ProductListing=()=>{
    const dispatch= useDispatch();
    const products=useSelector((state)=>state.allProducts.products);
    const fetchProducts= async ()=>{
        const response=await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Err",err);
        });
        dispatch(setProducts(response.data));
    };

    console.log(products);
    useEffect(()=>{
        fetchProducts();
    },[]);
    return (
        <div className="ui grid container">
            <ProductComponents/>
        </div>
    )
}