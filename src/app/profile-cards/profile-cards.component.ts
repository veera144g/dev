import { Component, OnInit } from '@angular/core';
import {Cricketer} from "../cricketer";
import {Router} from "@angular/router";
import {CardService} from "../card.service";

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.css']
})
export class ProfileCardsComponent implements OnInit {
  cricketers:Cricketer[]=[];
  cardData:Cricketer={image:'',name:'',information:''};
  constructor(private router:Router,private service:CardService) { }

  ngOnInit(): void {
  this.cricketers= this.service.getData();
    this.nextImage();
  }
  nextImage()
  {
    let shiftedImage=this.cricketers.shift();
    this.cricketers.push(shiftedImage);
    let frontCricketer= this.cricketers[0];
    this.cardData=frontCricketer;
  }
  previousImage()
  {
    let poppedImage=this.cricketers.pop();
    this.cricketers.unshift(poppedImage);
    this.cardData = poppedImage;
  }
  showProfile(cardData:any)
  {
    this.router.navigate(['profile-info']);
    this.service.changeMessage(cardData);

  }
}
