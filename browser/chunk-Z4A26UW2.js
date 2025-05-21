import{a as V}from"./chunk-OJTWKW5E.js";import{a as N}from"./chunk-TIYT7UP5.js";import{c as F}from"./chunk-KHEEIZ2W.js";import"./chunk-VEXMTMPT.js";import"./chunk-Z4ZFXNJ7.js";import"./chunk-5IRIGFBY.js";import{A as Y,ea as T,fa as z,gb as A,ha as S}from"./chunk-7IEGBUCH.js";import{Ca as v,Jc as P,Kc as d,Mc as I,Na as l,Oa as h,Oc as k,Pc as _,Qc as j,Sc as f,Tb as p,Ub as t,Vb as x,Zb as E,dc as O,fc as B,gc as H,hc as a,ic as i,jc as s,kc as L,lc as M,nc as w,wc as b,yb as o}from"./chunk-7QP7SMW2.js";import"./chunk-2EBTC7QX.js";import{f as D}from"./chunk-66YHNWRR.js";function R(g,r){if(g&1){let n=w();L(0),a(1,"p",1)(2,"button",2),b("click",function(){let c=l(n).$implicit;return h(c.isCollapsed=!c.isCollapsed)}),d(3),i()(),a(4,"div",3)(5,"div",4),d(6),i()(),M()}if(g&2){let n=r.$implicit;o(2),E("btn btn-",n.collapseClass," collapsed mb-2 me-1"),p("aria-expanded",!n.isCollapsed)("aria-controls",n.targetId),o(),I(" ",n.triggerText," "),o(),t("ngbCollapse",n.isCollapsed)("horizontal",n.horizontal),p("id",n.targetId),o(),x("width",n.width),o(),I(" ",n.bodyText," ")}}var C=class g{items=[];static \u0275fac=function(n){return new(n||g)};static \u0275cmp=v({type:g,selectors:[["spk-ngb-collapse"]],inputs:{items:"items"},standalone:!0,features:[f],decls:3,vars:0,consts:[[1,"collapse-container"],[1,"mb-0"],["role","button",3,"click"],[3,"ngbCollapse","horizontal"],[1,"card","card-body","mb-0"]],template:function(n,e){n&1&&(a(0,"div",0),B(1,R,7,12,"ng-container",null,O),i()),n&2&&(o(),H(e.items))},dependencies:[A,S,T,Y]})};var y={};D(y,{accordion1:()=>J,accordion10:()=>ie,accordion11:()=>ne,accordion12:()=>se,accordion13:()=>de,accordion14:()=>re,accordion15:()=>ce,accordion16:()=>le,accordion2:()=>Q,accordion3:()=>X,accordion4:()=>Z,accordion5:()=>$,accordion6:()=>ee,accordion7:()=>oe,accordion8:()=>te,accordion9:()=>ae,accordionTs:()=>K});var J=`<div ngbAccordion id="accordionExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" ngbAccordionCollapse
        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to
            style each element. These classes control the overall appearance, as
            well as
            the
            showing and hiding via CSS transitions. You can modify any of this with
            custom
            CSS or overriding our default variables. It's also worth noting that
            just
            about
            any HTML can go within the <code>.accordion-body</code>, though the
            transition
            does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
            aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapseTwo" ngbAccordionCollapse aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample">
        <div ngbAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to
            style each element. These classes control the overall appearance, as
            well as
            the
            showing and hiding via CSS transitions. You can modify any of this with
            custom
            CSS or overriding our default variables. It's also worth noting that
            just
            about
            any HTML can go within the <code>.accordion-body</code>, though the
            transition
            does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapseThree" ngbAccordionCollapse aria-labelledby="headingThree"
        data-bs-parent="#accordionExample">
        <div ngbAccordionBody>
            <strong>This is the third item's accordion body.</strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to
            style each element. These classes control the overall appearance, as
            well as
            the
            showing and hiding via CSS transitions. You can modify any of this with
            custom
            CSS or overriding our default variables. It's also worth noting that
            just
            about
            any HTML can go within the <code>.accordion-body</code>, though the
            transition
            does limit overflow.
        </div>
    </div>
</div>
</div>`,K=`
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as PrismCode from '../../../shared/prismData/advancedUi/accordion';
import * as tsCode from '../../../shared/prismData/alert';
@Component({
  selector: 'app-accordions',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})
export class AccordionsComponent {
  panels = ['Accordion Item #1', 'Accordion Item #2', 'Accordion Item #3'];
}`,Q=`<div ngbAccordion id="accordionPanelsStayOpenExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="panelsStayOpen-headingOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" ngbAccordionCollapse
        aria-labelledby="panelsStayOpen-headingOne">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to style each element. These classes control the overall appearance, as
            well
            as the showing and hiding via CSS transitions. It's also worth
            noting
            that just about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="panelsStayOpen-headingTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" ngbAccordionCollapse
        aria-labelledby="panelsStayOpen-headingTwo">
        <div ngbAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to style each element. These classes control the overall appearance, as
            well
            as the showing and hiding via CSS transitions. You can modify any of
            this
            with custom CSS or overriding our default variables. It's also worth
            noting
            that just about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="panelsStayOpen-headingThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" ngbAccordionCollapse
        aria-labelledby="panelsStayOpen-headingThree">
        <div ngbAccordionBody>
            <strong>This is the third item's accordion body.</strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to style each element. These classes control the overall appearance, as
            well
            as the showing and hiding via CSS transitions. You can modify any of
            this
            with custom CSS or overriding our default variables. It's also worth
            noting
            that just about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,X=`<div ngbAccordion id="accordionFlushExample">
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="flush-headingOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="flush-collapseOne" ngbAccordionCollapse aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample">
        <div ngbAccordionBody>Placeholder content for this accordion,
            which is
            intended to demonstrate the <code>.accordion-flush</code> class.
            This is
            the
            first item's accordion body.</div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="flush-headingTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="flush-collapseTwo" ngbAccordionCollapse aria-labelledby="flush-headingTwo"
        data-bs-parent="#accordionFlushExample">
        <div ngbAccordionBody>Placeholder content for this accordion,
            which is
            intended to demonstrate the <code>.accordion-flush</code> class.
            This is
            the
            second item's accordion body. Let's imagine this being filled
            with
            some
            actual content.</div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="flush-headingThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree" aria-expanded="false"
            aria-controls="flush-collapseThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="flush-collapseThree" ngbAccordionCollapse aria-labelledby="flush-headingThree"
        data-bs-parent="#accordionFlushExample">
        <div ngbAccordionBody>Placeholder content for this accordion,
            which is
            intended to demonstrate the <code>.accordion-flush</code> class.
            This is
            the
            third item's accordion body. Nothing more exciting happening
            here in
            terms
            of content, but just filling up the space to make it look, at
            least
            at
            first
            glance, a bit more representative of how this would look in a
            real-world
            application.</div>
    </div>
