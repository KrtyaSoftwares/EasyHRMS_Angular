using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.Models
{
    public class CheckListVM
    {
        public int Id { get; set; }
        public string FormName { get; set; }
        public string ChecklistName { get; set; }
        public int? ChecklistOrder { get; set; }
        public int? TaskCount { get; set; }
    }
}
