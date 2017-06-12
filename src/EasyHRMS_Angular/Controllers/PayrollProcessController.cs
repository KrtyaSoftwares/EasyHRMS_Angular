using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_Angular.ModelsVM;
using EasyHRMS_DA.Models;
using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;

namespace EasyHRMS_Angular.Controllers
{
    [Route("api/[controller]")]
    public class PayrollProcessController : Controller
    {
        private readonly Ehrms_ng2Context _context;

        public PayrollProcessController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET : /api/PayrollProcess/BindPayrollData
        [HttpGet("BindPayrollData")]
        public object BindPayrollData()
        {
            List<EmployeePayrollMain> list = new List<EmployeePayrollMain>();
            object result = null;
            try
            {
                using (_context)
                {
                    list = _context.EmployeePayrollMain
                            .FromSql("EXECUTE dbo.GetPayrollList")
                            .OrderByDescending(b => b.Year)
                            .ToList();

                    result = new
                    {
                        list = list,
                        error = "0",
                        msg = "Success"
                    };
                }
            }
            catch (Exception ex)
            {
                ex.ToString();
                result = new
                {
                    list = list,
                    error = "1",
                    msg = "Error",
                    excp = ex.ToString()
                };
            }
            return result;

            // PayrollProcessVM datamodel = new PayrollProcessVM();
            //var list = await datamodel.GetPayrollData();
            //return Json(new RequestResult
            //{
            //    State = RequestState.Success,
            //    Data = new
            //    {
            //        List=list
            //    }
            //});
        }


        // GET : /api/PayrollProcess/GetEmployeeBasicSalaryDetails
        [HttpPost("GetEmployeeBasicSalaryDetails/{structureId}/{departmenid}"), Produces("application/json")]
        public object GetEmployeeBasicSalaryDetails(string structureId, string departmenid)
        {
            var a = "";
            List<EmployeeDetails> list = new List<EmployeeDetails>();
            object result = null;
            try
            {
                using (_context)
                {
                    string sid = structureId;
                    string did = departmenid;

                    //list = _context.EmployeePayrollMain
                    //        .FromSql("EXECUTE dbo.GetBasicEmployeeSalarydata @StructureId,@Department", sid, did)
                    //        .ToList();
                    //a = _context.Database
                    //        .ExecuteSqlCommand("EXECUTE dbo.GetBasicEmployeeSalarydata @StructureId, @Department", parameters: new[] { sid, did }).ToString();

                    //a = _context.Database
                    //      .ExecuteSqlCommand("EXECUTE dbo.GetBasicEmployeeSalarydata @StructureId, @Department",
                    //          new SqlParameter("@StructureId", sid),
                    //          new SqlParameter("@Department", did)).ToString();

                    list = _context.EmployeeDetails
                            .FromSql("EXECUTE dbo.GetBasicEmployeeSalarydata @StructureId, @Department",
                              new SqlParameter("@StructureId", sid),
                              new SqlParameter("@Department", did))
                            .ToList();
                    result = new
                    {
                        list = list,
                        error = "0",
                        msg = "Success"
                    };
                }
            }
            catch (Exception ex)
            {
                ex.ToString();
                result = new
                {
                    list = a,
                    error = "1",
                    msg = "Error",
                    excp = ex.ToString()
                };
            }
            return result;

        }
    }
}