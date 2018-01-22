import { ArticlesListModel } from "./articlesListModel";
/**
 * http文章列表页面信息
 */
export class HttpArticlesListPageModel { 
    /**
     * http文章列表页面信息
     * @param articlesList 当前页面的文章列表
     * @param pagination 分页信息
     */
    constructor(public articlesList: Array<ArticlesListModel>, public pagination: Pagination) { }
}
/**
 * http分页信息
 */
export class Pagination {
    /**
     * http分页信息
     * @param pageCount 总分页数
     * @param pIndex 当前页面
     */
    constructor(public pageCount: number, public pIndex: number) { }
}