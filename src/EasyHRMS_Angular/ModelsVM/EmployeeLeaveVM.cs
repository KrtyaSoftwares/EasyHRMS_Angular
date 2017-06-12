using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.Models
{
    public class EmployeeLeaveVM
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public string LeaveReason { get; set; }
        public int? LeaveTypeId { get; set; }
        public string Status { get; set; }
        public DateTime? CreateDate { get; set; }
        public bool? IsHalfDay { get; set; }
    }

}
