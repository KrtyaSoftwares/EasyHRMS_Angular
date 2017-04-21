using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class LookupData
    {
        public int Id { get; set; }
        public int LookupId { get; set; }
        public int RowId { get; set; }
        public string FieldName { get; set; }
        public string Value { get; set; }
    }
}
