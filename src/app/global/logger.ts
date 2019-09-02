export class Logger
{
    static islog = true;
    public static log(message:string)
    {
        if(this.islog)
            console.log(message);
    }
}