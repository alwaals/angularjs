import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   template:  `
   <div class="divd">
   <ul class="nav nav-tabs">
   <li role="presentation" class="active"><a [routerLink] = "['/login']">Login</a></li>
   <li role="presentation"><a [routerLink] = "['/Register']">Register</a></li>
   <li role="presentation"><a [routerLink] = "['/Services']">Services</a></li>
</ul><router-outlet></router-outlet></div>`

})
export class AppComponent  { }