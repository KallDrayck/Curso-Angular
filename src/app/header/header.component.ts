import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Seja bem vindo!';
  
  constructor() {
    setTimeout(() =>{
      this.title = 'Seja bem vindo porra!';
      console.log('console.log (' + this.title +')');
    },3000);
   }

  ngOnInit(): void {
  }

}
