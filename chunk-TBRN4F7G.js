import{a as D}from"./chunk-TIYT7UP5.js";import{c as $}from"./chunk-KHEEIZ2W.js";import"./chunk-VEXMTMPT.js";import"./chunk-Z4ZFXNJ7.js";import"./chunk-5IRIGFBY.js";import{$a as L,A as R,_a as U,ab as A,l as V}from"./chunk-7IEGBUCH.js";import{Ac as x,Ca as w,Ec as F,Fc as H,Gc as Y,Kc as c,Mc as S,Na as f,Oa as T,Pb as v,Sc as C,Ub as l,Wa as E,Yb as p,Zb as I,cc as _,ec as h,fc as u,gc as b,hc as i,ic as n,jc as m,nc as y,wc as d,yb as a,yc as g,zc as M}from"./chunk-7QP7SMW2.js";import"./chunk-2EBTC7QX.js";import{f as N}from"./chunk-66YHNWRR.js";var B={};N(B,{toasts1:()=>Q,toasts10:()=>tt,toasts2:()=>K,toasts3:()=>O,toasts4:()=>Z,toasts5:()=>q,toasts6:()=>G,toasts7:()=>W,toasts8:()=>z,toasts9:()=>X,toastsReuse:()=>J});var J=`@if(content1){
  <ngb-toast [class]="buttonClass" [autohide]="autohide" role="alert" aria-live="assertive"
  aria-atomic="true">
  <div class="d-flex">
      {{content1}}
    <button class="btn-close {{btnClass}} me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"
      (click)="show9 = true"></button>
  </div>
  <ng-content></ng-content>
</ngb-toast>
}
@else {

  <ngb-toast
 [delay]="5000"
 [autohide]="autohide"
 [header]="header"
 [ngClass]="buttonClass"
 (hide)="show = false" 
 >
     <ng-content>
         <ng-template ngbToastHeader (hide)="show = true;">
             <img
               class="bd-placeholder-img rounded me-2"
               src="./assets/images/brand-logos/favicon.ico"
               alt="Your Image"
               />
               <strong class="me-auto">Zynix</strong>
               <small>11 mins ago</small>
         </ng-template>
         {{content}}
     </ng-content>
     <!-- <button aria-label="Close" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
     >
     <span aria-hidden="true"></span>
   </button> -->
 </ngb-toast> 
}
`,Q=`<button type="button" class="btn btn-primary btn-wave" id="liveToastBtn" (click)="showToast()" >Show live
toast</button>
<div class="toast-container position-fixed top-0 end-0 p-3">

@for (toast of toasts; track toasts) {
<ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToast(toast)"  [class.bg-warning]="!toast.autohide">
<div class="toast-header text-default">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/favicon.ico"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>`,K=`@if (show6){
    <ngb-toast  class="toast align-items-center text-bg-primary  border-0 fade show  mb-4" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
              Hello, world! This is the Primary toast message
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show6 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
   @if (show7){
    <ngb-toast  class="toast align-items-center text-bg-secondary border-0 fade show mb-4" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
                Hello, world! This is the Secondary toast.
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show7 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
   @if (show8){
    <ngb-toast  class="toast align-items-center text-bg-warning border-0 fade show mb-4" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
                Hello, world! This is the  warning toast message.
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show8 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
   @if (show9){
    <ngb-toast  class="toast align-items-center text-bg-info border-0 fade show" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
                Hello, world! This is the info toast message.
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show9 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }`,O=`@if (show) {
    <ngb-toast [autohide]="false" (hidden)="show = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>11 mins ago</small>
        </ng-template>
        Hello, world! This is a toast message.
    </ngb-toast>
}`,Z=`<div class="toast-container position-static">
@if (show1) {
    <ngb-toast [autohide]="false" (hidden)="show1 = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>just now</small>
        </ng-template>
        See? Just like this.
    </ngb-toast>
}
@if (show2) {
    <ngb-toast [autohide]="false" (hidden)="show1 = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>2 seconds ago</small>
        </ng-template>
        Heads up, toasts will stack automatically
    </ngb-toast>
}

</div>`,q=`@if (show3) {
    <ngb-toast [autohide]="false" (hidden)="show3 = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>11 mins ago</small>
        </ng-template>
        Hello, world! This is a toast message.
    </ngb-toast>
}`,G=` @if (show10){
    <ngb-toast  class="toast align-items-center  mb-2 fade show" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-black">
                Hello, world! This is a toast message.
            </div>
            <button
              aria-label="Close"
              class="btn-close  me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show10 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
<div>
    <span class="my-4 text-muted">
        Alternatively, you can also add additional controls and components to
        toasts.
    </span>
</div>
@if (show11){
<ngb-toast
[autohide]="false"
class="toast fade show mt-2"
role="alert"
aria-live="assertive"
aria-atomic="true"
>
<div class="toast-body">
  Hello, world! This is a toast message.
  <div class="mt-2 pt-2 me-2 border-top">
    <button type="button" class="btn btn-primary btn-sm btn-wave">
      Take action
    </button>
    <button
      type="button"
      class="btn btn-secondary btn-sm btn-wave"
      data-bs-dismiss="toast"
      (click)="show11 = false"
    >
      Close
    </button>
  </div>
</div>
</ngb-toast>
}`,W=`<div class="btn-list">
<button type="button" class="btn btn-primary-light me-2 btn-wave" id="primaryToastBtn" data-bs-dismiss="toast"
                            aria-label="Close"  (click)="showToastprimary()" >Primary</button>
<button type="button" class="btn btn-secondary-light me-2 btn-wave" id="secondaryToastBtn" (click)="showToastseconday()"
>secondary</button>
<button type="button" class="btn btn-warning-light me-2 btn-wave" id="warningToastBtn"  (click)="showToastwarning()"
>warning</button>
<button type="button" class="btn btn-info-light me-2 btn-wave" id="infoToastBtn"  (click)="showToastinfo()"
>info</button>
<button type="button" class="btn btn-success-light me-2 btn-wave" id="successToastBtn"  (click)="showToastsuccess()"
>success</button>
<button type="button" class="btn btn-danger-light me-2 btn-wave" id="dangerToastBtn"  (click)="showToastdanger()"
>danger</button>
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">
@for (toast of toasts1; track toasts1) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastprimary(toast)"  [class.bg-primary-transparent]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/favicon.ico"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastprimary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toasts2; track toasts2) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsecondary(toast)"  [class.bg-secondary-transparent]="!toast.autohide">
<div class="toast-header bg-secondary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastsecondary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toasts3; track toasts3) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastwarning(toast)"  [class.bg-warning-transparent]="!toast.autohide">
<div class="toast-header bg-warning text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastwarning(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toasts4; track toasts4) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastinfo(toast)"  [class.bg-info-transparent]="!toast.autohide">
<div class="toast-header bg-info text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastinfo(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toasts5; track toasts5) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsuccess(toast)"  [class.bg-success-transparent]="!toast.autohide">
<div class="toast-header bg-success text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastsuccess(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toasts6; track toasts6) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastdanger(toast)"  [class.bg-danger-transparent]="!toast.autohide">
<div class="toast-header bg-danger text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastdanger(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
</div>`,z=`<div class="btn-list">
<button type="button" class="btn btn-primary me-2 btn-wave" id="solidprimaryToastBtn"  (click)="SolidToastprimary()">Primary</button>
<button type="button" class="btn btn-secondary me-2 btn-wave" id="solidsecondaryToastBtn"  (click)="SolidToastsecondary()">secondary</button>
<button type="button" class="btn btn-warning me-2 btn-wave" id="solidwarningToastBtn"  (click)="SolidToastwarning()">warning</button>
<button type="button" class="btn btn-info me-2 btn-wave" id="solidinfoToastBtn"  (click)="SolidToastinfo()">info</button>
<button type="button" class="btn btn-success me-2 btn-wave" id="solidsuccessToastBtn"  (click)="SolidToastsuccess()">success</button>
<button type="button" class="btn btn-danger me-2 btn-wave" id="soliddangerToastBtn"  (click)="SolidToastdanger()">danger</button>
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">

@for (toast of toastsA; track toastsA) {
    <ngb-toast id="solid-primaryToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastprimary(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastprimary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-primary text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toastsB; track toastsB) {
    <ngb-toast id="solid-secondaryToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsecondary(toast)"  [class.bg-secondary]="!toast.autohide">
<div class="toast-header bg-secondary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastsecondary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-secondary text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}


@for (toast of toastsC; track toastsC) {
    <ngb-toast id="solid-warningToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastwarning(toast)"  [class.bg-warning]="!toast.autohide">
<div class="toast-header bg-warning text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastwarning(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-warning text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toastsD; track toastsD) {
    <ngb-toast id="solid-infoToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastinfo(toast)"  [class.bg-info]="!toast.autohide">
<div class="toast-header bg-info text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastinfo(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-info text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toastsE; track toastsE) {
    <ngb-toast id="solid-successToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsuccess(toast)"  [class.bg-success]="!toast.autohide">
<div class="toast-header bg-success text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastsuccess(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-success text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toastsF; track toastsF) {
    <ngb-toast id="solid-dangerToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastdanger(toast)"  [class.bg-danger]="!toast.autohide">
<div class="toast-header bg-danger text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastdanger(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-danger text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}
</div>`,X=`<div class="btn-list">
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="topleftToastBtn" (click)="TopLeft()">Top Left</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="topcenterToastBtn" (click)="TopCenter()">Top Center</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="toprightToastBtn" (click)="TopRight()">Top Right</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middleleftToastBtn" (click)="MiddleLeft()">Middle Left</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlecenterToastBtn" (click)="MiddleCenter()">Middle Center</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlerightToastBtn" (click)="MiddleRight()">Middle Right</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomleftToastBtn" (click)="BottomLeft()">Bottom Left</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomcenterToastBtn" (click)="BottomCenter()">Bottom Center</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomrightToastBtn" (click)="BottomRight()">Bottom Right</button>
</div>
<div class="toast-container position-fixed top-0 start-0 p-3">
@for (toast of toasts7; track toasts7) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="toplefthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="toplefthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-0 start-50  translate-middle-x p-3">
@for (toast of toasts8; track toasts8) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="TopCenterhideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="TopCenterhideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">
@for (toast of toasts9; track toasts9) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="TopRighthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="TopRighthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-50 start-0 translate-middle-y p-3">
@for (toast of toasts10; track toasts10) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="MiddleLefthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="MiddleLefthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-50 start-50 translate-middle">
@for (toast of toasts11; track toasts11) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="MiddleCenterhideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="MiddleCenterhideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-50 end-0 translate-middle-y p-3">
@for (toast of toasts12; track toasts12) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="MiddleRighthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="MiddleRighthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed bottom-0 start-0 p-3">
@for (toast of toasts13; track toasts13) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="BottomLefthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="BottomLefthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
@for (toast of toasts14; track toasts14) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="BottomCenterthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="BottomCenterthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed bottom-0 end-0 p-3">
@for (toast of toasts15; track toasts15) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="BottomRighthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="BottomRighthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>`,tt=`<div class="bd-example bg-light bd-example-toasts d-flex p-0">
<div aria-live="polite" aria-atomic="true"
    class="d-flex justify-content-center align-items-center w-100">
    
        @if (show5) {
            <ngb-toast class="shadow-lg fade" [autohide]="false" (hidden)="show5 = false">
                <ng-template ngbToastHeader>
                    <div class="me-auto">
                        <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                        <strong class="mx-1 ">Udon</strong>
                    </div>
                    <small>11 mins ago</small>
                </ng-template>
                Hello, world! This is a toast message.
            </ngb-toast>
        }
</div>
</div>`;var P=["*","*"];function ot(e,t){if(e&1){let s=y();i(0,"ngb-toast",2)(1,"div",3),c(2),i(3,"button",4),d("click",function(){f(s);let r=g();return T(r.show9=!0)}),n()(),x(4),n()}if(e&2){let s=g();p(s.buttonClass),l("autohide",s.autohide),a(2),S(" ",s.content1," "),a(),I("btn-close ",s.btnClass," me-2 m-auto")}}function at(e,t){e&1&&(m(0,"img",7),i(1,"strong",8),c(2,"Zynix"),n(),i(3,"small"),c(4,"11 mins ago"),n())}function it(e,t){if(e&1){let s=y();v(0,at,5,0,"ng-template",6),d("hide",function(){f(s);let r=g(2);return T(r.show=!0)}),c(1)}if(e&2){let s=g(2);a(),S(" ",s.content," ")}}function nt(e,t){if(e&1){let s=y();i(0,"ngb-toast",5),d("hide",function(){f(s);let r=g();return T(r.show=!1)}),x(1,1,null,it,2,1),n()}if(e&2){let s=g();l("delay",5e3)("autohide",s.autohide)("header",s.header)("ngClass",s.buttonClass)}}var k=class e{show=!1;title="";content="";header="";buttonClass="";btnClass="";content1="";autohide=!1;hide=new E;onHide(){this.show=!1,this.hide.emit()}show9=!0;hidden=()=>{this.show9=!1};static \u0275fac=function(s){return new(s||e)};static \u0275cmp=w({type:e,selectors:[["spk-toast"]],inputs:{show:"show",title:"title",content:"content",header:"header",buttonClass:"buttonClass",btnClass:"btnClass",content1:"content1",autohide:"autohide"},outputs:{hide:"hide"},standalone:!0,features:[C],ngContentSelectors:P,decls:2,vars:1,consts:[["role","alert","aria-live","assertive","aria-atomic","true",3,"class","autohide"],[3,"delay","autohide","header","ngClass"],["role","alert","aria-live","assertive","aria-atomic","true",3,"autohide"],[1,"d-flex"],["data-bs-dismiss","toast","aria-label","Close",3,"click"],[3,"hide","delay","autohide","header","ngClass"],["ngbToastHeader","",3,"hide"],["src","./assets/images/brand-logos/favicon.ico","alt","Your Image",1,"bd-placeholder-img","rounded","me-2"],[1,"me-auto"]],template:function(s,o){s&1&&(M(P),v(0,ot,5,7,"ngb-toast",0)(1,nt,3,4,"ngb-toast",1)),s&2&&_(o.content1?0:1)},dependencies:[A,L,U,R,V]})};var lt=["toastContainer"];function rt(e,t){return this.toasts8}function dt(e,t){return this.toasts9}function ct(e,t){return this.toasts10}function mt(e,t){return this.toasts11}function ut(e,t){return this.toasts12}function bt(e,t){return this.toasts13}function pt(e,t){return this.toasts14}function ht(e,t){return this.toasts15}function gt(e,t){e&1&&m(0,"spk-toast",5),e&2&&l("autohide",!0)}function ft(e,t){if(e&1){let s=y();i(0,"spk-toast",53),d("click",function(){f(s);let r=g();return T(r.show11=!1)}),n()}e&2&&l("buttonClass","toast align-items-center text-bg-primary border-0 mb-4")("autohide",!1)}function Tt(e,t){if(e&1){let s=y();i(0,"spk-toast",53),d("click",function(){f(s);let r=g();return T(r.show12=!1)}),n()}e&2&&l("buttonClass","toast align-items-center text-bg-secondary border-0 mb-4")("autohide",!1)}function yt(e,t){if(e&1){let s=y();i(0,"spk-toast",53),d("click",function(){f(s);let r=g();return T(r.show13=!1)}),n()}e&2&&l("buttonClass","toast align-items-center text-bg-info border-0 mb-4")("autohide",!1)}function _t(e,t){if(e&1){let s=y();i(0,"spk-toast",53),d("click",function(){f(s);let r=g();return T(r.show14=!1)}),n()}e&2&&l("buttonClass","toast align-items-center text-bg-warning border-0 mb-4")("autohide",!1)}function vt(e,t){e&1&&m(0,"spk-toast",5),e&2&&l("autohide",!1)}function wt(e,t){if(e&1){let s=y();i(0,"spk-toast",54),d("click",function(){f(s);let r=g();return T(r.show17=!1)}),n()}e&2&&l("buttonClass","toast align-items-center fade show mb-3")("autohide",!1)}function Ct(e,t){if(e&1){let s=y();i(0,"spk-toast",15),c(1," Hello, world! This is a toast message. "),i(2,"div",55)(3,"button",56),c(4," Take action "),n(),i(5,"button",57),d("click",function(){f(s);let r=g();return T(r.show10=!1)}),c(6," Close "),n()()()}e&2&&(l("buttonClass","toast fade show")("autohide",!1),a(3),p("btn btn-primary btn-sm btn-wave me-2"),a(2),p("btn btn-secondary btn-sm btn-wave"))}function kt(e,t){if(e&1){let s=y();i(0,"spk-toast",59),d("click",function(){f(s);let r=g(2);return T(r.show15=!1)}),n()}e&2&&l("buttonClass","toast colored-toast bg-primary-gradient toastify-js text-fixed-white mb-2")("autohide",!1)}function xt(e,t){if(e&1&&v(0,kt,1,2,"spk-toast",58),e&2){let s=g();_(s.show15?0:-1)}}function St(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-primary-transparent mb-2")("autohide",!0)}function Bt(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-primary1-transparent mb-2")("autohide",!0)}function Et(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-primary2-transparent mb-2")("autohide",!0)}function It(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-primary3-transparent mb-2")("autohide",!0)}function Mt(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-secondary-transparent mb-2")("autohide",!0)}function Ft(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-warning-transparent mb-2")("autohide",!0)}function Ht(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-info-transparent mb-2")("autohide",!0)}function Yt(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-success-transparent mb-2")("autohide",!0)}function Vt(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-danger-transparent mb-2")("autohide",!0)}function Rt(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-primary text-fixed-white mb-2")("autohide",!0)}function Ut(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-secondary text-fixed-white mb-2")("autohide",!0)}function Lt(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-warning text-fixed-white mb-2")("autohide",!0)}function At(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-info text-fixed-white mb-2")("autohide",!0)}function $t(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-success text-fixed-white mb-2")("autohide",!0)}function Dt(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-danger text-fixed-white mb-2")("autohide",!0)}function Pt(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-primary-transparent mb-2")("autohide",!0)}function jt(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-primary-transparent mb-2")("autohide",!0)}function Nt(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-primary-transparent mb-2")("autohide",!0)}function Jt(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-primary-transparent mb-2")("autohide",!0)}function Qt(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-primary-transparent mb-2")("autohide",!0)}function Kt(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-primary-transparent mb-2")("autohide",!0)}function Ot(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-primary-transparent mb-2")("autohide",!0)}function Zt(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-primary-transparent mb-2")("autohide",!0)}function qt(e,t){e&1&&m(0,"spk-toast",15),e&2&&l("buttonClass","toast colored-toast bg-primary-transparent mb-2")("autohide",!0)}var j=class e{prismCode=B;show=!0;show1=!0;show2=!0;show3=!0;show4=!0;show5=!0;show6=!0;show7=!0;show8=!0;show9=!0;show10=!0;show11=!0;show12=!0;show13=!0;show14=!0;show15=!0;show16=!0;show17=!0;isclose=!0;showRR=!0;isCollapsed=!0;isCollapsed2=!0;isCollapsed3=!0;isCollapsed4=!0;isCollapsed5=!0;isCollapsed6=!0;isCollapsed7=!0;toastContainer;show0=!1;autohide=!0;constructor(){}ngOnInit(){}toasts=[];toasts1=[];toasts2=[];toasts3=[];toasts4=[];toasts5=[];toasts6=[];toastsA=[];toastsB=[];toastsC=[];toastsD=[];toastsE=[];toastsF=[];toastsG=[];toastsH=[];toastsI=[];toastsJ=[];toastsK=[];toasts7=[];toasts8=[];toasts9=[];toasts10=[];toasts11=[];toasts12=[];toasts13=[];toasts14=[];toasts15=[];toasts16=[];toasts17=[];toasts18=[];showToast(){let t={autohide:!0};this.toasts.push(t)}showToastprimary(){let t={autohide:!0};this.toasts1.push(t)}showToastprimary1(){let t={autohide:!0};this.toasts16.push(t)}showToastprimary2(){let t={autohide:!0};this.toasts17.push(t)}showToastprimary3(){let t={autohide:!0};this.toasts18.push(t)}showToastseconday(){let t={autohide:!0};this.toasts2.push(t)}showToastwarning(){let t={autohide:!0};this.toasts3.push(t)}showToastinfo(){let t={autohide:!0};this.toasts4.push(t)}showToastsuccess(){let t={autohide:!0};this.toasts5.push(t)}showToastdanger(){let t={autohide:!0};this.toasts6.push(t)}hideToastprimary(t){this.toasts1=this.toasts1.filter(s=>s!==t)}hideToastprimary1(t){this.toasts16=this.toasts16.filter(s=>s!==t)}hideToastprimary2(t){this.toasts17=this.toasts17.filter(s=>s!==t)}hideToastprimary3(t){this.toasts18=this.toasts18.filter(s=>s!==t)}hideToastsecondary(t){this.toasts2=this.toasts2.filter(s=>s!==t)}hideToastwarning(t){this.toasts3=this.toasts3.filter(s=>s!==t)}hideToastinfo(t){this.toasts4=this.toasts4.filter(s=>s!==t)}hideToastsuccess(t){this.toasts5=this.toasts5.filter(s=>s!==t)}hideToastdanger(t){this.toasts6=this.toasts6.filter(s=>s!==t)}hidehedaer=[{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-primary mb-4"},{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-secondary mb-4"},{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-warning mb-4"},{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-info"}];SolidToastprimary(){let t={autohide:!0};this.toastsA.push(t)}SolidToastprimary1(){let t={autohide:!0};this.toastsH.push(t)}SolidToastjs(){let t={autohide:!0};this.toastsK.push(t)}SolidToastprimary2(){let t={autohide:!0};this.toastsI.push(t)}SolidToastprimary3(){let t={autohide:!0};this.toastsJ.push(t)}SolidToastsecondary(){let t={autohide:!0};this.toastsB.push(t)}SolidToastwarning(){let t={autohide:!0};this.toastsC.push(t)}SolidToastinfo(){let t={autohide:!0};this.toastsD.push(t)}SolidToastsuccess(){let t={autohide:!0};this.toastsE.push(t)}SolidToastdanger(){let t={autohide:!0};this.toastsF.push(t)}hideToast(t){this.toasts=this.toasts.filter(s=>s!==t)}hideSolidToastprimary(t){this.toastsA=this.toastsA.filter(s=>s!==t)}hideSolidToastprimary1(t){this.toastsH=this.toastsH.filter(s=>s!==t)}hideSolidToastprimary2(t){this.toastsI=this.toastsI.filter(s=>s!==t)}hideSolidToastprimary3(t){this.toastsJ=this.toastsJ.filter(s=>s!==t)}hideSolidToastsecondary(t){this.toastsB=this.toastsB.filter(s=>s!==t)}hideSolidToastwarning(t){this.toastsC=this.toastsC.filter(s=>s!==t)}hideSolidToastinfo(t){this.toastsD=this.toastsD.filter(s=>s!==t)}hideSolidToastsuccess(t){this.toastsE=this.toastsE.filter(s=>s!==t)}hideSolidToastdanger(t){this.toastsF=this.toastsF.filter(s=>s!==t)}hidden=()=>{this.show9=!1};contentClose(){this.show10=!1}close(){this.isclose=!1,setTimeout(()=>this.isclose=!0,3e3)}TopLeft(){let t={autohide:!0};this.toasts7.push(t)}TopCenter(){let t={autohide:!0};this.toasts8.push(t)}TopCenterhideToast(t){this.toasts8=this.toastsA.filter(s=>s!==t)}TopRight(){let t={autohide:!0};this.toasts9.push(t)}TopRighthideToast(t){this.toasts9=this.toastsA.filter(s=>s!==t)}MiddleLeft(){let t={autohide:!0};this.toasts10.push(t)}MiddleLefthideToast(t){this.toasts10=this.toastsA.filter(s=>s!==t)}MiddleCenter(){let t={autohide:!0};this.toasts11.push(t)}MiddleCenterhideToast(t){this.toasts11=this.toastsA.filter(s=>s!==t)}MiddleRight(){let t={autohide:!0};this.toasts12.push(t)}MiddleRighthideToast(t){this.toasts12=this.toastsA.filter(s=>s!==t)}BottomLeft(){let t={autohide:!0};this.toasts13.push(t)}BottomLefthideToast(t){this.toasts13=this.toastsA.filter(s=>s!==t)}BottomCenter(){let t={autohide:!0};this.toasts14.push(t)}BottomCenterthideToast(t){this.toasts14=this.toastsA.filter(s=>s!==t)}BottomRight(){let t={autohide:!0};this.toasts15.push(t)}BottomRighthideToast(t){this.toasts15=this.toastsA.filter(s=>s!==t)}showToastBasic=!1;showToastStack1=!1;showToastStack2=!1;showBasicToast(){this.showToastBasic=!0}showStackToasts(){this.showToastStack1=!0,setTimeout(()=>this.showToastStack2=!0,1e3)}solidtoasts=[{buttonClass:"toast colored-toast bg-primary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-secondary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-primary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-primary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-primary text-fixed-white"}];static \u0275fac=function(s){return new(s||e)};static \u0275cmp=w({type:e,selectors:[["app-toasts"]],viewQuery:function(s,o){if(s&1&&F(lt,5),s&2){let r;H(r=Y())&&(o.toastContainer=r.first)}},standalone:!0,features:[C],decls:156,vars:59,consts:[[1,"row"],[1,"col-xl-6"],[3,"title","prism"],["type","button","id","liveToastBtn",3,"click"],[1,"toast-container","position-fixed","top-0","end-0","p-3"],["content"," Hello, world! This is a toast message",3,"autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a toast message.",3,"buttonClass","autohide"],["classbody","basitoastbody",3,"title","prism"],["content"," Hello, world! This is a toast message",3,"hide","autohide"],["classbody","stackingbody",3,"title","prism"],[1,"toast-container","position-static"],["buttonClass","mb-3","content","See? Just like this.",3,"hide","autohide"],["buttonClass","mb-3","content","Heads up, toasts will stack automatically",3,"hide","autohide"],["content1","Hello, world! This is a toast message.",3,"buttonClass","autohide"],[1,"my-4","text-muted"],["content","Your,toast message here.",3,"buttonClass","autohide"],[1,"bd-example","bg-light","bd-example-toasts","aligning-toasts","px-2","d-flex","align-items-center","justify-content-center"],[1,"card","custom-card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],["id","toast-button",3,"click"],[1,"btn-list"],["type","button","id","primaryToastBtn",3,"click"],["type","button","id","secondaryToastBtn",3,"click"],["type","button","id","warningToastBtn",3,"click"],["type","button","id","infoToastBtn",3,"click"],["type","button","id","successToastBtn",3,"click"],["type","button","id","dangerToastBtn",3,"click"],["classbody","bgtoastbody",3,"title","prism"],["type","button","id","solidprimaryToastBtn",3,"click"],["type","button","id","solidsecondaryToastBtn",3,"click"],["type","button","id","solidinfoToastBtn",3,"click"],["type","button","id","solidsuccessToastBtn",3,"click"],["type","button","id","soliddangerToastBtn",3,"click"],[1,"col-xl-12"],["type","button","id","topleftToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave","mb-2",3,"click"],["type","button","id","topcenterToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave","mb-2",3,"click"],["type","button","id","toprightToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave","mb-2",3,"click"],["type","button","id","middleleftToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave","mb-2",3,"click"],["type","button","id","middlecenterToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave","mb-2",3,"click"],["type","button","id","middlerightToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave","mb-2",3,"click"],["type","button","id","bottomleftToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave","mb-2",3,"click"],["type","button","id","bottomcenterToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave","mb-2",3,"click"],["type","button","id","bottomrightToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave","mb-2",3,"click"],[1,"toast-container","position-fixed","top-0","start-0","p-3"],[1,"toast-container","position-fixed","top-0","start-50","translate-middle-x","p-3"],[1,"toast-container","position-fixed","top-50","start-0","translate-middle-y","p-3"],[1,"toast-container","position-fixed","top-50","start-50","translate-middle"],[1,"toast-container","position-fixed","top-50","end-0","translate-middle-y","p-3"],[1,"toast-container","position-fixed","bottom-0","start-0","p-3"],[1,"toast-container","position-fixed","bottom-0","start-50","translate-middle-x","p-3"],[1,"toast-container","position-fixed","bottom-0","end-0","p-3"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a toast message.",3,"click","buttonClass","autohide"],["content1","Hello, world! This is a toast message.",3,"click","buttonClass","autohide"],[1,"mt-2","pt-2","border-top"],["type","button"],["type","button","data-bs-dismiss","toast",3,"click"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","I'm a toast Message",3,"buttonClass","autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","I'm a toast Message",3,"click","buttonClass","autohide"]],template:function(s,o){s&1&&(i(0,"div",0)(1,"div",1)(2,"app-showcode-card",2)(3,"button",3),d("click",function(){return o.showToast()}),c(4," Show live toast "),n(),i(5,"div",4),u(6,gt,1,1,"spk-toast",5,h),n()(),i(8,"app-showcode-card",2),v(9,ft,1,2,"spk-toast",6)(10,Tt,1,2,"spk-toast",6)(11,yt,1,2,"spk-toast",6)(12,_t,1,2,"spk-toast",6),n()(),i(13,"div",1)(14,"app-showcode-card",7)(15,"spk-toast",8),d("hide",function(){return o.show=!1}),n()(),i(16,"app-showcode-card",9)(17,"div",10)(18,"spk-toast",11),d("hide",function(){return o.show=!1}),n(),i(19,"spk-toast",12),d("hide",function(){return o.show=!1}),n()()()()(),i(20,"div",0)(21,"div",1)(22,"app-showcode-card",2),v(23,vt,1,1,"spk-toast",5),n(),i(24,"app-showcode-card",2),v(25,wt,1,2,"spk-toast",13),i(26,"div")(27,"span",14),c(28," Alternatively, you can also add additional controls and components to toasts. "),n()(),v(29,Ct,7,6,"spk-toast",15),n()(),i(30,"div",1)(31,"app-showcode-card",2)(32,"div",16)(33,"spk-toast",8),d("hide",function(){return o.show=!1}),n()()(),i(34,"div",17)(35,"div",18)(36,"div",19),c(37," TOASTIFY JS "),n()(),i(38,"div",20)(39,"button",21),d("click",function(){return o.SolidToastjs()}),c(40,"Click For Live Toast"),n(),i(41,"div",4),u(42,xt,1,1,null,null,h),n()()()()(),i(44,"div",0)(45,"div",1)(46,"app-showcode-card",2)(47,"div",22)(48,"button",23),d("click",function(){return o.showToastprimary()}),c(49," Primary "),n(),i(50,"button",24),d("click",function(){return o.showToastseconday()}),c(51," secondary "),n(),i(52,"button",25),d("click",function(){return o.showToastwarning()}),c(53," warning "),n(),i(54,"button",26),d("click",function(){return o.showToastinfo()}),c(55," info "),n(),i(56,"button",27),d("click",function(){return o.showToastsuccess()}),c(57," success "),n(),i(58,"button",28),d("click",function(){return o.showToastdanger()}),c(59," danger "),n()(),i(60,"div",4),u(61,St,1,2,"spk-toast",15,h),u(63,Bt,1,2,"spk-toast",15,h),u(65,Et,1,2,"spk-toast",15,h),u(67,It,1,2,"spk-toast",15,h),u(69,Mt,1,2,"spk-toast",15,h),u(71,Ft,1,2,"spk-toast",15,h),u(73,Ht,1,2,"spk-toast",15,h),u(75,Yt,1,2,"spk-toast",15,h),u(77,Vt,1,2,"spk-toast",15,h),n()()(),i(79,"div",1)(80,"app-showcode-card",29)(81,"div",22)(82,"button",30),d("click",function(){return o.SolidToastprimary()}),c(83," Primary "),n(),i(84,"button",31),d("click",function(){return o.SolidToastsecondary()}),c(85," secondary "),n(),i(86,"button",31),d("click",function(){return o.SolidToastwarning()}),c(87," Warning "),n(),i(88,"button",32),d("click",function(){return o.SolidToastinfo()}),c(89," info "),n(),i(90,"button",33),d("click",function(){return o.SolidToastsuccess()}),c(91," success "),n(),i(92,"button",34),d("click",function(){return o.SolidToastdanger()}),c(93," danger "),n()(),i(94,"div",4),u(95,Rt,1,2,"spk-toast",15,h),u(97,Ut,1,2,"spk-toast",15,h),u(99,Lt,1,2,"spk-toast",15,h),u(101,At,1,2,"spk-toast",15,h),u(103,$t,1,2,"spk-toast",15,h),u(105,Dt,1,2,"spk-toast",15,h),n()()()(),i(107,"div",0)(108,"div",35)(109,"app-showcode-card",2)(110,"div",22)(111,"button",36),d("click",function(){return o.TopLeft()}),c(112,"Top Left"),n(),i(113,"button",37),d("click",function(){return o.TopCenter()}),c(114,"Top Center"),n(),i(115,"button",38),d("click",function(){return o.TopRight()}),c(116,"Top Right"),n(),i(117,"button",39),d("click",function(){return o.MiddleLeft()}),c(118,"Middle Left"),n(),i(119,"button",40),d("click",function(){return o.MiddleCenter()}),c(120,"Middle Center"),n(),i(121,"button",41),d("click",function(){return o.MiddleRight()}),c(122,"Middle Right"),n(),i(123,"button",42),d("click",function(){return o.BottomLeft()}),c(124,"Bottom Left"),n(),i(125,"button",43),d("click",function(){return o.BottomCenter()}),c(126,"Bottom Center"),n(),i(127,"button",44),d("click",function(){return o.BottomRight()}),c(128,"Bottom Right"),n()(),i(129,"div",45),u(130,Pt,1,2,"spk-toast",15,h),n(),i(132,"div",46),u(133,jt,1,2,"spk-toast",15,rt,!0),n(),i(135,"div",4),u(136,Nt,1,2,"spk-toast",15,dt,!0),n(),i(138,"div",47),u(139,Jt,1,2,"spk-toast",15,ct,!0),n(),i(141,"div",48),u(142,Qt,1,2,"spk-toast",15,mt,!0),n(),i(144,"div",49),u(145,Kt,1,2,"spk-toast",15,ut,!0),n(),i(147,"div",50),u(148,Ot,1,2,"spk-toast",15,bt,!0),n(),i(150,"div",51),u(151,Zt,1,2,"spk-toast",15,pt,!0),n(),i(153,"div",52),u(154,qt,1,2,"spk-toast",15,ht,!0),n()()()()),s&2&&(a(2),l("title","Live example")("prism",o.prismCode.toasts1),a(),p("btn btn-primary btn-wave"),a(3),b(o.toasts),a(2),l("title","Color schemes")("prism",o.prismCode.toasts2),a(),_(o.show11?9:-1),a(),_(o.show12?10:-1),a(),_(o.show13?11:-1),a(),_(o.show14?12:-1),a(2),l("title","Basic example")("prism",o.prismCode.toasts3),a(),l("autohide",!1),a(),l("title","Stacking")("prism",o.prismCode.toasts4),a(2),l("autohide",!1),a(),l("autohide",!1),a(3),l("title","Translucent")("prism",o.prismCode.toasts5),a(),_(o.show1?23:-1),a(),l("title","Custom content")("prism",o.prismCode.toasts6),a(),_(o.show17?25:-1),a(4),_(o.show10?29:-1),a(2),l("title","Aligning Toast Using Flexbox")("prism",o.prismCode.toasts10),a(2),l("autohide",!1),a(6),p("btn btn-primary-gradient btn-wave waves-effect waves-light"),a(3),b(o.toastsK),a(4),l("title","Color Variants Live")("prism",o.prismCode.toasts7),a(2),p("btn btn-primary-light me-2 btn-wave mb-2"),a(2),p("btn btn-secondary-light me-2 btn-wave mb-2"),a(2),p("btn btn-warning-light me-2 btn-wave mb-2"),a(2),p("btn btn-info-light me-2 btn-wave mb-2"),a(2),p("btn btn-success-light me-2 btn-wave mb-2"),a(2),p("btn btn-danger-light me-2 btn-wave mb-2"),a(3),b(o.toasts1),a(2),b(o.toasts16),a(2),b(o.toasts17),a(2),b(o.toasts18),a(2),b(o.toasts2),a(2),b(o.toasts3),a(2),b(o.toasts4),a(2),b(o.toasts5),a(2),b(o.toasts6),a(3),l("title","Solid Background Toasts")("prism",o.prismCode.toasts8),a(2),p("btn btn-primary me-2 btn-wave mb-2"),a(2),p("btn btn-secondary me-2 btn-wave mb-2"),a(2),p("btn btn-warning me-2 btn-wave mb-2"),a(2),p("btn btn-info me-2 btn-wave mb-2"),a(2),p("btn btn-success me-2 btn-wave mb-2"),a(2),p("btn btn-danger me-2 btn-wave mb-2"),a(3),b(o.toastsA),a(2),b(o.toastsB),a(2),b(o.toastsC),a(2),b(o.toastsD),a(2),b(o.toastsE),a(2),b(o.toastsF),a(4),l("title","Toast Placements")("prism",o.prismCode.toasts9),a(21),b(o.toasts7),a(3),b(o.toasts8),a(3),b(o.toasts9),a(3),b(o.toasts10),a(3),b(o.toasts11),a(3),b(o.toasts12),a(3),b(o.toasts13),a(3),b(o.toasts14),a(3),b(o.toasts15))},dependencies:[$,D,k]})};export{j as ToastsComponent};
