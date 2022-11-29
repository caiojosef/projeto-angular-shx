import { Component, OnInit } from '@angular/core';
// importando o service
import { DolarService } from 'src/app/services/dolar.service';
import { DolarData } from 'src/app/models/dolarData';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  //data
  todayDate : Date = new Date();

  valorMoeda: DolarData | any

  constructor(private service: DolarService) { }

  ngOnInit(): void {
    // se inscrevendo para obter os valores de dentro do USDBRL
    this.service.getDolar(" ").subscribe({
      next: (res) => {

        this.valorMoeda = {
          name: res.USDBRL.name,
          ask: res.USDBRL.ask
        } 
      }
            
    })
  }
  

}

