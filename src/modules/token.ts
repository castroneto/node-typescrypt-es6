import { createDecipher, createCipher } from "crypto";
import { ReadStream } from "fs";
export class Token {
    private algorithm = 'aes-128-cbc';
    private password = 'd6F3Efeq';
    public encrypt(data){
        var cipher = createCipher(this.algorithm, this.password)
        var crypted = cipher.update(JSON.stringify(data),'utf8','hex')
        crypted += cipher.final('hex');
        return crypted;
    }
       
    public decrypt(text){
        var decipher = createDecipher(this.algorithm, this.password)
        var dec = decipher.update(text,'hex','utf8')
        dec += decipher.final('utf8');
        return dec;
    }
}

