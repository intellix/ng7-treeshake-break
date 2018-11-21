import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SomeModalComponent } from './some-modal/some-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'seven';

  constructor(private modal: NgbModal) {}

  openModal() {
    this.modal.open(SomeModalComponent);
  }
}
