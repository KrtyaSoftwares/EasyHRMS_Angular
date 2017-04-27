using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class ListSearch
    {
        public int Id { get; set; }
        public int FormId { get; set; }
        public string FieldName { get; set; }
        public string FieldType { get; set; }
        public int? LookupId { get; set; }
        public int? FieldOrder { get; set; }
    }
}
