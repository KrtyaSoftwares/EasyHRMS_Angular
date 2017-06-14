using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class ShiftSchedule
    {
        public int Id { get; set; }
        public int? ShiftId { get; set; }
        public int? EmployeeId { get; set; }
        public DateTime? ScheduleDate { get; set; }
        public int? Month { get; set; }
        public int? Year { get; set; }
        public int? ScheduleDetailId { get; set; }
    }
}
