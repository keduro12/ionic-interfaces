import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Misión y Visión', url: 'mision-vision', icon: 'diamond'},
    { title: 'Nosotros', url: 'nosotros', icon: 'people' },
    { title: 'Contactos', url: 'contactos', icon: 'call' },
    { title: 'Eventos', url: 'eventos', icon: 'calendar' },
    { title: 'Tramites', url: 'tramites', icon: 'document-text' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
