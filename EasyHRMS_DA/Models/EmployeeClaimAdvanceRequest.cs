using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class EmployeeClaimAdvanceRequest
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
