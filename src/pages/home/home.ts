import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as QArt from '../../assets/aaa.js';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('QRimg') QRimg: ElementRef;
  text: string='';
  imgUrl: string='';
  constructor(public navCtrl: NavController) { }
  ngAfterContentInit() {
    //   qart = new QArt.default({
    //     value: 'http://localhost:8100/assets/imgs/logo.png',
    //     imagePath: 'http://localhost:8100/assets/imgs/logo.png',   
    //     filter: 'color'
    //   });
    //   /// background:'#C7EDCC', fillType:'fill', ,      size: 195,        , version:30
    //  this. qart.make(this.QRimg.nativeElement)
    //   console.log(this.qart);
  }
  imgOnload(e) {
    var reader = new FileReader();
    var $this = this;

    reader.readAsDataURL(e.path[0].files[0]);
    reader.onload = function () {
      $this.imgUrl = this.result;
      console.log($this.imgUrl);
    }
  }
  //http://fanyi.bdstatic.com/static/translation/img/header/logo_cbfea26.png ../../../assets/imgs/logo.png
  createQR(e) {
    let qart = new QArt.default({
      value: this.text,
      imagePath: this.imgUrl,
      filter: "color",
      version: "40"
    });
    qart.make(this.QRimg.nativeElement);
  }
  moveTolist(e) {
    this.navCtrl.push('ArticlesListPage', {
      'id': 1
    })
  }
}
