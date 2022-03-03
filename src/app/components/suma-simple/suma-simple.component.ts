import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma-simple',
  templateUrl: './suma-simple.component.html',
  styleUrls: ['./suma-simple.component.scss']
})
export class SumaSimpleComponent implements OnInit {
  num1 = 0;
  num2 = 0;
  result = 0;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  public suma(a:number, b:number){
    this.result = a + b;
    console.log('hizo click');
    console.log('numero 1 = ' + this.num1);
    console.log('numero 2 = ' + this.num2);
  }
}
