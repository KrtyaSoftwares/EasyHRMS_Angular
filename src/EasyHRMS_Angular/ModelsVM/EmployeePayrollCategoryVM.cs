using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM
{
    public class EmployeePayrollCategoryVM
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public decimal? Percentage { get; set; }
        public string PercentageOf { get; set; }
        public decimal? Amount { get; set; }
        public bool? Status { get; set; }
        public bool? IsDeduction { get; set; }
        public string Description { get; set; }
        public bool? IsDefault { get; set; }
        public bool? TaxDeducted { get; set; }
        public bool? Insurationdeducted { get; set; }
        public bool? Pensiondeducted { get; set; }
        public bool? IsBasedOnAttandance { get; set; }
        public double? Total { get; set; }
        public int? Period { get; set; }
        public bool? Inbuilt { get; set; }
    }
}
