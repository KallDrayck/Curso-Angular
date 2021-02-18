import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent{

  onDisplay = false;

  exchangeValue(){
    this.onDisplay = !this.onDisplay; // ele exibe ele mesmo negado
  }
  onSum(number1: any, number2: any){
    return number1 + number2;
  }

  // ngFor
  listFruit = [
    'apple',
    'orange',
    'banana',
    'cherry',
  ];

  listCar = [{
    placa: 'JND-5486',
    color: 'preto',
    model: 'Fusca',
  },{
    placa: 'AAA-5486',
    color: 'azul',
    model: 'Logan',
  },{
    placa: 'FFF-5486',
    color: 'branco',
    model: 'Esporte',
  },{
    placa: 'EEE-5486',
    color: 'amarelo',
    model: 'Taxi',
  },];

}
