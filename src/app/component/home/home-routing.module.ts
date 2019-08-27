import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { CategoryV1Component } from './category-v1/category-v1.component';
import { CategoryV12Component } from './category-v12/category-v12.component';
import { ProductV1Component } from './product-v1/product-v1.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompareComponent } from './compare/compare.component';
import { QuickviewComponent } from './quickview/quickview.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { HomeV1Component } from './home-v1/home-v1.component';

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
        path : 'home_v1',
        component : HomeV1Component   
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
      },
      {
        path : 'cartpage',
        component : CartpageComponent   
      },
      {
        path : 'checkout',
        component : CheckoutComponent   
      },
      {
        path : 'compare',
        component : CompareComponent   
      },
      {
        path : 'quickview',
        component : QuickviewComponent   
      },
      {
        path : 'trackyourorder',
        component : TrackorderComponent   
      },
      {
        path : 'wishlist',
        component : WishlistComponent   
      },
      {
        path : 'about',
        component : AboutComponent   
      },
      {
        path : 'contact',
        component : ContactComponent   
      },
      {
        path : '404',
        component : Error404Component   
      },
      {
        path : 'blog',
        component : BlogComponent   
      },
      {
        path : 'blogdetail',
        component : BlogdetailsComponent   
      },
      {
        path : 'login',
        component : LoginComponent   
      },
      {
        path : 'cartpage/success',
        component : SuccessComponent   
      }
    ]
  }
];

export const HomeRoutingModule : ModuleWithProviders = RouterModule.forChild(routes);
