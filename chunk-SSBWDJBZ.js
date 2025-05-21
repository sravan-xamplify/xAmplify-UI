import{a as D}from"./chunk-5OSLDMFG.js";import{e as O}from"./chunk-WHMGN2QF.js";import{c as $}from"./chunk-RRQKNU6R.js";import"./chunk-JT5TZCX2.js";import"./chunk-ORXYENZX.js";import"./chunk-ZG2FADVK.js";import{Fa as F,P as T,R,Sa as q,Ta as I,V as L,bb as U,cb as P,ea as N,fa as B}from"./chunk-LYTJFACJ.js";import{Ca as x,Eb as E,Ec as S,Fc as M,Gc as y,Jc as p,Kc as l,Na as n,Oa as d,Pb as f,Sc as V,Ub as C,cd as g,hc as t,ic as e,jc as h,nc as u,wc as r,yb as _,yc as w,zb as k}from"./chunk-7QP7SMW2.js";import"./chunk-2EBTC7QX.js";import{f as X}from"./chunk-66YHNWRR.js";var v={};X(v,{model1:()=>z,model10:()=>de,model11:()=>me,model12:()=>pe,model13:()=>ue,model14:()=>ge,model15:()=>_e,model2:()=>G,model3:()=>j,model4:()=>J,model5:()=>K,model6:()=>ee,model7:()=>le,model8:()=>ae,model9:()=>se,modelts1:()=>H,modelts10:()=>re,modelts11:()=>ce,modelts12:()=>be,modelts2:()=>Q,modelts3:()=>A,modelts4:()=>Y,modelts5:()=>Z,modelts6:()=>te,modelts7:()=>oe,modelts8:()=>ie,modelts9:()=>ne});var z=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="open(content)"
data-bs-target="#exampleModal">
Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <ng-template #content let-c="close" let-d="dismiss">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel1">Modal title</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="d('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="c('Closelick')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,H=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
  openBasic(basicModal: any) {
    this.modalService.open(basicModal);
  }
}`,G=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="open(content1)"
data-bs-target="#staticBackdrop">
Launch static backdrop modal
</button>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <ng-template #content1 let-c="close" let-d="dismiss">
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="d('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>I will not close if you click outside me. Don't even try to
                    press
                    escape key.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="c('Closelick')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,Q=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
 
  StaticBackdrop(staticbackdropModal: any) {
    this.modalService.open(staticbackdropModal);
  }

}`,j=`<button type="button" class="btn btn-primary" data-bs-toggle="modal"
(click)="openScrollableContent(longContent)" data-bs-target="#exampleModalScrollable">
Scrolling long content
</button>
<div class="modal fade" id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollable"
data-bs-keyboard="false" aria-hidden="true">
<div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #longContent let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel1">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Libero
                    ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                    nisi
                    ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    voluptatibus, ipsam quo est rerum modi quos expedita facere,
                    ex
                    tempore fuga similique ipsa blanditiis et accusamus
                    temporibus
                    commodi voluptas! Nobis veniam illo architecto expedita quam
                    ratione quaerat omnis. In, recusandae eos! Pariatur,
                    deleniti
                    quis ad nemo ipsam officia temporibus, doloribus fuga
                    asperiores
                    ratione distinctio velit alias hic modi praesentium aperiam
                    officiis eaque, accusamus aut. Accusantium assumenda,
                    commodi
                    nulla provident asperiores fugit inventore iste amet aut
                    placeat
                    consequatur reprehenderit. Ratione tenetur eligendi, quis
                    aperiam dolores magni iusto distinctio voluptatibus minus a
                    unde
                    at! Consequatur voluptatum in eaque obcaecati, impedit
                    accusantium ea soluta, excepturi, quasi quia commodi
                    blanditiis?
                    Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                    consequuntur quod quo veniam? Labore dignissimos reiciendis
                    accusamus recusandae est consequuntur iure.</p>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="modal-footer">
                <a type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</a>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,A=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
  scrollableContent(ScrollingcontentModal: any) {
    this.modalService.open(ScrollingcontentModal, { scrollable: true });
  }


}`,J=`<button type="button" class="btn btn-primary" data-bs-toggle="modal"
(click)="openVerticallyCentered(Content2)" data-bs-target="#exampleModalScrollable2">
Vertically centered modal
</button>
<div class="modal fade" id="exampleModalScrollable2" tabindex="-1" aria-labelledby="exampleModalScrollable2"
data-bs-keyboard="false" aria-hidden="true">
<!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <ng-template #Content2 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel2">Modal title
                </h6>
                <a type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></a>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Libero
                    ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                    nisi
                    ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
            </div>
            <div class="modal-footer">
                <a type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</a>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,Y=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
 
  VerticalCenter(VerticalCenterModal: any) {
    this.modalService.open(VerticalCenterModal, { centered: true });
  }

}`,K=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="VerticallyScrol(Content3)"
data-bs-target="#exampleModalScrollable3">
Vertically centered scrollable modal
</button>
<div class="modal fade" id="exampleModalScrollable3" tabindex="-1" aria-labelledby="exampleModalScrollable3"
data-bs-keyboard="false" aria-hidden="true">
<!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #Content3 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel3">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    voluptatibus, ipsam quo est rerum modi quos expedita facere,
                    ex
                    tempore fuga similique ipsa blanditiis et accusamus
                    temporibus
                    commodi voluptas! Nobis veniam illo architecto expedita quam
                    ratione quaerat omnis. In, recusandae eos! Pariatur,
                    deleniti
                    quis ad nemo ipsam officia temporibus, doloribus fuga
                    asperiores
                    ratione distinctio velit alias hic modi praesentium aperiam
                    officiis eaque, accusamus aut. Accusantium assumenda,
                    commodi
                    nulla provident asperiores fugit inventore iste amet aut
                    placeat
                    consequatur reprehenderit. Ratione tenetur eligendi, quis
                    aperiam dolores magni iusto distinctio voluptatibus minus a
                    unde
                    at! Consequatur voluptatum in eaque obcaecati, impedit
                    accusantium ea soluta, excepturi, quasi quia commodi
                    blanditiis?
                    Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                    consequuntur quod quo veniam? Labore dignissimos reiciendis
                    accusamus recusandae est consequuntur iure.</p>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="modal-footer">
                <a type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</a>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,Z=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
 
  VerticalCenterScroll(VerticalCenterScrollModal: any) {
    this.modalService.open(VerticalCenterScrollModal, { scrollable: true });
  }

}`,ee=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="Tooltippopover(Content4)"
data-bs-target="#exampleModalScrollable4">
Launch demo modal
</button>
<div class="modal fade" id="exampleModalScrollable4" tabindex="-1" aria-labelledby="exampleModalScrollable4"
data-bs-keyboard="false" aria-hidden="true">
<!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #Content4 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel4">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h5>Popover in a modal</h5>
                <p>This <a href="javascript:void(0);" role="button" class="btn btn-secondary"
                        data-bs-toggle="popover" popoverTitle="Popover title"
                        ngbPopover="Popover body content is set in this attribute.">button</a>
                    triggers a popover on click.</p>
                <hr>
                <h5>Tooltips in a modal</h5>
                <p><a href="javascript:void(0);" class="text-primary" data-bs-toggle="tooltip"
                        ngbTooltip="Tooltip">This
                        link</a> and <a href="javascript:void(0);" class="text-primary"
                        data-bs-toggle="tooltip" ngbTooltip="Tooltip">that link</a> have tooltips on
                    hover.
                </p>
            </div>
            <div class="modal-footer">
                <a type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</a>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,te=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
  TooltipPopovers(TooltipPopoversModal: any) {
    this.modalService.open(TooltipPopoversModal, { centered: true });
  }
}`,le=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="UsingGrid(Content5)"
data-bs-target="#exampleModalScrollable5">
Launch demo modal
</button>
<div class="modal fade" id="exampleModalScrollable5" tabindex="-1" aria-labelledby="exampleModalScrollable5"
data-bs-keyboard="false" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #Content5 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel5">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close">
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4 bg-light border">.col-md-4</div>
                        <div class="col-md-4 ms-auto bg-light border">.col-md-4
                            .ms-auto</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-3 ms-auto bg-light border">.col-md-3
                            .ms-auto</div>
                        <div class="col-md-2 ms-auto bg-light border">.col-md-2
                            .ms-auto</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6 ms-auto bg-light border">.col-md-6
                            .ms-auto</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-9 bg-light border">
                            Level 1: .col-sm-9
                            <div class="row">
                                <div class="col-8 col-sm-6 bg-light border">
                                    Level 2: .col-8 .col-sm-6
                                </div>
                                <div class="col-4 col-sm-6 bg-light border">
                                    Level 2: .col-4 .col-sm-6
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</a>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,oe=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
   
  Gridmodal(GridCenterModal: any) {
    this.modalService.open(GridCenterModal, { centered: true });
  }
}`,ae=`<a class="btn btn-primary" data-bs-toggle="modal" (click)=" ToggleModals(Content6)" role="button">Open
first modal
</a>
<div class="modal fade" id="exampleModalToggle" aria-labelledby="exampleModalToggleLabel" tabindex="-1"
aria-hidden="true" style="display: none;">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <ng-template #Content6 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalToggleLabel">Modal 1
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Show a second modal and hide this one with the button below.
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#exampleModalToggle2"
                    (click)=" ToggleModals2(Content8)" data-bs-toggle="modal">Open second
                    modal</button>
            </div>
        </ng-template>
    </div>
