using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class FormField
    {
        public int Id { get; set; }
        public int? FormId { get; set; }
        public int FormTabId { get; set; }
        public string DisplayName { get; set; }
        public string FieldName { get; set; }
        public string FieldType { get; set; }
        public bool? IsRequire { get; set; }
        public int? FieldOrder { get; set; }
        public string OptionValue { get; set; }
        public string DefaultValue { get; set; }
        public string Validator { get; set; }
        public string Placeholder { get; set; }
        public bool? IsActive { get; set; }
        public bool? IsVisibleInList { get; set; }
        public int? ListOrder { get; set; }
        public int? LookupId { get; set; }
    }
}
