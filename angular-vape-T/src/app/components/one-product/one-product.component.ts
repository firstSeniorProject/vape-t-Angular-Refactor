import { Component, OnInit } from '@angular/core';
import { OneProductService } from './one-product.service';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {
product:any
  constructor(private service :OneProductService) { }

  ngOnInit() {
    this.service.getProduct()
    .subscribe((response)=>{
     this.product=response
    //  console.log(this.product,'theprod');
     
    //   console.log(response)

    })
    
  }

}
