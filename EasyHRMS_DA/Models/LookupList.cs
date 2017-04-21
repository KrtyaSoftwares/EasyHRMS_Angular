using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class LookupList
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
