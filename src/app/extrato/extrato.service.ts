import { Injectable } from '@angular/core';

import { TRANSACAO } from './extrato.constants';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  constructor() {
   }
  getTransantion(){
    return TRANSACAO
  }
}
