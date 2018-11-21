import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { LazyModalComponent } from './lazy-modal/lazy-modal.component';

@NgModule({
  declarations: [LazyComponent, LazyModalComponent],
  entryComponents: [LazyModalComponent],
  imports: [
    CommonModule,
    NgbModalModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
