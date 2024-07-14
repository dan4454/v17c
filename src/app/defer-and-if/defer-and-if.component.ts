import { Component } from '@angular/core';
import { DeferAndIfChildComponent } from '../defer-and-if-child/defer-and-if-child.component';

@Component({
  selector: 'app-defer-and-if',
  standalone: true,
  imports: [DeferAndIfChildComponent],
  templateUrl: './defer-and-if.component.html',
  styleUrl: './defer-and-if.component.scss',
})
export class DeferAndIfComponent {
  showChild = false;

}
