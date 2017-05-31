using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM
{
    public class EmployeeLeaveDetailsListVM
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        //public int? DepartmentId { get; set; }
        //public int? SalaryStructureId { get; set; }
        public string EmployeeCode { get; set; }
        public string FullName { get; set; }
        public string Branch { get; set; }
        public string BranchName { get; set; }
        public string Department { get; set; }
        public string DepartmentName { get; set; }

        public int ClCount { get; set; }
        public int TotalLeaveMonthly { get; set; }
        public int TotalLeaveYearly { get; set; }
        public int CF { get; set; }
    }
}
