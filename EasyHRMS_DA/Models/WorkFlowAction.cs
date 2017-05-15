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
        public int? MailAlertId { get; set; }
        public int? TaskId { get; set; }
        public int? CheckListId { get; set; }
    }
}
