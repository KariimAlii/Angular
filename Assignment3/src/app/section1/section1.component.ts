import {Component} from "@angular/core";
@Component ({
  selector:"app-section1",
  templateUrl:"./section1.component.html",
  styleUrls:["./section1.component.css"],
})
export class Section1Component {
  isSecretVisible:boolean = false;
  buttonClicks:number[] = [];
  index:number = 1;
  toggleSecretVisibility () {
    if (this.isSecretVisible) this.isSecretVisible = false;
    else this.isSecretVisible = true;
    this.buttonClicks.push(this.index);
    this.index++;
  }
  determineBackgroundColor () {
    return (this.index >= 6) ? 'blue' : 'transparent';
  }
}

