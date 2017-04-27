using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class FormTab
    {
        public int Id { get; set; }
        public int FormId { get; set; }
        public string TabName { get; set; }
        public string Category { get; set; }
        public int? TabOrder { get; set; }
        public int? CategoryOrder { get; set; }
    }
}
