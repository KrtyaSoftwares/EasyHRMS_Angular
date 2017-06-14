using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class ShiftScheduleDetail
    {
        public int Id { get; set; }
        public string ScheduleType { get; set; }
        public bool? Monthly { get; set; }
        public bool? Weekly { get; set; }
        public bool? Daily { get; set; }
        public bool? ByWeekly { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? ShiftId { get; set; }
    }
}
