import { Component } from '@angular/core';
import { Child3Component } from "../child3/child3.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent3',
  standalone: true,
  imports: [Child3Component, FormsModule],
  templateUrl: './parent3.component.html',
  styleUrl: './parent3.component.scss'
})
export class Parent3Component {

  name = "Joe";

}
