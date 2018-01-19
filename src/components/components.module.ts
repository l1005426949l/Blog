import { NgModule } from '@angular/core';

import { MyHeaderComponent } from './my-header/my-header';
import { TitleHeaderComponent } from './title-header/title-header';
import { LeftIntroductionComponent } from './left-introduction/left-introduction';
import { LeftInformationComponent } from './left-information/left-information';
import { CopyrightInfoComponent } from './copyright-info/copyright-info';
import { SwitchArticleComponent } from './switch-article/switch-article';
import { GoHomeComponent } from './go-home/go-home';
import { ShareModule } from '../pages/share/share.module';
import { PaginationComponent } from './pagination/pagination';
import { ArticlesListComponent } from './articles-list/articles-list';
import { MarkdownShowComponent } from './markdown-show/markdown-show';
@NgModule({
	declarations: [
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
        ShareModule
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
export class ComponentsModule {}
