import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { Contatos } from './contatos.interfaces';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos: Array<Contatos> | undefined;
  onSpinners: boolean | undefined; //carregador
  errorLoading: boolean | undefined;
  
  constructor(
    private contatosService: ContatosService,
  ) {
    console.log(contatosService);
   }

  ngOnInit(){
    this.loadContatos();
  }
  loadContatos(){
    console.log('loadContatos');
    this.onSpinners = true;
    this.errorLoading = false;

    this.contatosService
    .getContatos()
    .pipe(
      finalize(()=> {this.onSpinners = false}),
    )
    .subscribe(
      response => this.onSuccess(response),
      error => this.onError(error),
    )
  }
  onSuccess(response: Contatos[]){
    this.contatos = response;
  }
  onError(error: any) {
      this.errorLoading = true;
      console.error(error);
  }
}
