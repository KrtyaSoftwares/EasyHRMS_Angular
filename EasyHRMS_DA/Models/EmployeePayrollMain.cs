using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class EmployeePayrollMain
    {
        public int Id { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public int TotalEmployee { get; set; }
        public decimal TotalPayment { get; set; }
        public int Stage { get; set; }
        public decimal? WorkingDays { get; set; }
        public decimal? Holidays { get; set; }
        public decimal? WeekOff { get; set; }
    }
}
