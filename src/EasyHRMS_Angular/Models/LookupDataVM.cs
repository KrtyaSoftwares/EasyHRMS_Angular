using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.Models
{
    public class LookupDataVM
    {
        public int Id { get; set; }
        public int LookupId { get; set; }
        public int RowId { get; set; }
        public string FieldName { get; set; }
        public string Value { get; set; }
    }
}
