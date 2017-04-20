using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class Holiday
    {
        public int HolidayId { get; set; }
        public DateTime? HolidayDate { get; set; }
        public string HolidayDesc { get; set; }
        public bool IsActive { get; set; }
    }
}
