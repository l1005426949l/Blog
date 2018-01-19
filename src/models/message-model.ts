export class MessageModel{
  constructor(
    public title: string,
    public content: string){
  }
  public ToString(){
    return `${this.title}${this.content}`;
  }
}
