using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM
{
    public class WorkFlowActionVM
    {
        public int Id { get; set; }
        public int WorkFlowId { get; set; }
        public string Action { get; set; }
        public int TemplateId { get; set; }
        //public string TemplateId { get; set; }
        public int ActionOrder { get; set; }
        public int? MailAlertId { get; set; }
        public int? TaskId { get; set; }
        public int? CheckListId { get; set; }
        public string Name { get; set; }
        //public string FromAddress { get; set; }
        //public string ToAddress { get; set; }
        //public string Ccaddress { get; set; }
        //public string Bccaddress { get; set; }
        //public string ReplyToAddress { get; set; }
        //public string EmailSubject { get; set; }
        //public string Attachment { get; set; }
    }
}
