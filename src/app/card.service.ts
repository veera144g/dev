import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Cricketer} from "./cricketer";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private messageSource = new BehaviorSubject({image:'https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg',name:'Virat Kohli',information:'34 Yrs, 5ft 10in ,Hindi,Cricketer  Delhi ,India'});
  currentMessage = this.messageSource.asObservable();
  constructor() { }
getData()
{
   return [{image:'https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg',name:'Virat Kohli',information:'34 Yrs, 5ft 10in ,Hindi,Cricketer  Delhi ,India'},
    {image:'https://www.teahub.io/photos/full/231-2316621_sachin-tendulkar-photos-download.jpg',name:'Sachin Tendulkar',information:'48 Yrs,5ft 4in ,Hindi,Cricketer Mumbai,India'},
    {image:'https://www.cricketkeeda.com/wp-content/uploads/2020/03/if-IPL-get-cancelled-then-ms-dhoni-will-play-in-t20-world-cup-640x640.jpg',name:'Ms Dhoni',information:'43 Yrs, 6ft 2in ,Hindi,Cricketer Ranchi ,India'}];
}
  changeMessage(message: any) {
    this.messageSource.next(message)
  }
}
