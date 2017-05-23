using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class TaskTemplate
    {
        public int Id { get; set; }
        public string TemplateName { get; set; }
        public int FormName { get; set; }
        public string TaskName { get; set; }
        public string Description { get; set; }
        public string Priority { get; set; }
        public string TaskOwner { get; set; }
        public string DueDate { get; set; }
    }
}
