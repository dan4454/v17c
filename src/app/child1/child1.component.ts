import { JsonPipe } from '@angular/common';
import {
  Component,  EventEmitter,  ModelSignal,  Output,  SimpleChange,  SimpleChanges,  computed,  effect,  inject,  input,  model,  signal,} from '@angular/core';
import { MainService } from '../main.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
})
export class Child1Component {
  checked = model(false);
  disabled = input(false);
  name = model<any>('sally');
  person: any = model({});
  personName = this.person().name;

  value1 = model(0);

  @Output ('parentFunction') parentFunction: EventEmitter<any> = new EventEmitter();

  

  lastName = '';

  mainService = inject(MainService);

  constructor() {
    effect(() => {
      const aa = this.person();
      console.log('person changed in effect');
    });
  }

  updateValue1() {
    this.value1.update(v => v + 1);
  }

  resetValues() {
    // While standard inputs are read-only, you can write directly to model inputs.
    this.checked.set(!this.checked());
    this.name.set(Math.random());
    this.person().name = 'abc';  // you can use objects, too
    this.mainService.makeRandomName();
  }

  cp(s: any) {
    // this.parentFunction.emit(s);
  }

  // ngOnChanges(changes: SimpleChange) {
  //   console.log(changes)
  // }

  // ngDoCheck() {
  //   console.log('docheck done')
  //   if (this.person().name !== this.personName) {
  //     console.log("person.name changed");
  //     this.personName = this.person().name;
  //   }
  // }


  
}
