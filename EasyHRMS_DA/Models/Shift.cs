using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class Shift
    {
        public int Id { get; set; }
        public string ShiftName { get; set; }
        public TimeSpan? TimeIn { get; set; }
        public TimeSpan? TimeOut { get; set; }
        public TimeSpan? BreakTimeIn { get; set; }
        public TimeSpan? BreakTimeOut { get; set; }
        public int? LateTime { get; set; }
        public int? EarlierTime { get; set; }
        public TimeSpan? HalfdayTime { get; set; }
        public bool? IsShiftEnabled { get; set; }
        public bool? Inbuilt { get; set; }
    }
}
