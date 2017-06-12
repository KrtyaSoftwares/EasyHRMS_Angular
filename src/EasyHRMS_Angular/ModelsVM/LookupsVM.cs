using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM
{
    public class LookupsVM
    {
        public int Id { get; set; }
        public string LookupName { get; set; }
        public int? LookupId { get; set; }
        public string Category { get; set; }
        public bool? IsActive { get; set; }
        public string Header { get; set; }
        public string ImageUrl { get; set; }
    }
}
