using EasyHRMS_DA.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.Models
{
    public class WorkFlowVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int FormName { get; set; }
        public string TriggerName { get; set; }
        public bool Status { get; set; }
        public string CustomFormName { get; set; }
        public int MailAlertsCount { get; set; }
        public int TasksCount { get; set; }
        public int CheckListCount { get; set; }
    }

    public class WorkFlowWithActionVM
    {
        public WorkFlow WorkFlow { get; set; }
        public List<WorkFlowAction> WorkFlowActions { get; set; }
    }
}
