using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM
{
    public class EmployeePayrollSalaryDetailVM
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

    public class EmployeeSalaryDetailsListVM
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        //public int? DepartmentId { get; set; }
        //public int? SalaryStructureId { get; set; }
        public string EmployeeCode { get; set; }
        public string FullName { get; set; }
        public string JoiningDate { get; set; }
        public string Department { get; set; }
        public string Position { get; set; }
        public decimal? Ctc { get; set; }
        public decimal? ProfessionalTax { get; set; }
    }

}
