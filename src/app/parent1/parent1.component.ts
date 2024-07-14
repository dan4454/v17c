import { Component, EventEmitter, ModelSignal, inject, model, signal} from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { JsonPipe } from '@angular/common';
import { MainService } from '../main.service';
import { FormsModule } from '@angular/forms';
import { Output } from '@angular/core';

@Component({
  selector: 'app-parent1',
  standalone: true,
  imports: [Child1Component, JsonPipe, FormsModule],
  templateUrl: './parent1.component.html',
  styleUrl: './parent1.component.scss',
})
export class Parent1Component {
  mainService = inject(MainService);

  protected isAdminChange = false;
  name = 'bob';
  person: any = { name: 'joe', city: 'austin', lastName: '' };

  functionValue = '';


  constructor() {
    console.log(this.mainService);
  }

  changeValue() {
    // this.isAdminChange.set(!this.isAdminChange());
    this.isAdminChange = !this.isAdminChange;
    this.name = 'sally';
    console.log('clicked parent change');
    this.person.name = 'zlzlzlzlz';
  }

  showParentAlert(s: any) {
    // alert('there!');
    this.functionValue = s;
    this.name = 'william'
  }
}
