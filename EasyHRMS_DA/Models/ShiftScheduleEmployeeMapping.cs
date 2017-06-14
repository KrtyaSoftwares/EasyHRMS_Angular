using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class ShiftScheduleEmployeeMapping
    {
        public int Id { get; set; }
        public int? ScheduleId { get; set; }
        public int? EmployeeId { get; set; }
        public int? ShiftId { get; set; }
    }
}
