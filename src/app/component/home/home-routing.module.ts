import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { CategoryV1Component } from './category-v1/category-v1.component';
import { CategoryV12Component } from './category-v12/category-v12.component';
import { ProductV1Component } from './product-v1/product-v1.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    children : [
      {
        path : '',
        component : MainComponent
      },
      {
        path : 'category_v1',
        component : CategoryV1Component   
      },
      {
        path : 'category_v1_2',
        component : CategoryV12Component   
      },
      {
        path : 'product_v1',
        component : ProductV1Component   
      }
    ]
  }
];

export const HomeRoutingModule : ModuleWithProviders = RouterModule.forChild(routes);
