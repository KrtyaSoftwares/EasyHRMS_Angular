using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_DA.Models;
using EasyHRMS_Angular.ModelsVM;

namespace EasyHRMS_Angular.Controllers
{
    [Route("api/[controller]")]
    public class EmployeePayrollCategoryController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public EmployeePayrollCategoryController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET: api/EmployeePayrollCategory/GetAllEmployeePayrollCategory
        [HttpGet("GetAllEmployeePayrollCategory"), Produces("application/json")]
        public object GetAllEmployeePayrollCategory()
        {
            //List<EmailTemplate> list = new List<EmailTemplate>();
            List<EmployeePayrollCategoryVM> list = new List<EmployeePayrollCategoryVM>();
            object result = null;
            try
            {
                using (_context)
                {
                    //list = _context.EmailTemplate.ToList();
                    //list = _context.EmployeePayrollCategory.Select(x => new
                    //{
                    //    Id = x.Id,
                    //    TemplateName = x.TemplateName,
                    //    FormName = x.FormName,
                    //    Message = x.Message,
                    //    CustomFormName = _context.Forms.Where(z => z.Id == x.FormName).FirstOrDefault().FormName,

                    //}).ToList().Select(y => new EmployeePayrollCategoryVM
                    //{
                    //    Id = y.Id,
                    //    TemplateName = y.TemplateName,
                    //    FormName = y.FormName,
                    //    Message = y.Message,
                    //    CustomFormName = y.CustomFormName

                    //}).ToList();

                    list = _context.EmployeePayrollCategory.Select(y => new EmployeePayrollCategoryVM
                    {
                        Id = y.Id,
                        CategoryName = y.CategoryName,
                        Type = y.Type,
                        Percentage = y.Percentage,
                        PercentageOf = y.PercentageOf,
                        Amount = y.Amount,
                        Status = y.Status,
                        IsDeduction = y.IsDeduction,
                        Description = y.Description,
                        IsDefault = y.IsDefault,
                        TaxDeducted = y.TaxDeducted,
                        Insurationdeducted = y.Insurationdeducted,
                        Pensiondeducted = y.Pensiondeducted,
                        IsBasedOnAttandance = y.IsBasedOnAttandance,
                        Total = y.Total,
                        Period = y.Period,
                        Inbuilt = y.Inbuilt

                    }).ToList();

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
                    msg = "Error",
                    excp = ex.ToString()
                };
            }
            return result;
        }
        
        // GET api/EmployeePayrollCategory/GetEmployeePayrollCategoryById/5
        [HttpGet("GetEmployeePayrollCategoryById/{id}"), Produces("application/json")]
        public object GetEmployeePayrollCategoryById(int id)
        {
            object result = null;

