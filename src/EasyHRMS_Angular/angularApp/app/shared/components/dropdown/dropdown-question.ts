import {QuestionBase} from '../../../models/question-base';

export class DropDownQuestion extends QuestionBase<string>{

    options : any[];
    controlType = 'dropdown';

    constructor(){
        super();
    }
}