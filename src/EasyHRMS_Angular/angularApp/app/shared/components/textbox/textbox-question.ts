import {QuestionBase} from '../../../models/question-base';

export class TextboxQuestion extends QuestionBase<string>{

    type:string;
    controlType = 'textbox';

    constructor(){
        super();
    }

}