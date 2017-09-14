import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Login } from './Login';
@Component ({
   selector: 'my-app',
//    template: 'Products',
   templateUrl: 'login.component.html',
})
export  class  Applogin  {
    Result:number =0;
    email : string ="Swetha";
    password : string ="Alwaal";
    model:Login=new Login("Swetha","Alwaal");

    singIn(){
        console.log(this.model.email);
        console.log(this.model.password);
    }
    reset(){

    }
}