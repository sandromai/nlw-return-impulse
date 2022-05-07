import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e96a4d6fc41112",
    pass: "fbb608152ba48c"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Sandro Mai <sandromai6@gmail.com',
      subject,
      html: body
    });
  };
}
