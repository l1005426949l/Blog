import { Directive, ElementRef, HostListener } from '@angular/core';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the BanEmojiDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[ban-emoji]' // Attribute selector
})
export class BanEmojiDirective {

  constructor(public el: ElementRef, private platform: Platform) {
    console.log('Hello BanEmojiDirective Directive');
  }
  /// 禁止输入表情
  @HostListener('input')
  oninput() {

    // if (!(this.platform.is('ios') && this.platform.is('cordova'))) {
    //   this.el.nativeElement.value = this.el.nativeElement.value.replace(/(\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]|\ud83d[\ude80-\udeff])/g, '');
    // }

  }

  // 出去两边空格
  @HostListener('blur')
  onblur() {
    if (!(this.platform.is('ios') && this.platform.is('cordova'))) {
      this.el.nativeElement.value = this.el.nativeElement.value.replace(/(^\s*)|(\s*$)/g, "");
    }

  }
}