</div>
</div>`,Z=`<div ngbAccordion class="accordion-primary" id="accordionPrimaryExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingPrimaryOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimaryOne" aria-expanded="true"
            aria-controls="collapsePrimaryOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapsePrimaryOne" ngbAccordionCollapse aria-labelledby="headingPrimaryOne"
        data-bs-parent="#accordionPrimaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingPrimaryTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimaryTwo" aria-expanded="false"
            aria-controls="collapsePrimaryTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapsePrimaryTwo" ngbAccordionCollapse aria-labelledby="headingPrimaryTwo"
        data-bs-parent="#accordionPrimaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingPrimaryThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimaryThree" aria-expanded="false"
            aria-controls="collapsePrimaryThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapsePrimaryThree" ngbAccordionCollapse aria-labelledby="headingPrimaryThree"
        data-bs-parent="#accordionPrimaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,$=`<div ngbAccordion class="accordion-secondary" id="accordionSecondaryExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingSecondaryOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondaryOne" aria-expanded="true"
            aria-controls="collapseSecondaryOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapseSecondaryOne" ngbAccordionCollapse aria-labelledby="headingSecondaryOne"
        data-bs-parent="#accordionSecondaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingSecondaryTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondaryTwo" aria-expanded="false"
            aria-controls="collapseSecondaryTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapseSecondaryTwo" ngbAccordionCollapse aria-labelledby="headingSecondaryTwo"
        data-bs-parent="#accordionSecondaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingSecondaryThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondaryThree" aria-expanded="false"
            aria-controls="collapseSecondaryThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapseSecondaryThree" ngbAccordionCollapse aria-labelledby="headingSecondaryThree"
        data-bs-parent="#accordionSecondaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,ee=`<div ngbAccordion class="accordion-solid-primary" id="accordionPrimarySolidExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingPrimarySolidOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimarySolidOne" aria-expanded="true"
            aria-controls="collapsePrimarySolidOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapsePrimarySolidOne" ngbAccordionCollapse aria-labelledby="headingPrimarySolidOne"
        data-bs-parent="#accordionPrimarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingPrimarySolidTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimarySolidTwo" aria-expanded="false"
            aria-controls="collapsePrimarySolidTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapsePrimarySolidTwo" ngbAccordionCollapse aria-labelledby="headingPrimarySolidTwo"
        data-bs-parent="#accordionPrimarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingPrimarySolidThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimarySolidThree" aria-expanded="false"
            aria-controls="collapsePrimarySolidThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapsePrimarySolidThree" ngbAccordionCollapse aria-labelledby="headingPrimarySolidThree"
        data-bs-parent="#accordionPrimarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,oe=`<div ngbAccordion class=" accordion-solid-secondary" id="accordionSecondarySolidExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingSecondarySolidOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondarySolidOne" aria-expanded="true"
            aria-controls="collapseSecondarySolidOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapseSecondarySolidOne" ngbAccordionCollapse aria-labelledby="headingSecondarySolidOne"
        data-bs-parent="#accordionSecondarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingSecondarySolidTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondarySolidTwo" aria-expanded="false"
            aria-controls="collapseSecondarySolidTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapseSecondarySolidTwo" ngbAccordionCollapse aria-labelledby="headingSecondarySolidTwo"
        data-bs-parent="#accordionSecondarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingSecondarySolidThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondarySolidThree" aria-expanded="false"
            aria-controls="collapseSecondarySolidThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapseSecondarySolidThree" ngbAccordionCollapse
        aria-labelledby="headingSecondarySolidThree" data-bs-parent="#accordionSecondarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,te=`<div ngbAccordion class=" accordion-border-primary accordions-items-seperate"
