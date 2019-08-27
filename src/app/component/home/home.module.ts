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


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, SidebarComponent, MainComponent, CategoryV1Component, CategoryV12Component, ProductV1Component, CartpageComponent, CheckoutComponent, CompareComponent, QuickviewComponent, TrackorderComponent, WishlistComponent, AboutComponent, ContactComponent, Error404Component, BlogComponent, BlogdetailsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    OwlModule
  ]
})
export class HomeModule { }
