using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class WorkFlowAction
    {
        public int Id { get; set; }
        public int WorkFlowId { get; set; }
        public string Action { get; set; }
        public int TemplateId { get; set; }
        public int ActionOrder { get; set; }
        public string FromAddress { get; set; }
        public string ToAddress { get; set; }
        public string Ccaddress { get; set; }
        public string Bccaddress { get; set; }
        public string ReplyToAddress { get; set; }
        public string EmailSubject { get; set; }
        public string Attachment { get; set; }
    }
}
