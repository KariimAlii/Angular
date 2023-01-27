# 🔥 The Second Angular Assignment

![](./output.JPG)


- Crearing Angular Components ✔️
- Using String Interpolation , Event Binding , Two-Way Data Binding  ✔️

## 🔥 Steps

### Adding a Input field which updates a property ('username') via Two-Way-Binding
- [server.component.ts](./src/app/server/server.component.ts)
```
export class ServerComponent {
  userName:string = '';
  resetUserName () {
    this.userName = '';
  }
}
```
- [server.component.html](./src/app/server/server.component.html)
```
<input [(ngModel)] = "userName" type="text">
```



### Output the username property via String Interpolation (in a paragraph below the input)
- [server.component.html](./src/app/server/server.component.html)
```
<p>{{userName}}</p>
```
### Add a button which may only be clicked if the username is NOT an empty string
- [server.component.html](./src/app/server/server.component.html)
```
<button [disabled]="userName === ''" (click)="resetUserName();">Reset UserName</button>
```

### Upon clicking the button, the username should be reset to an empty string
- [server.component.ts](./src/app/server/server.component.ts)
```
export class ServerComponent {
  userName:string = '';
  resetUserName () {
    this.userName = '';
  }
}
```

💙 You can view my different projects and contact me through my [Website](https://karimali.vercel.app/) 💙



