using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class CheckList
    {
        public int Id { get; set; }
        public string FormName { get; set; }
        public string ChecklistName { get; set; }
        public int? TaskId { get; set; }
        public int? ChecklistOrder { get; set; }
        public int? TaskOrder { get; set; }
    }
}
