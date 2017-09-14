import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Register } from './Register';
import { MaterialModule } from '@angular/material';


@Component ({
   selector: 'my-app',
   templateUrl: 'register.component.html',
})
export class AppInventory  {
    user=new Register('Swetha','Alwaal','swetha.alwaal@gmail.com','Hyd','Hyd','AP','500028','121223','F');
}