import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-additional-content',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './additional-content.component.html',
  styleUrl: './additional-content.component.scss'
})
export class AdditionalContentComponent {

}
