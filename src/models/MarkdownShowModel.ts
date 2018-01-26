/**
 * markdown实体类
*/
export class MarkdownShowModel {
    /**
     * 
     * @param markdownUrl 这篇文章的地址
     * @param isEspecial 是否是特殊的 0：不是，-1前面没有文章，1后面没有文章
     */
    constructor(public markdownUrl: string, public isEspecial: number) { }
}
export class ArticlesShowModel{
    /**
     * 展示文章
     * @param title 文章标题
     * @param header 标签
     */
    constructor(public title: string, public header: string) { }
}