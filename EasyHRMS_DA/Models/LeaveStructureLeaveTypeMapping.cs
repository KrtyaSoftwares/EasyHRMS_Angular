using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class LeaveStructureLeaveTypeMapping
    {
        public int Id { get; set; }
        public int? LeaveStructureId { get; set; }
        public int? LeaveTypeId { get; set; }
    }
}
