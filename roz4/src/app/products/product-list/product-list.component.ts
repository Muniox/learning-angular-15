import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  selectedProduct = 'Mikrofon';

  onBuy(name: string) {
    window.alert(`Właśnie kupiłeś: ${name}!`);
  }
}
