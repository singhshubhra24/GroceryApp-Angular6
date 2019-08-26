import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home.component';
import { OwlModule } from 'ngx-owl-carousel';
import { CategoryV1Component } from './category-v1/category-v1.component';
import { CategoryV12Component } from './category-v12/category-v12.component';
import { ProductV1Component } from './product-v1/product-v1.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, SidebarComponent, MainComponent, CategoryV1Component, CategoryV12Component, ProductV1Component],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    OwlModule
  ]
})
export class HomeModule { }
