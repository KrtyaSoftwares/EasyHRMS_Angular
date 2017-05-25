using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_DA.Models;
using EasyHRMS_Angular.ModelsVM;

namespace EasyHRMS_Angular.Controllers
{
    public class SalaryStructureController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public SalaryStructureController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        //// GET: api/SalaryStructure/GetAllSalaryStructure
        //[HttpGet("GetAllSalaryStructure"), Produces("application/json")]
        //public object GetAllSalaryStructure()
        //{
        //    //List<EmailTemplate> list = new List<EmailTemplate>();
        //    List<SalaryStructureVM> list = new List<SalaryStructureVM>();
        //    object result = null;
        //    try
        //    {
        //        using (_context)
        //        {
        //            //list = _context.EmailTemplate.ToList();
        //            //list = _context.EmployeePayrollCategory.Select(x => new
        //            //{
        //            //    Id = x.Id,
        //            //    TemplateName = x.TemplateName,
        //            //    FormName = x.FormName,
        //            //    Message = x.Message,
        //            //    CustomFormName = _context.Forms.Where(z => z.Id == x.FormName).FirstOrDefault().FormName,

        //            //}).ToList().Select(y => new EmployeePayrollCategoryVM
        //            //{
        //            //    Id = y.Id,
        //            //    TemplateName = y.TemplateName,
        //            //    FormName = y.FormName,
        //            //    Message = y.Message,
        //            //    CustomFormName = y.CustomFormName

        //            //}).ToList();

        //            list = _context.SalaryStructure.Select(y => new SalaryStructureVM
        //            {
        //                Id = y.Id,
        //                Name = y.Name,
        //                Description = y.Description,
        //                IsActive = y.IsActive

        //            }).ToList();

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
        //            msg = "Error",
        //            excp = ex.ToString()
        //        };
        //    }
        //    return result;
        //}

        //// GET api/SalaryStructure/GetSalaryStructureById/5
        //[HttpGet("GetSalaryStructureById/{id}"), Produces("application/json")]
        //public object GetSalaryStructureById(int id)
        //{
        //    object result = null;

        //    SalaryStructure objSalaryStructure = new SalaryStructure();
        //    List<int?> DepartmentIds = new List<int?>();
        //    List<int?> PayrollCategoryIds = new List<int?>();
        //    try
        //    {
        //        using (_context)
        //        {
        //            objSalaryStructure = _context.SalaryStructure.FirstOrDefault(x => x.Id == id);
        //            DepartmentIds = _context.SalaryStructureDepartmentMapping.Where(y => y.SalaryStructureId == id).Select(z => z.DepartmentId).ToList();
        //            PayrollCategoryIds = _context.SalaryStructurePayrollCategoryMapping.Where(y => y.SalaryStructureId == id).Select(z => z.PayrollCategoryId).ToList();
        //            result = new
        //            {
        //                objSalaryStructure,
        //                DepartmentIds,
        //                PayrollCategoryIds,
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
        //            objSalaryStructure,
        //            DepartmentIds,
        //            PayrollCategoryIds,
        //            error = "1",
        //            msg = "Error"
        //        };
        //    }
        //    return result;
        //}

        //// POST api/SalaryStructure/CreateSalaryStructure
        //[HttpPost, Route("CreateSalaryStructure"), Produces("application/json")]
        //public object CreateSalaryStructure([FromBody]SalaryStructureVM model)
        //{
        //    object result = null;
        //    string message = "";
        //    string errorcode = "";
        //    string excp = "";
        //    if (model == null)
        //    {
        //        return BadRequest();
        //    }
        //    using (_context)
        //    {
        //        using (var _ctxTransaction = _context.Database.BeginTransaction())
        //        {
        //            try
        //            {
        //                SalaryStructure objSalaryStructure = new SalaryStructure();
        //                objSalaryStructure.Name = model.Name;
        //                objSalaryStructure.Description = model.Description;
        //                objSalaryStructure.IsActive = model.IsActive;
        //                _context.SalaryStructure.Add(objSalaryStructure);
        //                //await _ctx.SaveChangesAsync();
        //                _context.SaveChanges();

        //                if (model.DepartmentIds.Count > 0)
        //                {
        //                    foreach (int DepartmentId in model.DepartmentIds)
        //                    {

        //                        object objMapping = null;
        //                        objMapping = new{ SalaryStructureId = objSalaryStructure.Id, DepartmentId = DepartmentId }
        //                    }
        //                }
                        
        //                _ctxTransaction.Commit();
        //                message = "Saved Successfully";
        //                errorcode = "0";
        //            }
        //            catch (Exception e)
        //            {
        //                _ctxTransaction.Rollback();
        //                e.ToString();
        //                message = "Saved Error";
        //                errorcode = "1";
        //                excp = e.ToString();
        //            }

        //            result = new
        //            {
        //                error = errorcode,
        //                msg = message,
        //                excp = excp
        //            };
        //        }
        //    }
        //    return result;
        //}

        //// POST api/SalaryStructure/UpdateSalaryStructure/5
        //[HttpPost, Route("UpdateSalaryStructure/{id}")]
        //public object UpdateSalaryStructure(int id, [FromBody]EmployeePayrollCategory model)
        //{
        //    object result = null; string message = ""; string errorcode = ""; string excp = "";
        //    if (model == null)
        //    {
        //        return BadRequest();
        //    }
        //    using (_context)
        //    {
        //        using (var _ctxTransaction = _context.Database.BeginTransaction())
        //        {
        //            try
        //            {
        //                var entityUpdate = _context.EmployeePayrollCategory.FirstOrDefault(x => x.Id == id);

