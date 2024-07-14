import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-sample-names',
  standalone: true,
  imports: [],
  templateUrl: './sample-names.component.html',
  styleUrl: './sample-names.component.scss'
})
export class SampleNamesComponent implements OnInit {

  data: any = [];
  showInfo = false;
  showIdNumber = 0;

  async getData() {
    var result = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.data = result.data;
    console.log(this.data)
  }
  
  ngOnInit(): void {
    this.getData();

    
  }

  showRecord(rec: any){
    if (this.showIdNumber == rec.id) {
      this.showIdNumber = 0;
      return;
    }
    this.showIdNumber = rec.id
  }
  

}
