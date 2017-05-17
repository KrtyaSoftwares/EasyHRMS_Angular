export class WorkflowTasks {
    id: number;
    taskName: string;
    description: string;
    taskOwner: string;
    dueDate: string;
    templateId: number;
    fromAddress: string;
    toAddress: string;
    ccaddress: string;
    bccaddress: string;
    replyToAddress: string;
    emailSubject: string;
    attachment: string[];
    message: string;
    checkListId: number;
    taskOrder: number;
}