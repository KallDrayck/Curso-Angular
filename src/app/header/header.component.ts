import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string | undefined;

  ttitle = 'Seja bem vindo!';
  
  constructor() {
    setTimeout(() =>{
      this.ttitle = 'Seja bem vindo porra!';
      console.log('console.log (' + this.ttitle +')');
    },3000);
   }

  ngOnInit(): void {
  }

}
