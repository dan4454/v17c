import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  name = 'Hal';

  constructor() { }

  makeRandomName() {
    this.name = Math.random() + "";
  }
}
