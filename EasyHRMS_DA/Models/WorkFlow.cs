using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class WorkFlow
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string FormName { get; set; }
        public string TriggerName { get; set; }
        public bool Status { get; set; }
    }
}
