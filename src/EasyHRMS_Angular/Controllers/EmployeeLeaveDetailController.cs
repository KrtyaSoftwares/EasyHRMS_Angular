using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace EasyHRMS_Angular.Controllers
{
    public class EmployeeLeaveDetailController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        //// GET api/EmployeeLeaveDetail/GetEmployeeLeaveDetailList
        //[HttpGet("GetEmployeeLeaveDetailList"), Produces("application/json")]
        //public object GetEmployeeLeaveDetailList()
        //{
        //    object result = null;
        //    List<EmployeeLeaveDetailsListVM> list = new List<EmployeeLeaveDetailsListVM>();
        //    try
        //    {
        //        using (_context)
        //        {
        //            list = _context.EmployeeDetails.Select(x => new
        //            {
        //                Id = x.EmployeeId,
        //                EmployeeId = x.EmployeeId,
        //                EmployeeCode = x.F1,
        //                FullName = x.F2 + " " + x.F3,
        //                JoiningDate = x.F17,
        //                Department = x.F12,
        //                Position = x.F19,
        //                Ctc = _context.EmployeePayrollSalaryDetail.Where(y => y.EmployeeId == x.EmployeeId).FirstOrDefault().GrossSalary,
        //                //Ctc = _context.EmployeePayrollCategory.Where(q => _context.SalaryStructurePayrollCategoryMapping.Where(z => z.SalaryStructureId == _context.SalaryStructureDepartmentMapping.Where(y => y.DepartmentId == int.Parse(x.F12)).FirstOrDefault().SalaryStructureId).Select(p => p.PayrollCategoryId).ToList().Contains(q.Id)).ToList().Sum(r => r.Amount),
        //                //ProfessionalTax
        //            }).OrderBy(x => x.Id).ToList().Select(x => new EmployeeSalaryDetailsListVM()
        //            {
        //                Id = x.Id,
        //                EmployeeId = x.EmployeeId,
        //                EmployeeCode = x.EmployeeCode,
        //                FullName = x.FullName,
        //                JoiningDate = x.JoiningDate,
        //                Department = x.Department,
        //                Position = x.Position,
        //                Ctc = x.Ctc,
        //                //ProfessionalTax
        //            }).OrderBy(x => x.Id).ToList();

        //            //foreach (var SalaryDetail in list)
        //            //{
        //            //    if (SalaryDetail.Department != null && SalaryDetail.Department != "")
        //            //    {
        //            //        var SalaryStructureId = _context.SalaryStructureDepartmentMapping.Where(y => y.DepartmentId == int.Parse(SalaryDetail.Department)).FirstOrDefault().SalaryStructureId;
        //            //        if (SalaryStructureId != null)
        //            //        {
        //            //            List<int?> PayrollCategoryIds = _context.SalaryStructurePayrollCategoryMapping.Where(z => z.SalaryStructureId == SalaryStructureId).Select(p => p.PayrollCategoryId).ToList();
        //            //            var TotalAmount = _context.EmployeePayrollCategory.Where(q => PayrollCategoryIds.Contains(q.Id)).ToList().Sum(r => r.Amount);
        //            //            SalaryDetail.Ctc = TotalAmount;
        //            //        }
        //            //    }
        //            //}


        //            result = new
        //            {
        //                list,
        //                error = "0",
        //                msg = "Success"
        //            };
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        ex.ToString();
        //        result = new
        //        {
        //            list,
        //            error = "1",
        //            msg = ex.ToString()
        //        };
        //    }
        //    return result;
        //}

    }
}