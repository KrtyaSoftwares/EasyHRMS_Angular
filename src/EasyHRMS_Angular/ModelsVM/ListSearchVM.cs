using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.Models
{
    public class ListSearchVM
    {
        public int Id { get; set; }
        public int FormId { get; set; }
        public string FieldName { get; set; }
        public string FieldType { get; set; }
        public int? LookupId { get; set; }
        public int? FieldOrder { get; set; }
    }
}
