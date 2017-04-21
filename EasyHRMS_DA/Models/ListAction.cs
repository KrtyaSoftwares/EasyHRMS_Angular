using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class ListAction
    {
        public int Id { get; set; }
        public int LookupId { get; set; }
        public string Action { get; set; }
        public string Route { get; set; }
    }
}
