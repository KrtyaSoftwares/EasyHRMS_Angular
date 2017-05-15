using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.Models
{
    public class FormTabVM
    {
        public int Id { get; set; }
        public int FormId { get; set; }
        public string TabName { get; set; }
        public string Category { get; set; }
        public int? TabOrder { get; set; }
        public int? CategoryOrder { get; set; }
    }
}
