import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  title = 'my-app';
}
