import { Component, Input } from '@angular/core';

/**
 * Generated class for the TitleHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'title-header',
  templateUrl: 'title-header.html'
})
export class TitleHeaderComponent {


  @Input()
  text: string='文章标题栏';
  /** 
   * 文章标题栏
  */
  constructor() {

  }

}
