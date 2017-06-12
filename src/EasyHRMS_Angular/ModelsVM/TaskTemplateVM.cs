using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM
{
    public class TaskTemplateVM
    {
        public int Id { get; set; }
        public string TemplateName { get; set; }
        public int FormName { get; set; }
        public string TaskName { get; set; }
        public string Description { get; set; }
        public string Priority { get; set; }
        public string TaskOwner { get; set; }
        public string DueDate { get; set; }

        public string CustomFormName { get; set; }
    }
}
