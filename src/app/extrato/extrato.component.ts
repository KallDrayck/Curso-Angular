import { Component, OnInit } from '@angular/core';

import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transactions: { id: number; data: string; descricao: string; valor: number; categoria: string; }[] | undefined;

  constructor(
    private extratoService: ExtratoService
  ) { 
    console.log(extratoService);
  }

  ngOnInit() {
    this.transactions = this.extratoService.getTransantion();
  }

}
