using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class Lookups
    {
        public int Id { get; set; }
        public string LookupName { get; set; }
        public int? LookupId { get; set; }
        public string Category { get; set; }
        public bool? IsActive { get; set; }
        public string Header { get; set; }
    }
}
