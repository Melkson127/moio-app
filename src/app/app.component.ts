import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public name = 'Geraldo';
  public appPages = [
    { title: 'Permissões', url: '/home/permissions', icon: 'person' },
    { title: 'Local', url: '/home/local', icon: 'location' },
  ];
  constructor() {}
}
