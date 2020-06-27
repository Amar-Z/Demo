import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-calc-don',
  templateUrl: './calc-don.component.html',
  styleUrls: ['./calc-don.component.css']
})
export class CalcDonComponent implements OnInit {
X: number;
Y: number;
Result: number;
currentBtn: number;
FirstDiv: boolean;
SecondtDiv: boolean;
ThirdDiv: boolean;
FourthDiv: boolean;
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.FirstDiv = false;
    this.SecondtDiv = false;
    this.ThirdDiv = false;
    this.FourthDiv = false;
  }

  onCalc(){
this.X = this.Y * 0.66;
console.log(this.X);
this.FourthDiv = true;
this.FirstDiv = false;
this.SecondtDiv = false;
this.ThirdDiv = false;

  }

  showDivF(divVal: number){
this.currentBtn = divVal;
this.Result = divVal * 0.66;
console.log(this.Result);
this.FirstDiv = true;
this.SecondtDiv = false;
this.ThirdDiv = false;
this.FourthDiv = false;
  }

  showDivS(divVal: number){
    this.currentBtn = divVal;
    this.Result = divVal * 0.66;
    console.log(this.Result);
    this.SecondtDiv = true;
    this.FourthDiv = false;
    this.FirstDiv = false;
    this.ThirdDiv = false;
      }

      showDivT(divVal: number){
        this.currentBtn = divVal;
        this.Result = divVal * 0.66;
        console.log(this.Result);
        this.ThirdDiv = true;
        this.FourthDiv = false;
        this.FirstDiv = false;
        this.SecondtDiv = false;
          }
        }
