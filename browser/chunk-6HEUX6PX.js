import{a as x}from"./chunk-TIYT7UP5.js";import{c as E}from"./chunk-KHEEIZ2W.js";import"./chunk-VEXMTMPT.js";import"./chunk-Z4ZFXNJ7.js";import"./chunk-5IRIGFBY.js";import{A as I,gb as A,ra as k,sa as y,ta as D,ua as M,va as _}from"./chunk-7IEGBUCH.js";import{Ca as m,Kc as v,Lc as C,Pb as c,Sc as p,Ub as s,Zb as b,cc as w,dc as N,fc as S,gc as j,hc as t,ic as r,jc as d,rb as u,yb as a,yc as h,zb as f}from"./chunk-7QP7SMW2.js";import"./chunk-2EBTC7QX.js";import{f as F}from"./chunk-66YHNWRR.js";function V(o,l){if(o&1&&(d(0,"img",3),t(1,"div",4)(2,"h5",5),v(3),r(),t(4,"p"),v(5),r()()),o&2){let i=h(2).$implicit;s("src",i.src,u),a(3),C(i.title),a(2),C(i.description)}}function W(o,l){o&1&&c(0,V,6,3,"ng-template",2)}function $(o,l){if(o&1&&(t(0,"div",6),d(1,"img",3),r()),o&2){let i=h(2).$implicit;a(),s("src",i,u)}}function O(o,l){o&1&&c(0,$,2,1,"ng-template",2)}function q(o,l){if(o&1&&c(0,W,1,0,null,2)(1,O,1,0,null,2),o&2){let i=l.$implicit;w(i.title?0:1)}}var g=class o{images=[];interval=3e3;showNavigationArrows=!1;showNavigationIndicators=!1;carouselId="carouselExample";carouselClass="carouselExample";title="";static \u0275fac=function(i){return new(i||o)};static \u0275cmp=m({type:o,selectors:[["spk-ngb-carousel"]],inputs:{images:"images",interval:"interval",showNavigationArrows:"showNavigationArrows",showNavigationIndicators:"showNavigationIndicators",carouselId:"carouselId",carouselClass:"carouselClass",title:"title"},standalone:!0,features:[p],decls:4,vars:7,consts:[["data-bs-ride","carousel",3,"id"],[1,"carousel-inner",3,"interval","showNavigationArrows","showNavigationIndicators"],["ngbSlide",""],["alt","...",1,"d-block","w-100",3,"src"],[1,"carousel-caption","d-none","d-md-block"],[1,"text-fixed-white"],[1,"carousel-item","active"]],template:function(i,e){i&1&&(t(0,"div",0)(1,"ngb-carousel",1),S(2,q,2,1,null,null,N),r()()),i&2&&(b("carousel slide ",e.carouselClass,""),s("id",e.carouselId),a(),s("interval",e.interval)("showNavigationArrows",e.showNavigationArrows)("showNavigationIndicators",e.showNavigationIndicators),a(),j(e.images))},dependencies:[A,D,y,I]})};var n={};F(n,{carousel1:()=>B,carousel2:()=>G,carousel3:()=>J,carousel4:()=>Q,carousel5:()=>X,carousel6:()=>Z,carousel7:()=>ee,carousel8:()=>se,carouselts:()=>L,carouselts2:()=>H,carouselts3:()=>K,carouselts4:()=>R,carouselts5:()=>Y,carouselts7:()=>ae});var B=`<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
@if(images5){
<ngb-carousel class="carousel-inner" [interval]="3000" [showNavigationArrows]="false"
    [showNavigationIndicators]="false">

    @for (image of images5; track images5) {
    <ng-template ngbSlide class="carousel-item active">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}
</div>`,L=`import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';


@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [NgbModule,SharedModule,ShowcodeCardComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss'
})
export class CarouselsComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }


  images = [
    './assets/images/media/media-26.jpg',
    './assets/images/media/media-27.jpg',
    './assets/images/media/media-33.jpg',
  ];
}`,G=`<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

@if(images6){
<ngb-carousel class="carousel-inner" [interval]="3000" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    @for (image of images6; track images6) {
    <ng-template ngbSlide class="carousel-item active">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}

</div>`,H=`import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';


@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [NgbModule,SharedModule,ShowcodeCardComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss'
})
export class CarouselsComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }


  imagescontrol = [
    './assets/images/media/media-28.jpg',
    './assets/images/media/media-31.jpg',
    './assets/images/media/media-29.jpg',
  ];
}`,J=`@if (images2) {
    <ngb-carousel>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-25.jpg" class="d-block w-100" alt="..." />
            </div>
        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-29.jpg" class="d-block w-100" alt="..." />
            </div>

        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-30.jpg" class="d-block w-100" alt="..." />
            </div>

        </ng-template>
    </ngb-carousel>
    }`,K=`import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';


@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [NgbModule,SharedModule,ShowcodeCardComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss'
})
export class CarouselsComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }


  imagesIndicators = [
    './assets/images/media/media-25.jpg',
    './assets/images/media/media-29.jpg',
    './assets/images/media/media-30.jpg',
  ];
}`,Q=`@if (images4) {
    <ngb-carousel>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-59.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h3 class="text-fixed-white">First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-60.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h3 class="text-fixed-white">Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-61.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h3 class="text-fixed-white">Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
        </ng-template>
    </ngb-carousel>
    }`,R=`import { Component } from '@angular/core';
    import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
    import { SharedModule } from '../../../shared/sharedmodule';
    import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
    import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
    import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';
    
    
    @Component({
      selector: 'app-carousels',
      standalone: true,
      imports: [NgbModule,SharedModule,ShowcodeCardComponent],
      templateUrl: './carousels.component.html',
      styleUrl: './carousels.component.scss'
    })
    export class CarouselsComponent {
      prismCode = prismCodeData;
      tsCodedata=tsCodedata
      constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
      }
    
    
      images = [
        './assets/images/media/media-26.jpg',
        './assets/images/media/media-27.jpg',
        './assets/images/media/media-33.jpg',
      ];
    }`,X=`<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">

@if (images7) {
<ngb-carousel class="carousel-inner" [interval]="3000" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    @for (image of images7; track images7) {
    <ng-template ngbSlide class="carousel-item">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}
</div>`,Y=`import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';


@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [NgbModule,SharedModule,ShowcodeCardComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss'
})
export class CarouselsComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }


  images = [
    './assets/images/media/media-26.jpg',
    './assets/images/media/media-27.jpg',
    './assets/images/media/media-33.jpg',
  ];
}`,Z=` <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
<ngb-carousel class="carousel-inner" [interval]="2800" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-40.jpg" class="d-block w-100" alt="..." />
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-41.jpg" class="d-block w-100" alt="..." />
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-42.jpg" class="d-block w-100" alt="..." />
    </ng-template>
</ngb-carousel>

</div>`,ee=`<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false"
data-bs-interval="false">

@if (images8) {
<ngb-carousel class="carousel-inner" [interval]="2800" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    @for (image of images8; track images8) {
    <ng-template ngbSlide class="carousel-item">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}

</div>`,ae=`import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';


@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [NgbModule,SharedModule,ShowcodeCardComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss'
})
export class CarouselsComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  images1 = [
    './assets/images/media/media-13.jpg',
    './assets/images/media/media-14.jpg',
    './assets/images/media/media-18.jpg',
  ];
}`,se=`<div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
<ngb-carousel class="carousel-inner" [showNavigationArrows]="true"
    [showNavigationIndicators]="true">
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-63.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5 class="text-fixed-white">First slide label</h5>
            <p class="op-7">
                Some representative placeholder content for the first slide.
            </p>
        </div>
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-64.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5 class="text-fixed-white">Second slide label</h5>
            <p class="op-7">
                Some representative placeholder content for the second slide.
            </p>
        </div>
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-62.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5 class="text-fixed-white">Third slide label</h5>
            <p class="op-7">
                Some representative placeholder content for the third slide.
            </p>
        </div>
    </ng-template>
</ngb-carousel>
</div>`;var U=class o{prismCode=n;tsCodedata=n;constructor(l){l.showNavigationArrows=!0,l.showNavigationIndicators=!0}images=["./assets/images/media/media-26.jpg","./assets/images/media/media-27.jpg","./assets/images/media/media-33.jpg"];imagescontrol=["./assets/images/media/media-28.jpg","./assets/images/media/media-31.jpg","./assets/images/media/media-29.jpg"];imagesIndicators=["./assets/images/media/media-25.jpg","./assets/images/media/media-29.jpg","./assets/images/media/media-30.jpg"];carouselImages=[{src:"./assets/images/media/media-59.jpg",alt:"First slide",title:"First slide label",description:"Some representative placeholder content for the first slide."},{src:"./assets/images/media/media-60.jpg",alt:"Second slide",title:"Second slide label",description:"Some representative placeholder content for the second slide."},{src:"./assets/images/media/media-61.jpg",alt:"Third slide",title:"Third slide label",description:"Some representative placeholder content for the third slide."}];imagescross=["./assets/images/media/media-43.jpg","./assets/images/media/media-44.jpg","./assets/images/media/media-45.jpg"];images1=["./assets/images/media/media-63.jpg","./assets/images/media/media-62.jpg","./assets/images/media/media-64.jpg"];imagesindividual=["./assets/images/media/media-40.jpg","./assets/images/media/media-41.jpg","./assets/images/media/media-42.jpg"];darkVariantlImages=[{src:"./assets/images/media/media-13.jpg",alt:"First slide",title:"First slide label",description:"Some representative placeholder content for the first slide."},{src:"./assets/images/media/media-14.jpg",alt:"Second slide",title:"Second slide label",description:"Some representative placeholder content for the second slide."},{src:"./assets/images/media/media-18.jpg",alt:"Third slide",title:"Third slide label",description:"Some representative placeholder content for the third slide."}];static \u0275fac=function(i){return new(i||o)(f(k))};static \u0275cmp=m({type:o,selectors:[["app-carousel"]],standalone:!0,features:[p],decls:25,vars:60,consts:[[1,"row"],[1,"col-xl-4","col-lg-6","col-md-6","col-sm-12"],[3,"title","prism","tsCode"],[3,"images","interval","showNavigationArrows","showNavigationIndicators"],[3,"images","id","interval","showNavigationArrows","showNavigationIndicators"],[3,"images","id","carouselClass","interval","showNavigationArrows","showNavigationIndicators"],[3,"title","prism"],[1,"col-xxl-4","col-md-6"],[3,"images","interval","showNavigationArrows","id","showNavigationIndicators"]],template:function(i,e){i&1&&(t(0,"div",0)(1,"div",1)(2,"app-showcode-card",2),d(3,"spk-ngb-carousel",3),r()(),t(4,"div",1)(5,"app-showcode-card",2),d(6,"spk-ngb-carousel",4),r()(),t(7,"div",1)(8,"app-showcode-card",2),d(9,"spk-ngb-carousel",3),r()(),t(10,"div",1)(11,"app-showcode-card",2),d(12,"spk-ngb-carousel",3),r()(),t(13,"div",1)(14,"app-showcode-card",2),d(15,"spk-ngb-carousel",5),r()(),t(16,"div",1)(17,"app-showcode-card",6),d(18,"spk-ngb-carousel",4),r()(),t(19,"div",7)(20,"app-showcode-card",2),d(21,"spk-ngb-carousel",4),r()(),t(22,"div",7)(23,"app-showcode-card",6),d(24,"spk-ngb-carousel",8),r()()()),i&2&&(a(2),s("title","Slides Only")("prism",e.prismCode.carousel1)("tsCode",e.tsCodedata.carouselts),a(),s("images",e.images)("interval",1e3)("showNavigationArrows",!1)("showNavigationIndicators",!1),a(2),s("title","With controls")("prism",e.prismCode.carousel2)("tsCode",e.tsCodedata.carouselts2),a(),s("images",e.imagescontrol)("id","carouselExampleControls")("interval",3e3)("showNavigationArrows",!0)("showNavigationIndicators",!1),a(2),s("title","With indicators")("prism",e.prismCode.carousel3)("tsCode",e.tsCodedata.carouselts3),a(),s("images",e.imagesIndicators)("interval",3e3)("showNavigationArrows",!1)("showNavigationIndicators",!0),a(2),s("title","With captions")("prism",e.prismCode.carousel4)("tsCode",e.tsCodedata.carouselts4),a(),s("images",e.carouselImages)("interval",3e3)("showNavigationArrows",!0)("showNavigationIndicators",!0),a(2),s("title","Crossfade")("prism",e.prismCode.carousel5)("tsCode",e.tsCodedata.carouselts5),a(),s("images",e.imagescross)("id","carouselExampleFade")("carouselClass","carousel-fade")("interval",3200)("showNavigationArrows",!0)("showNavigationIndicators",!1),a(2),s("title","Individual .carousel-item interval")("prism",e.prismCode.carousel6),a(),s("images",e.imagesindividual)("id","carouselExampleInterval")("interval",2800)("showNavigationArrows",!0)("showNavigationIndicators",!1),a(2),s("title","Disable touch swiping")("prism",e.prismCode.carousel7)("tsCode",e.tsCodedata.carouselts7),a(),s("images",e.images1)("id","carouselExampleControlsNoTouching")("interval",2800)("showNavigationArrows",!0)("showNavigationIndicators",!1),a(2),s("title","Dark variant")("prism",e.prismCode.carousel8),a(),s("images",e.darkVariantlImages)("interval",3e3)("showNavigationArrows",!0)("id","carouselExampleDark")("showNavigationIndicators",!1))},dependencies:[_,E,M,x,g]})};export{U as CarouselComponent};
