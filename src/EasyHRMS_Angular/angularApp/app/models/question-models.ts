export class QuestionModels<T>{
    value: T;
    key: string;
    text: string;
    required: boolean;
    order: number;
    controlType: string;
}