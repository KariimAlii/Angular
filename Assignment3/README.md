# 🔥 The Third Angular Assignment

![](./output.JPG)


- Crearing Angular Components ✔️
- Using String Interpolation , Event Binding , Two-Way Data Binding  ✔️

## 🔥 Steps

### Add A button which says 'Display Details'
- [section1.component.html](./src/app/section1/section1.component.html)
```
<button (click)="toggleSecretVisibility()" class="btn btn-primary">Display Details</button>
```

### Add a paragraph with any content of your choice (e.g. 'Secret Password = tuna')
### Toggle the displaying of that paragraph with the button created in the first step
- [section1.component.html](./src/app/section1/section1.component.html)
```
<p *ngIf="isSecretVisible">Secret Password = tuna</p>
```
- [section1.component.ts](./src/app/section1/section1.component.ts)
```
export class Section1Component {
  isSecretVisible:boolean = false;
  toggleSecretVisibility () {
    if (this.isSecretVisible) this.isSecretVisible = false;
    else this.isSecretVisible = true;
  }
}
```
### Log all button clicks in an array and output that array below the secret paragraph (maybe log a timestamp or simply an incrementing number)
- [section1.component.ts](./src/app/section1/section1.component.ts)
```
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
}
```
- [section1.component.html](./src/app/section1/section1.component.html)
```
<ul>
    <li *ngFor="let click of buttonClicks">{{index}}</li>
</ul>
```

### Starting at the 5th log item, give all future log items a blue background (via ngStyle) and white color (ngClass)

- [section1.component.ts](./src/app/section1/section1.component.ts)
```
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
```
- [section1.component.html](./src/app/section1/section1.component.html)
```
<ul>
        <li *ngFor="let click of buttonClicks">
            <span [ngStyle]="{'background-color':determineBackgroundColor()}">{{index}}</span>
        </li>
      </ul>
```


💙 You can view my different projects and contact me through my [Website📱](https://karimali.vercel.app/) 💙



