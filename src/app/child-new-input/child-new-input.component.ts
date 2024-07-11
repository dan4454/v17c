import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child-new-input',
  standalone: true,
  imports: [],
  templateUrl: './child-new-input.component.html',
  styleUrl: './child-new-input.component.scss'
})
export class ChildNewInputComponent {


  parentNameInChild: any = input();
  parentNameInChildChange = output<any>();

  changeName() {
    this.parentNameInChildChange.emit(Math.random())
  }

}
