import { Component, Input } from '@angular/core';
import { paginationNumberModel } from '../../models/paginationNumberModel';

/**
 * Generated class for the PaginationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pagination',
  templateUrl: 'pagination.html'
})
export class PaginationComponent {

  pagination: paginationNumberModel = new paginationNumberModel();

  constructor() {
    for (let index = 0; index < 5; index++) {
      if (index == 3) {
        this.pagination.isSelect.push('...');
      }
      this.pagination.isSelect.push((index + 1).toString());
    }
    this.pagination.pindex = 2;
  }
  /**
   * 当ngAfterContentInit完毕，并且组件的视图已经初始化完毕时调用。只适用于组件。
   */
  ngAfterViewInit() {

  }
  /**
   * 当组件视图每次执行变更检测时调用。只适用于组件。
   */
  ngAfterViewChecked() {
    // console.log('分页：' + JSON.stringify(this.pagination));
  }
}
