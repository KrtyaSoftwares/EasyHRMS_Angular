using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM
{
    public class ShiftVM
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