</div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-labelledby="exampleModalToggleLabel2" tabindex="-1"
aria-hidden="true" style="display: none;">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <ng-template #Content8 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalToggleLabel2">Modal 2
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Hide this modal and show the first with the button below.
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#exampleModalToggle"
                    (click)=" ToggleModals(Content6)" data-bs-toggle="modal">Back to first</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,ie=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
   
  private firstModalRef: any;
  private secondModalRef: any;

   openFirstModal(content1: any) {
  // Close the second modal if it's open
  if (this.secondModalRef) {
    this.secondModalRef.close();
  }

  // Open the first modal
  const modalRef = this.modalService.open(content1, this.modalOptions);
  this.firstModalRef = modalRef;

  modalRef.result.then((result: any) => {
    // Handle modal close event if needed
  }).catch((reason: any) => {
    // Handle modal dismiss event if needed
  });
}

openSecondModal(content1: any, content2: any) {
  // Close the first modal if it's open
  if (this.firstModalRef) {
    this.firstModalRef.close();
  }

  const modalRef = this.modalService.open(content2, this.modalOptions);
  this.secondModalRef = modalRef;

  modalRef.result.then((result: any) => {
    // Handle modal close event if needed
  }).catch((reason: any) => {
    // Handle modal dismiss event if needed
  });
}
}`,se=`      <a
(click)="openXl(XlContentModal)"
type="button"
class="btn btn-primary m-1"
data-bs-toggle="modal"
data-bs-target="#exampleModalXl"
>
Extra large modal
</a>
<a
(click)="openLg(LargeModal)"
type="button"
class="btn btn-secondary m-1"
data-bs-toggle="modal"
data-bs-target="#exampleModalLg"
>
Large modal
</a>
<a
(click)="openSm(SmallModal)"
type="button"
class="btn btn-warning m-1"
data-bs-toggle="modal"
data-bs-target="#exampleModalSm"
>
Small modal
</a>
<ng-template #XlContentModal let-modal>
<div class="modal-header">
  <h6 class="modal-title" id="exampleModalXlLabel">
    Extra large modal
  </h6>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    (click)="modal.dismiss('Cross click')"
    aria-label="Close"
  ></button>
</div>
<div class="modal-body">...</div>
</ng-template>
<ng-template #LargeModal let-modal>
<div class="modal-header">
  <h6 class="modal-title" id="exampleModalLgLabel">Large modal</h6>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    (click)="modal.dismiss('Cross click')"
    aria-label="Close"
  ></button>
</div>
<div class="modal-body">...</div>
</ng-template>
<ng-template #SmallModal let-modal>
<div class="modal-header">
  <h6 class="modal-title" id="exampleModalSmLabel">Small modal</h6>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    (click)="modal.dismiss('Cross click')"
    aria-label="Close"
  ></button>
</div>
<div class="modal-body">...</div>
</ng-template>`,ne=`mport { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
  openSm(SmallModal: any) {
    this.modalService.open(SmallModal, { size: 'sm' });
  }
  openXl(XlContentModal: any) {
    this.modalService.open(XlContentModal, { size: 'xl' });
  }
  openLg(LargeModal: any) {
    this.modalService.open(LargeModal, { size: 'lg' });
  }
}`,de=`  <div class="bd-example">
<a type="button" class="btn btn-primary mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreen"  (click)="openFullscreen(FullscreenModal)">Full screen</a>
<a type="button" class="btn btn-secondary mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenSm" (click)="BelowSm(BelowSmModal)">Full screen below
    sm</a>
