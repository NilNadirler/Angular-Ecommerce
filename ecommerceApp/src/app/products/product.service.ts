import { Category } from './../site-layout/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from "./product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  createProduct(productBody:any):Observable<Product>{
    const baseUrl="http://localhost:3000/products";
    return this.httpClient.post<Product>(baseUrl, productBody);
  }

  viewProduct():Observable<Product[]>{
    const baseUrl="http://localhost:3000/products/";
    return this.httpClient.get<Product[]>(baseUrl);
  }

  updateProduct(productId:any,productBody:any):Observable<Product>{
    const baseUrl="http://localhost:3000/products/"+productId;
    return this.httpClient.put<Product>(baseUrl,productBody);
  }

  deleteProduct(productId:any){
    const baseUrl="http://localhost:3000/products/"+productId;
    return this.httpClient.delete<Product>(baseUrl,productId);
  }

  searchCategoryProduct(categoryID:any):Observable<Product[]>{
    const baseUrl="http://localhost:3000/product/category="+categoryID;
    return this.httpClient.get<Product[]>(baseUrl);
  }
  searchDateProduct(dateParam:any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/date="+dateParam;
    return this.httpClient.get<Product>(baseUrl);
  }

  getCategory(){
    const categoryUrl ="http://localhost:3000/categories";
    return this.httpClient.get<Category[]>(categoryUrl)
  }
}
