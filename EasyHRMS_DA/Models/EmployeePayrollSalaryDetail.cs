using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class EmployeePayrollSalaryDetail
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public int? DepartmentId { get; set; }
        public int? SalaryStructureId { get; set; }
        public int? PayrollCategoryId { get; set; }
        public decimal? Amount { get; set; }
        public decimal? GrossSalary { get; set; }
        public bool? IsDeduction { get; set; }
        public bool? IsBasedOnAttandance { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
