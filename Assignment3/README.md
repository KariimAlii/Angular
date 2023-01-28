# 🔥 The Third Angular Assignment

![](./output.JPG)


- Crearing Angular Components ✔️
- Using String Interpolation , Event Binding , Two-Way Data Binding  ✔️
- Dynamic HTML using Directives ✔️
- Using Structural Directives *ngIf , *ngFor ✔️
- Using Attribute Directives ngStyle , ngClass ✔️

## 🔥 Steps

### 1- Add A button which says 'Display Details'
- [section1.component.html](./src/app/section1/section1.component.html)
```
<button (click)="toggleSecretVisibility()" class="btn btn-primary">
  Display Details
</button>
```

### 2- Add a paragraph with any content of your choice (e.g. 'Secret Password = tuna')
### 3- Toggle the displaying of that paragraph with the button created in the first step
- [section1.component.html](./src/app/section1/section1.component.html)
```
<p *ngIf="isSecretVisible">Secret Password = tuna</p>
```

### 4- Log all button clicks in an array and output that array below the secret paragraph (maybe log a timestamp or simply an incrementing number)
### 5- Starting at the 5th log item, give all future log items a blue background (via ngStyle) and white color (ngClass)
- [section1.component.html](./src/app/section1/section1.component.html)
```
<ul>
  <li *ngFor="let click of buttonClicks">
    <span
      [ngStyle]="{ 'background-color': click >= 5 ? 'blue' : 'transparent' }"
      [ngClass]="{ text: click >= 5 }"
      >{{ click }}</span
    >
  </li>
</ul>
```

- [section1.component.ts](./src/app/section1/section1.component.ts)
```
export class Section1Component {
  isSecretVisible:boolean = false;
  buttonClicks:number[] = [];
  toggleSecretVisibility () {
    this.isSecretVisible = !this.isSecretVisible;
    this.buttonClicks.push(this.buttonClicks.length + 1);
  }
}
```




### 6- Using Date as item of the array , using index of the array
- [section1.component.html](./src/app/section1/section1.component.html)
```
<ul>
  <li *ngFor="let click of buttonClicks; let i = index;">
    <span
      [ngStyle]="{ 'background-color': i >= 4 ? 'blue' : 'transparent' }"
      [ngClass]="{ 'white-text': i >= 4 }"
      >{{ click }}</span
    >
  </li>
</ul>
```

- [section1.component.ts](./src/app/section1/section1.component.ts)
```
export class Section1Component {
  isSecretVisible:boolean = false;
  buttonClicks:Date[] = [];
  toggleSecretVisibility () {
    this.isSecretVisible = !this.isSecretVisible;
    this.buttonClicks.push(new Date());
  }
}
```




💙 You can view my different projects and contact me through my [Website📱](https://karimali.vercel.app/) 💙



