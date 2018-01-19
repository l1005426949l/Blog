import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticlesListPage } from './articles-list';
import { ShareModule } from '../share/share.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ArticlesListPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticlesListPage),
    ShareModule,
    ComponentsModule,
  ],
})
export class ArticlesListPageModule {}
