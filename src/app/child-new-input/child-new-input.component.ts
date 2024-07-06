import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child-new-input',
  standalone: true,
  imports: [],
  templateUrl: './child-new-input.component.html',
  styleUrl: './child-new-input.component.scss'
})
export class ChildNewInputComponent {

  
  firstChild : any = input();
  firstChildChange = output<any>()

  changeName() {
    this.firstChildChange.emit(Math.random() )
  }

}
