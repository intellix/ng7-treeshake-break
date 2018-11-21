import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lazy-modal',
  templateUrl: './lazy-modal.component.html',
  styleUrls: []
})
export class LazyModalComponent {
  constructor(public modal: NgbActiveModal) { }
}
