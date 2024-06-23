export class Message

{
    _id?: number=0
    text:string=''
    to !: number
    start !: Date
    end !:  Date
}