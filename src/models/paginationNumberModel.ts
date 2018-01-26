/**
 * 分页页码实体
 */
export class PaginationNumberModel {
    /**
     * 
     * @param pNumber 要显示的页码
     * @param pindex 选中的页码
     */
    constructor(public pNumber: Array<string> = new Array<string>(), public pindex: number = -1) { }
}