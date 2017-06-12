using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EasyHRMS_DA.Models;
using Microsoft.EntityFrameworkCore;

namespace EasyHRMS_Angular.ModelsVM
{
    //private readonly Ehrms_ng2Context _context;

    public class PayrollProcessVM
    {
        public int EmployeeID;
        public string EmployeeName;
        public string F17;
        public string F12;
        public string F19;
        public string Amount;
        public string CategoryName;

        public static List<EmployeePayrollMain> GetPayrollData()
        {
            using (var context = new Ehrms_ng2Context())
            {
                var data = context.EmployeePayrollMain
                            .FromSql("EXECUTE dbo.GetPayrollList")
                            .OrderByDescending(b => b.Year)
                            .ToList();
                // [ Old Method ]
                //var data = (from d in context.GetPayrollList()
                //            orderby d.Year descending
                //            select d).ToList();
                return data;
            }
        }
    }

    
}
