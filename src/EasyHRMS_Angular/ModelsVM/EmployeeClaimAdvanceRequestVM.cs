using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM
{
    public class EmployeeClaimAdvanceRequestVM
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Purpose { get; set; }
        public DateTime? Date { get; set; }
        public decimal? Amount { get; set; }
        public string Status { get; set; }
        public int? EmployeeId { get; set; }
        public string Type { get; set; }
        public string Documents { get; set; }
        public DateTime? PayDate { get; set; }
    }
}
