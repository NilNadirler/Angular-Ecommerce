import { Category } from './../category';
import { ProductService } from './../../products/product.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList:Category[]=[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(data=>{
    this.categoryList=data;
    })
  }

}
