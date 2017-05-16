export class MailAlert {
    id: number;
    formName: string;
    mailAlertName: string;
    templateId: number;
    fromAddress: string;
    toAddress: string;
    ccaddress: string;
    bccaddress: string;
    replyToAddress: string;
    emailSubject: string;
    attachment: string[];
    message: string;
}