import { Component, OnInit } from '@angular/core';

import { Transaction } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transactions: Array<Transaction> | undefined;

  onSpinners: boolean | undefined;

  constructor(
    private extratoService: ExtratoService
  ) { 
    console.log(extratoService);
  }

  ngOnInit() {
    this.load();
  }
  load(){
    this.onSpinners = true;
    this.extratoService.getTransantion()
    .subscribe((response: Transaction[] | undefined) =>{
      this.onSpinners = false;
      
      this.transactions = response;

    });
  }

}
