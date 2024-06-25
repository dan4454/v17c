import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, NgbDropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'v17c';
  collapsed = true;
}
