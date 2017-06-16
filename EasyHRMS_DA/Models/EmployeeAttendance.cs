using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class EmployeeAttendance
    {
        public int Id { get; set; }
        public int? EmployeeId { get; set; }
        public int? ShiftId { get; set; }
        public int? DepartmentId { get; set; }
        public int? AcadmicYearId { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public string Attendance { get; set; }
        public string LeaveReason { get; set; }
        public int? LeaveTypeId { get; set; }
        public decimal? IsOnHalfDay { get; set; }
        public bool? IsChanged { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
    }
}
