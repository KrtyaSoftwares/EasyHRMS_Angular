using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.Models
{
    public class HolidayVM
    {
        public int HolidayId { get; set; }
        public DateTime? HolidayDate { get; set; }
        public string HolidayDesc { get; set; }
        public bool IsActive { get; set; }
    }
}