<a type="button" class="btn btn-warning mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenMd"  (click)="BelowMd(BelowMdModal)">Full screen below
    md</a>
<a type="button" class="btn btn-info mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenLg"  (click)="BelowLg(BelowLgModal)">Full screen below
    lg</a>
<a type="button" class="btn btn-success mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenXl" (click)="BelowXl(BelowXlModal)">Full screen below
    xl</a>
<a type="button" class="btn btn-danger mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenXxl" (click)="BelowXxl(BelowXxlModal)">Full screen below
    xxl</a>
</div>
<ng-template #FullscreenModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenLabel">
  Full screen modal
</h6>
<button
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  (click)="modal.dismiss('Cross click')"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
  (click)="modal.close('Save click')"
>
  Close
</button>
</div>
</ng-template>
<ng-template #BelowSmModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenSmLabel">
  Full screen below sm
</h6>
<button
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
  (click)="modal.dismiss('Cross click')"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
  (click)="modal.close('Save click')"
>
  Close
</button>
</div>
</ng-template>
<ng-template #BelowMdModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenMdLabel">
  Full screen below md
</h6>
<button
  (click)="modal.dismiss('Cross click')"
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
  (click)="modal.close('Save click')"
>
  Close
</button>
</div>
</ng-template>
<ng-template #BelowLgModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenLgLabel">
  Full screen below lg
</h6>
<button
  (click)="modal.dismiss('Cross click')"
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  (click)="modal.close('Save click')"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
>
  Close
</button>
</div>
</ng-template>
<ng-template #BelowXlModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenXlLabel">
  Full screen below xl
</h6>
<button
  (click)="modal.dismiss('Cross click')"
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  (click)="modal.close('Save click')"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
>
  Close
</button>
</div>
</ng-template>
<ng-template #BelowXxlModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenXxlLabel">
  Full screen below xxl
</h6>
<button
  (click)="modal.dismiss('Cross click')"
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  (click)="modal.close('Save click')"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
>
  Close
</button>
</div>
</ng-template>`,re=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
   
  openFullscreen(FullscreenModal: any) {
    this.modalService.open(FullscreenModal, { fullscreen: true });
  }
  BelowSm(BelowSmModal: any) {
    this.modalService.open(BelowSmModal);
  }
  BelowMd(BelowMdModal: any) {
    this.modalService.open(BelowMdModal);
  }
  BelowLg(BelowLgModal: any) {
    this.modalService.open(BelowLgModal);
  }
  BelowXl(BelowXlModal: any) {
    this.modalService.open(BelowXlModal);
  }
  BelowXxl(BelowXxlModal: any) {
    this.modalService.open(BelowXxlModal);
  }
}`,me=`<button type="button" class="btn btn-primary mb-1 me-1" data-bs-toggle="modal" (click)="openMdo(Content17)"
data-bs-target="#formmodal" data-bs-whatever="@mdo">Open modal for
mdo</button>
<button type="button" class="btn btn-secondary mb-1 me-1" data-bs-toggle="modal"
(click)="openFat(Content18)" data-bs-target="#formmodal" data-bs-whatever="@fat">Open modal for
fat</button>
<button type="button" class="btn btn-light mb-1 me-1" data-bs-toggle="modal"
(click)="opengetbootstrap(Content19)" data-bs-target="#formmodal" data-bs-whatever="@getbootstrap">Open
modal for
getbootstrap</button>
<div class="modal fade" id="formmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <ng-template #Content17 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel">New message to mdo</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name" value="@mdo">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <a type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</a>
                <button type="button" class="btn btn-primary">Send
                    message</button>
            </div>
        </div>
    </ng-template>
</div>
</div>
<div class="modal fade" id="formmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <ng-template #Content18 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel">New message to &#64;fat</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name" value="@fat">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <a type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</a>
                <button type="button" class="btn btn-primary">Send
                    message</button>
            </div>
        </div>
    </ng-template>
</div>
</div>
<div class="modal fade" id="formmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <ng-template #Content19 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel">New message to &#64;getbootstrap</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name"
                            value="@getbootstrap">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <a type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</a>
                <button type="button" class="btn btn-primary">Send
                    message</button>
            </div>
        </div>
    </ng-template>
</div>
</div>`,ce=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
  Openmdo(OpenmdoModal: any) {
    this.modalService.open(OpenmdoModal);
  }
  Openfat(OpenfatModal: any) {
    this.modalService.open(OpenfatModal);
  }
  Opengetbootstrap(OpengetbootstrapModal: any) {
    this.modalService.open(OpengetbootstrapModal);
  }

 
}`,pe=`<div class="row ">
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-scale"
        data-bs-toggle="modal" (click)="openScale(scale)">Scale</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-slide-in-right"
        data-bs-toggle="modal" (click)="openSlideRight(right)">Slide In Right</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-slide-in-bottom"
        data-bs-toggle="modal" (click)="openSlideBottom(bottom)">Slide In Bottom</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-newspaper"
        data-bs-toggle="modal" (click)="openNewspaper(newspaper)">News paper</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-fall"
        data-bs-toggle="modal" (click)="openFall(fall)">Fall</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-flip-horizontal"
        data-bs-toggle="modal" (click)="openFlipHorizontal(flip)">Flip Horizontal</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-flip-vertical"
        data-bs-toggle="modal" (click)="openFlipVertical(flipV)">Flip Vertical</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-super-scaled"
        data-bs-toggle="modal" (click)="openSuperScaled(super)">Super Scaled</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-sign"
        data-bs-toggle="modal" (click)="openSign(sign)">Sign</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-rotate-bottom"
        data-bs-toggle="modal" (click)="openRotateBottom(bottom)">Rotate Bottom</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-rotate-left"
        data-bs-toggle="modal" (click)="openRotateLeft(left)">Rotate Left</a>
</div>
</div>
<div class="modal fade" id="modaldemo8">
<div class="modal-dialog modal-dialog-centered text-center" role="document">
    <div class="modal-content modal-content-demo">
        <ng-template #scale let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <a class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</a>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #right let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <a class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</a>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #bottom let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <a class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</a>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #newspaper let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <a class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</a>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #fall let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <a class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</a>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #flip let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <a class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</a>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #flipV let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><a aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></a>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <a class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</a>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #super let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><a aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></a>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <a class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</a>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #sign let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><a aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></a>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <a class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</a>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #left let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><a aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></a>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <a class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</a>
            </div>
        </ng-template>
    </div>
