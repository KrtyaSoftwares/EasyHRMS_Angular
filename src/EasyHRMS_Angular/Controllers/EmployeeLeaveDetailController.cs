using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_Angular.ModelsVM;
using EasyHRMS_DA.Models;

namespace EasyHRMS_Angular.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeLeaveDetailController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public EmployeeLeaveDetailController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET api/EmployeeLeaveDetail/GetEmployeeLeaveDetailList
        [HttpGet("GetEmployeeLeaveDetailList"), Produces("application/json")]
        public object GetEmployeeLeaveDetailList()
        {
            object result = null;
            List<EmployeeLeaveDetailsListVM> list = new List<EmployeeLeaveDetailsListVM>();
            try
            {
                using (_context)
                {
                    list = _context.EmployeeDetails.Select(x => new
                    {
                        Id = x.EmployeeId,
                        EmployeeId = x.EmployeeId,
                        EmployeeCode = x.F1,
                        FullName = x.F2 + " " + x.F3,
                        Branch = x.F13,
                        BranchName = _context.LookupData.Where(z => z.RowId == int.Parse(x.F13) && z.FieldName == "BranchName").Select(p => p.FieldName).ToString(),
                        //JoiningDate = x.F17,
                        Department = x.F12,
                        DepartmentName = _context.LookupData.Where(z => z.RowId == int.Parse(x.F12) && z.FieldName == "DepartmentName").Select(p => p.FieldName).ToString(),
                        //Position = x.F19,
                        //Ctc = _context.EmployeePayrollSalaryDetail.Where(y => y.EmployeeId == x.EmployeeId).FirstOrDefault().GrossSalary,
                        //Ctc = _context.EmployeePayrollCategory.Where(q => _context.SalaryStructurePayrollCategoryMapping.Where(z => z.SalaryStructureId == _context.SalaryStructureDepartmentMapping.Where(y => y.DepartmentId == int.Parse(x.F12)).FirstOrDefault().SalaryStructureId).Select(p => p.PayrollCategoryId).ToList().Contains(q.Id)).ToList().Sum(r => r.Amount),
                        //ProfessionalTax
                    }).OrderBy(x => x.Id).ToList().Select(x => new EmployeeLeaveDetailsListVM()
                    {
                        Id = x.Id,
                        EmployeeId = x.EmployeeId,
                        EmployeeCode = x.EmployeeCode,
                        FullName = x.FullName,
                        Branch = x.Branch,
                        BranchName = x.BranchName,
                        //JoiningDate = x.JoiningDate,
                        Department = x.Department,
                        DepartmentName = x.DepartmentName,
                        //Position = x.Position,
                        //Ctc = x.Ctc,
                        //ProfessionalTax
                    }).OrderBy(x => x.Id).ToList();

                    //foreach (var SalaryDetail in list)
                    //{
                    //    if (SalaryDetail.Department != null && SalaryDetail.Department != "")
                    //    {
                    //        var SalaryStructureId = _context.SalaryStructureDepartmentMapping.Where(y => y.DepartmentId == int.Parse(SalaryDetail.Department)).FirstOrDefault().SalaryStructureId;
                    //        if (SalaryStructureId != null)
                    //        {
                    //            List<int?> PayrollCategoryIds = _context.SalaryStructurePayrollCategoryMapping.Where(z => z.SalaryStructureId == SalaryStructureId).Select(p => p.PayrollCategoryId).ToList();
                    //            var TotalAmount = _context.EmployeePayrollCategory.Where(q => PayrollCategoryIds.Contains(q.Id)).ToList().Sum(r => r.Amount);
                    //            SalaryDetail.Ctc = TotalAmount;
                    //        }
                    //    }
                    //}


                    result = new
                    {
                        list,
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
                    list,
                    error = "1",
                    msg = ex.ToString()
                };
            }
            return result;
        }

    }
}