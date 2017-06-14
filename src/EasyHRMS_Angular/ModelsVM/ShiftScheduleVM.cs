using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM
{
    public class ShiftScheduleVM
    {
        public int Id { get; set; }
        public int? ShiftId { get; set; }
        public int? EmployeeId { get; set; }
        public string ScheduleType { get; set; }
        public bool? Monthly { get; set; }
        public bool? Weekly { get; set; }
        public bool? Daily { get; set; }
        public bool? ByWeekly { get; set; }
        public int? Year { get; set; }
        public int? Month { get; set; }
        public DateTime? ScheduleDate { get; set; }
        public int? ScheduleDetailId { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int EmployeeCount { get; set; }

        public List<int?> EmployeeIds { get; set; }
    }
}
