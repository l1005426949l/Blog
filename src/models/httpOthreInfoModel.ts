export class HttpOthreInfoModel {
    /**
    * OthreInfoModel
    * @param author 作者
    * @param option echarts
    * @param leftIntroductionModel LeftIntroductionModel
    * @param myHeader 
    */
    constructor(public author: string, public option: any, public leftIntroductionModel: LeftIntroductionModel, public myHeader: MyHeaderModel) { }
}
export class LeftIntroductionModel {
    /**
     * LeftIntroductionModel
     * @param headerImgUrl 主图片
     * @param slidesImgsUrl 轮播图片
     * @param name 名称
     * @param team 公司-部门-团队
     * @param position 致力前端、数据可视化、Node等领域
     * @param journalNumber 日志总数
     * @param classificationNumber  分类总数
     * @param labelNumber 标签总数
     */
    constructor(public headerImgUrl: string, public slidesImgsUrl: Array<string>, public name: string, public team: string, public position: string, public journalNumber: number, public classificationNumber: number, public labelNumber: number) { }
}
/**除文章之外的Header */
export class MyHeaderModel {
    /**
     * 除文章之外的Header
     * @param title 出文章之外的title
     * @param headerImgUrl ImgUrl
     */
    constructor(public title: string, public headerImgUrl: string) { }
}