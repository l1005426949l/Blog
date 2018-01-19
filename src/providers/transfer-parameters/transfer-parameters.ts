import {HttpClient} from '@angular/common/http';
import {Injectable, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from "rxjs/Subject";
import {MessageModel} from "../../models/message-model";
import {Subscriber} from "rxjs/Subscriber";


/*
  Generated class for the TransferParametersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
/**
 * 组件间传值
 */
export class TransferParametersProvide {

  private subject: Subject<MessageModel>;

  constructor(public http: HttpClient) {
    this.subject = new Subject<MessageModel>();
  }

  public SendMsg(msg: MessageModel) {
    if(!this.subject.isStopped && !this.subject.closed)
      this.subject.next(msg);
  }

  public ReceivedMsg(handle:(value: MessageModel) => void):Subscriber<MessageModel> {
    const sub = this.subject.subscribe(handle);
    return sub as Subscriber<MessageModel>;
  }

  public UnSubscribe(sub:Subscriber<MessageModel>){
    sub.unsubscribe();
  }

}
