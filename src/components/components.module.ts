import { NgModule } from '@angular/core';

import { MyHeaderComponent } from './my-header/my-header';
import { TitleHeaderComponent } from './title-header/title-header';
import { LeftIntroductionComponent } from './left-introduction/left-introduction';
import { LeftInformationComponent } from './left-information/left-information';
import { CopyrightInfoComponent } from './copyright-info/copyright-info';
import { SwitchArticleComponent } from './switch-article/switch-article';
import { GoHomeComponent } from './go-home/go-home';
import { PaginationComponent } from './pagination/pagination';
import { ArticlesListComponent } from './articles-list/articles-list';
import { MarkdownShowComponent } from './markdown-show/markdown-show';
import { MarkdownModule } from 'ngx-md';
import { IonicModule } from 'ionic-angular';
import { DaysAgoPipe } from '../pipes/days-ago/days-ago';
@NgModule({
    declarations: [

        DaysAgoPipe,
        MyHeaderComponent,
        TitleHeaderComponent,
        LeftIntroductionComponent,
        LeftInformationComponent,
        CopyrightInfoComponent,
        SwitchArticleComponent,
        GoHomeComponent,
        PaginationComponent,
        ArticlesListComponent,
        MarkdownShowComponent],
    imports: [
        MarkdownModule.forRoot(),
        IonicModule
    ],
    exports: [
        MyHeaderComponent,
        TitleHeaderComponent,
        LeftIntroductionComponent,
        LeftInformationComponent,
        CopyrightInfoComponent,
        SwitchArticleComponent,
        GoHomeComponent,
        PaginationComponent,
        ArticlesListComponent,
        MarkdownShowComponent]
})
export class ComponentsModule { }
