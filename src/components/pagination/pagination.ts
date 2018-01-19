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
  @Input()
  pagination?: paginationNumberModel;

  constructor() {

  }
  ngAfterViewChecked() {
    console.log('分页：' + JSON.stringify(this.pagination));
  }
}
