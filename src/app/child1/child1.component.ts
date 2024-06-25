import { JsonPipe } from '@angular/common';
import {
  Component,
  ModelSignal,
  SimpleChange,
  SimpleChanges,
  computed,
  effect,
  inject,
  input,
  model,
  signal,
} from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
})
export class Child1Component {
  checked = model(false);
  disabled = input(false);
  name = model<any>('sally');
  person: any = model({});
  personName = this.person().name;

  mainService = inject(MainService);

  constructor() {
    effect(() => {
      const aa = this.person();
      console.log('person changed in effect');
    });
  }

  resetValues() {
    // While standard inputs are read-only, you can write directly to model inputs.
    this.checked.set(!this.checked());
    this.name.set(Math.random());
    this.person().name = 'abc';  // you can use objects, too
    this.mainService.makeRandomName();
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
