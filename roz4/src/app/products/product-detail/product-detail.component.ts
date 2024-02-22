import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit, OnChanges {
  constructor() {
    console.log(`W konstruktorze właściwość name ma wartość ${this.name}`);
  }

  ngOnInit(): void {
    console.log(`W ngOnInit nazwa to ${this.name}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log(`Produkt zmienił się z ${oldValue} na ${newValue}`);
    }
  }

  @Input() name = '';

  @Output() bought = new EventEmitter<string>();

  buy() {
    this.bought.emit(this.name);
  }

  get productName(): string {
    console.log(`Pobierz ${this.name}`);
    return this.name;
  }
}
