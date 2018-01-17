import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderDetailFragmentPage } from './order-detail-fragment';

@NgModule({
  declarations: [
    OrderDetailFragmentPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderDetailFragmentPage),
  ],
})
export class OrderDetailFragmentPageModule {}
