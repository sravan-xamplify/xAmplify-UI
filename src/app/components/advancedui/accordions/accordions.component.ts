import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { NgbAccordionComponent } from '../../../@spk/spk-reusable-plugins/ngb-accordion/ngb-accordion.component';
import { NgbCollapseComponent } from '../../../@spk/spk-reusable-plugins/ngb-collapse/ngb-collapse.component';
import * as PrismCode from '../../../shared/data/prismData/advancedUi/accordion';
import * as tsCode from '../../../shared/data/prismData/advancedUi/accordion';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';

@Component({
  selector: 'app-accordions',
  standalone: true,
  imports: [SharedModule,FormsModule,ReactiveFormsModule,NgbModule,NgbAccordionComponent,NgbCollapseComponent,NgbModule,ShowcodeCardComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './accordions.component.html',
  styleUrl: './accordions.component.scss'
})

export class AccordionsComponent {
  panels = ['Accordion Item #1', 'Accordion Item #2', 'Accordion Item #3'];
  isCollapsed: any = true;
  isCollapsed1: boolean = true;
  isCollapsed2: boolean = true;
  isCollapsed3: any = true;
  isHorizontalCollapsed: boolean = true;
  prismCode: any = PrismCode;
  tsCodeData: any = tsCode;

  basicAccordions=[
    { 
      title: 'Accordion Item #1',
      body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
      headingId: 'headingOne',
      collapseId: 'collapseOne', 
      collapsed: false
     },
    {
       title: 'Accordion Item #2',
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingTwo', 
       collapseId: 'collapseTwo',
       collapsed: true
     },
    {
       title: 'Accordion Item #3', 
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingThree', 
       collapseId: 'collapseThree' ,
       collapsed: true}
  ]
 openAccordions=[
    { 
      title: 'Accordion Item #1',
      body: '<strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that weuse to style each element. These classes control the overall appearance, aswellas the showing and hiding via CSS transitions. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code> though the transition does limit overflow..',  
      headingId: 'headingOne',
      collapseId: 'collapseOne', 
      collapsed: false
     },
    {
       title: 'Accordion Item #2',
       body: '<strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that weuse to style each element. These classes control the overall appearance, aswellas the showing and hiding via CSS transitions. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code> though the transition does limit overflow..',  
       headingId: 'headingTwo', 
       collapseId: 'collapseTwo',
       collapsed: true
     },
    {
       title: 'Accordion Item #3', 
       body: '<strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that weuse to style each element. These classes control the overall appearance, aswellas the showing and hiding via CSS transitions. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code> though the transition does limit overflow..',  
       headingId: 'headingThree', 
       collapseId: 'collapseThree' ,
       collapsed: true}
  ]
  flushAccordions=[
    { 
      title: 'Accordion Item #1',
      body: 'Placeholder content for this accordion,which is intended to demonstrate the <code>.accordion-flush</code> class.This isthefirst items accordion body.',  
      headingId: 'headingOne',
      collapseId: 'collapseOne', 
      collapsed: true
     },
    {
       title: 'Accordion Item #2',
       body: 'Placeholder content for this accordion,which is intended to demonstrate the <code>.accordion-flush</code> class.This isthefirst items accordion body.',  
       headingId: 'headingTwo', 
       collapseId: 'collapseTwo',
       collapsed: true
     },
    {
       title: 'Accordion Item #3', 
       body: 'Placeholder content for this accordion,which is intended to demonstrate the <code>.accordion-flush</code> class.This isthefirst items accordion body.',  
       headingId: 'headingThree', 
       collapseId: 'collapseThree' ,
       collapsed: true
      }
  ]
  customAccordions=[
    { 
      title: 'Accordion Item #1',
      body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
      headingId: 'headingOne',
      collapseId: 'collapseOne', 
      accodionItemClass:"custom-accordion-primary",
      collapsed: false
     },
    {
       title: 'Accordion Item #2',
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingTwo', 
       collapseId: 'collapseTwo',
      accodionItemClass:"custom-accordion-secondary",
       collapsed: true
     },
    {
       title: 'Accordion Item #3', 
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingThree', 
       collapseId: 'collapseThree' ,
       accodionItemClass:"custom-accordion-danger",
       collapsed: true}
  ]
  collapseItems1 = [
    {
      triggerText: 'Toggle width collapse',
      bodyText: 'This is some placeholder content for a horizontal collapse. It\'s hidden by default and shown when triggered.',
      isCollapsed: true,
      targetId: 'collapseWidthExample',
      width:'230px',
      horizontal:true,
      collapseClass:'primary'
    }
  ];

  collapseItems2 = [
    {
      triggerText: 'Link with href',
      bodyText: 'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.',
      isCollapsed: true,
      targetId: 'collapseExample',
      collapseClass:'primary'

    },
    {
      triggerText: 'Button with data-bs-target',
      bodyText: 'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.',
      isCollapsed: true,
      targetId: 'collapseExample',
      collapseClass:'secondary'

    }
  ];

  collapseItems3 = [
    {
      triggerText: 'Toggle first element',
      bodyText: 'Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.',
      isCollapsed: true,
      targetId: 'multiCollapseExample1'
    },
    {
      triggerText: 'Toggle second element',
      bodyText: 'Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.',
      isCollapsed: true,
      targetId: 'multiCollapseExample2'
    }
  ];
  constructor() {}

  toggleCollapse(id: string) {
    if (this.isCollapsed[id] === undefined) {
      this.isCollapsed[id] = true;
    } else {
      this.isCollapsed[id] = !this.isCollapsed[id];
    }
  }
  
  toggleHorizontalCollapse() {
    this.isHorizontalCollapsed = !this.isHorizontalCollapsed;
  }

  ngOnInit(): void {}

  public isFirstGradient = false;
  public isSecondGradient = false;

  FirstGradient() {
    this.isFirstGradient = !this.isFirstGradient;
    if (this.isFirstGradient == true) {
      document.querySelector('.firstgradient')?.classList.remove('collapsed');
    } else {
      document.querySelector('.firstgradient')?.classList.add('collapsed');
    }
  }
  SecondGradient() {
    this.isSecondGradient = !this.isSecondGradient;
    if (this.isSecondGradient == true) {
      document.querySelector('.secondgradient')?.classList.remove('collapsed');
    } else {
      document.querySelector('.secondgradient')?.classList.add('collapsed');
    }
  }
}