        //                if (entityUpdate != null)
        //                {
        //                    entityUpdate.CategoryName = model.CategoryName;
        //                    entityUpdate.Percentage = model.Percentage;
        //                    entityUpdate.PercentageOf = model.PercentageOf;
        //                    entityUpdate.Amount = model.Amount;
        //                    entityUpdate.Status = model.Status;
        //                    entityUpdate.IsDeduction = model.IsDeduction;
        //                    entityUpdate.Description = model.Description;
        //                    entityUpdate.IsDefault = model.IsDefault;
        //                    entityUpdate.TaxDeducted = model.TaxDeducted;
        //                    entityUpdate.Insurationdeducted = model.Insurationdeducted;
        //                    entityUpdate.Pensiondeducted = model.Pensiondeducted;
        //                    entityUpdate.IsBasedOnAttandance = model.IsBasedOnAttandance;
        //                    entityUpdate.Total = model.Total;
        //                    entityUpdate.Period = model.Period;
        //                    entityUpdate.Inbuilt = model.Inbuilt;

        //                    _context.SaveChanges();
        //                }

        //                _ctxTransaction.Commit();
        //                message = "Entry Updated";
        //                errorcode = "0";
        //            }
        //            catch (Exception e)
        //            {
        //                _ctxTransaction.Rollback(); e.ToString();
        //                message = "Entry Update Failed!!";
        //                errorcode = "1";
        //                excp = e.ToString();
        //            }

        //            result = new
        //            {
        //                error = errorcode,
        //                msg = message,
        //                excp = excp
        //            };
        //        }
        //    }
        //    return result;
        //}

        //// POST api/SalaryStructure/CreateUpdateSalaryStructure
        //[HttpPost, Route("CreateUpdateSalaryStructure/{id}"), Produces("application/json")]
        //public object CreateUpdateSalaryStructure(int id, [FromBody]EmployeePayrollCategory model)
        //{
        //    object result = null;
        //    string message = "";
        //    string errorcode = "";
        //    string excp = "";
        //    if (model == null)
        //    {
        //        return BadRequest();
        //    }
        //    using (_context)
        //    {
        //        using (var _ctxTransaction = _context.Database.BeginTransaction())
        //        {
        //            try
        //            {
        //                if (id != 0)
        //                {
        //                    var entityUpdate = _context.EmployeePayrollCategory.FirstOrDefault(x => x.Id == id);

        //                    if (entityUpdate != null)
        //                    {
        //                        entityUpdate.CategoryName = model.CategoryName;
        //                        entityUpdate.Percentage = model.Percentage;
        //                        entityUpdate.PercentageOf = model.PercentageOf;
        //                        entityUpdate.Amount = model.Amount;
        //                        entityUpdate.Status = model.Status;
        //                        entityUpdate.IsDeduction = model.IsDeduction;
        //                        entityUpdate.Description = model.Description;
        //                        entityUpdate.IsDefault = model.IsDefault;
        //                        entityUpdate.TaxDeducted = model.TaxDeducted;
        //                        entityUpdate.Insurationdeducted = model.Insurationdeducted;
        //                        entityUpdate.Pensiondeducted = model.Pensiondeducted;
        //                        entityUpdate.IsBasedOnAttandance = model.IsBasedOnAttandance;
        //                        entityUpdate.Total = model.Total;
        //                        entityUpdate.Period = model.Period;
        //                        entityUpdate.Inbuilt = model.Inbuilt;

        //                        _context.SaveChanges();
        //                    }
        //                    _ctxTransaction.Commit();
        //                    message = "Entry Updated";
        //                    errorcode = "0";
        //                }
        //                else
        //                {
        //                    _context.EmployeePayrollCategory.Add(model);
        //                    //await _ctx.SaveChangesAsync();
        //                    _context.SaveChanges();
        //                    _ctxTransaction.Commit();
        //                    message = "Saved Successfully";
        //                    errorcode = "0";
        //                }

        //            }
        //            catch (Exception e)
        //            {
        //                _ctxTransaction.Rollback();
        //                e.ToString();
        //                message = "Saved Error";
        //                errorcode = "1";
        //                excp = e.ToString();
        //            }

        //            result = new
        //            {
        //                error = errorcode,
        //                msg = message,
        //                excp = excp
        //            };
        //        }
        //    }
        //    return result;
        //}

        //// DELETE api/SalaryStructure/DeleteSalaryStructureById/5
        //[HttpGet, Route("DeleteSalaryStructureById/{id}")]
        //public object DeleteSalaryStructureById(int id)
        //{
        //    object result = null;
        //    string message = "";
        //    string errorcode = "";
        //    string excp = "";
        //    using (_context)
        //    {
        //        using (var _ctxTransaction = _context.Database.BeginTransaction())
        //        {
        //            try
        //            {
        //                var idToRemove = _context.EmployeePayrollCategory.SingleOrDefault(x => x.Id == id);
        //                if (idToRemove != null)
        //                {
        //                    _context.EmployeePayrollCategory.Remove(idToRemove);
        //                    _context.SaveChanges();
        //                }
        //                _ctxTransaction.Commit();
        //                message = "Deleted Successfully";
        //                errorcode = "0";
        //            }
        //            catch (Exception e)
        //            {
        //                _ctxTransaction.Rollback(); e.ToString();
        //                message = "Error on Deleting!!";
        //                errorcode = "1";
        //                excp = e.ToString();
        //            }

        //            result = new
        //            {
        //                error = errorcode,
        //                msg = message,
        //                excp = excp
        //            };
        //        }
        //    }
        //    return result;
        //}

    }
}