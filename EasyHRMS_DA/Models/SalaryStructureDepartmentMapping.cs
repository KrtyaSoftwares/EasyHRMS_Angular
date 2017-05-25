using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class SalaryStructureDepartmentMapping
    {
        public int Id { get; set; }
        public int? SalaryStructureId { get; set; }
        public int? DepartmentId { get; set; }
    }
}
