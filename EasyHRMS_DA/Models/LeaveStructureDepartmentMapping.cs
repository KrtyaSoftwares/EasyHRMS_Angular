using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class LeaveStructureDepartmentMapping
    {
        public int Id { get; set; }
        public int? LeaveStructureId { get; set; }
        public int? DepartmentId { get; set; }
    }
}
