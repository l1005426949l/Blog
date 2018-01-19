
/**
 * 分页中每一页的内容
 */
export class articlesListModel {
    /**
     * 
     * @param beforeDays 多少天以前 如：-1
     * @param items array自列表
     */
    constructor(public beforeDays: number, public items: Array<imgHeaderTitlePTime>) { }

}
/** 
 * 子列表内容
*/
export class imgHeaderTitlePTime {
    /**
     * 构造函数
     * @param imgUrl 头像URL
     * @param header 标签
     * @param title 文章标题
     * @param p 文章简介
     * @param cTime 发表时间
     * @param articleId 文章ID
     */
    constructor(public imgUrl: string, public header: string, public title: string, public p: string, public cTime: number,public articleId:number) { }
}