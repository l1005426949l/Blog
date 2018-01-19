import { Component } from '@angular/core';

/**
 * Generated class for the CopyrightInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'copyright-info',
  templateUrl: 'copyright-info.html'
})
export class CopyrightInfoComponent {

  text: string;

  constructor() {
    console.log('Hello CopyrightInfoComponent Component');
    this.text = '版权声明';
  }

}
