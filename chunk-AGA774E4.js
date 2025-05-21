import{a as ae}from"./chunk-TIYT7UP5.js";import{c as ie}from"./chunk-KHEEIZ2W.js";import"./chunk-VEXMTMPT.js";import"./chunk-Z4ZFXNJ7.js";import{g as K}from"./chunk-5IRIGFBY.js";import{A as J,G as X,gb as te,ha as Z,l as U,m as Y,pa as V,qa as ee}from"./chunk-7IEGBUCH.js";import{Ac as Q,Ca as D,Ec as R,Fc as W,Gc as H,Kc as o,Lc as z,Mc as f,Na as g,O as $,Oa as h,Oc as x,Pa as C,Pb as q,Pc as k,Qa as _,Qc as S,Sc as E,Tb as A,Ub as c,Wa as P,Zb as j,dc as I,ec as y,f as F,fc as v,gc as w,hc as e,ic as a,jc as m,ka as G,nc as b,qb as B,rb as M,wc as p,yb as s,yc as u,zb as O,zc as N}from"./chunk-7QP7SMW2.js";import"./chunk-2EBTC7QX.js";import{f as se}from"./chunk-66YHNWRR.js";var T={};se(T,{alertData:()=>be,alertData1:()=>me,alertData2:()=>de,alertData3:()=>ce,alertData4:()=>pe,alertData5:()=>ue,alertData6:()=>ge,alertData7:()=>he,alertData8:()=>ve,alertTS:()=>ne,alertTS1:()=>oe,alertTS10:()=>Se,alertTS11:()=>Te,alertTS12:()=>De,alertTS13:()=>ze,alertTS14:()=>Ee,alertTS15:()=>Ve,alertTS16:()=>Le,alertTS17:()=>Be,alertTS2:()=>we,alertTS3:()=>fe,alertTS4:()=>ye,alertTS5:()=>Ce,alertTS6:()=>_e,alertTS7:()=>Ae,alertTS8:()=>xe,alertTS9:()=>ke,alertreuse:()=>le});var le=`  <ngb-alert  [type]="variant" [dismissible]="isDismissible"  >
<ng-content >
</ng-content>
</ngb-alert>`,ne=`<ngb-alert
type="warning"
class="alert alert-warning alert-dismissible fade show"
role="alert"
>
<strong>Holy guacamole!</strong> You should check in on some of those
fields below.
<button
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</ngb-alert>`,oe=`  @for (livealert of livealerts; track livealert; let i = $index) {
  <div id="liveAlertPlaceholder">
    <div
      id="row"
      class="alert mb-2 alert-success alert-dismissible"
      role="alert"
    >
      <div>{{ livealert.message }}</div>
      <button
        type="button"
        class="btn-close"
        (click)="closeAlerts('row')"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        <i class="bi bi-x"></i>
      </button>
    </div>
  </div>
  }
  <button
    type="button"
    (click)="showAlert()"
    class="btn btn-primary"
    id="liveAlertBtn"
  >
    Show live alert
  </button>`,de=`  
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  livealerts: { message: string; show: boolean }[] = [];

  showAlert() {
    // Add a new alert to the array
    this.livealerts.push({
      message: 'Nice, you triggered this alert message!',
      show: true,
    });
  }
  closeAlerts(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
  }
  `,me=`  
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface SolidAlert {
    type: string;
    message: string;
    bg:string;
  }
  solidAlerts: SolidAlert[] = solidALERTS;
  const solidALERTS: SolidAlert[] = [
    {
      type: 'solid-primary',
      message: ' A simple solid primary alert\u2014check it out!',
      bg:''
    },
    {
      type: 'solid-secondary',
      message: 'A simple solid secondary alert\u2014check it out!',
      bg:''
    },
    {
      type: 'solid-info',
      message: 'A simple solid info alert\u2014check it out!',
      bg:''
    },
    {
      type: 'solid-warning',
      message: 'A simple solid warning alert\u2014check it out!',
      bg:''
    },
    {
      type: 'solid-success',
      message: 'A simple solid success alert\u2014check it out!',
      bg:''
    },
    {
      type: 'solid-danger',
      message: 'A simple solid danger alert\u2014check it out!',
      bg:''
    },
    {
      type: 'solid-light',
      message: 'A simple solid light alert\u2014check it out!',
      bg:'text-dark'
    },
    {
      type: 'solid-dark',
      message: 'A simple solid dark alert\u2014check it out!',
      bg:'text-white'
    },
  ];
  `,ce=`
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface Alert {
  type: string;
  message: string;
  bg:string;
  }
 solidroundedAlerts: Alert[] = solidRoundedALERTS;
      const solidRoundedALERTS: Alert[] = [
      {
        type: 'solid-primary',
        message: '  A simple solid rounded primary alert\u2014check it out!',
      },
      {
        type: 'solid-secondary',
        message: 'A simple solid rounded secondary alert\u2014check it out!',
      },
      {
        type: 'solid-warning',
        message: '  A simple solid rounded warning alert\u2014check it out!',
      },
      {
        type: 'solid-danger',
        message: 'A simple solid rounded danger alert\u2014check it out!',
      },
    ];
    solidroundedClose(index: number) {
      // Remove the alert from the array based on the index
      this.solidroundedAlerts.splice(index, 1);
    }`,pe=`
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface Alert {
  type: string;
  message: string;
  bg:string;
  }
  roundedoutlineAlerts: Alert[] = roundedOutlineALERTS;
  const roundedOutlineALERTS: Alert[] = [
    {
      type: 'outline-primary',
      message: ' A simple outline primary alert\u2014check it out!',
    },
    {
      type: 'outline-secondary',
      message: 'A simple outline secondary alert\u2014check it out!',
    },
    {
      type: 'outline-info',
      message: 'A simple outline info alert\u2014check it out!',
    },
    {
      type: 'outline-warning',
      message: 'A simple outline warning alert\u2014check it out!',
    },
  ];
  roundedoutlineClose(index: number) {
    // Remove the alert from the array based on the index
    this.roundedoutlineAlerts.splice(index, 1);
  }`,ue=`
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface Alert {
  type: string;
  message: string;
  bg:string;
  }
  solidShadowsAlerts: Alert[] = solidShadowsALERTS;
  const solidShadowsALERTS: Alert[] = [
    {
      type: 'solid-primary',
      message: 'A simple solid primary alert with normal shadow\u2014check it out!',
    },
    {
      type: 'solid-primary',
      message: 'A simple solid primary alert with normal shadow\u2014check it out!',
    },
    {
      type: 'solid-primary',
      message: 'A simple solid primary alert with normal shadow\u2014check it out!',
    },
    {
      type: 'solid-secondary',
      message: 'A simple solid secondary alert with normal shadow\u2014check it out!',
    },
    {
      type: 'solid-secondary',
      message: ' A simple solid secondary alert with normal shadow\u2014check it out!',
    },
    {
      type: 'solid-secondary',
      message: 'A simple solid secondary alert with normal shadow\u2014check it out!',
    },
  ];
  solidShadowsAlertsClose(index: number) {
    // Remove the alert from the array based on the index
    this.solidShadowsAlerts.splice(index, 1);
  }`,ge=`
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface Alert {
  type: string;
  message: string;
  bg:string;
  }
  roundeDefaultAlerts: Alert[] = roundeDefaultALERTS;
  const roundeDefaultALERTS: Alert[] = [
    {
      type: 'primary',
      message: ' A simple rounded primary alert\u2014check it out!',
    },
    {
      type: 'secondary',
      message: 'A simple rounded secondary alert\u2014check it out!',
    },
    {
      type: 'info',
      message: 'A simple rounded info alert\u2014check it out!',
    },
    {
      type: 'warning',
      message: 'A simple rounded warning alert\u2014check it out!',
    },
  ];
  roundeDefaultClose(index: number) {
    // Remove the alert from the array based on the index
    this.roundeDefaultAlerts.splice(index, 1);
  }`,he=`
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface Alert {
  type: string;
  message: string;
  bg:string;
  }
  const CustomeButtonALERTS: Alert[] = [
    {
      type: 'primary',
      message: ' A simple rounded primary alert\u2014check it out!',
    },
    {
      type: 'secondary',
      message: 'A simple rounded secondary alert\u2014check it out!',
    },
    {
      type: 'info',
      message: 'A simple rounded info alert\u2014check it out!',
    },
    {
      type: 'warning',
      message: 'A simple rounded warning alert\u2014check it out!',
    },
  ];
  CustomeButtonClose(index: number) {
    // Remove the alert from the array based on the index
    this.CustomeButtonAlerts.splice(index, 1);
  }`,ve=`
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface Alert {
  type: string;
  message: string;
  bg:string;
  }
  CustomizedButtonAlerts: Alert1[] = CustomizedButtonALERTS;
  const CustomizedButtonALERTS: Alert1[] = [
    {
      type: 'outline-primary',
      icon:'  <svg  class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" > <path d="M0 0h24v24H0z" fill="none" /> <path   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/> </svg>',
      message: ' A customized primary alert with an icon ',
      
    },
    {
      type: 'outline-secondary',
      message: 'A customized secondary alert with an icon ',
      icon:' <svg class="svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
    },
    {
      type: 'outline-info',
      message: ' A customized warning alert with an icon ',
      icon:'<svg class="svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>'
    },
    {
      type: 'outline-warning',
      message: ' A customized danger alert with an icon ',
      icon:'<svg class="svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>'
    },
  ];
  customizedAlertclose(index: number) {
    // Remove the alert from the array based on the index
    this.CustomizedButtonAlerts.splice(index, 1);
  }`,we=`  

@for (alert of outlineAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{ alert.type }} alert-dismissible fade show my-2"
  >
    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      (click)="OutlineClose(i)"
    >
      <i class="bi bi-x {{ alert.bg }}"></i>
    </button>
  </div>
  }`,be=`  
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface OutlineAlert {
    type: string;
    message: string;
    bg:string;
  }
  outlineAlerts: OutlineAlert[] = outlineALERTS;

  const outlineALERTS: OutlineAlert[] = [
    {
      type: 'outline-primary',
      message: 'A simple outline primary alert\u2014check it out!',
      bg:''
    },
    {
      type: 'outline-secondary',
      message: 'A simple outline secondary alert\u2014check it out!',
      bg:''
    },
    {
      type: 'outline-info',
      message: 'A simple outline info alert\u2014check it out!',
      bg:''
    },
    {
      type: 'outline-warning',
      message: 'A simple outline warning alert\u2014check it out!',
      bg:''
    },
    {
      type: 'outline-success',
      message: 'A simple outline success alert\u2014check it out!',
      bg:''
    },
    {
      type: 'outline-danger',
      message: 'A simple outline danger alert\u2014check it out!',
      bg:''
    },
    {
      type: 'outline-light',
      message: 'A simple outline light alert\u2014check it out!',
      bg:'text-dark'
    },
    {
      type: 'outline-dark',
      message: 'A simple outline dark alert\u2014check it out!',
      bg:'text-dark'
    },
  ];
`,fe=`    
@for (alert of solidShadowsAlerts; track alert; let i = $index) {
<div
  class="alert alert-{{
    alert.type
  }} shadow-sm alert-dismissible fade show my-2"
>
  A simple solid primary alert with small shadow\u2014check it out!
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    (click)="solidShadowsAlertsClose(i)"
    aria-label="Close"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
}`,ye=`   <div class="alert alert-primary shadow-sm">A simple primary alert with small shadow\u2014check it out!</div>
  <div class="alert alert-primary shadow">A simple primary alert with normal shadow\u2014check it out!</div>
  <div class="alert alert-primary shadow-lg">A simple primary alert with large shadow\u2014check it out!</div>
  <div class="alert alert-secondary shadow-sm">A simple secondary alert with small shadow\u2014check it out!
  </div>
  <div class="alert alert-secondary shadow">A simple secondary alert with normal shadow\u2014check it out!
  </div>
  <div class="alert alert-secondary shadow-lg">A simple secondary alert with large shadow\u2014check it out!
  </div>`,Ce=` <div class="alert alert-primary" role="alert">
  A simple primary alert\u2014check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert\u2014check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert\u2014check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert\u2014check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert\u2014check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert\u2014check it out!
</div>
<div class="alert alert-light" role="alert">
  A simple light alert\u2014check it out!
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert\u2014check it out!
</div>`,_e=` <div class="alert alert-primary" role="alert">
A simple primary alert with <a href="javascript:void(0);" class="alert-link">an example
  link</a>.
Give it a click if you like.
</div>
<div class="alert alert-secondary" role="alert">
A simple secondary alert with <a href="javascript:void(0);" class="alert-link">an example
  link</a>. Give it a click if you like.
</div>
<div class="alert alert-success" role="alert">
A simple success alert with <a href="javascript:void(0);" class="alert-link">an example
  link</a>.
Give it a click if you like.
</div>
<div class="alert alert-danger" role="alert">
A simple danger alert with <a href="javascript:void(0);" class="alert-link">an example
  link</a>.
Give it a click if you like.
</div>
<div class="alert alert-warning" role="alert">
A simple warning alert with <a href="javascript:void(0);" class="alert-link">an example
  link</a>.
Give it a click if you like.
</div>
<div class="alert alert-info" role="alert">
A simple info alert with <a href="javascript:void(0);" class="alert-link">an example link</a>.
Give it a click if you like.
</div>
<div class="alert alert-light" role="alert">
A simple light alert with <a href="javascript:void(0);" class="alert-link">an example
  link</a>.
Give it a click if you like.
</div>
<div class="alert alert-dark" role="alert">
A simple dark alert with <a href="javascript:void(0);" class="alert-link">an example link</a>.
Give it a click if you like.
</div>`,Ae=`      @for (alert of solidAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{ alert.type }} alert-dismissible fade show my-2 {{
      alert.bg
    }}"
  >
    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      (click)="solidClose(i)"
    >
      <i class="bi bi-x {{ alert.bg }}"></i>
    </button>
  </div>
  } `,xe=`  
@for (alert of roundedoutlineAlerts; track alert; let i = $index) {
<div
  class="alert alert-{{
    alert.type
  }} rounded-pill alert-dismissible fade show my-2"
>
  {{ alert.message }}
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
    (click)="roundedoutlineClose(i)"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
}
    `,ke=`   @for (alert of roundeDefaultAlerts; track alert; let i = $index) {
<div
  class="alert alert-{{
    alert.type
  }} rounded-pill alert-dismissible fade show my-2"
>
  {{ alert.message }}
  <button
    type="button"
    class="btn-close"
    (click)="roundeDefaultClose(i)"
    data-bs-dismiss="alert"
    aria-label="Close"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
} `,Se=`  @for (alert of CustomeButtonAlerts; track alert; let i = $index) {
<div
  class="alert alert-{{
    alert.type
  }} rounded-pill alert-dismissible fade show my-2"
>
  {{ alert.message }}
  <button
    type="button"
    (click)="CustomeButtonClose(i)"
    class="btn-close custom-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
}  `,Te=`      @for (alert of CustomizedButtonAlerts; track alert; let i = $index) {
<div
  class="alert alert-{{
    alert.type
  }} alert-dismissible fade show custom-alert-icon shadow-sm my-2"
  role="alert"
>
  <span [innerHTML]="getSanitizedSVG(alert.icon)"></span>

  {{ alert.message }}
  <button
    type="button"
    class="btn-close"
    (click)="customizedAlertclose(i)"
    data-bs-dismiss="alert"
    aria-label="Close"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
}  `,De=`   <div
class="alert alert-primary d-flex align-items-center my-2"
role="alert"
>
<svg
 class="flex-shrink-0 me-2 svg-primary"
 xmlns="http://www.w3.org/2000/svg"
 height="1.5rem"
 viewBox="0 0 24 24"
 width="1.5rem"
 fill="#000000"
>
 <path d="M0 0h24v24H0V0z" fill="none" />
 <path
   d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
 />
</svg>
<div>An example alert with an icon</div>
</div>
<div
class="alert alert-success d-flex align-items-center my-2"
role="alert"
>
<svg
 class="flex-shrink-0 me-2 svg-success"
 xmlns="http://www.w3.org/2000/svg"
 height="1.5rem"
 viewBox="0 0 24 24"
 width="1.5rem"
 fill="#000000"
>
 <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
 <path
   d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
 />
</svg>
<div>An example success alert with an icon</div>
</div>
<div
class="alert alert-warning d-flex align-items-center my-2"
role="alert"
>
<svg
 class="flex-shrink-0 me-2 svg-warning"
 xmlns="http://www.w3.org/2000/svg"
 enable-background="new 0 0 24 24"
 height="1.5rem"
 viewBox="0 0 24 24"
 width="1.5rem"
 fill="#000000"
>
 <g><rect fill="none" height="24" width="24" /></g>
 <g>
   <g>
     <g>
       <path
         d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"
       />
       <polygon points="13,16 11,16 11,18 13,18" />
       <polygon points="13,10 11,10 11,15 13,15" />
     </g>
   </g>
 </g>
</svg>
<div>An example warning alert with an icon</div>
</div>
<div
class="alert alert-danger d-flex align-items-center my-2"
role="alert"
>
<svg
 class="flex-shrink-0 me-2 svg-danger"
 xmlns="http://www.w3.org/2000/svg"
 enable-background="new 0 0 24 24"
 height="1.5rem"
 viewBox="0 0 24 24"
 width="1.5rem"
 fill="#000000"
>
 <g><rect fill="none" height="24" width="24" /></g>
 <g>
   <g>
     <g>
       <path
         d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"
       />
       <rect height="6" width="2" x="11" y="7" />
       <rect height="2" width="2" x="11" y="15" />
     </g>
   </g>
 </g>
</svg>
<div>An example danger alert with an icon</div>
</div> `,ze=`      <div
id="rowA"
class="alert alert-img alert-primary alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
<img src="./assets/images/faces/3.jpg" alt="img" />
</div>
<div>A simple primary alert with image\u2014check it out!</div>
<button
(click)="removeRow('rowA')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="rowB"
class="alert alert-img alert-secondary alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
<img src="./assets/images/faces/5.jpg" alt="img" />
</div>
<div>A simple secondary alert with image\u2014check it out!</div>
<button
(click)="removeRow('rowB')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="rowC"
class="alert alert-img alert-warning alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
<img src="./assets/images/faces/8.jpg" alt="img" />
</div>
<div>A simple warning alert with image\u2014check it out!</div>
<button
(click)="removeRow('rowC')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="rowD"
class="alert alert-img alert-danger alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
<img src="./assets/images/faces/11.jpg" alt="img" />
</div>
<div>A simple danger alert with image\u2014check it out!</div>
<button
(click)="removeRow('rowD')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="rowE"
class="alert alert-img alert-info alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
<img src="./assets/images/faces/13.jpg" alt="img" />
</div>
<div>A simple info alert with image\u2014check it out!</div>
<button
(click)="removeRow('rowE')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="rowF"
class="alert alert-img alert-light alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
<img src="./assets/images/faces/10.jpg" alt="img" />
</div>
<div>A simple light alert with image\u2014check it out!</div>
<button
(click)="removeRow('rowF')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="rowG"
class="alert alert-img alert-dark alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
<img src="./assets/images/faces/15.jpg" alt="img" />
</div>
<div>A simple dark alert with image\u2014check it out!</div>
<button
(click)="removeRow('rowG')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x text-muted"></i>
</button>
</div>`,Ee=`          <div
id="row1"
class="alert alert-img alert-primary alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-xs me-3">
<img src="./assets/images/faces/3.jpg" alt="img" />
</div>
<div>A simple primary alert with image\u2014check it out!</div>
<button
(click)="removeRow('row1')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="row2"
class="alert alert-img alert-secondary alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3">
<img src="./assets/images/faces/5.jpg" alt="img" />
</div>
<div>A simple secondary alert with image\u2014check it out!</div>
<button
(click)="removeRow('row2')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="row3"
class="alert alert-img alert-warning alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar me-3">
<img src="./assets/images/faces/8.jpg" alt="img" />
</div>
<div>A simple warning alert with image\u2014check it out!</div>
<button
(click)="removeRow('row3')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="row4"
class="alert alert-img alert-danger alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-md me-3">
<img src="./assets/images/faces/11.jpg" alt="img" />
</div>
<div>A simple danger alert with image\u2014check it out!</div>
<button
(click)="removeRow('row4')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="row5"
class="alert alert-img alert-info alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-lg me-3">
<img src="./assets/images/faces/13.jpg" alt="img" />
</div>
<div>A simple info alert with image\u2014check it out!</div>
<button
(click)="removeRow('row5')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="row6"
class="alert alert-img alert-dark alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-xl me-3">
<img src="./assets/images/faces/14.jpg" alt="img" />
</div>
<div>A simple info alert with image\u2014check it out!</div>
<button
(click)="removeRow('row6')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x text-muted"></i>
</button>
</div>   `,Ve=` @for (alert11 of contentsalerts; track alert11.type) {
  <div class="col-xl-6">
          <ngb-alert [type]="alert11.type" (closed)="close11(alert11)">
              
                  <div [class]="alert11.class">
                  <h6 class="aletr-heading mb-0 text-fixed-white"> {{ alert11.message}}</h6>
                 
              </div>  <hr class="my-0">
              <div class="p-3">
                  <p class="mb-0">We appreciate you to let us know the bug in the template and for warning us about future consequences <a href="javascript:void(0);" class="fw-medium text-decoration-underline">Visit for support for queries ?</a></p>
              </div>  </ngb-alert>
        </div>
     
      }   `,Le=` 
@for (alert of solidroundedAlerts; track alert; let i = $index) {
<div
  class="alert alert-{{
    alert.type
  }} rounded-pill alert-dismissible fade show mb-2"
>
  {{ alert.message }}
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
    (click)="solidroundedClose(i)"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
}   `,Be=` <div class="row gy-3">
<div class="col-xl-6">
  <div
    class="alert alert-primary overflow-hidden p-0"
    role="alert"
    [(ngbCollapse)]="isClosedA"
  >
    <div
      class="p-3 bg-primary text-fixed-white d-flex justify-content-between"
    >
      <h6 class="alert-heading mb-0 text-fixed-white">
        Thank you for reporting this.
      </h6>
      <button
        type="button"
        class="btn-close p-0 text-fixed-white"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="Closetoggle('A')"
        [attr.aria-expanded]="!isClosedA"
      >
        <i class="bi bi-x"></i>
      </button>
    </div>
    <hr class="my-0" />
    <div class="p-3">
      <p class="mb-0">
        We appreciate you to let us know the bug in the template and
        for warning us about future consequences
        <a
          href="javascript:void(0);"
          class="fw-semibold text-decoration-underline"
          >Visit for support for queries ?</a
        >
      </p>
    </div>
  </div>
</div>
<div class="col-xl-6">
  <div
    class="alert alert-secondary overflow-hidden p-0"
    role="alert"
    [(ngbCollapse)]="isClosedB"
  >
    <div
      class="p-3 bg-secondary text-fixed-white d-flex justify-content-between"
    >
      <h6 class="alert-heading mb-0 text-fixed-white">
        Thank you for reporting this.
      </h6>
      <button
        type="button"
        class="btn-close p-0 text-fixed-white"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="Closetoggle('B')"
        [attr.aria-expanded]="!isClosedB"
      >
        <i class="bi bi-x"></i>
      </button>
    </div>
    <hr class="my-0" />
    <div class="p-3">
      <p class="mb-0">
        We appreciate you to let us know the bug in the template and
        for warning us about future consequences
        <a
          href="javascript:void(0);"
          class="fw-semibold text-decoration-underline"
          >Visit for support for queries ?</a
        >
      </p>
    </div>
  </div>
</div>
<div class="col-xl-6">
  <div
    class="alert alert-success overflow-hidden p-0"
    role="alert"
    [(ngbCollapse)]="isClosedC"
  >
    <div
      class="p-3 bg-success text-fixed-white d-flex justify-content-between"
    >
      <h6 class="alert-heading mb-0 text-fixed-white">
        Thank you for reporting this.
      </h6>
      <button
        type="button"
        class="btn-close p-0 text-fixed-white"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="Closetoggle('C')"
        [attr.aria-expanded]="!isClosedC"
      >
        <i class="bi bi-x"></i>
      </button>
    </div>
    <hr class="my-0" />
    <div class="p-3">
      <p class="mb-0">
        We appreciate you to let us know the bug in the template and
        for warning us about future consequences
        <a
          href="javascript:void(0);"
          class="fw-semibold text-decoration-underline"
          >Visit for support for queries ?</a
        >
      </p>
    </div>
  </div>
</div>
<div class="col-xl-6">
  <div
    class="alert alert-warning overflow-hidden p-0"
    role="alert"
    [(ngbCollapse)]="isClosedD"
  >
    <div
      class="p-3 bg-warning text-fixed-white d-flex justify-content-between"
    >
      <h6 class="alert-heading mb-0 text-fixed-white">
        Thank you for reporting this.
      </h6>
      <button
        type="button"
        class="btn-close p-0 text-fixed-white"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="Closetoggle('D')"
        [attr.aria-expanded]="!isClosedD"
      >
        <i class="bi bi-x"></i>
      </button>
    </div>
    <hr class="my-0" />
    <div class="p-3">
      <p class="mb-0">
        We appreciate you to let us know the bug in the template and
        for warning us about future consequences
        <a
          href="javascript:void(0);"
          class="fw-semibold text-decoration-underline"
          >Visit for support for queries ?</a
        >
      </p>
    </div>
  </div>
</div>
</div> `;var Re=["*"];function We(d,r){if(d&1&&o(0),d&2){let i=u();z(i.title)}}var L=class d{isDismissible=!1;variant="";close=new P;title="";linkText="";buttonClass="";onClose(){this.close.emit()}static \u0275fac=function(i){return new(i||d)};static \u0275cmp=D({type:d,selectors:[["spk-alerts"]],inputs:{isDismissible:"isDismissible",variant:"variant",title:"title",linkText:"linkText",buttonClass:"buttonClass"},outputs:{close:"close"},standalone:!0,features:[E],ngContentSelectors:Re,decls:3,vars:2,consts:[[3,"closed","type","dismissible"]],template:function(i,t){i&1&&(N(),e(0,"ngb-alert",0),p("closed",function(){return t.onClose()}),Q(1,0,null,We,1,1),a()),i&2&&c("type",t.variant)("dismissible",t.isDismissible)},dependencies:[ee,V]})};var He=["staticAlert"],Fe=["selfClosingAlert"];function $e(d,r){if(d&1){let i=b();e(0,"div",103),o(1),e(2,"button",104),p("click",function(){let n=g(i).index,l=u();return h(l.removeAlert(n))}),m(3,"i",5),a()()}if(d&2){let i=r.$implicit;s(),f(" ",i," ")}}function Ge(d,r){if(d&1){let i=b();e(0,"div",11)(1,"spk-alerts",105),p("close",function(){let n=g(i).$index,l=u();return h(l.OutlineClose(n))}),o(2),e(3,"button",106),p("close",function(){let n=g(i).$index,l=u();return h(l.OutlineClose(n))}),m(4,"i",5),a()()()}if(d&2){let i=r.$implicit;s(),c("variant",i.color)("title",i.title)("isDismissible",!0),s(),f(" ",i.title," ")}}function Pe(d,r){if(d&1&&(e(0,"div",11)(1,"spk-alerts",107),o(2),a()()),d&2){let i=r.$implicit;s(),c("variant",i.color)("title",i.title),s(),f(" ",i.title," ")}}function Oe(d,r){if(d&1){let i=b();e(0,"div",14)(1,"spk-alerts",105),p("close",function(){let n=g(i).$index,l=u();return h(l.shodowClose(n))}),o(2),e(3,"button",106),p("close",function(){let n=g(i).$index,l=u();return h(l.shodowClose(n))}),m(4,"i",5),a()()()}if(d&2){let i=r.$implicit,t=u();s(),c("variant",t.getVariant(i))("title",i.title)("isDismissible",!0),s(),f(" ",i.title," ")}}function qe(d,r){if(d&1){let i=b();e(0,"div",14)(1,"spk-alerts",105),p("close",function(){g(i);let n=u();return h(n.differentShadowsAlertsClose(n.i))}),o(2),e(3,"button",106),p("close",function(){g(i);let n=u();return h(n.differentShadowsAlertsClose(n.i))}),m(4,"i",5),a()()()}if(d&2){let i=r.$implicit;s(),c("variant",i.color)("title",i.title)("isDismissible",!0),s(),f(" ",i.title," ")}}function Ne(d,r){if(d&1){let i=b();e(0,"div",14)(1,"spk-alerts",108),p("close",function(){let n=g(i).$index,l=u();return h(l.handleClose(n))}),a()()}if(d&2){let i=r.$implicit;s(),c("variant",i.variant)("title",i.title)("isDismissible",!1)}}function Qe(d,r){if(d&1){let i=b();e(0,"div",11)(1,"spk-alerts",105),p("close",function(){let n=g(i).$index,l=u();return h(l.OutlineClose(n))}),a()()}if(d&2){let i=r.$implicit;s(),c("variant",i.color)("title",i.title)("isDismissible",!0)}}function Ue(d,r){if(d&1){let i=b();e(0,"div",14)(1,"spk-alerts",105),p("close",function(){let n=g(i).$index,l=u();return h(l.solidroundedClose(n))}),o(2),e(3,"button",106),p("close",function(){let n=g(i).$index,l=u();return h(l.solidroundedClose(n))}),m(4,"i",5),a()()()}if(d&2){let i=r.$implicit,t=u();s(),c("variant",t.getVariant(i))("title",i.title)("isDismissible",!0),s(),f(" ",i.title," ")}}function Ye(d,r){if(d&1){let i=b();e(0,"div",14)(1,"spk-alerts",105),p("close",function(){let n=g(i).$index,l=u();return h(l.RoundedOutlineClose(n))}),o(2),e(3,"button",106),p("close",function(){let n=g(i).$index,l=u();return h(l.RoundedOutlineClose(n))}),m(4,"i",5),a()()()}if(d&2){let i=r.$implicit;s(),c("variant",i.color)("title",i.title)("isDismissible",!0),s(),f(" ",i.title," ")}}function Je(d,r){if(d&1){let i=b();e(0,"div",11)(1,"spk-alerts",105),p("close",function(){g(i);let n=u();return h(n.roundedDefaultClose(n.i))}),a()()}if(d&2){let i=r.$implicit;s(),c("variant",i.color)("title",i.title)("isDismissible",!0)}}function Ke(d,r){if(d&1){let i=b();e(0,"spk-alerts",109),p("close",function(){let n=g(i).$index,l=u();return h(l.CustomeButtonClose(n))}),o(1),e(2,"button",110),p("close",function(){let n=g(i).$index,l=u();return h(l.CustomeButtonClose(n))}),m(3,"i",5),a()()}if(d&2){let i=r.$implicit;c("variant",i.color)("isDismissible",!0),s(),f(" ",i.title," ")}}function Xe(d,r){if(d&1){let i=b();e(0,"spk-alerts",109),p("close",function(){let n=g(i).$index,l=u();return h(l.customizedAlertclose(n))}),m(1,"span",111),o(2),e(3,"button",106),p("close",function(){let n=g(i).$index,l=u();return h(l.customizedAlertclose(n))}),m(4,"i",5),a()()}if(d&2){let i=r.$implicit,t=u();c("variant",i.type)("isDismissible",!0),s(),c("innerHTML",t.getSanitizedSVG(i.icon),B),s(),f(" ",i.message," ")}}function Ze(d,r){if(d&1&&(e(0,"spk-alerts",19),m(1,"span",111),o(2),a()),d&2){let i=r.$implicit,t=u();c("variant",i.type),s(),c("innerHTML",t.getSanitizedSVG(i.icon),B),s(),f(" ",i.message," ")}}function et(d,r){if(d&1){let i=b();e(0,"spk-alerts",109),p("close",function(){let n=g(i).$index,l=u();return h(l.imageAlertsClose(n))}),e(1,"div",112),m(2,"img",113),a(),o(3),e(4,"button",106),p("close",function(){let n=g(i).$index,l=u();return h(l.imageAlertsClose(n))}),m(5,"i",114),a()()}if(d&2){let i=r.$implicit;c("variant",i.type)("isDismissible",!0),s(2),c("src",i.image,M),s(),f(" ",i.message," "),s(2),c("ngClass",i.type==="dark alert-img  rounded-pill flex-wrap"?"text-muted":"")}}function tt(d,r){if(d&1){let i=b();e(0,"spk-alerts",109),p("close",function(){let n=g(i).$index,l=u();return h(l.ImageSizeAlertclose(n))}),e(1,"div"),m(2,"img",113),a(),o(3),e(4,"button",106),p("close",function(){let n=g(i).$index,l=u();return h(l.ImageSizeAlertclose(n))}),m(5,"i",114),a()()}if(d&2){let i=r.$implicit;c("variant",i.type)("isDismissible",!0),s(),j("avatar ",i.avatarClass," me-3"),s(),c("src",i.image,M),s(),f(" ",i.message," "),s(2),c("ngClass",i.type==="dark alert-img   flex-wrap"?"text-muted":"")}}function it(d,r){if(d&1){let i=b();e(0,"div",1)(1,"spk-alerts",105),p("close",function(){let n=g(i).$index,l=u();return h(l.additionalInfoClose(n))}),e(2,"div")(3,"h6",115),o(4),a()(),m(5,"hr",116),e(6,"div",117)(7,"p",118),o(8),e(9,"a",119),o(10),a()()(),e(11,"button",106),p("close",function(){let n=g(i).$index,l=u();return h(l.additionalInfoClose(n))}),m(12,"i",5),a()()()}if(d&2){let i=r.$implicit;s(),c("variant",i.variant)("title",i.title)("isDismissible",!0),s(),j("p-3 bg-",i.variant," text-fixed-white d-flex justify-content-between"),s(2),z(i.title),s(4),f("",i.message," "),s(2),f(" ",i.linkTitle,"")}}var at=[{type:"success",message:"This is an success alert"},{type:"info",message:"This is an info alert"},{type:"warning",message:"This is a warning alert"},{type:"danger",message:"This is a danger alert"},{type:"primary",message:"This is a primary alert"},{type:"secondary",message:"This is a secondary alert"},{type:"light",message:"This is a light alert"},{type:"dark",message:"This is a dark alert"}],rt=[{type:"primary svg-primary  shadow-sm ",icon:' <svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>',message:" A customized primary alert with an icon "},{type:"success svg-success  shadow-sm",message:"A customized success alert with an icon ",icon:' <svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>'},{type:"warning svg-warning  shadow-sm",message:" A customized warning alert with an icon ",icon:'<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon points="13,16 11,16 11,18 13,18"></polygon><polygon points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>'},{type:"danger svg-danger  shadow-sm",message:" A customized danger alert with an icon ",icon:'<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect height="6" width="2" x="11" y="7"></rect><rect height="2" width="2" x="11" y="15"></rect></g></g></g></svg>'}],st=[{type:"primary",message:" A simple rounded primary alert\u2014check it out!"},{type:"secondary",message:"A simple rounded secondary alert\u2014check it out!"},{type:"info",message:"A simple rounded info alert\u2014check it out!"},{type:"warning",message:"A simple rounded warning alert\u2014check it out!"}],lt=[{type:"primary svg-primary custom-alert-icon shadow-sm ",icon:'  <svg  class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" > <path d="M0 0h24v24H0z" fill="none" /> <path   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/> </svg>',message:" A customized primary alert with an icon "},{type:"secondary svg-secondary custom-alert-icon shadow-sm",message:"A customized secondary alert with an icon ",icon:' <svg class="svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'},{type:"warning svg-warning custom-alert-icon shadow-sm",message:" A customized warning alert with an icon ",icon:'<svg class="svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>'},{type:"danger svg-danger custom-alert-icon shadow-sm",message:" A customized danger alert with an icon ",icon:'<svg class="svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>'}],re=class d{constructor(r){this.sanitizer=r;this.reset(),this._message$.pipe(X(),G(i=>this.successMessage=i),$(5e3)).subscribe(()=>this.selfClosingAlert?.close())}prsimCodeData=T;tsCodeData=T;reusableCode=T;i;toggleClass="line";alerts;alertData=[{color:"primary",title:"A simple primary alert\u2014check it out!"},{color:"secondary",title:"A simple secondary alert\u2014check it out!"},{color:"success",title:"A simple success alert\u2014check it out!"},{color:"danger",title:"A simple danger alert\u2014check it out!"},{color:"warning",title:"A simple warning alert\u2014check it out!"},{color:"info",title:"A simple info alert\u2014check it out!"},{color:"light",title:"A simple light alert\u2014check it out!"},{color:"dark",title:"A simple dark alert\u2014check it out!"}];outlineAlerts=[{color:"outline-primary",title:"A simple outline primary alert\u2014check it out!"},{color:"outline-secondary",title:"A simple outline secondary alert\u2014check it out!"},{color:"outline-info",title:"A simple outline info alert\u2014check it out!"},{color:"outline-warning",title:"A simple outline warning alert\u2014check it out!"},{color:"outline-success",title:"A simple outline success alert\u2014check it out!"},{color:"outline-danger",title:"A simple outline danger alert\u2014check it out!"},{color:"outline-light",title:"A simple outline light alert\u2014check it out!"},{color:"outline-dark",title:"A simple outline dark alert\u2014check it out!"}];OutlineClose(r){this.outlineAlerts.splice(r,1)}shadowAlert=[{color:"primary shadow-sm",title:"A simple solid primary alert\u2014check it out!"},{color:"primary shadow",title:"A simple solid primary alert\u2014check it out!"},{color:"primary shadow-lg",title:"A simple solid primary alert\u2014check it out!"},{color:"secondary shadow-sm",title:"A simple solid secondary alert\u2014check it out!"},{color:"secondary ",title:"A simple solid secondary alert\u2014check it out!"},{color:"secondary",title:"A simple solid secondary alert\u2014check it out!"}];shodowClose(r){this.shadowAlert.splice(r,1)}getVariant(r){return r.outline?`alert-outline-${r.color}`:`solid-${r.color}`}DiffshadowAlert=[{title:"A simple primary alert with small shadow\u2014check it out!",color:"primary shadow-sm"},{title:"A simple primary alert with normal shadow\u2014check it out!",color:"primary shadow"},{title:"A simple primary alert with large shadow\u2014check it out!",color:"primary shadow-lg"},{title:"A simple secondary alert with small shadow\u2014check it out!",color:"secondary shadow-sm"},{title:"A simple secondary alert with normal shadow\u2014check it out!",color:"secondary shadow"},{title:"A simple secondary alert with large shadow\u2014check it out!",color:"secondary shadow-lg"}];differentShadowsAlertsClose(r){this.DiffshadowAlert.splice(r,1)}LinkAlerts=[{variant:"primary",title:"A simple primary alert with"},{variant:"secondary",title:"A simple secondary alert with"},{variant:"success",title:"A simple success alert with"},{variant:"danger",title:"A simple danger alert with"},{variant:"warning",title:"A simple warning alert with"},{variant:"info",title:"A simple info alert with"},{variant:"light",title:"A simple light alert with"},{variant:"dark",title:"A simple dark alert with"}];handleClose(r){this.LinkAlerts.splice(r,1)}solidroundedAlerts=[{color:"primary rounded-pill",title:"A simple solid Rounded primary alert\u2014check it out!"},{color:"secondary rounded-pill",title:"A simple solid Rounded secondary alert\u2014check it out!"},{color:"warning rounded-pill",title:"A simple solid Rounded warning alert\u2014check it out!"},{color:"danger rounded-pill",title:"A simple solid Rounded danger alert\u2014check it out!"}];roundedclose(r){this.solidroundedAlerts.splice(r,1)}roundedoutlineAlerts=[{color:"outline-primary rounded-pill",title:"A simple Rounded  outline primary alert\u2014check it out!"},{color:"outline-secondary rounded-pill",title:"A simple Rounded outline secondary alert\u2014check it out!"},{color:"outline-warning rounded-pill",title:"A simple Rounded outline warning alert\u2014check it out!"},{color:"outline-danger rounded-pill",title:"A simple Rounded outline danger alert\u2014check it out!"}];RoundedOutlineClose(r){this.roundedoutlineAlerts.splice(r,1)}roundedDefaultAlert=[{color:"primary rounded-pill",title:"A simple primary alert\u2014check it out!"},{color:"secondary rounded-pill",title:"A simple secondary alert\u2014check it out!"},{color:"warning rounded-pill",title:"A simple warning alert\u2014check it out!"},{color:"danger rounded-pill",title:"A simple danger alert\u2014check it out!"}];roundedDefaultClose(r){this.roundedDefaultAlert.splice(r,1)}CustomeButtonAlerts=[{color:"primary rounded-pill",title:"A simple primary alert\u2014check it out!"},{color:"secondary rounded-pill",title:"A simple secondary alert\u2014check it out!"},{color:"warning rounded-pill",title:"A simple warning alert\u2014check it out!"},{color:"danger rounded-pill",title:"A simple danger alert\u2014check it out!"}];CustomeButtonClose(r){this.CustomeButtonAlerts.splice(r,1)}imageAlerts=[{type:"primary alert-img  rounded-pill flex-wrap",message:"A simple primary alert with image\u2014check it out!",image:"./assets/images/faces/3.jpg"},{type:"secondary alert-img  rounded-pill flex-wrap",message:"A simple secondary alert with image\u2014check it out!",image:"./assets/images/faces/5.jpg"},{type:"warning alert-img  rounded-pill flex-wrap",message:"A simple warning alert with image\u2014check it out!",image:"./assets/images/faces/8.jpg"},{type:"danger alert-img  rounded-pill flex-wrap",message:"A simple danger alert with image\u2014check it out!",image:"./assets/images/faces/11.jpg"},{type:"info alert-img  rounded-pill flex-wrap",message:"A simple info alert with image\u2014check it out!",image:"./assets/images/faces/13.jpg"},{type:"light alert-img  rounded-pill flex-wrap",message:"A simple light alert with image\u2014check it out!",image:"./assets/images/faces/10.jpg"},{type:"dark alert-img  rounded-pill flex-wrap",message:"A simple dark alert with image\u2014check it out!",image:"./assets/images/faces/15.jpg"}];imageAlertsClose(r){this.imageAlerts.splice(r,1)}imageSizeAlertsClose(r){this.imageSizeAlerts.splice(r,1)}additionalInfoClose(r){this.additionalInfoAlert.splice(r,1)}additionalInfoAlert=[{variant:"primary p-0 overflow-hidden",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"},{variant:"secondary p-0 overflow-hidden",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"},{variant:"success p-0 overflow-hidden",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"},{variant:"warning p-0 overflow-hidden",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"}];livealerts=[];removeAlert(r){this.livealerts.splice(r,1)}showAlert(){this.livealerts.push("Nice, you triggered this alert message!")}close(r){this.alerts.splice(this.alerts.indexOf(r),1)}closeAlerts(r){let i=document.getElementById(r);i&&i.remove()}CustomizedIconAlerts=rt;roundeDefaultAlerts=st;CustomizedButtonAlerts=lt;solidroundedClose(r){this.solidroundedAlerts.splice(r,1)}customizedIconAlertclose(r){this.CustomizedIconAlerts.splice(r,1)}roundedoutlineClose(r){this.roundedoutlineAlerts.splice(r,1)}customizedAlertclose(r){this.CustomizedButtonAlerts.splice(r,1)}imageSizeAlerts=[{type:"primary alert-img   flex-wrap",message:"A simple primary alert with image\u2014check it out!",image:"./assets/images/faces/3.jpg",avatarClass:"avatar-xs"},{type:"secondary alert-img   flex-wrap",message:"A simple secondary alert with image\u2014check it out!",image:"./assets/images/faces/5.jpg",avatarClass:"avatar-sm"},{type:"warning alert-img   flex-wrap",message:"A simple warning alert with image\u2014check it out!",image:"./assets/images/faces/8.jpg",avatarClass:""},{type:"danger alert-img   flex-wrap",message:"A simple danger alert with image\u2014check it out!",image:"./assets/images/faces/11.jpg",avatarClass:"avatar-md"},{type:"info alert-img   flex-wrap",message:"A simple info alert with image\u2014check it out!",image:"./assets/images/faces/13.jpg",avatarClass:"avatar-lg"},{type:"dark alert-img   flex-wrap",message:"A simple dark alert with image\u2014check it out!",image:"./assets/images/faces/14.jpg",avatarClass:"avatar-xl"}];ImageSizeAlertclose(r){this.imageSizeAlerts.splice(r,1)}removeRow(r){let i=document.getElementById(r);i&&i.remove()}isClosed=!1;isClosed1=!1;isClosed2=!1;isClosed3=!1;isClosed4=!1;isClosed5=!1;isClosed6=!1;isClosed7=!1;isClosed8=!1;isClosed9=!1;isClosed10=!1;isClosed11=!1;isClosed12=!1;isClosed13=!1;isClosedA=!1;isClosedB=!1;isClosedC=!1;isClosedD=!1;Closetoggle(r){r=="zero"&&(this.isClosed=!0),r=="one"&&(this.isClosed1=!0),r=="two"&&(this.isClosed2=!0),r=="three"&&(this.isClosed3=!0),r=="four"&&(this.isClosed4=!0),r=="five"&&(this.isClosed5=!0),r=="six"&&(this.isClosed6=!0),r=="seven"&&(this.isClosed7=!0),r=="eight"&&(this.isClosed8=!0),r=="nine"&&(this.isClosed9=!0),r=="ten"&&(this.isClosed10=!0),r=="eleven"&&(this.isClosed11=!0),r=="twelve"&&(this.isClosed12=!0),r=="A"&&(this.isClosedA=!0),r=="B"&&(this.isClosedB=!0),r=="C"&&(this.isClosedC=!0),r=="D"&&(this.isClosedD=!0)}reset(){this.alerts=Array.from(at)}_message$=new F;staticAlertClosed=!1;successMessage="";staticAlert;selfClosingAlert;getSanitizedSVG(r){return this.sanitizer.bypassSecurityTrustHtml(r)}changeSuccessMessage(){this._message$.next(`${new Date} - Message successfully changed.`)}static \u0275fac=function(i){return new(i||d)(O(K))};static \u0275cmp=D({type:d,selectors:[["app-alerts"]],viewQuery:function(i,t){if(i&1&&(R(He,5),R(Fe,5)),i&2){let n;W(n=H())&&(t.staticAlert=n.first),W(n=H())&&(t.selfClosingAlert=n.first)}},standalone:!0,features:[E],decls:333,vars:75,consts:[[1,"row"],[1,"col-xl-6"],[3,"title","prism"],["type","warning","role","alert",1,"alert","alert-warning","alert-dismissible","fade","show"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close"],[1,"bi","bi-x"],[3,"title","prism","tsCode"],["id","liveAlertPlaceholder"],["class","alert alert-success alert-dismissible mb-2","role","alert","aria-live","polite",4,"ngFor","ngForOf"],["type","button","id","liveAlertBtn",1,"btn","btn-primary",3,"click"],[1,"card-title",3,"title","prism","tsCode"],[1,"mb-2"],[1,"card-title",3,"title","prism"],[1,"example"],[1,"mb-3"],[3,"title","reuseCode","prism","tsCode"],[3,"variant","isDismissible"],[3,"title","reuseCode","prism","tsCode","classbody"],[3,"title","reuseCode","prism"],[3,"variant"],[3,"title","reuseCode","prism","classbody"],[1,"col-xl-12"],[1,"row","gy-3","additional-style"],[1,"col-xl-3"],[1,"card","border-0",3,"ngbCollapseChange","ngbCollapse"],[1,"alert","alert-primary","border","border-primary","mb-0","p-2"],[1,"d-flex","align-items-start"],[1,"me-2","svg-primary"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-primary"],["d","M0 0h24v24H0V0z","fill","none"],["d","M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"],[1,"text-primary","w-100"],[1,"fw-semibold","d-flex","justify-content-between"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close","p-0",3,"click"],[1,"fs-12","op-8","mb-1"],[1,"fs-12"],["href","javascript:void(0);",1,"text-secondary","fw-semibold","me-2","d-inline-block"],["href","javascript:void(0);",1,"text-primary","fw-semibold"],[1,"alert","alert-secondary","border","border-secondary","mb-0","p-2"],[1,"me-2","svg-secondary"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-secondary"],["d","M0 0h24v24H0V0zm0 0h24v24H0V0z","fill","none"],["d","M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"],[1,"text-secondary","w-100"],["href","javascript:void(0);",1,"text-danger","fw-semibold","me-2","d-inline-block"],["href","javascript:void(0);",1,"text-secondary","fw-semibold"],[1,"alert","alert-warning","border","border-warning","mb-0","p-2"],[1,"me-2","svg-warning"],["xmlns","http://www.w3.org/2000/svg","enable-background","new 0 0 24 24","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-warning"],["fill","none","height","24","width","24"],["d","M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"],["points","13,16 11,16 11,18 13,18"],["points","13,10 11,10 11,15 13,15"],[1,"text-warning","w-100"],["href","javascript:void(0);",1,"text-dark","fw-semibold","me-2","d-inline-block"],["href","javascript:void(0);",1,"text-warning","fw-semibold"],[1,"alert","alert-danger","border","border-danger","mb-0","p-2"],[1,"me-2","svg-danger"],["xmlns","http://www.w3.org/2000/svg","enable-background","new 0 0 24 24","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-danger"],["d","M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"],["height","6","width","2","x","11","y","7"],["height","2","width","2","x","11","y","15"],[1,"text-danger","w-100"],["href","javascript:void(0);",1,"text-info","fw-semibold","me-2","d-inline-block"],["href","javascript:void(0);",1,"text-danger","fw-semibold"],[1,"alert","alert-solid-primary","border","border-primary","mb-0","p-2"],[1,"me-2","svg-white"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-white"],[1,"text-fixed-white","w-100"],["href","javascript:void(0);",1,"text-fixed-white","fw-semibold","me-2","op-7"],["href","javascript:void(0);",1,"text-fixed-white","fw-semibold"],[1,"alert","alert-solid-secondary","border","border-secondary","mb-0","p-2"],["href","javascript:void(0);",1,"text-fixed-white","fw-semibold","me-2"],[1,"alert","alert-solid-warning","border","border-warning","mb-0","p-2"],["xmlns","http://www.w3.org/2000/svg","enable-background","new 0 0 24 24","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-white"],[1,"alert","alert-solid-danger","border","border-danger","mb-0","p-2"],[1,"col-xxl-3","col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],[1,"card",3,"ngbCollapseChange","ngbCollapse"],[1,"alert","custom-alert1","alert-primary"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close","ms-auto",3,"click"],[1,"text-center","px-5","pb-0","svg-primary"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"custom-alert-icon","svg-primary"],["d","M0 0h24v24H0z","fill","none"],["d","M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"],[1,""],[1,"btn","btn-sm","btn-outline-danger","m-1"],[1,"btn","btn-sm","btn-primary","m-1"],[1,"alert","custom-alert1","alert-secondary"],[1,"text-center","px-5","pb-0","svg-secondary"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"custom-alert-icon","svg-secondary"],["d","M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"],[1,"btn","btn-sm","btn-secondary","m-1"],[1,"alert","custom-alert1","alert-warning"],[1,"text-center","px-5","pb-0","svg-warning"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"custom-alert-icon","svg-warning"],["d","M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"],[1,"btn","btn-sm","btn-outline-secondary","m-1"],[1,"btn","btn-sm","btn-warning","m-1"],[1,"alert","custom-alert1","alert-danger"],[1,"text-center","px-5","pb-0","svg-danger"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"custom-alert-icon","svg-danger"],["d","M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"],[1,"btn","btn-sm","btn-danger","m-1"],["role","alert","aria-live","polite",1,"alert","alert-success","alert-dismissible","mb-2"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[3,"close","variant","title","isDismissible"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close",3,"close"],[3,"variant","title"],["linkText","an example link","linkHref","javascript:void(0)",3,"close","variant","title","isDismissible"],[3,"close","variant","isDismissible"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close","custom-close",3,"close"],[3,"innerHTML"],[1,"avatar","avatar-sm","me-3","avatar-rounded"],["alt","img",3,"src"],[1,"bi","bi-x",3,"ngClass"],[1,"aletr-heading","mb-0","text-fixed-white"],[1,"my-0"],[1,"p-3"],[1,"mb-0"],["href","javascript:void(0);",1,"fw-medium","text-decoration-underline"]],template:function(i,t){i&1&&(e(0,"div",0)(1,"div",1)(2,"app-showcode-card",2)(3,"ngb-alert",3)(4,"strong"),o(5,"Holy guacamole!"),a(),o(6," You should check in on some of those fields below. "),e(7,"button",4),m(8,"i",5),a()()()(),e(9,"div",1)(10,"app-showcode-card",6)(11,"div",7),q(12,$e,4,1,"div",8),a(),e(13,"button",9),p("click",function(){return t.showAlert()}),o(14," Show live alert "),a()()(),e(15,"div",1)(16,"app-showcode-card",10),v(17,Ge,5,4,"div",11,y),a()(),e(19,"div",1)(20,"app-showcode-card",12),v(21,Pe,3,3,"div",11,y),a()(),e(23,"div",1)(24,"app-showcode-card",10)(25,"div",13),v(26,Oe,5,4,"div",14,y),a()()(),e(28,"div",1)(29,"app-showcode-card",12),v(30,qe,5,4,"div",14,y),a()(),e(32,"div",1)(33,"app-showcode-card",12),v(34,Ne,2,3,"div",14,y),a()(),e(36,"div",1)(37,"app-showcode-card",10),v(38,Qe,2,3,"div",11,y),a()(),e(40,"div",1)(41,"app-showcode-card",10),v(42,Ue,5,4,"div",14,y),a()(),e(44,"div",1)(45,"app-showcode-card",10),v(46,Ye,5,4,"div",14,y),a()(),e(48,"div",1)(49,"app-showcode-card",10),v(50,Je,2,3,"div",11,y),a()(),e(52,"div",1)(53,"app-showcode-card",15),v(54,Ke,4,3,"spk-alerts",16,y),a()(),e(56,"div",1)(57,"app-showcode-card",17),v(58,Xe,5,4,"spk-alerts",16,y),a()(),e(60,"div",1)(61,"app-showcode-card",18),v(62,Ze,3,3,"spk-alerts",19,y),a()(),e(64,"div",1)(65,"app-showcode-card",20),v(66,et,6,5,"spk-alerts",16,I),a()(),e(68,"div",1)(69,"app-showcode-card",18),v(70,tt,6,8,"spk-alerts",16,I),a()(),e(72,"div",21)(73,"app-showcode-card",2)(74,"div",22),v(75,it,13,9,"div",1,y),a()()(),e(77,"div",21)(78,"div",0)(79,"div",23)(80,"div",24),S("ngbCollapseChange",function(l){return k(t.isClosed5,l)||(t.isClosed5=l),l}),e(81,"div",25)(82,"div",26)(83,"div",27),C(),e(84,"svg",28),m(85,"path",29)(86,"path",30),a()(),_(),e(87,"div",31)(88,"div",32),o(89," Information Alert"),e(90,"button",33),p("click",function(){return t.Closetoggle("five")}),m(91,"i",5),a()(),e(92,"div",34),o(93," Information alert to show to information "),a(),e(94,"div",35)(95,"a",36),o(96,"cancel"),a(),e(97,"a",37),o(98,"open"),a()()()()()()(),e(99,"div",23)(100,"div",24),S("ngbCollapseChange",function(l){return k(t.isClosed6,l)||(t.isClosed6=l),l}),e(101,"div",38)(102,"div",26)(103,"div",39),C(),e(104,"svg",40),m(105,"path",41)(106,"path",42),a()(),_(),e(107,"div",43)(108,"div",32),o(109," Success Alert"),e(110,"button",33),p("click",function(){return t.Closetoggle("six")}),m(111,"i",5),a()(),e(112,"div",34),o(113," Success alert to show to success message "),a(),e(114,"div",35)(115,"a",44),o(116,"cancel"),a(),e(117,"a",45),o(118,"open"),a()()()()()()(),e(119,"div",23)(120,"div",24),S("ngbCollapseChange",function(l){return k(t.isClosed7,l)||(t.isClosed7=l),l}),e(121,"div",46)(122,"div",26)(123,"div",47),C(),e(124,"svg",48)(125,"g"),m(126,"rect",49),a(),e(127,"g")(128,"g")(129,"g"),m(130,"path",50)(131,"polygon",51)(132,"polygon",52),a()()()()(),_(),e(133,"div",53)(134,"div",32),o(135," Warning Alert"),e(136,"button",33),p("click",function(){return t.Closetoggle("seven")}),m(137,"i",5),a()(),e(138,"div",34),o(139," Warning alert to show warning message "),a(),e(140,"div",35)(141,"a",54),o(142,"cancel"),a(),e(143,"a",55),o(144,"open"),a()()()()()()(),e(145,"div",23)(146,"div",24),S("ngbCollapseChange",function(l){return k(t.isClosed8,l)||(t.isClosed8=l),l}),e(147,"div",56)(148,"div",26)(149,"div",57),C(),e(150,"svg",58)(151,"g"),m(152,"rect",49),a(),e(153,"g")(154,"g")(155,"g"),m(156,"path",59)(157,"rect",60)(158,"rect",61),a()()()()(),_(),e(159,"div",62)(160,"div",32),o(161," Danger Alert"),e(162,"button",33),p("click",function(){return t.Closetoggle("eight")}),m(163,"i",5),a()(),e(164,"div",34),o(165," Danger alert to show the danger message "),a(),e(166,"div",35)(167,"a",63),o(168,"cancel"),a(),e(169,"a",64),o(170,"open"),a()()()()()()()()(),e(171,"div",21)(172,"div",0)(173,"div",23)(174,"div",24),S("ngbCollapseChange",function(l){return k(t.isClosed9,l)||(t.isClosed9=l),l}),e(175,"div",65)(176,"div",26)(177,"div",66),C(),e(178,"svg",67),m(179,"path",29)(180,"path",30),a()(),_(),e(181,"div",68)(182,"div",32),o(183," Information Alert"),e(184,"button",33),p("click",function(){return t.Closetoggle("nine")}),m(185,"i",5),a()(),e(186,"div",34),o(187," Information alert to show to information "),a(),e(188,"div",35)(189,"a",69),o(190,"cancel"),a(),e(191,"a",70),o(192,"open"),a()()()()()()(),e(193,"div",23)(194,"div",24),S("ngbCollapseChange",function(l){return k(t.isClosed10,l)||(t.isClosed10=l),l}),e(195,"div",71)(196,"div",26)(197,"div",66),C(),e(198,"svg",67),m(199,"path",41)(200,"path",42),a()(),_(),e(201,"div",68)(202,"div",32),o(203," Success Alert"),e(204,"button",33),p("click",function(){return t.Closetoggle("ten")}),m(205,"i",5),a()(),e(206,"div",34),o(207," Success alert to show to success message "),a(),e(208,"div",35)(209,"a",72),o(210,"close"),a()()()()()()(),e(211,"div",23)(212,"div",24),S("ngbCollapseChange",function(l){return k(t.isClosed11,l)||(t.isClosed11=l),l}),e(213,"div",73)(214,"div",26)(215,"div",66),C(),e(216,"svg",74)(217,"g"),m(218,"rect",49),a(),e(219,"g")(220,"g")(221,"g"),m(222,"path",50)(223,"polygon",51)(224,"polygon",52),a()()()()(),_(),e(225,"div",68)(226,"div",32),o(227," Warning Alert"),e(228,"button",33),p("click",function(){return t.Closetoggle("eleven")}),m(229,"i",5),a()(),e(230,"div",34),o(231," Warning alert to show to warning message "),a(),e(232,"div",35)(233,"a",69),o(234,"skip"),a(),e(235,"a",70),o(236,"open"),a()()()()()()(),e(237,"div",23)(238,"div",24),S("ngbCollapseChange",function(l){return k(t.isClosed12,l)||(t.isClosed12=l),l}),e(239,"div",75)(240,"div",26)(241,"div",66),C(),e(242,"svg",74)(243,"g"),m(244,"rect",49),a(),e(245,"g")(246,"g")(247,"g"),m(248,"path",59)(249,"rect",60)(250,"rect",61),a()()()()(),_(),e(251,"div",68)(252,"div",32),o(253," Danger Alert"),e(254,"button",33),p("click",function(){return t.Closetoggle("twelve")}),m(255,"i",5),a()(),e(256,"div",34),o(257," Danger alert to show to danger message "),a(),e(258,"div",35)(259,"a",69),o(260,"close"),a(),e(261,"a",70),o(262,"continue"),a()()()()()()()()(),e(263,"div",21)(264,"div",0)(265,"div",76)(266,"div",77),S("ngbCollapseChange",function(l){return k(t.isClosed1,l)||(t.isClosed1=l),l}),e(267,"div",78)(268,"button",79),p("click",function(){return t.Closetoggle("one")}),m(269,"i",5),a(),e(270,"div",80),C(),e(271,"svg",81),m(272,"path",82)(273,"path",83),a(),_(),e(274,"h5"),o(275,"Information?"),a(),e(276,"p",84),o(277," This alert is created to just show the related information. "),a(),e(278,"div",84)(279,"button",85),o(280," Decline "),a(),e(281,"button",86),o(282,"Accept"),a()()()()()(),e(283,"div",76)(284,"div",77),S("ngbCollapseChange",function(l){return k(t.isClosed2,l)||(t.isClosed2=l),l}),e(285,"div",87)(286,"button",79),p("click",function(){return t.Closetoggle("two")}),m(287,"i",5),a(),e(288,"div",88),C(),e(289,"svg",89),m(290,"path",82)(291,"path",90),a(),_(),e(292,"h5"),o(293,"Confirmed"),a(),e(294,"p",84),o(295," This alert is created to just show the confirmation message. "),a(),e(296,"div",84)(297,"button",91),o(298,"Close"),a()()()()()(),e(299,"div",76)(300,"div",77),S("ngbCollapseChange",function(l){return k(t.isClosed3,l)||(t.isClosed3=l),l}),e(301,"div",92)(302,"button",79),p("click",function(){return t.Closetoggle("three")}),m(303,"i",5),a(),e(304,"div",93),C(),e(305,"svg",94),m(306,"path",82)(307,"path",95),a(),_(),e(308,"h5"),o(309,"Warning"),a(),e(310,"p",84),o(311," This alert is created to just show the warning message. "),a(),e(312,"div",84)(313,"button",96),o(314," Back "),a(),e(315,"button",97),o(316,"Continue"),a()()()()()(),e(317,"div",76)(318,"div",77),S("ngbCollapseChange",function(l){return k(t.isClosed4,l)||(t.isClosed4=l),l}),e(319,"div",98)(320,"button",79),p("click",function(){return t.Closetoggle("four")}),m(321,"i",5),a(),e(322,"div",99),C(),e(323,"svg",100),m(324,"path",82)(325,"path",101),a(),_(),e(326,"h5"),o(327,"danger"),a(),e(328,"p",84),o(329," This alert is created to just show the danger message. "),a(),e(330,"div",84)(331,"button",102),o(332,"Delete"),a()()()()()()()()()),i&2&&(s(2),c("title","Basic Alert")("prism",t.prsimCodeData.alertTS),s(8),c("title","Live example")("prism",t.prsimCodeData.alertTS1)("tsCode",t.tsCodeData.alertData2),s(2),c("ngForOf",t.livealerts),s(4),c("title","Outline Alerts")("prism",t.prsimCodeData.alertTS2)("tsCode",t.tsCodeData.alertData),s(),w(t.outlineAlerts),s(3),c("title","Default alerts")("prism",t.prsimCodeData.alertTS5),s(),w(t.alertData),s(3),c("title","Solid Alerts With Different Shadows")("prism",t.prsimCodeData.alertTS3)("tsCode",t.tsCodeData.alertData5),s(2),w(t.shadowAlert),s(3),c("title","Default Alerts With Different Shadows")("prism",t.prsimCodeData.alertTS4),s(),w(t.DiffshadowAlert),s(3),c("title","Links in alerts")("prism",t.prsimCodeData.alertTS6),s(),w(t.LinkAlerts),s(3),c("title","Outline Alerts")("prism",t.prsimCodeData.alertTS2)("tsCode",t.tsCodeData.alertData),s(),w(t.outlineAlerts),s(3),c("title","Rounded Solid Alerts")("prism",t.prsimCodeData.alertTS16)("tsCode",t.tsCodeData.alertData3),s(),w(t.solidroundedAlerts),s(3),c("title","Rounded Outline Alerts")("prism",t.prsimCodeData.alertTS8)("tsCode",t.tsCodeData.alertData4),s(),w(t.roundedoutlineAlerts),s(3),c("title","Rounded Default Alerts")("prism",t.prsimCodeData.alertTS9)("tsCode",t.tsCodeData.alertData6),s(),w(t.roundedDefaultAlert),s(3),c("title"," Rounded Alerts With Custom Close Button")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS10)("tsCode",t.tsCodeData.alertData7),s(),w(t.CustomeButtonAlerts),s(3),c("title","  Customized Alerts With SVGs")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS11)("tsCode",t.tsCodeData.alertData8)("classbody",""),s(),w(t.CustomizedButtonAlerts),s(3),c("title","Alerts with icons")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS12),s(),w(t.CustomizedIconAlerts),s(3),c("title"," Alerts With Images")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS13)("classbody","my-2"),s(),w(t.imageAlerts),s(3),c("title","Alerts With Different size Images")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS14),s(),w(t.imageSizeAlerts),s(3),c("title","Additional content")("prism",t.prsimCodeData.alertTS17),s(2),w(t.additionalInfoAlert),s(5),x("ngbCollapse",t.isClosed5),s(10),A("aria-expanded",!t.isClosed5),s(10),x("ngbCollapse",t.isClosed6),s(10),A("aria-expanded",!t.isClosed6),s(10),x("ngbCollapse",t.isClosed7),s(16),A("aria-expanded",!t.isClosed7),s(10),x("ngbCollapse",t.isClosed8),s(16),A("aria-expanded",!t.isClosed8),s(12),x("ngbCollapse",t.isClosed9),s(10),A("aria-expanded",!t.isClosed9),s(10),x("ngbCollapse",t.isClosed10),s(10),A("aria-expanded",!t.isClosed10),s(8),x("ngbCollapse",t.isClosed11),s(16),A("aria-expanded",!t.isClosed11),s(10),x("ngbCollapse",t.isClosed12),s(16),A("aria-expanded",!t.isClosed12),s(12),x("ngbCollapse",t.isClosed1),s(2),A("aria-expanded",!t.isClosed1),s(16),x("ngbCollapse",t.isClosed2),s(2),A("aria-expanded",!t.isClosed2),s(14),x("ngbCollapse",t.isClosed3),s(2),A("aria-expanded",!t.isClosed3),s(16),x("ngbCollapse",t.isClosed4),s(2),A("aria-expanded",!t.isClosed4))},dependencies:[ie,te,V,Z,J,U,Y,L,ae]})};export{re as AlertsComponent};
