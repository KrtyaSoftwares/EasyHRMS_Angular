using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM
{
    public class CheckListVM
    {
        public int Id { get; set; }
        public int FormName { get; set; }
        public string ChecklistName { get; set; }
        public int? ChecklistOrder { get; set; }
        public int? TaskCount { get; set; }

        public string CustomFormName { get; set; }
    }
}
