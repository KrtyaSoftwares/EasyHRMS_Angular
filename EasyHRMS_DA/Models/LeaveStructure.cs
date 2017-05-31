using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class LeaveStructure
    {
        public int Id { get; set; }
        public string LeaveStructureName { get; set; }
        public int? MaxLeaveCount { get; set; }
        public bool? IsCarryForward { get; set; }
        public bool? Status { get; set; }
        public bool? IsAllowLeave { get; set; }
        public bool? IsDefault { get; set; }
    }
}
