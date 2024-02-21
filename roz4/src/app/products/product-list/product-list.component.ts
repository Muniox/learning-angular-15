import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  giff = true;
  buttonTekst = 'Kkliknij mnie';

  onClick() {
    alert('Właśnie kliknąłeś');
    this.buttonTekst = 'Kliknąłeś';
  }
}
