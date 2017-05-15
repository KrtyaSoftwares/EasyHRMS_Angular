using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class WorkFlowTask
    {
        public int Id { get; set; }
        public string TaskName { get; set; }
        public string Description { get; set; }
        public string TaskOwner { get; set; }
        public string DueDate { get; set; }
        public int? TemplateId { get; set; }
        public string FromAddress { get; set; }
        public string ToAddress { get; set; }
        public string Ccaddress { get; set; }
        public string Bccaddress { get; set; }
        public string ReplyToAddress { get; set; }
        public string EmailSubject { get; set; }
        public string Attachment { get; set; }
        public string Message { get; set; }
    }
}
