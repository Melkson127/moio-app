import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public name = 'Geraldo';
  public appPages = [
    { title: 'Permissões', url: '/folder/inbox', icon: 'person' },
    { title: 'Local', url: '/folder/outbox', icon: 'location' },
  ];
  constructor() {}
}
