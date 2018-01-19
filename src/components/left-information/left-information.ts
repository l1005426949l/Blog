import { Component } from '@angular/core';

/**
 * Generated class for the LeftInformationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'left-information',
  templateUrl: 'left-information.html'
})
export class LeftInformationComponent {

  text: string;

  constructor() {
    console.log('Hello LeftInformationComponent Component');
    this.text = '访问量';
  }

}
