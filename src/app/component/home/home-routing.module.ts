import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    children : [
      {
        path : '',
        component : MainComponent
      }
    ]
  }
];

export const HomeRoutingModule : ModuleWithProviders = RouterModule.forChild(routes);
