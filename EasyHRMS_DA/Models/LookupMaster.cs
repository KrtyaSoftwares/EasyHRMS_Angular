using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class LookupMaster
    {
        public int Id { get; set; }
        public string LookupName { get; set; }
        public int? LookupId { get; set; }
    }
}
