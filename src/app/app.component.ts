import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dinamicTitle = "Titulo dinamico, passado por propertyBind";

  constructor(){
    console.log('Passei por aqui na app.component.ts');
  }
}
