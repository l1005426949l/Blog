import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the AsteriskPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'asterisk',
})
export class AsteriskPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  // transform(value: string, ...args) {
  //   return value.toLowerCase();
  // }
  transform(value: string, fromLen: number, endLen: number) {
    if (value === undefined || value === null) {
        return value;
    }
    if (fromLen === 0) {
        fromLen = 3;
    }
    if (endLen === 0) {
        endLen = 4;
    }
    var len = value.length - fromLen - endLen;
    var xing = '';
    for (var i = 0; i < len; i++) {
        xing += '*';
    }
    // return value.replace(/^(.{3})(?:\d+)(.{4})$/, "$1****$2");
    return value.substr(0, fromLen) + xing + value.substr(value.length - endLen);
}
}
