import {Component} from "@angular/core";
@Component ({
  selector:"app-section1",
  templateUrl:"./section1.component.html",
  styleUrls:["./section1.component.css"],
})
export class Section1Component {
  isSecretVisible:boolean = false;
  buttonClicks:number[] = [];
  toggleSecretVisibility () {
    this.isSecretVisible = !this.isSecretVisible;
    this.buttonClicks.push(this.buttonClicks.length + 1);
  }
}

