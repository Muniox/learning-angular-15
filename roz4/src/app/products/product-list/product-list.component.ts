import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  giff = true;
  buttonTekst = 'Kliknij mnie';

  onClick() {
    alert('Właśnie kliknąłeś');
    this.buttonTekst = 'Kliknąłeś';
  }
}
