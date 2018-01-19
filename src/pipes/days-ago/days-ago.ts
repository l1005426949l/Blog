import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DaysAgoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'daysAgo',
})
export class DaysAgoPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value?: Date): string {
    if (!!value) {
      return ''
    }
    let createTime = value.getTime();
    let todayTime: any = new Date().getTime();
    createTime = Math.abs((createTime - todayTime)) / (1000 * 60 * 60 * 24)
    if (createTime > 4) {
      todayTime = createTime.toString() + '天以前';
    } else {
      switch (createTime) {
        case 1:
          todayTime = '昨天'
          break;
        case 2:
          todayTime = '前天'
          break;
        case 3:
          todayTime = '大前天'
          break;
        case 4:
          todayTime = '大大前天'
          break;
        default:
          todayTime = createTime.toString() + '天以前';
          break;
      }
    }
    return todayTime.toString();
  }
}
