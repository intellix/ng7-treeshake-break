import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-some-modal',
  templateUrl: './some-modal.component.html',
  styleUrls: []
})
export class SomeModalComponent {
  constructor(public modal: NgbActiveModal) { }
}
