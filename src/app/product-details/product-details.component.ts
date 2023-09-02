import { Component,Input } from '@angular/core';
import { ProductList } from '../product-list/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
@Input() product!:ProductList;
}
