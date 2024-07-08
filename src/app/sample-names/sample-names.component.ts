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
by: any;

  async getData() {
    var result = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.data = result.data;
    console.log(this.data)
  }
  
  ngOnInit(): void {
    this.getData();

    
  }

  showRecord(rec: any){
    alert(rec.name)
  }
  

}
