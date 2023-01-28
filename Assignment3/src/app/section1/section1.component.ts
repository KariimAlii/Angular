import {Component} from "@angular/core";
@Component ({
  selector:"app-section1",
  templateUrl:"./section1.component.html",
  styleUrls:["./section1.component.css"],
})
export class Section1Component {
  isSecretVisible:boolean = false;
  buttonClicks:Date[] = [];
  toggleSecretVisibility () {
    this.isSecretVisible = !this.isSecretVisible;
    this.buttonClicks.push(new Date());
  }
}

