using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class LookupFormBuilder
    {
        public int Id { get; set; }
        public int FormId { get; set; }
        public string FormName { get; set; }
        public string DisplayName { get; set; }
        public string FieldName { get; set; }
        public string FieldType { get; set; }
        public bool? IsRequire { get; set; }
        public int? FieldOrder { get; set; }
        public string OptionValue { get; set; }
        public string DefaultValue { get; set; }
        public string Validator { get; set; }
        public string Placeholder { get; set; }
        public bool? IsDisplayInDd { get; set; }
    }
}