id="accordionprimaryborderExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingborderprimaryOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#primaryBorderOne" aria-expanded="true" aria-controls="primaryBorderOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="primaryBorderOne" ngbAccordionCollapse aria-labelledby="headingborderprimaryOne"
        data-bs-parent="#accordionprimaryborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingborderprimaryTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#primaryBorderTwo" aria-expanded="false" aria-controls="primaryBorderTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="primaryBorderTwo" ngbAccordionCollapse aria-labelledby="headingborderprimaryTwo"
        data-bs-parent="#accordionprimaryborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingborderprimaryThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#primaryBorderThree" aria-expanded="false"
            aria-controls="primaryBorderThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="primaryBorderThree" ngbAccordionCollapse aria-labelledby="headingborderprimaryThree"
        data-bs-parent="#accordionprimaryborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,ae=`<div ngbAccordion class=" accordion-border-success accordions-items-seperate"
id="accordionsuccessborderExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingbordersuccessOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#successBorderOne" aria-expanded="true" aria-controls="successBorderOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="successBorderOne" ngbAccordionCollapse aria-labelledby="headingbordersuccessOne"
        data-bs-parent="#accordionsuccessborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingbordersuccessTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#successBorderTwo" aria-expanded="false" aria-controls="successBorderTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="successBorderTwo" ngbAccordionCollapse aria-labelledby="headingbordersuccessTwo"
        data-bs-parent="#accordionsuccessborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingbordersuccessThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#successBorderThree" aria-expanded="false"
            aria-controls="successBorderThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="successBorderThree" ngbAccordionCollapse aria-labelledby="headingbordersuccessThree"
        data-bs-parent="#accordionsuccessborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,ie=`<p class="mb-0">
<a class="btn btn-primary collapsed mb-2 me-1" (click)="collapse.toggle()" data-bs-toggle="collapse"
    role="button" [attr.aria-expanded]="!isCollapsed" aria-controls="collapseExample">
    Link with href
