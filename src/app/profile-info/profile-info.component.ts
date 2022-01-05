import { Component, OnInit } from '@angular/core';
import {CardService} from "../card.service";
import {Router} from "@angular/router";
import {Cricketer} from "../cricketer";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
cricketers:Cricketer[]=[];
cardData:any={image:'',name:'',information:''}
  constructor(private service:CardService,private router:Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
     this.cricketers=this.service.getData();
    this.service.currentMessage.subscribe(data => {
      console.log(data);
      this.cardData=data;
    });
  }
  onShortlist()
  {
    this.nextImage();
    let snackBarRef= this._snackBar.open('you starred profile','Ok',{
      duration:1000,
    });
  }
  like() {
    this.nextImage();
  let snackBarRef= this._snackBar.open('you liked profile','Ok',{
     duration:1000,
   });
  }
dislike()
{
  this.nextImage();
  let snackBarRef= this._snackBar.open('you dis-liked profile','Ok',{
    duration:1000,
    panelClass:['warn']
  });
}
  nextImage()
  {
    let shiftedImage=this.cricketers.shift();
    this.cricketers.push(shiftedImage);
    let frontCricketer= this.cricketers[0];
    this.cardData=frontCricketer;
  }

}
