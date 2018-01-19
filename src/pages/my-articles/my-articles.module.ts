import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyArticlesPage } from './my-articles';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyArticlesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyArticlesPage),
    ComponentsModule,
    
  ],
})
export class MyArticlesPageModule { }
