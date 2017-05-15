using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class MailAlert
    {
        public int Id { get; set; }
        public string FormName { get; set; }
        public string MailAlertName { get; set; }
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
