import { Message } from "kafka-node";
import { Listener } from "./main.listener";
import { sendMailService } from "../../../service/send-mail.service";


export class MailListener extends Listener {
    async onMessage(message: Message) {
        console.log(`new message for user-management    ${message.value}`);
        const {  subject, to, } = JSON.parse(<string>message.value);
        await sendMailService.addMail(subject, to)
      
    }
}