</a>
<button class="btn btn-secondary collapsed mb-2" (click)="isCollapsed = !isCollapsed" type="button"
    data-bs-toggle="collapse" data-bs-target="#collapseExample" [attr.aria-expanded]="!isCollapsed"
    aria-controls="collapseExample">
    Button with data-bs-target
</button>
</p>
<div #collapse="ngbCollapse" [(ngbCollapse)]="isCollapsed" id="collapseExample">
<div class="card card-body mb-0">
    Some placeholder content for the collapse component. This panel
    is
    hidden by default but revealed when the user activates the
    relevant
    trigger.
</div>
</div>`,ne=`<p class="mb-0">
<a class="btn btn-primary mb-2 me-1" (click)="isCollapsed1 = !isCollapsed1" role="button"
    [attr.aria-expanded]="!isCollapsed1" [attr.aria-controls]="'multiCollapseExample1'">Toggle
    first element</a>
<button class="btn btn-success mb-2 me-1" (click)="isCollapsed2 = !isCollapsed2"
    [attr.aria-expanded]="!isCollapsed2" [attr.aria-controls]="'multiCollapseExample2'">Toggle
    second element</button>
<button class="btn btn-danger mb-2 me-1"
    (click)="isCollapsed1 = !isCollapsed1; isCollapsed2 = !isCollapsed2"
    [attr.aria-expanded]="!isCollapsed1 && !isCollapsed2"
    [attr.aria-controls]="'multiCollapseExample1 multiCollapseExample2'">Toggle both
    elements</button>
</p>
<div class="row">
<div class="col m-1">
    <div class="collapse multi-collapse" id="multiCollapseExample1" [ngbCollapse]="isCollapsed1">
        <div class="card card-body mb-0 shadow-none">
            Some placeholder content for the first collapse component of this multi-collapse
            example. This panel is hidden by default but revealed when the user activates the
            relevant trigger.
        </div>
    </div>
</div>
<div class="col m-1">
    <div class="collapse multi-collapse" id="multiCollapseExample2" [ngbCollapse]="isCollapsed2">
        <div class="card card-body mb-0 shadow-none">
            Some placeholder content for the second collapse component of this multi-collapse
            example. This panel is hidden by default but revealed when the user activates the
            relevant trigger.
        </div>
    </div>
</div>
</div>`,se=`<div ngbAccordion class=" accordion-customicon1 accordions-items-seperate" id="accordioncustomicon1Example">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingcustomicon1One">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsecustomicon1One" aria-expanded="true"
            aria-controls="collapsecustomicon1One">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapsecustomicon1One" ngbAccordionCollapse aria-labelledby="headingcustomicon1One"
        data-bs-parent="#accordioncustomicon1Example">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingcustomicon1Two">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsecustomicon1Two" aria-expanded="false"
            aria-controls="collapsecustomicon1Two">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapsecustomicon1Two" ngbAccordionCollapse aria-labelledby="headingcustomicon1Two"
        data-bs-parent="#accordioncustomicon1Example">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingcustomicon1Three">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsecustomicon1Three" aria-expanded="false"
            aria-controls="collapsecustomicon1Three">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapsecustomicon1Three" ngbAccordionCollapse aria-labelledby="headingcustomicon1Three"
        data-bs-parent="#accordioncustomicon1Example">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,de=`<div ngbAccordion class=" customized-accordion accordions-items-seperate" id="customizedAccordion">
<div ngbAccordionItem [collapsed]="false" class="custom-accordion-primary">
    <h2 ngbAccordionHeader id="customizedAccordionOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#customized-AccordionOne" aria-expanded="true"
            aria-controls="customized-AccordionOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="customized-AccordionOne" ngbAccordionCollapse aria-labelledby="customizedAccordionOne"
        data-bs-parent="#customizedAccordion">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem class=" custom-accordion-secondary">
    <h2 ngbAccordionHeader id="customizedAccordionTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#customized-AccordionTwo" aria-expanded="false"
            aria-controls="customized-AccordionTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="customized-AccordionTwo" ngbAccordionCollapse aria-labelledby="customizedAccordionTwo"
        data-bs-parent="#customizedAccordion">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem class=" custom-accordion-danger">
    <h2 ngbAccordionHeader id="customizedAccordionThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#customized-AccordionThree" aria-expanded="false"
            aria-controls="customized-AccordionThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="customized-AccordionThree" ngbAccordionCollapse aria-labelledby="customizedAccordionThree"
        data-bs-parent="#customizedAccordion">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,re=`<div ngbAccordion class=" accordionicon-left accordions-items-seperate" id="accordioniconLeftExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingleftOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseleftOne" aria-expanded="true" aria-controls="collapseleftOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapseleftOne" ngbAccordionCollapse aria-labelledby="headingleftOne"
        data-bs-parent="#accordioniconLeftExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingleftTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseLeftTwo" aria-expanded="false" aria-controls="collapseLeftTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapseLeftTwo" ngbAccordionCollapse aria-labelledby="headingleftTwo"
        data-bs-parent="#accordioniconLeftExample">
        <div ngbAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit
            overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingleftThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseLeftThree" aria-expanded="false" aria-controls="collapseLeftThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapseLeftThree" ngbAccordionCollapse aria-labelledby="headingleftThree"
        data-bs-parent="#accordioniconLeftExample">
        <div ngbAccordionBody>
            <strong>This is the third item's accordion body.</strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit
            overflow.
        </div>
    </div>
