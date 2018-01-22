export class MessageModel{
  constructor(
    public key: string,
    public value: string){
  }
  public ToString(){
    return `${this.key}${this.value}`;
  }
}
