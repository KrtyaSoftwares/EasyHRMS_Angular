using EasyHRMS_DA.Models;
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

    public class LookupDataListVM
    {
        public string LookupName { get; set; }
        public List<LookupDataVM> LdataList { get; set; }
       
    }

}
