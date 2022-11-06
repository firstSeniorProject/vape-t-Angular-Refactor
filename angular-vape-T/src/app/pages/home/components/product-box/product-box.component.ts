

import { Component, OnInit,Input, EventEmitter,Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
@Input() fullWidthMode=false;
product:Product | undefined = {
  id: 1,
  title: 'vape',
  price: 150,
  category: 'vapes',
  description:'Description',
  image:'https://via.placeholder.com/150'

};
@Output() addToCart = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void{
    this.addToCart.emit(this.product);

  }

}
