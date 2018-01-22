import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyResumePage } from './my-resume';

@NgModule({
  declarations: [
    MyResumePage,
  ],
  imports: [
    IonicPageModule.forChild(MyResumePage),
  ],
})
export class MyResumePageModule {}