</div>
</div>`,ce=`<div ngbAccordion class=" accordionicon-none accordions-items-seperate" id="accordioniconnoIconExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingnoIconOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsenoIconOne" aria-expanded="true" aria-controls="collapsenoIconOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapsenoIconOne" ngbAccordionCollapse aria-labelledby="headingnoIconOne"
        data-bs-parent="#accordioniconnoIconExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingnoIconTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsenoIconTwo" aria-expanded="false" aria-controls="collapsenoIconTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapsenoIconTwo" ngbAccordionCollapse aria-labelledby="headingnoIconTwo"
        data-bs-parent="#accordioniconnoIconExample">
        <div ngbAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit
            overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingnoIconThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsenoIconThree" aria-expanded="false"
            aria-controls="collapsenoIconThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapsenoIconThree" ngbAccordionCollapse aria-labelledby="headingnoIconThree"
        data-bs-parent="#accordioniconnoIconExample">
        <div ngbAccordionBody>
            <strong>This is the third item's accordion body.</strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit
            overflow.
        </div>
    </div>
</div>
</div>`,le=`<p>
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" (click)="collapse.toggle()"
    data-bs-target="#collapseWidthExample" [attr.aria-expanded]="!isCollapsed"
    aria-controls="collapseWidthExample">
    Toggle width collapse
</button>
</p>
<div style="min-height: 120px;">
<div #collapse="ngbCollapse" [(ngbCollapse)]="isCollapsed" [horizontal]="true" style="max-width: 300px"
    id="collapseWidthExample">
    <div class="card card-body" style="width: 230px;">
        This is some placeholder content for a horizontal collapse. It's
        hidden
        by default and shown when triggered.
    </div>
