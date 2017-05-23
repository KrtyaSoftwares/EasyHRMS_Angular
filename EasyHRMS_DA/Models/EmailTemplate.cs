using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class EmailTemplate
    {
        public int Id { get; set; }
        public string TemplateName { get; set; }
        public int FormName { get; set; }
        public string Message { get; set; }
    }
}
