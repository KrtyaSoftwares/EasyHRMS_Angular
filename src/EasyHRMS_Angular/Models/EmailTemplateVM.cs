﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.Models
{
    public class EmailTemplateVM
    {
        public int Id { get; set; }
        public string TemplateName { get; set; }
        public string FormName { get; set; }
        public string Message { get; set; }
        public string FromAddress { get; set; }
        public string ToAddress { get; set; }
        public string Ccaddress { get; set; }
        public string Bccaddress { get; set; }
        public string ReplyToAddress { get; set; }
        public string EmailSubject { get; set; }
        public string Attachment { get; set; }
    }
}
