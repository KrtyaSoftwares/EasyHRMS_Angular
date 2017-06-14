using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class WorkingDays
    {
        public int Id { get; set; }
        public bool? Mon { get; set; }
        public bool? IsMonHalfDay { get; set; }
        public bool? Tue { get; set; }
        public bool? IsTueHalfDay { get; set; }
        public bool? Wed { get; set; }
        public bool? IsWedHalfDay { get; set; }
        public bool? Thers { get; set; }
        public bool? IsThersHalfDay { get; set; }
        public bool? Fri { get; set; }
        public bool? IsFriHalfDay { get; set; }
        public bool? Sat { get; set; }
        public bool? IsSatHalfDay { get; set; }
        public bool? Sun { get; set; }
        public bool? IsSunHalfDay { get; set; }
        public decimal? WorkingDays1 { get; set; }
        public bool? AllDay { get; set; }
    }
}
