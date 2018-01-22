import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../../models/httpArticlesListPageModel';
import { PaginationNumberModel } from '../../models/paginationNumberModel';

/*
  Generated class for the PaginationConversionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaginationConversionProvider {

  constructor() {
  }
  /**
   * 页码转换
   * @param pagination http来的数据
   */
  public Conversion(pagination: Pagination): PaginationNumberModel {
    let paginationNumberModel: PaginationNumberModel = new PaginationNumberModel();
    paginationNumberModel.pindex = pagination.pIndex;
    //只显示5个 pageCount=10 pIndex=2 倒数第三个显示... 前面只三个显示
    for (let index = 0; index < pagination.pageCount; index++) {
      if (index == 3) {
        paginationNumberModel.pNumber.push('...');
      } else {
        paginationNumberModel.pNumber.push(`${index + 1}`);
      }

    }
    return paginationNumberModel;
  }
}
