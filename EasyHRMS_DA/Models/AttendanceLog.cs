using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class AttendanceLog
    {
        public int Id { get; set; }
        public int EmpId { get; set; }
        public TimeSpan? PunchTime { get; set; }
        public DateTime? InTime { get; set; }
        public DateTime? OutTime { get; set; }
        public string LogHours { get; set; }
        public DateTime? AttendanceDate { get; set; }
    }
}
