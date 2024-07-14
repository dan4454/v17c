import { Component, inject, OnInit, TemplateRef, viewChild } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-click-button-with-code',
  standalone: true,
  imports: [],
  templateUrl: './click-button-with-code.component.html',
  styleUrl: './click-button-with-code.component.scss'
})
export class ClickButtonWithCodeComponent implements OnInit {

  private modalService = inject(NgbModal);
	closeResult = '';
  
  ngOnInit(): void {
    // document.getElementById("myButton").click()
    let b = document.getElementById('myButton') as HTMLElement;
    b.click();
    
  }
  
  constructor() {

  }


	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				// this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}


}
