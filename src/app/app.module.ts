
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Applogin } from './services/product.component';
import { AppInventory } from './services/Inventory.component';
import { AppServices } from './services/Services.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
   { path: 'login', component: Applogin },
   { path: 'Register', component: AppInventory },
   { path: 'Services', component: AppServices },
];

@NgModule ({
   imports: [ BrowserModule,FormsModule,
   RouterModule.forRoot(appRoutes)],
   declarations: [ AppComponent,Applogin,AppInventory,AppServices],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
