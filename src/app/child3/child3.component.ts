import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.scss'
})
export class Child3Component {

  parentName = model();

}
