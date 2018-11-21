import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LazyModalComponent } from './lazy-modal/lazy-modal.component';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: []
})
export class LazyComponent {

  constructor(public modal: NgbModal) { }

  openModal() {
    this.modal.open(LazyModalComponent);
  }

}
