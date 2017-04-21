using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.Models
{
    public class LookupListVM
    {
        public int Id { get; set; }
        public int LookupId { get; set; }
        public string FieldName { get; set; }
        public string DisplayName { get; set; }
        public int FieldOrder { get; set; }
        public string FieldType { get; set; }
        public bool? IsVisible { get; set; }
    }

}
