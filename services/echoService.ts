
interface Message {
    message: string
  }

export class EchoService {
    
    async create(data: Message) {
        console.log("data",data)
        return data;
    }  
}