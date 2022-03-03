import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma-ticket',
  templateUrl: './suma-ticket.component.html',
  styleUrls: ['./suma-ticket.component.scss'],
})
export class SumaTicketComponent implements OnInit {
  public ticket = [{valor: 0, desc: 0}];
  public costoIngreso = 0;
  public descIngreso = 0;
  public total = 0;
  public cont = 0;
  
  constructor() {}

  ngOnInit(): void {
    console.log(this.ticket);
  }

  updateTotal(){
    this.total = 0;
    this.ticket.forEach((element)  => {
      var a = element.valor;
      var b = element.desc;
      this.total = this.total + a - b;
    });
  }

  addValues() {
    const item = { valor: this.costoIngreso, desc: this.descIngreso };

    if (this.costoIngreso && this.descIngreso != null) {
      
      if (this.cont <= 0) {
        this.ticket[0] = item;
        this.cont++;
      }
      else{
        this.ticket.push(item);
      }    
  
      this.updateTotal();
    } else{
      alert('Campo vacío ⛔');
    }

  }

  deleteElement(i:number){
    this.ticket.splice(i,1);
    this.updateTotal()
  }
}
