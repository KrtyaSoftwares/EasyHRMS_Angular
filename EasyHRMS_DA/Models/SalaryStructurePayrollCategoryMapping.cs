using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class SalaryStructurePayrollCategoryMapping
    {
        public int Id { get; set; }
        public int? SalaryStructureId { get; set; }
        public int? PayrollCategoryId { get; set; }
    }
}
