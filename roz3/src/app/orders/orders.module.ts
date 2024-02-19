import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../products-list/product-list.component';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, ProductsModule],
  exports: [ProductListComponent],
})
export class OrdersModule {}