</div>

</div>`,be=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
   
  openScale(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__zoomIn',
    });
  }

  openSlideRight(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInRight',
    });
  }

  openSlideBottom(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__backInUp',
    });
  }
  openNewspaper(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__rotateIn',
    });
  }
  openFall(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'effect-fall',
    });
  }
  openFlipHorizontal(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__flipInY',
    });
  }
  openFlipVertical(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__flipInX',
    });
  }
  openSuperScaled(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__zoomIn',
    });
  }
  openSign(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__flipInX',
    });
  }
  openRotateBottom(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInUp',
    });
  }
  openRotateLeft(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInLeft',
    });
  }

  openJustMe(justme: any) {
    this.modalService.open(justme, {
      centered: true,
      windowClass: 'dark-modal',
    });
  }

  openright(right: any) {
    this.modalService.open(right, { centered: true });
  }

 
}`,ue=' <button type="button" class="btn-close" aria-label="Close"></button>',ge='<button type="button" class="btn-close" disabled aria-label="Close"></button>',_e=` <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-white" disabled aria-label="Close"></button>

//card-body class = "bg-black"`;var Ce=["modal1"],he=["modal2"];function fe(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",86),l(2,"Modal title"),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88),l(5,"..."),e(),t(6,"div",77)(7,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(8," Close "),e(),t(9,"button",90),l(10,"Save changes"),e()()}}function ve(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",91),l(2,"Modal title"),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"p"),l(6," I will not close if you click outside me. Don't even try to press escape key. "),e()(),t(7,"div",77)(8,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(9," Close "),e(),t(10,"button",90),l(11,"Understood"),e()()}}function ke(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",92),l(2,"Modal title"),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"p"),l(6," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae nisi ipsa maiores fugiat deleniti quis reiciendis veritatis. "),e(),t(7,"p"),l(8," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptatibus, ipsam quo est rerum modi quos expedita facere, ex tempore fuga similique ipsa blanditiis et accusamus temporibus commodi voluptas! Nobis veniam illo architecto expedita quam ratione quaerat omnis. In, recusandae eos! Pariatur, deleniti quis ad nemo ipsam officia temporibus, doloribus fuga asperiores ratione distinctio velit alias hic modi praesentium aperiam officiis eaque, accusamus aut. Accusantium assumenda, commodi nulla provident asperiores fugit inventore iste amet aut placeat consequatur reprehenderit. Ratione tenetur eligendi, quis aperiam dolores magni iusto distinctio voluptatibus minus a unde at! Consequatur voluptatum in eaque obcaecati, impedit accusantium ea soluta, excepturi, quasi quia commodi blanditiis? Qui blanditiis iusto corrupti necessitatibus dolorem fugiat consequuntur quod quo veniam? Labore dignissimos reiciendis accusamus recusandae est consequuntur iure. "),e(),h(9,"br")(10,"br")(11,"br")(12,"br")(13,"br")(14,"br")(15,"br")(16,"br")(17,"br")(18,"br")(19,"br")(20,"br")(21,"br")(22,"br")(23,"br")(24,"br")(25,"br")(26,"br")(27,"br")(28,"br")(29,"br")(30,"br")(31,"br")(32,"br")(33,"br")(34,"br"),t(35,"p"),l(36,"Lorem ipsum dolor sit amet."),e()(),t(37,"div",77)(38,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(39," Close "),e(),t(40,"button",90),l(41,"Save Changes"),e()()}}function we(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",93),l(2,"Modal title"),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"p"),l(6," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae nisi ipsa maiores fugiat deleniti quis reiciendis veritatis. "),e()(),t(7,"div",77)(8,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(9," Close "),e(),t(10,"button",90),l(11,"Save Changes"),e()()}}function Se(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",94),l(2,"Modal title"),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"p"),l(6," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptatibus, ipsam quo est rerum modi quos expedita facere, ex tempore fuga similique ipsa blanditiis et accusamus temporibus commodi voluptas! Nobis veniam illo architecto expedita quam ratione quaerat omnis. In, recusandae eos! Pariatur, deleniti quis ad nemo ipsam officia temporibus, doloribus fuga asperiores ratione distinctio velit alias hic modi praesentium aperiam officiis eaque, accusamus aut. Accusantium assumenda, commodi nulla provident asperiores fugit inventore iste amet aut placeat consequatur reprehenderit. Ratione tenetur eligendi, quis aperiam dolores magni iusto distinctio voluptatibus minus a unde at! Consequatur voluptatum in eaque obcaecati, impedit accusantium ea soluta, excepturi, quasi quia commodi blanditiis? Qui blanditiis iusto corrupti necessitatibus dolorem fugiat consequuntur quod quo veniam? Labore dignissimos reiciendis accusamus recusandae est consequuntur iure. "),e(),h(7,"br")(8,"br")(9,"br")(10,"br")(11,"br")(12,"br")(13,"br")(14,"br")(15,"br")(16,"br")(17,"br"),t(18,"p"),l(19,"Lorem ipsum dolor sit amet."),e()(),t(20,"div",77)(21,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(22," Close "),e(),t(23,"button",90),l(24,"Save Changes"),e()()}}function Me(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",95),l(2,"Modal title"),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"h5"),l(6,"Popover in a modal"),e(),t(7,"p"),l(8," This "),t(9,"a",96),l(10,"button"),e(),l(11," triggers a popover on click. "),e(),h(12,"hr"),t(13,"h5"),l(14,"Tooltips in a modal"),e(),t(15,"p")(16,"a",97),l(17,"This link"),e(),l(18," and "),t(19,"a",97),l(20,"that link"),e(),l(21," have tooltips on hover. "),e()(),t(22,"div",77)(23,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(24," Close "),e(),t(25,"button",90),l(26,"Save Changes"),e()()}}function ye(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",98),l(2,"Modal title"),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"div",99)(6,"div",32)(7,"div",100),l(8,".col-md-4"),e(),t(9,"div",101),l(10," .col-md-4 .ms-auto "),e()(),t(11,"div",102)(12,"div",103),l(13," .col-md-3 .ms-auto "),e(),t(14,"div",104),l(15," .col-md-2 .ms-auto "),e()(),t(16,"div",102)(17,"div",105),l(18," .col-md-6 .ms-auto "),e()(),t(19,"div",102)(20,"div",106),l(21," Level 1: .col-sm-9 "),t(22,"div",32)(23,"div",107),l(24," Level 2: .col-8 .col-sm-6 "),e(),t(25,"div",108),l(26," Level 2: .col-4 .col-sm-6 "),e()()()()()(),t(27,"div",77)(28,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(29," Close "),e(),t(30,"button",90),l(31,"Save Changes"),e()()}}function xe(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",73),l(2,"Modal 1"),e(),t(3,"a",109),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88),l(5," Show a second modal and hide this one with the button below. "),e(),t(6,"div",77)(7,"button",110),r("click",function(){n(s);let o=w(),b=p(48),c=p(50);return d(o.openSecondModal(b,c))}),l(8," Open second modal "),e()()}}function Ee(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",73),l(2,"Modal 2"),e(),t(3,"a",109),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88),l(5," Hide this modal and show the first with the button below. "),e(),t(6,"div",77)(7,"button",110),r("click",function(){n(s);let o=w(),b=p(48);return d(o.openFirstModal(b))}),l(8," Back to first "),e()()}}function Ve(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",111),l(2," Extra large modal "),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88),l(5,"..."),e()}}function Te(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",112),l(2,"Large modal"),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88),l(5,"..."),e()}}function Re(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",113),l(2,"Small modal"),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88),l(5,"..."),e()}}function Le(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",114),l(2," Full screen modal "),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88),l(5,"..."),e(),t(6,"div",77)(7,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(8," Close "),e()()}}function Ne(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",115),l(2," Full screen below sm "),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88),l(5,"..."),e(),t(6,"div",77)(7,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(8," Close "),e()()}}function Be(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",116),l(2," Full screen below md "),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88),l(5,"..."),e(),t(6,"div",77)(7,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(8," Close "),e()()}}function Fe(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",117),l(2," Full screen below lg "),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88),l(5,"..."),e(),t(6,"div",77)(7,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(8," Close "),e()()}}function qe(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",118),l(2," Full screen below xl "),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88),l(5,"..."),e(),t(6,"div",77)(7,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(8," Close "),e()()}}function Ie(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",119),l(2," Full screen below xxl "),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88),l(5,"..."),e(),t(6,"div",77)(7,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(8," Close "),e()()}}function Ue(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",120),l(2," New Message to @mdo "),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"form")(6,"div",80)(7,"label",121),l(8,"Recipient:"),e(),h(9,"input",122),e(),t(10,"div",80)(11,"label",123),l(12,"Message:"),e(),h(13,"textarea",124),e()()(),t(14,"div",77)(15,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(16," Close "),e(),t(17,"button",90),l(18,"Send message"),e()()}}function Pe(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",120),l(2," New Message to @fat "),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"form")(6,"div",80)(7,"label",121),l(8,"Recipient:"),e(),h(9,"input",125),e(),t(10,"div",80)(11,"label",123),l(12,"Message:"),e(),h(13,"textarea",124),e()()(),t(14,"div",77)(15,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(16," Close "),e(),t(17,"button",90),l(18,"Send message"),e()()}}function $e(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",120),l(2," New Message to @getbootstrap "),e(),t(3,"a",87),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"form")(6,"div",80)(7,"label",121),l(8,"Recipient:"),e(),h(9,"input",126),e(),t(10,"div",80)(11,"label",123),l(12,"Message:"),e(),h(13,"textarea",124),e()()(),t(14,"div",77)(15,"a",89),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(16," Close "),e(),t(17,"button",90),l(18,"Send message"),e()()}}function Oe(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",73),l(2,"Message Preview"),e(),t(3,"a",127),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",76),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",77)(10,"button",128),l(11,"Save changes"),e(),t(12,"a",129),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(13," Close "),e()()}}function De(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",73),l(2,"Message Preview"),e(),t(3,"a",127),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",76),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",77)(10,"button",128),l(11,"Save changes"),e(),t(12,"a",129),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(13," Close "),e()()}}function We(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",73),l(2,"Message Preview"),e(),t(3,"a",127),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",76),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",77)(10,"button",128),l(11,"Save changes"),e(),t(12,"a",129),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(13," Close "),e()()}}function Xe(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",73),l(2,"Message Preview"),e(),t(3,"a",127),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",76),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",77)(10,"button",128),l(11,"Save changes"),e(),t(12,"a",129),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(13," Close "),e()()}}function ze(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",73),l(2,"Message Preview"),e(),t(3,"a",127),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",76),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",77)(10,"button",128),l(11,"Save changes"),e(),t(12,"a",129),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(13," Close "),e()()}}function He(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",73),l(2,"Message Preview"),e(),t(3,"a",127),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",76),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",77)(10,"button",128),l(11,"Save changes"),e(),t(12,"a",129),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(13," Close "),e()()}}function Ge(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",73),l(2,"Message Preview"),e(),t(3,"a",127),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",76),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",77)(10,"button",128),l(11,"Save changes"),e(),t(12,"a",129),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(13," Close "),e()()}}function Qe(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",73),l(2,"Message Preview"),e(),t(3,"a",127),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",76),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",77)(10,"button",128),l(11,"Save changes"),e(),t(12,"a",129),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(13," Close "),e()()}}function je(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",73),l(2,"Message Preview"),e(),t(3,"a",127),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",76),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",77)(10,"button",128),l(11,"Save changes"),e(),t(12,"a",129),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(13," Close "),e()()}}function Ae(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",73),l(2,"Message Preview"),e(),t(3,"a",127),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",76),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",77)(10,"button",128),l(11,"Save changes"),e(),t(12,"a",129),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(13," Close "),e()()}}function Je(m,i){if(m&1){let s=u();t(0,"div",72)(1,"h6",130),l(2,"Message Preview"),e(),t(3,"a",127),r("click",function(){let o=n(s).$implicit;return d(o.dismiss("Cross click"))}),e()(),t(4,"div",88)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",76),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",77)(10,"button",128),l(11,"Save changes"),e(),t(12,"a",129),r("click",function(){let o=n(s).$implicit;return d(o.close("Save click"))}),l(13," Close "),e()()}}var W=class m{constructor(i,s){this.modalService=i;this.renderer=s}prismCode=v;tsCodedata=v;modal1;modal2;ngOnInit(){}openScale(i){this.modalService.open(i,{centered:!0,windowClass:"animate__animated animate__zoomIn"})}openSlideRight(i){this.modalService.open(i,{centered:!0,windowClass:"animate__animated animate__slideInRight"})}openSlideBottom(i){this.modalService.open(i,{centered:!0,windowClass:"animate__animated animate__backInUp"})}openNewspaper(i){this.modalService.open(i,{centered:!0,windowClass:"animate__animated animate__rotateIn"})}openFall(i){this.modalService.open(i,{centered:!0,windowClass:"effect-fall"})}openFlipHorizontal(i){this.modalService.open(i,{centered:!0,windowClass:"animate__animated animate__flipInY"})}openFlipVertical(i){this.modalService.open(i,{centered:!0,windowClass:"animate__animated animate__flipInX"})}openSuperScaled(i){this.modalService.open(i,{centered:!0,windowClass:"animate__animated animate__zoomIn"})}openSign(i){this.modalService.open(i,{centered:!0,windowClass:"animate__animated animate__flipInX"})}openRotateBottom(i){this.modalService.open(i,{centered:!0,windowClass:"animate__animated animate__slideInUp"})}openRotateLeft(i){this.modalService.open(i,{centered:!0,windowClass:"animate__animated animate__slideInLeft"})}openJustMe(i){this.modalService.open(i,{centered:!0,windowClass:"dark-modal"})}openright(i){this.modalService.open(i,{centered:!0})}openBasic(i){this.modalService.open(i)}StaticBackdrop(i){this.modalService.open(i)}VerticalCenter(i){this.modalService.open(i,{centered:!0})}GridOpen(i){this.modalService.open(i,{size:"lg"})}SuccessOpen(i){this.modalService.open(i,{centered:!0})}WarningOpen(i){this.modalService.open(i,{centered:!0})}Select2Open(i){this.modalService.open(i,{size:"sm"})}openScrollable(i){this.modalService.open(i,{scrollable:!0})}scrollableContent(i){this.modalService.open(i,{scrollable:!0})}VerticalCenterScroll(i){this.modalService.open(i,{scrollable:!0})}TooltipPopovers(i){this.modalService.open(i,{centered:!0})}Gridmodal(i){this.modalService.open(i,{centered:!0})}togglemodal(i){this.modalService.open(i,{centered:!0})}togglemodal2(i){this.modalService.open(i,{centered:!0})}openSm(i){this.modalService.open(i,{size:"sm"})}openXl(i){this.modalService.open(i,{size:"xl"})}openLg(i){this.modalService.open(i,{size:"lg"})}openFullscreen(i){this.modalService.open(i,{fullscreen:!0})}BelowSm(i){this.modalService.open(i)}BelowMd(i){this.modalService.open(i)}BelowLg(i){this.modalService.open(i)}BelowXl(i){this.modalService.open(i)}BelowXxl(i){this.modalService.open(i)}Openmdo(i){this.modalService.open(i)}Openfat(i){this.modalService.open(i)}Opengetbootstrap(i){this.modalService.open(i)}modalOptions={centered:!0};firstModalRef;secondModalRef;openFirstModal(i){this.secondModalRef&&this.secondModalRef.close();let s=this.modalService.open(i,this.modalOptions);this.firstModalRef=s,s.result.then(a=>{}).catch(a=>{})}openSecondModal(i,s){this.firstModalRef&&this.firstModalRef.close();let a=this.modalService.open(s,this.modalOptions);this.secondModalRef=a,a.result.then(o=>{}).catch(o=>{})}static \u0275fac=function(s){return new(s||m)(k(F),k(E))};static \u0275cmp=x({type:m,selectors:[["app-modals-closes"]],viewQuery:function(s,a){if(s&1&&(S(Ce,5),S(he,5)),s&2){let o;M(o=y())&&(a.modal1=o.first),M(o=y())&&(a.modal2=o.first)}},standalone:!0,features:[V],decls:197,vars:42,consts:[["basicModal",""],["staticbackdropModal",""],["ScrollingcontentModal",""],["VerticalCenterModal",""],["VerticalCenterScrollModal",""],["TooltipPopoversModal",""],["GridCenterModal",""],["content1",""],["content2",""],["XlContentModal",""],["LargeModal",""],["SmallModal",""],["FullscreenModal",""],["BelowSmModal",""],["BelowMdModal",""],["BelowLgModal",""],["BelowXlModal",""],["BelowXxlModal",""],["OpenmdoModal",""],["OpenfatModal",""],["OpengetbootstrapModal",""],["scale",""],["right",""],["bottom",""],["newspaper",""],["fall",""],["flip",""],["flipV",""],["super",""],["sign",""],["left",""],["justme",""],[1,"row"],[1,"col-xl-6"],[3,"title","prism","tsCode"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModal",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#staticBackdrop",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable2",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable3",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable4",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable5",1,"btn","btn-primary",3,"click"],["data-bs-toggle","modal","role","button",1,"btn","btn-primary",3,"click"],[1,"col-xl-12"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalXl",1,"btn","btn-primary","m-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalLg",1,"btn","btn-secondary","m-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalSm",1,"btn","btn-warning","m-1",3,"click"],[1,"bd-example"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreen",1,"btn","btn-primary","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenSm",1,"btn","btn-secondary","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenMd",1,"btn","btn-warning","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenLg",1,"btn","btn-info","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenXl",1,"btn","btn-success","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenXxl",1,"btn","btn-danger","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#formmodal","data-bs-whatever","@mdo",1,"btn","btn-primary","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#formmodal","data-bs-whatever","@fat",1,"btn","btn-secondary","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#formmodal","data-bs-whatever","@getbootstrap",1,"btn","btn-light","mb-1","me-1",3,"click"],[1,"col-sm-6","col-md-4","col-xl-3"],["data-bs-effect","effect-scale","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-slide-in-right","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-slide-in-bottom","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-newspaper","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-fall","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-flip-horizontal","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-flip-vertical","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-super-scaled","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-sign","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-rotate-bottom","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-rotate-left","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["id","modaldemo8",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered","text-center"],[1,"modal-content","modal-content-demo"],[1,"modal-header"],[1,"modal-title"],["aria-label","Close","data-bs-dismiss","modal",1,"btn-close"],[1,"modal-body","text-start"],[1,"text-muted","mb-0"],[1,"modal-footer"],[1,"btn","btn-primary"],["data-bs-dismiss","modal",1,"btn","btn-light"],[1,"mb-3"],[1,"col-xl-4"],[3,"title","prism"],["type","button","aria-label","Close",1,"btn-close"],["classbody","bg-black white-varient-styles",3,"title","prism"],["type","button","aria-label","Close",1,"btn-close","btn-close-white"],["id","exampleModalLabel1",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary"],["id","staticBackdropLabel",1,"modal-title"],["id","staticBackdropLabel1",1,"modal-title"],["id","staticBackdropLabel2",1,"modal-title"],["id","staticBackdropLabel3",1,"modal-title"],["id","staticBackdropLabel4",1,"modal-title"],["role","button","placement","right","popoverTitle","Popover Right","ngbPopover","Popover body content is set in this attribute",1,"btn","btn-secondary"],["ngbTooltip","tooltip","title","Tooltip",1,"text-primary"],["id","staticBackdropLabel5",1,"modal-title"],[1,"container-fluid"],[1,"col-md-4","bg-light","border"],[1,"col-md-4","ms-auto","bg-light","border"],[1,"row","mt-3"],[1,"col-md-3","ms-auto","bg-light","border"],[1,"col-md-2","ms-auto","bg-light","border"],[1,"col-md-6","ms-auto","bg-light","border"],[1,"col-sm-9","bg-light","border"],[1,"col-8","col-sm-6","bg-light","border"],[1,"col-4","col-sm-6","bg-light","border"],["type","button",1,"btn-close",3,"click"],[1,"btn","btn-primary",3,"click"],["id","exampleModalXlLabel",1,"modal-title"],["id","exampleModalLgLabel",1,"modal-title"],["id","exampleModalSmLabel",1,"modal-title"],["id","exampleModalFullscreenLabel",1,"modal-title"],["id","exampleModalFullscreenSmLabel",1,"modal-title"],["id","exampleModalFullscreenMdLabel",1,"modal-title"],["id","exampleModalFullscreenLgLabel",1,"modal-title"],["id","exampleModalFullscreenXlLabel",1,"modal-title"],["id","exampleModalFullscreenXxlLabel",1,"modal-title"],["id","exampleModalLabel",1,"modal-title"],["for","recipient-name",1,"col-form-label"],["value","@mdo","type","text","id","recipient-name",1,"form-control"],["for","message-text",1,"col-form-label"],["id","message-text",1,"form-control"],["value","@fat","type","text","id","recipient-name",1,"form-control"],["value","@getbootstrap","type","text","id","recipient-name",1,"form-control"],["type","button","aria-label","Close",1,"btn-close",3,"click"],["type","button",1,"btn","ripple","btn-primary"],["type","button",1,"btn","ripple","btn-secondary",3,"click"],[1,"fs-6"]],template:function(s,a){if(s&1){let o=u();t(0,"div",32)(1,"div",33)(2,"app-showcode-card",34)(3,"button",35),r("click",function(){n(o);let c=p(6);return d(a.openBasic(c))}),l(4," Launch demo modal "),e(),f(5,fe,11,0,"ng-template",null,0,g),e()(),t(7,"div",33)(8,"app-showcode-card",34)(9,"button",36),r("click",function(){n(o);let c=p(12);return d(a.StaticBackdrop(c))}),l(10," Launch static backdrop modal "),e(),f(11,ve,12,0,"ng-template",null,1,g),e()(),t(13,"div",33)(14,"app-showcode-card",34)(15,"button",37),r("click",function(){n(o);let c=p(18);return d(a.scrollableContent(c))}),l(16," Scrolling long content "),e(),f(17,ke,42,0,"ng-template",null,2,g),e()(),t(19,"div",33)(20,"app-showcode-card",34)(21,"button",38),r("click",function(){n(o);let c=p(24);return d(a.VerticalCenter(c))}),l(22," Vertically centered modal "),e(),f(23,we,12,0,"ng-template",null,3,g),e()(),t(25,"div",33)(26,"app-showcode-card",34)(27,"button",39),r("click",function(){n(o);let c=p(30);return d(a.VerticalCenterScroll(c))}),l(28," Vertically centered scrollable modal "),e(),f(29,Se,25,0,"ng-template",null,4,g),e()(),t(31,"div",33)(32,"app-showcode-card",34)(33,"button",40),r("click",function(){n(o);let c=p(36);return d(a.TooltipPopovers(c))}),l(34," Launch demo modal "),e(),f(35,Me,27,0,"ng-template",null,5,g),e()(),t(37,"div",33)(38,"app-showcode-card",34)(39,"button",41),r("click",function(){n(o);let c=p(42);return d(a.Gridmodal(c))}),l(40," Launch demo modal "),e(),f(41,ye,32,0,"ng-template",null,6,g),e()(),t(43,"div",33)(44,"app-showcode-card",34)(45,"a",42),r("click",function(){n(o);let c=p(48);return d(a.openFirstModal(c))}),l(46,"Open first modal "),e(),f(47,xe,9,0,"ng-template",null,7,g)(49,Ee,9,0,"ng-template",null,8,g),e()(),t(51,"div",43)(52,"app-showcode-card",34)(53,"button",44),r("click",function(){n(o);let c=p(60);return d(a.openXl(c))}),l(54," Extra large modal "),e(),t(55,"button",45),r("click",function(){n(o);let c=p(62);return d(a.openLg(c))}),l(56," Large modal "),e(),t(57,"button",46),r("click",function(){n(o);let c=p(64);return d(a.openSm(c))}),l(58," Small modal "),e(),f(59,Ve,6,0,"ng-template",null,9,g)(61,Te,6,0,"ng-template",null,10,g)(63,Re,6,0,"ng-template",null,11,g),e()()(),t(65,"div",32)(66,"div",43)(67,"app-showcode-card",34)(68,"div",47)(69,"button",48),r("click",function(){n(o);let c=p(82);return d(a.openFullscreen(c))}),l(70," Full screen "),e(),t(71,"button",49),r("click",function(){n(o);let c=p(84);return d(a.BelowSm(c))}),l(72," Full screen below sm "),e(),t(73,"button",50),r("click",function(){n(o);let c=p(86);return d(a.BelowMd(c))}),l(74," Full screen below md "),e(),t(75,"button",51),r("click",function(){n(o);let c=p(88);return d(a.BelowLg(c))}),l(76," Full screen below lg "),e(),t(77,"button",52),r("click",function(){n(o);let c=p(90);return d(a.BelowXl(c))}),l(78," Full screen below xl "),e(),t(79,"button",53),r("click",function(){n(o);let c=p(92);return d(a.BelowXxl(c))}),l(80," Full screen below xxl "),e()(),f(81,Le,9,0,"ng-template",null,12,g)(83,Ne,9,0,"ng-template",null,13,g)(85,Be,9,0,"ng-template",null,14,g)(87,Fe,9,0,"ng-template",null,15,g)(89,qe,9,0,"ng-template",null,16,g)(91,Ie,9,0,"ng-template",null,17,g),e()()(),t(93,"div",32)(94,"div",43)(95,"app-showcode-card",34)(96,"button",54),r("click",function(){n(o);let c=p(103);return d(a.Openmdo(c))}),l(97," Open modal for @mdo "),e(),t(98,"button",55),r("click",function(){n(o);let c=p(105);return d(a.Openfat(c))}),l(99," Open modal for @fat "),e(),t(100,"button",56),r("click",function(){n(o);let c=p(107);return d(a.Opengetbootstrap(c))}),l(101," Open modal for @getbootstrap "),e(),f(102,Ue,19,0,"ng-template",null,18,g)(104,Pe,19,0,"ng-template",null,19,g)(106,$e,19,0,"ng-template",null,20,g),e()()(),t(108,"div",32)(109,"div",43)(110,"app-showcode-card",34)(111,"div",32)(112,"div",57)(113,"a",58),r("click",function(){n(o);let c=p(176);return d(a.openScale(c))}),l(114,"Scale"),e()(),t(115,"div",57)(116,"a",59),r("click",function(){n(o);let c=p(178);return d(a.openSlideRight(c))}),l(117,"Slide In Right"),e()(),t(118,"div",57)(119,"a",60),r("click",function(){n(o);let c=p(180);return d(a.openSlideBottom(c))}),l(120,"Slide In Bottom"),e()(),t(121,"div",57)(122,"a",61),r("click",function(){n(o);let c=p(182);return d(a.openNewspaper(c))}),l(123,"News Paper"),e()(),t(124,"div",57)(125,"a",62),r("click",function(){n(o);let c=p(184);return d(a.openFall(c))}),l(126,"Fall"),e()(),t(127,"div",57)(128,"a",63),r("click",function(){n(o);let c=p(186);return d(a.openFlipHorizontal(c))}),l(129,"Flip Horizontal"),e()(),t(130,"div",57)(131,"a",64),r("click",function(){n(o);let c=p(188);return d(a.openFlipVertical(c))}),l(132,"Flip Vertical"),e()(),t(133,"div",57)(134,"a",65),r("click",function(){n(o);let c=p(190);return d(a.openSuperScaled(c))}),l(135,"Super Scaled"),e()(),t(136,"div",57)(137,"a",66),r("click",function(){n(o);let c=p(192);return d(a.openSign(c))}),l(138,"Sign"),e()(),t(139,"div",57)(140,"a",67),r("click",function(){n(o);let c=p(180);return d(a.openRotateBottom(c))}),l(141,"Rotate Bottom"),e()(),t(142,"div",57)(143,"a",68),r("click",function(){n(o);let c=p(194);return d(a.openRotateLeft(c))}),l(144,"Rotate Left"),e()()(),t(145,"div",69)(146,"div",70)(147,"div",71)(148,"div",72)(149,"h6",73),l(150,"Message Preview"),e(),h(151,"a",74),e(),t(152,"div",75)(153,"h6"),l(154,"Why We Use Electoral College, Not Popular Vote"),e(),t(155,"p",76),l(156," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(157,"div",77)(158,"button",78),l(159,"Save changes"),e(),t(160,"button",79),l(161," Close "),e()()()()()()()(),t(162,"h6",80),l(163,"Close Buttons:"),e(),t(164,"div",32)(165,"div",81)(166,"app-showcode-card",82),h(167,"a",83),e()(),t(168,"div",81)(169,"app-showcode-card",82),h(170,"button",83),e()(),t(171,"div",81)(172,"app-showcode-card",84),h(173,"button",85)(174,"button",85),e()()(),f(175,Oe,14,0,"ng-template",null,21,g)(177,De,14,0,"ng-template",null,22,g)(179,We,14,0,"ng-template",null,23,g)(181,Xe,14,0,"ng-template",null,24,g)(183,ze,14,0,"ng-template",null,25,g)(185,He,14,0,"ng-template",null,26,g)(187,Ge,14,0,"ng-template",null,27,g)(189,Qe,14,0,"ng-template",null,28,g)(191,je,14,0,"ng-template",null,29,g)(193,Ae,14,0,"ng-template",null,30,g)(195,Je,14,0,"ng-template",null,31,g)}s&2&&(_(2),C("title","Basic Modal")("prism",a.prismCode.model1)("tsCode",a.tsCodedata.modelts1),_(6),C("title","Static backdrop")("prism",a.prismCode.model2)("tsCode",a.tsCodedata.modelts2),_(6),C("title","Scrolling long content")("prism",a.prismCode.model3)("tsCode",a.tsCodedata.modelts3),_(6),C("title","Vertically centered modal")("prism",a.prismCode.model4)("tsCode",a.tsCodedata.modelts4),_(6),C("title","Vertical Centered Scrollable")("prism",a.prismCode.model5)("tsCode",a.tsCodedata.modelts5),_(6),C("title","Tooltips and popovers")("prism",a.prismCode.model6)("tsCode",a.tsCodedata.modelts6),_(6),C("title","Using the grid")("prism",a.prismCode.model7)("tsCode",a.tsCodedata.modelts7),_(6),C("title","Toggle between modals")("prism",a.prismCode.model8)("tsCode",a.tsCodedata.modelts8),_(8),C("title","Optional sizes")("prism",a.prismCode.model9)("tsCode",a.tsCodedata.modelts9),_(15),C("title","Fullscreen modal")("prism",a.prismCode.model10)("tsCode",a.tsCodedata.modelts10),_(28),C("title","Varying modal content")("prism",a.prismCode.model11)("tsCode",a.tsCodedata.modelts11),_(15),C("title","Modal Animation Effects")("prism",a.prismCode.model12)("tsCode",a.tsCodedata.modelts12),_(56),C("title","Basic Close")("prism",a.prismCode.model13),_(3),C("title","Disabel state")("prism",a.prismCode.model14),_(3),C("title","White variant")("prism",a.prismCode.model15))},dependencies:[$,P,U,I,q,N,L,T,R,B,O,D]})};export{W as ModalsClosesComponent};
