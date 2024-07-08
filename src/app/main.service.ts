import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  name = 'Albert Smart';
  isAdmin = false;


  constructor() { }

  makeRandomName() {
    this.name = Math.random() + "";
  }
}
