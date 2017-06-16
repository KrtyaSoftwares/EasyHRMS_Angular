using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class PayrollShiftWiseAttendance
    {
        public int Id { get; set; }
        public int? ShiftId { get; set; }
        public TimeSpan? ShiftInTime { get; set; }
        public TimeSpan? ShiftOutTime { get; set; }
        public int? EmployeeId { get; set; }
        public DateTime? AttendanceDate { get; set; }
        public DateTime? InTime { get; set; }
        public DateTime? OutTime { get; set; }
        public int? PunchInTimeId { get; set; }
        public int? PunchOutTimeId { get; set; }
        public bool? IsNew { get; set; }
    }
}