            EmployeePayrollCategory objEmployeePayrollCategory = new EmployeePayrollCategory();
            try
            {
                using (_context)
                {
                    objEmployeePayrollCategory = _context.EmployeePayrollCategory.FirstOrDefault(x => x.Id == id);

                    result = new
                    {
                        objEmployeePayrollCategory,
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
                    objEmployeePayrollCategory,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }

        // POST api/EmployeePayrollCategory/CreateEmployeePayrollCategory
        [HttpPost, Route("CreateEmployeePayrollCategory"), Produces("application/json")]
        public object CreateEmployeePayrollCategory([FromBody]EmployeePayrollCategory model)
        {
            object result = null;
            string message = "";
            string errorcode = "";
            string excp = "";
            if (model == null)
            {
                return BadRequest();
            }
            using (_context)
            {
                using (var _ctxTransaction = _context.Database.BeginTransaction())
                {
                    try
                    {
                        if(model.Type == true)
                        {
                            decimal? TotalAmount = new decimal();
                            if(model.PercentageOf != null)
                            {
                                List<int> PayrollCategoryIds = model.PercentageOf.Split(',').Select(x => int.Parse(x)).ToList();
                                Decimal? Amount = _context.EmployeePayrollCategory.Where(y => PayrollCategoryIds.Contains(y.Id)).Select(z => z.Amount).ToList().Sum();
                                if(Amount != null)
                                {
                                    if(model.Percentage != null)
                                    {
                                        TotalAmount = Amount * model.Percentage / 100;
                                    }
                                }
                            }
                            if(TotalAmount != null)
                            {
                                model.Amount = TotalAmount;
                            }
                        }
                        _context.EmployeePayrollCategory.Add(model);
                        //await _ctx.SaveChangesAsync();
                        _context.SaveChanges();
                        _ctxTransaction.Commit();
                        message = "Saved Successfully";
                        errorcode = "0";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback();
                        e.ToString();
                        message = "Saved Error";
                        errorcode = "1";
                        excp = e.ToString();
                    }

                    result = new
                    {
                        error = errorcode,
                        msg = message,
                        excp = excp
                    };
                }
            }
            return result;
        }

        // POST api/EmployeePayrollCategory/UpdateEmployeePayrollCategory/5
        [HttpPost, Route("UpdateEmployeePayrollCategory/{id}")]
        public object UpdateEmployeePayrollCategory(int id, [FromBody]EmployeePayrollCategory model)
        {
            object result = null; string message = ""; string errorcode = ""; string excp = "";
            if (model == null)
            {
                return BadRequest();
            }
            using (_context)
            {
                using (var _ctxTransaction = _context.Database.BeginTransaction())
                {
                    try
                    {
                        var entityUpdate = _context.EmployeePayrollCategory.FirstOrDefault(x => x.Id == id);

                        if (entityUpdate != null)
                        {
                            if (model.Type == true)
                            {
                                decimal? TotalAmount = new decimal();
                                if (model.PercentageOf != null)
                                {
                                    List<int> PayrollCategoryIds = model.PercentageOf.Split(',').Select(x => int.Parse(x)).ToList();
                                    Decimal? Amount = _context.EmployeePayrollCategory.Where(y => PayrollCategoryIds.Contains(y.Id)).Select(z => z.Amount).ToList().Sum();
                                    if (Amount != null)
                                    {
                                        if (model.Percentage != null)
                                        {
                                            TotalAmount = Amount * model.Percentage / 100;
                                        }
                                    }
                                }
                                if (TotalAmount != null)
                                {
                                    model.Amount = TotalAmount;
                                }
                            }
                            entityUpdate.CategoryName = model.CategoryName;
                            entityUpdate.Type = model.Type;
                            entityUpdate.Percentage = model.Percentage;
                            entityUpdate.PercentageOf = model.PercentageOf;
                            entityUpdate.Amount = model.Amount;
                            entityUpdate.Status = model.Status;
                            entityUpdate.IsDeduction = model.IsDeduction;
                            entityUpdate.Description = model.Description;
                            entityUpdate.IsDefault = model.IsDefault;
                            entityUpdate.TaxDeducted = model.TaxDeducted;
                            entityUpdate.Insurationdeducted = model.Insurationdeducted;
                            entityUpdate.Pensiondeducted = model.Pensiondeducted;
                            entityUpdate.IsBasedOnAttandance = model.IsBasedOnAttandance;
                            entityUpdate.Total = model.Total;
                            entityUpdate.Period = model.Period;
                            entityUpdate.Inbuilt = model.Inbuilt;

                            _context.SaveChanges();
                        }

                        _ctxTransaction.Commit();
                        message = "Entry Updated";
                        errorcode = "0";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback(); e.ToString();
                        message = "Entry Update Failed!!";
                        errorcode = "1";
                        excp = e.ToString();
                    }

                    result = new
                    {
                        error = errorcode,
                        msg = message,
                        excp = excp
                    };
                }
            }
            return result;
        }
        
        // POST api/EmployeePayrollCategory/CreateUpdateEmployeePayrollCategory
        [HttpPost, Route("CreateUpdateEmployeePayrollCategory/{id}"), Produces("application/json")]
        public object CreateUpdateEmployeePayrollCategory(int id, [FromBody]EmployeePayrollCategory model)
        {
            object result = null;
            string message = "";
            string errorcode = "";
            string excp = "";
            if (model == null)
            {
                return BadRequest();
            }
            using (_context)
            {
                using (var _ctxTransaction = _context.Database.BeginTransaction())
                {
                    try
                    {
                        if (model.Type == true)
                        {
                            decimal? TotalAmount = new decimal();
                            if (model.PercentageOf != null)
                            {
                                List<int> PayrollCategoryIds = model.PercentageOf.Split(',').Select(x => int.Parse(x)).ToList();
                                Decimal? Amount = _context.EmployeePayrollCategory.Where(y => PayrollCategoryIds.Contains(y.Id)).Select(z => z.Amount).ToList().Sum();
                                if (Amount != null)
                                {
                                    if (model.Percentage != null)
                                    {
                                        TotalAmount = Amount * model.Percentage / 100;
                                    }
                                }
                            }
                            if (TotalAmount != null)
                            {
                                model.Amount = TotalAmount;
                            }
                        }

                        if (id != 0)
                        {
                            var entityUpdate = _context.EmployeePayrollCategory.FirstOrDefault(x => x.Id == id);

                            if (entityUpdate != null)
                            {
                                entityUpdate.CategoryName = model.CategoryName;
                                entityUpdate.Type = model.Type;
                                entityUpdate.Percentage = model.Percentage;
                                entityUpdate.PercentageOf = model.PercentageOf;
                                entityUpdate.Amount = model.Amount;
                                entityUpdate.Status = model.Status;
                                entityUpdate.IsDeduction = model.IsDeduction;
                                entityUpdate.Description = model.Description;
                                entityUpdate.IsDefault = model.IsDefault;
                                entityUpdate.TaxDeducted = model.TaxDeducted;
                                entityUpdate.Insurationdeducted = model.Insurationdeducted;
                                entityUpdate.Pensiondeducted = model.Pensiondeducted;
                                entityUpdate.IsBasedOnAttandance = model.IsBasedOnAttandance;
                                entityUpdate.Total = model.Total;
                                entityUpdate.Period = model.Period;
                                entityUpdate.Inbuilt = model.Inbuilt;

                                _context.SaveChanges();
                            }
                            _ctxTransaction.Commit();
                            message = "Entry Updated";
                            errorcode = "0";
                        }
                        else
                        {
                            _context.EmployeePayrollCategory.Add(model);
                            //await _ctx.SaveChangesAsync();
                            _context.SaveChanges();
                            _ctxTransaction.Commit();
                            message = "Saved Successfully";
                            errorcode = "0";
                        }

                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback();
                        e.ToString();
                        message = "Saved Error";
                        errorcode = "1";
                        excp = e.ToString();
                    }

                    result = new
                    {
                        error = errorcode,
                        msg = message,
                        excp = excp
                    };
                }
            }
            return result;
        }

        // DELETE api/EmployeePayrollCategory/DeleteEmployeePayrollCategoryById/5
        [HttpGet, Route("DeleteEmployeePayrollCategoryById/{id}")]
        public object DeleteEmployeePayrollCategoryById(int id)
        {
            object result = null;
            string message = "";
            string errorcode = "";
            string excp = "";
            using (_context)
            {
                using (var _ctxTransaction = _context.Database.BeginTransaction())
                {
                    try
                    {
                        var idToRemove = _context.EmployeePayrollCategory.SingleOrDefault(x => x.Id == id);
                        if (idToRemove != null)
                        {
                            _context.EmployeePayrollCategory.Remove(idToRemove);
                            _context.SaveChanges();
                        }
                        _ctxTransaction.Commit();
                        message = "Deleted Successfully";
                        errorcode = "0";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback(); e.ToString();
                        message = "Error on Deleting!!";
                        errorcode = "1";
                        excp = e.ToString();
                    }

                    result = new
                    {
                        error = errorcode,
                        msg = message,
                        excp = excp
                    };
                }
            }
            return result;
        }

    }
}