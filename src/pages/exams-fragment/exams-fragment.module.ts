import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamsFragmentPage } from './exams-fragment';

@NgModule({
  declarations: [
    ExamsFragmentPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamsFragmentPage),
  ],
})
export class ExamsFragmentPageModule {}
