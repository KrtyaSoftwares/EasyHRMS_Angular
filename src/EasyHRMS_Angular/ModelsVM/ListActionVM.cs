using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM
{
    public class ListActionVM
    {
        public int Id { get; set; }
        public int LookupId { get; set; }
        public string Action { get; set; }
        public string Route { get; set; }
    }
}
