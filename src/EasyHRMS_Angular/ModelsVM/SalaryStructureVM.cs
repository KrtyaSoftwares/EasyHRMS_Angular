using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM
{
    public class SalaryStructureVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool? IsActive { get; set; }
        public List<int?> DepartmentIds { get; set; }
        public List<int?> PayrollCategoryIds { get; set; }
    }
}
