import { Component, OnInit } from '@angular/core';
declare var owlCarousel : any;
@Component({
  selector: 'app-home-v1',
  templateUrl: './home-v1.component.html',
  styleUrls: ['./home-v1.component.css']
})
export class HomeV1Component implements OnInit {

  ngOnInit() {
    console.log(owlCarousel)
  }

  carouselOptions = {
    margin: 25,
    nav: true,
    // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: false
      },
      1500: {
        items: 1,
        nav: true,
        loop: false
      }
    }
  }
  images = [
    {
      image: "../../../../assets/img/banner.png"
    },
    {
      image: "../../../../assets/img/slide_2.png"
    }
  ]
  
  carouselOptionsProduct = {
    margin: 25,
    nav: true,
    // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 4,
        nav: true
      },
      600: {
        items: 4,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,
        loop: true
      },
      1500: {
        items: 4,
        nav: true,
        loop: true
      }
    }
  }
  imagesProduct = [
    { 
      text : "Eos cu utroque inermis",
      priceOld : "$700",
      priceNew : "$350",
      image: "../../../../assets/img/img_product.png"
    },
    { 
      text : "Praesent vel",
      priceOld : "$700",
      priceNew : "$350",
      image: "../../../../assets/img/product_home_2.png"
    },
    { 
      text : "Fermentum velit",
      priceOld : "$700",
      priceNew : "$350",
      image: "../../../../assets/img/product_home_3.png"
    },
    { 
      text : "Vel regione discere ut",
      priceOld : "$700",
      priceNew : "$350",
      image: "../../../../assets/img/product_home_1.png"
    }
  ]
   
  carouselOptionsLogo = {
    margin: 5,
    nav: true,
    // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 6,
        nav: true
      },
      600: {
        items: 6,
        nav: true
      },
      1000: {
        items: 6,
        nav: true,
        loop: true
      },
      1500: {
        items: 6,
        nav: true,
        loop: true
      }
    }
  }
  imagesLogoBrand = [
    {
      image: "../../../../assets/img/logo_1.png"
    },
    {
      image: "../../../../assets/img/logo_2.png"
    },
    {
      image: "../../../../assets/img/logo_3.png"
    },
    {
      image: "../../../../assets/img/logo_4.png"
    },
    {
      image: "../../../../assets/img/logo_5.png"
    },
    {
      image: "../../../../assets/img/logo_6.png"
    }
    // {
    //   image: "../../../../assets/img/logo_7.png"
    // },
    // {
    //   image: "../../../../assets/img/logo_8.png"
    // },
    // ,
    // {
    //   image: "../../../../assets/img/logo_9.png"
    // },
    // {
    //   image: "../../../../assets/img/logo_10.png"
    // },
    // {
    //   image: "../../../../assets/img/logo_11.png"
    // },
    // {
    //   image: "../../../../assets/img/logo_12.png"
    // },
    // {
    //   image: "../../../../assets/img/logo_8.png"
    // },
    // {
    //   image: "../../../../assets/img/logo_8.png"
    // },
    // {
    //   image: "../../../../assets/img/logo_8.png"
    // },
    // {
    //   image: "../../../../assets/img/logo_8.png"
    // }
  ]
  constructor() { }

}