</div>
</div>`;var G=class g{panels=["Accordion Item #1","Accordion Item #2","Accordion Item #3"];isCollapsed=!0;isCollapsed1=!0;isCollapsed2=!0;isCollapsed3=!0;isHorizontalCollapsed=!0;prismCode=y;tsCodeData=y;basicAccordions=[{title:"Accordion Item #1",body:"<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",headingId:"headingOne",collapseId:"collapseOne",collapsed:!1},{title:"Accordion Item #2",body:"<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",headingId:"headingTwo",collapseId:"collapseTwo",collapsed:!0},{title:"Accordion Item #3",body:"<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",headingId:"headingThree",collapseId:"collapseThree",collapsed:!0}];openAccordions=[{title:"Accordion Item #1",body:"<strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that weuse to style each element. These classes control the overall appearance, aswellas the showing and hiding via CSS transitions. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code> though the transition does limit overflow..",headingId:"headingOne",collapseId:"collapseOne",collapsed:!1},{title:"Accordion Item #2",body:"<strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that weuse to style each element. These classes control the overall appearance, aswellas the showing and hiding via CSS transitions. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code> though the transition does limit overflow..",headingId:"headingTwo",collapseId:"collapseTwo",collapsed:!0},{title:"Accordion Item #3",body:"<strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that weuse to style each element. These classes control the overall appearance, aswellas the showing and hiding via CSS transitions. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code> though the transition does limit overflow..",headingId:"headingThree",collapseId:"collapseThree",collapsed:!0}];flushAccordions=[{title:"Accordion Item #1",body:"Placeholder content for this accordion,which is intended to demonstrate the <code>.accordion-flush</code> class.This isthefirst items accordion body.",headingId:"headingOne",collapseId:"collapseOne",collapsed:!0},{title:"Accordion Item #2",body:"Placeholder content for this accordion,which is intended to demonstrate the <code>.accordion-flush</code> class.This isthefirst items accordion body.",headingId:"headingTwo",collapseId:"collapseTwo",collapsed:!0},{title:"Accordion Item #3",body:"Placeholder content for this accordion,which is intended to demonstrate the <code>.accordion-flush</code> class.This isthefirst items accordion body.",headingId:"headingThree",collapseId:"collapseThree",collapsed:!0}];customAccordions=[{title:"Accordion Item #1",body:"<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",headingId:"headingOne",collapseId:"collapseOne",accodionItemClass:"custom-accordion-primary",collapsed:!1},{title:"Accordion Item #2",body:"<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",headingId:"headingTwo",collapseId:"collapseTwo",accodionItemClass:"custom-accordion-secondary",collapsed:!0},{title:"Accordion Item #3",body:"<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",headingId:"headingThree",collapseId:"collapseThree",accodionItemClass:"custom-accordion-danger",collapsed:!0}];collapseItems1=[{triggerText:"Toggle width collapse",bodyText:"This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.",isCollapsed:!0,targetId:"collapseWidthExample",width:"230px",horizontal:!0,collapseClass:"primary"}];collapseItems2=[{triggerText:"Link with href",bodyText:"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.",isCollapsed:!0,targetId:"collapseExample",collapseClass:"primary"},{triggerText:"Button with data-bs-target",bodyText:"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.",isCollapsed:!0,targetId:"collapseExample",collapseClass:"secondary"}];collapseItems3=[{triggerText:"Toggle first element",bodyText:"Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.",isCollapsed:!0,targetId:"multiCollapseExample1"},{triggerText:"Toggle second element",bodyText:"Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.",isCollapsed:!0,targetId:"multiCollapseExample2"}];constructor(){}toggleCollapse(r){this.isCollapsed[r]===void 0?this.isCollapsed[r]=!0:this.isCollapsed[r]=!this.isCollapsed[r]}toggleHorizontalCollapse(){this.isHorizontalCollapsed=!this.isHorizontalCollapsed}ngOnInit(){}isFirstGradient=!1;isSecondGradient=!1;FirstGradient(){this.isFirstGradient=!this.isFirstGradient,this.isFirstGradient==!0?document.querySelector(".firstgradient")?.classList.remove("collapsed"):document.querySelector(".firstgradient")?.classList.add("collapsed")}SecondGradient(){this.isSecondGradient=!this.isSecondGradient,this.isSecondGradient==!0?document.querySelector(".secondgradient")?.classList.remove("collapsed"):document.querySelector(".secondgradient")?.classList.add("collapsed")}static \u0275fac=function(n){return new(n||g)};static \u0275cmp=v({type:g,selectors:[["app-accordions"]],standalone:!0,features:[f],decls:86,vars:91,consts:[["collapse","ngbCollapse"],[1,"row"],[1,"col-xl-12"],[3,"title","prism"],[3,"accordionId","closeOthers","accordionItems"],["title","Always Open Accordion <p class='text-muted subtitle fs-12 fw-normal'>Omit the <code>data-bs-parent</code> attribute on each <code>.accordion-collapse</code> to make accordion items stay  open when another item is opened. </p>",3,"prism"],["title",`Flush Accordion <p class='subtitle text-muted fs-12 fw-normal'>Add <code>.accordion-flush</code> to remove the default
            <code>background-color</code>,some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
            </p>`,"classbody","p-0",1,"Flush-Accordion",3,"prism"],[1,"mb-3"],[1,"col-xl-6"],[3,"accordionId","accodionClass","closeOthers","accordionItems"],[1,"mb-0"],["data-bs-toggle","collapse","role","button","aria-controls","collapseExample",1,"btn","btn-primary","collapsed","mb-2","me-1",3,"click"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseExample","aria-controls","collapseExample",1,"btn","btn-secondary","collapsed","mb-2",3,"click"],["id","collapseExample",3,"ngbCollapseChange","ngbCollapse"],[1,"card","card-body","mb-0"],["classbody","collapsebody",3,"title","prism"],["role","button",1,"btn","btn-primary","mb-2","me-1",3,"click"],[1,"btn","btn-success","mb-2","me-1",3,"click"],[1,"btn","btn-danger","mb-2","me-1",3,"click"],[1,"col","m-1"],["id","multiCollapseExample1",1,"collapse","multi-collapse",3,"ngbCollapse"],[1,"card","card-body","mb-0","shadow-none"],["id","multiCollapseExample2",1,"collapse","multi-collapse",3,"ngbCollapse"],[3,"items"]],template:function(n,e){if(n&1){let c=w();a(0,"div",1)(1,"div",2)(2,"app-showcode-card",3),s(3,"spk-ngb-accordion",4),i()(),a(4,"div",2)(5,"app-showcode-card",5),s(6,"spk-ngb-accordion",4),i()()(),a(7,"div",1)(8,"div",2)(9,"app-showcode-card",6),s(10,"spk-ngb-accordion",4),i()()(),a(11,"h6",7),d(12,"Light Colors:"),i(),a(13,"div",1)(14,"div",8)(15,"app-showcode-card",3),s(16,"spk-ngb-accordion",9),i()(),a(17,"div",8)(18,"app-showcode-card",3),s(19,"spk-ngb-accordion",9),i()()(),a(20,"h6",7),d(21,"Solid Colors:"),i(),a(22,"div",1)(23,"div",8)(24,"app-showcode-card",3),s(25,"spk-ngb-accordion",9),i()(),a(26,"div",8)(27,"app-showcode-card",3),s(28,"spk-ngb-accordion",9),i()()(),a(29,"h6",7),d(30,"Colored Borders:"),i(),a(31,"div",1)(32,"div",8)(33,"app-showcode-card",3),s(34,"spk-ngb-accordion",9),i()(),a(35,"div",8)(36,"app-showcode-card",3),s(37,"spk-ngb-accordion",9),i()()(),a(38,"div",1)(39,"div",8)(40,"app-showcode-card",3)(41,"p",10)(42,"a",11),b("click",function(){l(c);let m=P(47);return h(m.toggle())}),d(43," Link with href "),i(),a(44,"button",12),b("click",function(){return l(c),h(e.isCollapsed=!e.isCollapsed)}),d(45," Button with data-bs-target "),i()(),a(46,"div",13,0),j("ngbCollapseChange",function(m){return l(c),_(e.isCollapsed,m)||(e.isCollapsed=m),h(m)}),a(48,"div",14),d(49," Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. "),i()()()(),a(50,"div",8)(51,"app-showcode-card",15)(52,"p",10)(53,"a",16),b("click",function(){return l(c),h(e.isCollapsed1=!e.isCollapsed1)}),d(54,"Toggle first element"),i(),a(55,"button",17),b("click",function(){return l(c),h(e.isCollapsed2=!e.isCollapsed2)}),d(56,"Toggle second element"),i(),a(57,"button",18),b("click",function(){return l(c),e.isCollapsed1=!e.isCollapsed1,h(e.isCollapsed2=!e.isCollapsed2)}),d(58,"Toggle both elements"),i()(),a(59,"div",1)(60,"div",19)(61,"div",20)(62,"div",21),d(63," Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger. "),i()()(),a(64,"div",19)(65,"div",22)(66,"div",21),d(67," Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger. "),i()()()()()()(),a(68,"div",1)(69,"div",8)(70,"app-showcode-card",3),s(71,"spk-ngb-accordion",9),i()(),a(72,"div",8)(73,"app-showcode-card",3),s(74,"spk-ngb-accordion",9),i()()(),a(75,"div",1)(76,"div",8)(77,"app-showcode-card",3),s(78,"spk-ngb-accordion",9),i()(),a(79,"div",8)(80,"app-showcode-card",3),s(81,"spk-ngb-accordion",9),i()()(),a(82,"div",1)(83,"div",2)(84,"app-showcode-card",3),s(85,"spk-ngb-collapse",23),i()()()}n&2&&(o(2),t("title","Basic Accordion")("prism",e.prismCode.accordion1),o(),t("accordionId","accordionExample")("closeOthers",!0)("accordionItems",e.basicAccordions),o(2),t("prism",e.prismCode.accordion2),o(),t("accordionId","accordionExample")("closeOthers",!1)("accordionItems",e.openAccordions),o(3),t("prism",e.prismCode.accordion3),o(),t("accordionId","accordionFlushExample")("closeOthers",!0)("accordionItems",e.flushAccordions),o(5),t("title","Primary")("prism",e.prismCode.accordion4),o(),t("accordionId","accordionPrimaryExample")("accodionClass","accordion-primary")("closeOthers",!0)("accordionItems",e.basicAccordions),o(2),t("title","Secondary")("prism",e.prismCode.accordion5),o(),t("accordionId","accordionSecondaryExample")("accodionClass","accordion-secondary")("closeOthers",!0)("accordionItems",e.basicAccordions),o(5),t("title","Primary")("prism",e.prismCode.accordion6),o(),t("accordionId","accordionPrimarySolidExample")("accodionClass","accordion-solid-primary")("closeOthers",!0)("accordionItems",e.basicAccordions),o(2),t("title","Secondary")("prism",e.prismCode.accordion7),o(),t("accordionId","accordionSecondarySolidExample")("accodionClass","accordion-solid-secondary")("closeOthers",!0)("accordionItems",e.basicAccordions),o(5),t("title","Primary")("prism",e.prismCode.accordion8),o(),t("accordionId","accordionprimaryborderExample")("accodionClass","accordion-border-primary accordions-items-seperate")("closeOthers",!0)("accordionItems",e.basicAccordions),o(2),t("title","Success")("prism",e.prismCode.accordion9),o(),t("accordionId","accordionsuccessborderExample")("accodionClass","accordion-border-success accordions-items-seperate")("closeOthers",!0)("accordionItems",e.basicAccordions),o(3),t("title","Example")("prism",e.prismCode.accordion10),o(2),p("aria-expanded",!e.isCollapsed),o(2),p("aria-expanded",!e.isCollapsed),o(2),k("ngbCollapse",e.isCollapsed),o(5),t("title","Targets Collapse")("prism",e.prismCode.accordion11),o(2),p("aria-expanded",!e.isCollapsed1)("aria-controls","multiCollapseExample1"),o(2),p("aria-expanded",!e.isCollapsed2)("aria-controls","multiCollapseExample2"),o(2),p("aria-expanded",!e.isCollapsed1&&!e.isCollapsed2)("aria-controls","multiCollapseExample1 multiCollapseExample2"),o(4),t("ngbCollapse",e.isCollapsed1),o(4),t("ngbCollapse",e.isCollapsed2),o(5),t("title","Custom Icon Accordion")("prism",e.prismCode.accordion12),o(),t("accordionId","accordioncustomicon1Example")("accodionClass","accordion-customicon1 accordions-items-seperate")("closeOthers",!0)("accordionItems",e.basicAccordions),o(2),t("title","Custom Accordion")("prism",e.prismCode.accordion13),o(),t("accordionId","customizedAccordion")("accodionClass","customized-accordion accordions-items-seperate")("closeOthers",!0)("accordionItems",e.customAccordions),o(3),t("title","Left Aligned Icons")("prism",e.prismCode.accordion14),o(),t("accordionId","accordioniconLeftExample")("accodionClass","accordionicon-left accordions-items-seperate")("closeOthers",!0)("accordionItems",e.basicAccordions),o(2),t("title","Without Icon")("prism",e.prismCode.accordion15),o(),t("accordionId","accordioniconnoIconExample")("accodionClass","accordionicon-none accordions-items-seperate")("closeOthers",!0)("accordionItems",e.basicAccordions),o(3),t("title","Horizontal Collapse")("prism",e.prismCode.accordion16),o(),t("items",e.collapseItems1))},dependencies:[F,T,z,A,S,V,C,N]})};export{G as AccordionsComponent};
