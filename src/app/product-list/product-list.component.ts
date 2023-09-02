import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


export interface ProductList{
  title:string;
  description:string;
  price:number;
  imgUrl:string;
  quantity:number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   
  products:ProductList[]=[
    {
      imgUrl:"https://staticimg.titan.co.in/Fastrack/Catalog/38085PP02_1.jpg?impolicy=pqmed&imwidth=640",
      title:'FastTrack reflex',
      description:'Fastrack Reflex Nitro Large Display Stress Monitor Premium Smart Watch with Blue Colour Strap',
      price:2995,
      quantity:0
    },
    {
      imgUrl:"https://staticimg.titan.co.in/Fastrack/Catalog/3147KM01_1.jpg",
      title:'Fastrack Black Dial',
      description:'FASTRACK BLACK DIAL ANALOG WATCH, 5 ATM WATER RESISTANCE, STAINLESS STEEL STRAP',
      price:4395,
      quantity:0
    },
    {
      imgUrl:"https://staticimg.titan.co.in/Fastrack/Catalog/6265SM01_1.jpg",
      title:'STUNNERS 3.0 ',
      description:'Fastrack Silver Dial Analog Watch for Girls',
      price:1475,
      quantity:0
    },
    {
      imgUrl:"https://staticimg.titan.co.in/Fastrack/Catalog/38082PP09_4.jpg",
      title:'Fastrack Reflex Volt',
      description:'NEW FASTRACK REFLEX VOLT WITH 1.69 ULTRAVU DISPLAY, IP68 WATER RESISTANT, 60 SPORTS MODES, SPO2 MONITOR',
      price:2495,
      quantity:0
    }
  ];
  selectedProduct:ProductList={
    title:'',
    description:'',
    price:0,
    imgUrl:'',
    quantity:0
  };


  ngOnInit(): void {
  }

}
