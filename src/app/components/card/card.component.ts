import { Component, OnInit } from '@angular/core';
import { DolarService } from 'src/app/services/dolar.service';
import { DolarData } from 'src/app/models/dolarData';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  valorMoeda: DolarData | any
  
  todayDate : Date = new Date();

  constructor(private service: DolarService) { }

  ngOnInit(): void {
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

