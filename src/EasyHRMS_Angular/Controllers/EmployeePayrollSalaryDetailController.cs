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
    public class EmployeePayrollSalaryDetailController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public EmployeePayrollSalaryDetailController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET: api/EmployeePayrollSalaryDetail/GetAllEmployeePayrollSalaryDetail
        [HttpGet("GetAllEmployeePayrollSalaryDetail"), Produces("application/json")]
        public object GetAllEmployeePayrollSalaryDetail()
        {
            //List<EmailTemplate> list = new List<EmailTemplate>();
            List<EmployeePayrollSalaryDetailVM> list = new List<EmployeePayrollSalaryDetailVM>();
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

                    list = _context.EmployeePayrollSalaryDetail.Select(y => new EmployeePayrollSalaryDetailVM
                    {
                        Id = y.Id,
                        EmployeeId = y.EmployeeId,
                        DepartmentId = y.DepartmentId,
                        SalaryStructureId = y.SalaryStructureId,
                        PayrollCategoryId = y.PayrollCategoryId,
                        Amount = y.Amount,
                        GrossSalary = y.GrossSalary,
                        IsDeduction = y.IsDeduction,
                        IsBasedOnAttandance = y.IsBasedOnAttandance,
                        CreatedDate = y.CreatedDate

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

        // GET api/EmployeePayrollSalaryDetail/GetEmployeePayrollSalaryDetailById/5
        [HttpGet("GetEmployeePayrollSalaryDetailById/{id}"), Produces("application/json")]
        public object GetEmployeePayrollSalaryDetailById(int id)
        {
            object result = null;

            EmployeePayrollSalaryDetail objEmployeePayrollSalaryDetail = new EmployeePayrollSalaryDetail();
            try
            {
                using (_context)
                {
                    objEmployeePayrollSalaryDetail = _context.EmployeePayrollSalaryDetail.FirstOrDefault(x => x.Id == id);

                    result = new
                    {
                        objEmployeePayrollSalaryDetail,
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
                    objEmployeePayrollSalaryDetail,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }

        // GET api/EmployeePayrollSalaryDetail/GetEmployeePayrollSalaryDetailByEmployeeId/5
        [HttpGet("GetEmployeePayrollSalaryDetailByEmployeeId/{id}"), Produces("application/json")]
        public object GetEmployeePayrollSalaryDetailByEmployeeId(int id)
        {
            object result = null;

            List<EmployeePayrollSalaryDetailVM> list = new List<EmployeePayrollSalaryDetailVM>();
            List<EmployeePayrollSalaryDetailVM> listTemp = new List<EmployeePayrollSalaryDetailVM>();
            List<EmployeePayrollCategoryVM> Defaultlist = new List<EmployeePayrollCategoryVM>();
            try
            {
                using (_context)
                {
                    listTemp = _context.EmployeePayrollSalaryDetail.Where(x => x.EmployeeId == id).Select(y => new EmployeePayrollSalaryDetailVM
                    {
                       Id = y.Id,
                       EmployeeId = y.EmployeeId,
                       DepartmentId = y.DepartmentId,
                       SalaryStructureId = y.SalaryStructureId,
                       PayrollCategoryId = y.PayrollCategoryId,
                       Amount = y.Amount,
                       IsDeduction = y.IsDeduction,
                       IsBasedOnAttandance = y.IsBasedOnAttandance
                    }).ToList();
                    //if(list.Count > 0)
                    //{
                        //foreach (var SalaryDetail in list)
                        //{
                        //    EmployeePayrollCategory objSalary = _context.EmployeePayrollCategory.Where(y => y.Id == SalaryDetail.PayrollCategoryId).FirstOrDefault();

                        //    if(objSalary != null)
                        //    {
                        //        SalaryDetail.PayrollCategoryName = objSalary.CategoryName;
                        //        SalaryDetail.Percentage = objSalary.Percentage;
                        //        SalaryDetail.PercentageOf = objSalary.PercentageOf;
                        //        SalaryDetail.Period = objSalary.Period;
                        //    }

                        //    if (objSalary.PercentageOf != null)
                        //    {

                        //        List<string> PayIdlist = objSalary.PercentageOf.Split(',').ToList();
                        //        List<int> PayIds = PayIdlist.Select(y => int.Parse(y)).ToList();

                        //        List<string> PayName = _context.EmployeePayrollCategory.Where(y => PayIds.Contains(y.Id)).Select(p => p.CategoryName).ToList();
                        //        SalaryDetail.PercentageOfNameList = string.Join(",", PayName);
                        //    }

                        //    SalaryDetail.SalaryStructureName = SalaryDetail.SalaryStructureId != null ? _context.SalaryStructure.Where(p => p.Id == SalaryDetail.SalaryStructureId).FirstOrDefault().Name : null;
                        //}
                    //}
                    //else
                    //{
                        var DepartmentId = _context.EmployeeDetails.Where(x => x.EmployeeId == id).FirstOrDefault() != null ? _context.EmployeeDetails.Where(x => x.EmployeeId == id).FirstOrDefault().F12 : null;

                        if(DepartmentId != null)
                        {
                            var SalaryStructureId = _context.SalaryStructureDepartmentMapping.Where(y => y.DepartmentId == int.Parse(DepartmentId)).FirstOrDefault() != null ? _context.SalaryStructureDepartmentMapping.Where(y => y.DepartmentId == int.Parse(DepartmentId)).FirstOrDefault().SalaryStructureId : null;
                            if(SalaryStructureId != null)
                            {
                                List<int?> PayrollCategoryIds = _context.SalaryStructurePayrollCategoryMapping.Where(z => z.SalaryStructureId == SalaryStructureId).Select(p => p.PayrollCategoryId).ToList();
                                Defaultlist = _context.EmployeePayrollCategory.Where(q => PayrollCategoryIds.Contains(q.Id)).Select(z => new EmployeePayrollCategoryVM{
                                    Id = z.Id,
                                    CategoryName = z.CategoryName,
                                    Type = z.Type,
                                    Percentage = z.Percentage,
                                    PercentageOf = z.PercentageOf,
                                    Amount = z.Amount,
                                    Status = z.Status,
                                    IsDeduction = z.IsDeduction,
                                    Description = z.Description,
                                    IsDefault = z.IsDefault,
                                    TaxDeducted = z.TaxDeducted,
                                    Insurationdeducted = z.Insurationdeducted,
                                    Pensiondeducted = z.Pensiondeducted,
                                    IsBasedOnAttandance = z.IsBasedOnAttandance,
                                    Total = z.Total,
                                    Period = z.Period,
                                    Inbuilt = z.Inbuilt

                                }).ToList();


                                foreach (var Pay in Defaultlist)
                                {
                                    if(Pay.PercentageOf != null)
                                    {
                                        
                                        List<string> PayIdlist = Pay.PercentageOf.Split(',').ToList();
                                        List<int> PayIds = PayIdlist.Select(y => int.Parse(y)).ToList();

                                        List<string> PayName = _context.EmployeePayrollCategory.Where(y => PayIds.Contains(y.Id)).Select(p => p.CategoryName).ToList();
                                        Pay.PercentageOfNameList = string.Join(",", PayName);
                                    }

                                    EmployeePayrollSalaryDetailVM objSalaryDetail = new EmployeePayrollSalaryDetailVM();
                                    objSalaryDetail.EmployeeId = id;
                                    objSalaryDetail.DepartmentId = int.Parse(DepartmentId);
                                    objSalaryDetail.SalaryStructureId = SalaryStructureId;
                                    objSalaryDetail.PayrollCategoryId = Pay.Id;
                                    objSalaryDetail.Amount = Pay.Amount;
                                    objSalaryDetail.IsDeduction = Pay.IsDeduction;
                                    objSalaryDetail.IsBasedOnAttandance = Pay.IsBasedOnAttandance;
                                    objSalaryDetail.PayrollCategoryName = Pay.CategoryName;
                                    objSalaryDetail.Percentage = Pay.Percentage;
                                    objSalaryDetail.PercentageOf = Pay.PercentageOf;
                                    objSalaryDetail.PercentageOfNameList = Pay.PercentageOfNameList;
                                    objSalaryDetail.Period = Pay.Period;

                                    objSalaryDetail.SalaryStructureName = objSalaryDetail.SalaryStructureId != null ? _context.SalaryStructure.Where(p => p.Id == objSalaryDetail.SalaryStructureId).FirstOrDefault().Name : null;

                                    list.Add(objSalaryDetail);
                                }
                            }

                        }

                    //}

                    if (listTemp.Count > 0)
                    {
                        foreach (var PaySalary in list)
                        {
                            EmployeePayrollSalaryDetailVM PaySalaryTemp = listTemp.Where(y => y.EmployeeId == PaySalary.EmployeeId && y.DepartmentId == PaySalary.DepartmentId && y.SalaryStructureId == PaySalary.SalaryStructureId && y.PayrollCategoryId == PaySalary.PayrollCategoryId).FirstOrDefault();

                            if (PaySalaryTemp != null)
                            {
                                PaySalary.Id = PaySalaryTemp.Id;
                                PaySalary.Amount = PaySalaryTemp.Amount;
                            }
                        }
                    }
                    result = new
                    {
                        list,
                        //Defaultlist,
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
                    //Defaultlist,
                    error = "1",
                    msg = ex.ToString()
                };
            }
            return result;
        }

        // POST api/EmployeePayrollSalaryDetail/CreateEmployeePayrollSalaryDetail
        [HttpPost, Route("CreateEmployeePayrollSalaryDetail"), Produces("application/json")]
        public object CreateEmployeePayrollSalaryDetail([FromBody]List<EmployeePayrollSalaryDetail> model)
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
                        Decimal? GrossSalary = 0;
                        foreach (var EmployeeSalary in model)
                        {
                            if(EmployeeSalary.PayrollCategoryId != null)
                            {
                                EmployeePayrollCategory objPayrollCategory = _context.EmployeePayrollCategory.Where(y => y.Id == EmployeeSalary.PayrollCategoryId).FirstOrDefault();
                                if(objPayrollCategory.Type == true)
                                {
                                    List<int?> PayrollIds = objPayrollCategory.PercentageOf.Split(',').Select(x => (int?)int.Parse(x)).ToList();
                                    Decimal? AmountTemp = 0;
                                    foreach (var EmployeeSal in model)
                                    {
                                        if(PayrollIds.Contains(EmployeeSal.PayrollCategoryId))
                                        {
                                            AmountTemp += EmployeeSal.Amount;
                                        }
                                    }
                                    if(AmountTemp != 0)
                                    {
                                        EmployeeSalary.Amount = AmountTemp * objPayrollCategory.Percentage / 100;
                                    }
                                    else
                                    {
                                        EmployeeSalary.Amount = AmountTemp;
                                    }
                                }
                            }
                            if (EmployeeSalary.Amount != null)
                            {
                                GrossSalary += EmployeeSalary.Amount;
                            }
                        }
                        foreach (var EmployeeSalary in model)
                        {
                            EmployeeSalary.GrossSalary = GrossSalary;
                        }

                        _context.EmployeePayrollSalaryDetail.AddRange(model);
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

        // POST api/EmployeePayrollSalaryDetail/UpdateEmployeePayrollSalaryDetail/5
        [HttpPost, Route("UpdateEmployeePayrollSalaryDetail/{id}")]
        public object UpdateEmployeePayrollSalaryDetail(int id, [FromBody]List<EmployeePayrollSalaryDetail> model)
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
                        Decimal? GrossSalary = 0;
                        foreach (var EmployeeSalary in model)
                        {
                            if (EmployeeSalary.Amount != null)
                            {
                                GrossSalary += EmployeeSalary.Amount;
                            }
                        }

                        foreach (var EmployeeSalary in model)
                        {
                            var entityUpdate = _context.EmployeePayrollSalaryDetail.FirstOrDefault(x => x.Id == EmployeeSalary.Id);

                            if (entityUpdate != null)
                            {
                                entityUpdate.EmployeeId = EmployeeSalary.EmployeeId;
                                entityUpdate.DepartmentId = EmployeeSalary.DepartmentId;
                                entityUpdate.SalaryStructureId = EmployeeSalary.SalaryStructureId;
                                entityUpdate.PayrollCategoryId = EmployeeSalary.PayrollCategoryId;
                                entityUpdate.Amount = EmployeeSalary.Amount;
                                entityUpdate.GrossSalary = GrossSalary;
                                entityUpdate.IsDeduction = EmployeeSalary.IsDeduction;
                                entityUpdate.IsBasedOnAttandance = EmployeeSalary.IsBasedOnAttandance;
                                entityUpdate.CreatedDate = EmployeeSalary.CreatedDate;

                                _context.SaveChanges();
                            }
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

        // POST api/EmployeePayrollSalaryDetail/CreateUpdateEmployeePayrollSalaryDetail
        [HttpPost, Route("CreateUpdateEmployeePayrollSalaryDetail"), Produces("application/json")]
        public object CreateUpdateEmployeePayrollSalaryDetail([FromBody]List<EmployeePayrollSalaryDetail> model)
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
                        foreach (var PayrollSalaryDetail in model)
                        {
                            if (PayrollSalaryDetail.Id != 0)
                            {
                                Decimal? GrossSalary = 0;
                                foreach (var EmployeeSalary in model)
                                {
                                    if (EmployeeSalary.Amount != null)
                                    {
                                        GrossSalary += EmployeeSalary.Amount;
                                    }
                                }

                                var entityUpdate = _context.EmployeePayrollSalaryDetail.FirstOrDefault(x => x.Id == PayrollSalaryDetail.Id);

                                if (entityUpdate != null)
                                {
                                    entityUpdate.EmployeeId = PayrollSalaryDetail.EmployeeId;
                                    entityUpdate.DepartmentId = PayrollSalaryDetail.DepartmentId;
                                    entityUpdate.SalaryStructureId = PayrollSalaryDetail.SalaryStructureId;
                                    entityUpdate.PayrollCategoryId = PayrollSalaryDetail.PayrollCategoryId;
                                    entityUpdate.Amount = PayrollSalaryDetail.Amount;
                                    entityUpdate.GrossSalary = GrossSalary;
                                    entityUpdate.IsDeduction = PayrollSalaryDetail.IsDeduction;
                                    entityUpdate.IsBasedOnAttandance = PayrollSalaryDetail.IsBasedOnAttandance;
                                    entityUpdate.CreatedDate = PayrollSalaryDetail.CreatedDate;

                                    _context.SaveChanges();
                                }
                                
                                //_ctxTransaction.Commit();
                                message = "Entry Updated";
                                errorcode = "0";
                            }
                            else
                            {
                                Decimal? GrossSalary = 0;
                                foreach (var EmployeeSalary in model)
                                {
                                    if (EmployeeSalary.Amount != null)
                                    {
                                        GrossSalary += EmployeeSalary.Amount;
                                    }
                                }

                                 PayrollSalaryDetail.CreatedDate = DateTime.Now;
                                PayrollSalaryDetail.GrossSalary = GrossSalary;
                                _context.EmployeePayrollSalaryDetail.Add(PayrollSalaryDetail);
                                _context.SaveChanges();
                                //_ctxTransaction.Commit();
                                message = "Saved Successfully";
                                errorcode = "0";
                            }

                        }
                        _ctxTransaction.Commit();
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

        // DELETE api/EmployeePayrollSalaryDetail/DeleteEmployeePayrollSalaryDetailById/5
        [HttpGet, Route("DeleteEmployeePayrollSalaryDetailById/{id}")]
        public object DeleteEmployeePayrollSalaryDetailById(int id)
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
                        var idToRemove = _context.EmployeePayrollSalaryDetail.SingleOrDefault(x => x.Id == id);
                        if (idToRemove != null)
                        {
                            _context.EmployeePayrollSalaryDetail.Remove(idToRemove);
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

        // DELETE api/EmployeePayrollSalaryDetail/DeleteEmployeePayrollSalaryDetailByEmployeeId/5
        [HttpGet, Route("DeleteEmployeePayrollSalaryDetailByEmployeeId/{id}")]
        public object DeleteEmployeePayrollSalaryDetailByEmployeeId(int id)
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
                        List<EmployeePayrollSalaryDetail> list = new List<EmployeePayrollSalaryDetail>();
                        list = _context.EmployeePayrollSalaryDetail.Where(x => x.EmployeeId == id).ToList();
                        if (list.Count > 0)
                        {
                            _context.EmployeePayrollSalaryDetail.RemoveRange(list);
                            _context.SaveChanges();
                        }
                        //var idToRemove = _context.EmployeePayrollSalaryDetail.SingleOrDefault(x => x.Id == id);
                        //if (idToRemove != null)
                        //{
                        //    _context.EmployeePayrollSalaryDetail.Remove(idToRemove);
                        //    _context.SaveChanges();
                        //}
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

        // GET api/EmployeePayrollSalaryDetail/GetEmployeeSalaryDetailsList
        [HttpGet("GetEmployeeSalaryDetailsList"), Produces("application/json")]
        public object GetEmployeeSalaryDetailsList()
        {
            object result = null;
            List<EmployeeSalaryDetailsListVM> list1 = new List<EmployeeSalaryDetailsListVM>();
            List<EmployeeSalaryDetailsListVM> list = new List<EmployeeSalaryDetailsListVM>();
            try
            {
                using (_context)
                {
                    var abc = _context.EmployeePayrollSalaryDetail.Where(y => y.EmployeeId == 1).FirstOrDefault();
                    list1 = _context.EmployeeDetails.Select(x => new
                    {
                        Id = x.EmployeeId,
                        EmployeeId = x.EmployeeId,
                        EmployeeCode = x.F1,
                        FullName = x.F2 + " " + x.F3,
                        JoiningDate = x.F17,
                        Department = x.F12,
                        DepartmentName = x.F12 != null ? _context.LookupData.Where(z => z.RowId == int.Parse(x.F12) && z.FieldName == "DepartmentName").FirstOrDefault().Value : null,
                        Position = x.F19,
                        //Ctc = _context.EmployeePayrollSalaryDetail.Where(y => y.EmployeeId == x.EmployeeId).FirstOrDefault() != null ? _context.EmployeePayrollSalaryDetail.Where(y => y.EmployeeId == x.EmployeeId).FirstOrDefault().GrossSalary : null
                        //Ctc = _context.EmployeePayrollSalaryDetail.Where(y => y.EmployeeId == x.EmployeeId).FirstOrDefault() != null ? _context.EmployeePayrollSalaryDetail.Where(y => y.EmployeeId == x.EmployeeId).FirstOrDefault().GrossSalary : null,
                        //Ctc = _context.EmployeePayrollCategory.Where(q => _context.SalaryStructurePayrollCategoryMapping.Where(z => z.SalaryStructureId == _context.SalaryStructureDepartmentMapping.Where(y => y.DepartmentId == int.Parse(x.F12)).FirstOrDefault().SalaryStructureId).Select(p => p.PayrollCategoryId).ToList().Contains(q.Id)).ToList().Sum(r => r.Amount),
                        //ProfessionalTax
                    }).OrderBy(x => x.Id).ToList().Select(x => new EmployeeSalaryDetailsListVM()
                    {
                        Id = x.Id,
                        EmployeeId = x.EmployeeId,
                        EmployeeCode = x.EmployeeCode,
                        FullName = x.FullName,
                        JoiningDate = x.JoiningDate,
                        Department = x.Department,
                        DepartmentName = x.DepartmentName,
                        Position = x.Position,
                        //Ctc = x.Ctc,
                        //ProfessionalTax
                    }).OrderBy(x => x.Id).ToList();

                    foreach (var SalaryDetail in list1)
                    {
                        Decimal? CTCAmount = _context.EmployeePayrollSalaryDetail.Where(y => y.EmployeeId == SalaryDetail.EmployeeId).FirstOrDefault() != null ? _context.EmployeePayrollSalaryDetail.Where(y => y.EmployeeId == SalaryDetail.EmployeeId).FirstOrDefault().GrossSalary : null;
                        if(CTCAmount != null)
                        {
                            SalaryDetail.Ctc = CTCAmount;
                        }
                        else
                        {
                            if (SalaryDetail.Department != null && SalaryDetail.Department != "")
                            {
                                var SalaryStructureId = _context.SalaryStructureDepartmentMapping.Where(y => y.DepartmentId == int.Parse(SalaryDetail.Department)).FirstOrDefault() == null ? null : _context.SalaryStructureDepartmentMapping.Where(y => y.DepartmentId == int.Parse(SalaryDetail.Department)).FirstOrDefault().SalaryStructureId;
                                if (SalaryStructureId != null)
                                {
                                    List<int?> PayrollCategoryIds = _context.SalaryStructurePayrollCategoryMapping.Where(z => z.SalaryStructureId == SalaryStructureId).Select(p => p.PayrollCategoryId).ToList();
                                    var TotalAmount = _context.EmployeePayrollCategory.Where(q => PayrollCategoryIds.Contains(q.Id)).ToList().Sum(r => r.Amount);
                                    SalaryDetail.Ctc = TotalAmount;
                                }
                            }
                        }
                       
                    }

                    foreach (var SalaryDetail in list1)
                    {
                        if (SalaryDetail.Department != null && SalaryDetail.Department != "")
                        {
                            SalaryStructureDepartmentMapping SalaryStructureDMapp = _context.SalaryStructureDepartmentMapping.Where(y => y.DepartmentId == int.Parse(SalaryDetail.Department)).FirstOrDefault();
                            if (SalaryStructureDMapp != null)
                            {
                                list.Add(SalaryDetail);
                            }
                        }
                    }

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