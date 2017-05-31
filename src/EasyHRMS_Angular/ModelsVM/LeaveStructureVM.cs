using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM
{
    public class LeaveStructureVM
    {
        public int Id { get; set; }
        public string LeaveStructureName { get; set; }
        public int? MaxLeaveCount { get; set; }
        public bool? IsCarryForward { get; set; }
        public bool? Status { get; set; }
        public bool? IsAllowLeave { get; set; }
        public bool? IsDefault { get; set; }

        public List<int?> DepartmentIds { get; set; }
        public List<int?> LeaveTypeIds { get; set; }
    }
}
