import mongoose, { Model } from "mongoose";
import { dbConnect } from "../db/connect";

class SendMailService {

    async addMail(subject: string, to: string) {
        const sendMail = process.env.MAIL_USER
        console.log(sendMail);

        var doc1 = new Model({ subject, from: sendMail, to });
        doc1.save(function (err, doc) {
            if (err) return console.error(err);
            console.log("Document inserted succussfully!");
        })

    }
}
export const sendMailService = new SendMailService()


