import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as QArt from 'qartjs/dist/qart.min.js';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('QRimg') QRimg: ElementRef;
  text: string;
  imgUrl: string;
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
    console.log(e.explicitOriginalTarget.dataset.files[0]);
    
    reader.readAsDataURL(e.path[0].files[0]);
    reader.onload = function () {
      var blob = new Blob([this.result], {
        type: 'image/png'
    });
    $this.imgUrl = URL.createObjectURL(blob)
      console.log( $this.imgUrl);
    }
  }

  createQR(e) {
    let qart = new QArt.default({ value: this.text, imagePath: 'https://www.baidu.com/img/bd_logo1.png', filter: 'color'});
    console.log(qart);

    qart.make(this.QRimg.nativeElement);
  }
  moveTolist(e) {
    this.navCtrl.push('ArticlesListPage', {
      'id': 1
    })
  }
}
