import { Component, input } from '@angular/core';
import { ChildNewInputComponent } from '../child-new-input/child-new-input.component';

@Component({
  selector: 'app-parent-new-input',
  standalone: true,
  imports: [ChildNewInputComponent],
  templateUrl: './parent-new-input.component.html',
  styleUrl: './parent-new-input.component.scss'
})
export class ParentNewInputComponent {

  parentName: any = 'bob';

  changeName() {
    this.parentName = Math.random();
  }


}
