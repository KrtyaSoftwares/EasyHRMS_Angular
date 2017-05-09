using System;
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
    }
}
