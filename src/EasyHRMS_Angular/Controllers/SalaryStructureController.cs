using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_DA.Models;
using EasyHRMS_Angular.ModelsVM;
using EasyHRMS_Angular.Models;

namespace EasyHRMS_Angular.Controllers
{
    [Route("api/[controller]")]
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

        // GET: api/SalaryStructure/GetAllSalaryStructure
        [HttpGet("GetAllSalaryStructure"), Produces("application/json")]
        public object GetAllSalaryStructure()
        {
            List<SalaryStructure> list = new List<SalaryStructure>();
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

                    list = _context.SalaryStructure.Select(y => new SalaryStructure
                    {
                        Id = y.Id,
                        Name = y.Name,
                        Description = y.Description,
                        IsActive = y.IsActive

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

        // GET api/SalaryStructure/GetSalaryStructureById/5
        [HttpGet("GetSalaryStructureById/{id}"), Produces("application/json")]
        public object GetSalaryStructureById(int id)
        {
            object result = null;

            SalaryStructure objSalaryStructure = new SalaryStructure();
            List<int?> DepartmentIds = new List<int?>();
            List<int?> PayrollCategoryIds = new List<int?>();
            try
            {
                using (_context)
                {
                    objSalaryStructure = _context.SalaryStructure.FirstOrDefault(x => x.Id == id);
                    DepartmentIds = _context.SalaryStructureDepartmentMapping.Where(y => y.SalaryStructureId == id).Select(z => z.DepartmentId).ToList();
                    PayrollCategoryIds = _context.SalaryStructurePayrollCategoryMapping.Where(y => y.SalaryStructureId == id).Select(z => z.PayrollCategoryId).ToList();
                    result = new
                    {
                        objSalaryStructure,
                        DepartmentIds,
                        PayrollCategoryIds,
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
                    objSalaryStructure,
                    DepartmentIds,
                    PayrollCategoryIds,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }

        // POST api/SalaryStructure/CreateSalaryStructure
        [HttpPost, Route("CreateSalaryStructure"), Produces("application/json")]
        public object CreateSalaryStructure([FromBody]SalaryStructureVM model)
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
                        SalaryStructure objSalaryStructure = new SalaryStructure();
                        objSalaryStructure.Name = model.Name;
                        objSalaryStructure.Description = model.Description;
                        objSalaryStructure.IsActive = model.IsActive;
                        _context.SalaryStructure.Add(objSalaryStructure);
                        //await _ctx.SaveChangesAsync();
                        _context.SaveChanges();

                        if (model.DepartmentIds.Count > 0)
                        {
                            foreach (int DepartmentId in model.DepartmentIds)
                            {
                                SalaryStructureDepartmentMapping objMapping = null;
                                objMapping = new SalaryStructureDepartmentMapping { SalaryStructureId = objSalaryStructure.Id, DepartmentId = DepartmentId };
                                _context.Add(objMapping);
                            }
                            _context.SaveChanges();
                        }

                        if (model.PayrollCategoryIds.Count > 0)
                        {
                            foreach (int PayrollCategoryId in model.PayrollCategoryIds)
                            {
                                SalaryStructurePayrollCategoryMapping objMapping = null;
                                objMapping = new SalaryStructurePayrollCategoryMapping { SalaryStructureId = objSalaryStructure.Id, PayrollCategoryId = PayrollCategoryId };
                                _context.Add(objMapping);
                            }
                            _context.SaveChanges();
                        }

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

        // POST api/SalaryStructure/UpdateSalaryStructure/5
        [HttpPost, Route("UpdateSalaryStructure/{id}")]
        public object UpdateSalaryStructure(int id, [FromBody]SalaryStructureVM model)
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
                        var entityUpdate = _context.SalaryStructure.FirstOrDefault(x => x.Id == id);

                        if (entityUpdate != null)
                        {
                            entityUpdate.Name = model.Name;
                            entityUpdate.Description = model.Description;
                            entityUpdate.IsActive = model.IsActive;
                            _context.SaveChanges();
                        }

                        List<SalaryStructureDepartmentMapping> RemoveDepartmentList = _context.SalaryStructureDepartmentMapping.Where(y => y.SalaryStructureId == id).ToList();
                        if (RemoveDepartmentList.Count > 0)
                        {
                            _context.SalaryStructureDepartmentMapping.RemoveRange(RemoveDepartmentList);
                        }
                        if (model.DepartmentIds.Count > 0)
                        {
                            foreach (int DepartmentId in model.DepartmentIds)
                            {
                                SalaryStructureDepartmentMapping objMapping = null;
                                objMapping = new SalaryStructureDepartmentMapping { SalaryStructureId = id, DepartmentId = DepartmentId };
                                _context.Add(objMapping);
                            }
                            _context.SaveChanges();
                        }
                        List<SalaryStructurePayrollCategoryMapping> RemovePayrollCategoryList = _context.SalaryStructurePayrollCategoryMapping.Where(y => y.SalaryStructureId == id).ToList();
                        if (RemovePayrollCategoryList.Count > 0)
                        {
                            _context.SalaryStructurePayrollCategoryMapping.RemoveRange(RemovePayrollCategoryList);
                        }
                        if (model.PayrollCategoryIds.Count > 0)
                        {
                            foreach (int PayrollCategoryId in model.PayrollCategoryIds)
                            {
                                SalaryStructurePayrollCategoryMapping objMapping = null;
                                objMapping = new SalaryStructurePayrollCategoryMapping { SalaryStructureId = id, PayrollCategoryId = PayrollCategoryId };
                                _context.Add(objMapping);
                            }
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

        // POST api/SalaryStructure/CreateUpdateSalaryStructure
        [HttpPost, Route("CreateUpdateSalaryStructure/{id}"), Produces("application/json")]
        public object CreateUpdateSalaryStructure(int id, [FromBody]SalaryStructureVM model)
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
                        if (id != 0)
                        {
                            var entityUpdate = _context.SalaryStructure.FirstOrDefault(x => x.Id == id);

                            if (entityUpdate != null)
                            {
                                entityUpdate.Name = model.Name;
                                entityUpdate.Description = model.Description;
                                entityUpdate.IsActive = model.IsActive;

                                _context.SaveChanges();
                            }

                            List<SalaryStructureDepartmentMapping> RemoveDepartmentList = _context.SalaryStructureDepartmentMapping.Where(y => y.SalaryStructureId == id).ToList();
                            if (RemoveDepartmentList.Count > 0)
                            {
                                _context.SalaryStructureDepartmentMapping.RemoveRange(RemoveDepartmentList);
                            }
                            if (model.DepartmentIds.Count > 0)
                            {
                                foreach (int DepartmentId in model.DepartmentIds)
                                {
                                    SalaryStructureDepartmentMapping objMapping = null;
                                    objMapping = new SalaryStructureDepartmentMapping { SalaryStructureId = id, DepartmentId = DepartmentId };
                                    _context.Add(objMapping);
                                }
                                _context.SaveChanges();
                            }
                            List<SalaryStructurePayrollCategoryMapping> RemovePayrollCategoryList = _context.SalaryStructurePayrollCategoryMapping.Where(y => y.SalaryStructureId == id).ToList();
                            if (RemovePayrollCategoryList.Count > 0)
                            {
                                _context.SalaryStructurePayrollCategoryMapping.RemoveRange(RemovePayrollCategoryList);
                            }
                            if (model.PayrollCategoryIds.Count > 0)
                            {
                                foreach (int PayrollCategoryId in model.PayrollCategoryIds)
                                {
                                    SalaryStructurePayrollCategoryMapping objMapping = null;
                                    objMapping = new SalaryStructurePayrollCategoryMapping { SalaryStructureId = id, PayrollCategoryId = PayrollCategoryId };
                                    _context.Add(objMapping);
                                }
                                _context.SaveChanges();
                            }

                            _ctxTransaction.Commit();
                            message = "Entry Updated";
                            errorcode = "0";
                        }
                        else
                        {
                            SalaryStructure objSalaryStructure = new SalaryStructure();
                            objSalaryStructure.Name = model.Name;
                            objSalaryStructure.Description = model.Description;
                            objSalaryStructure.IsActive = model.IsActive;
                            _context.SalaryStructure.Add(objSalaryStructure);
                            //await _ctx.SaveChangesAsync();
                            _context.SaveChanges();

                            if (model.DepartmentIds.Count > 0)
                            {
                                foreach (int DepartmentId in model.DepartmentIds)
                                {
                                    SalaryStructureDepartmentMapping objMapping = null;
                                    objMapping = new SalaryStructureDepartmentMapping { SalaryStructureId = objSalaryStructure.Id, DepartmentId = DepartmentId };
                                    _context.Add(objMapping);
                                }
                                _context.SaveChanges();
                            }

                            if (model.PayrollCategoryIds.Count > 0)
                            {
                                foreach (int PayrollCategoryId in model.PayrollCategoryIds)
                                {
                                    SalaryStructurePayrollCategoryMapping objMapping = null;
                                    objMapping = new SalaryStructurePayrollCategoryMapping { SalaryStructureId = objSalaryStructure.Id, PayrollCategoryId = PayrollCategoryId };
                                    _context.Add(objMapping);
                                }
                                _context.SaveChanges();
                            }

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

        // DELETE api/SalaryStructure/DeleteSalaryStructureById/5
        [HttpGet, Route("DeleteSalaryStructureById/{id}")]
        public object DeleteSalaryStructureById(int id)
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
                        List<SalaryStructureDepartmentMapping> RemoveDepartmentList = _context.SalaryStructureDepartmentMapping.Where(y => y.SalaryStructureId == id).ToList();
                        if (RemoveDepartmentList.Count > 0)
                        {
                            _context.SalaryStructureDepartmentMapping.RemoveRange(RemoveDepartmentList);
                        }
                        List<SalaryStructurePayrollCategoryMapping> RemovePayrollCategoryList = _context.SalaryStructurePayrollCategoryMapping.Where(y => y.SalaryStructureId == id).ToList();
                        if (RemovePayrollCategoryList.Count > 0)
                        {
                            _context.SalaryStructurePayrollCategoryMapping.RemoveRange(RemovePayrollCategoryList);
                        }
                        _context.SaveChanges();
                        var idToRemove = _context.SalaryStructure.SingleOrDefault(x => x.Id == id);
                        if (idToRemove != null)
                        {
                            _context.SalaryStructure.Remove(idToRemove);
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

        // GET api/SalaryStructure/GetLookupDepartmentDataByLookupID/5
        [HttpGet("GetLookupDepartmentDataByLookupID/{id?}"), Produces("application/json")]
        public object GetLookupDepartmentDataByLookupID(int id)
        {
            int DepartmentLookupID = 6;
            object result = null;
            List<LookupDataVM> list = new List<LookupDataVM>();
            try
            {
                using (_context)
                {
                    if(id > 0 )
                    {
                        List<int?> DepartmentIds = _context.SalaryStructureDepartmentMapping.Where(x =>x.SalaryStructureId != id).Select(x => x.DepartmentId).Distinct().ToList();
                        //if (DepartmentIds.Count > 0)
                        //{
                        list = _context.LookupData.Where(x => x.LookupId == DepartmentLookupID && !DepartmentIds.Contains(x.RowId) && x.FieldName != "DepartmentCode").Select(x => new LookupDataVM()
                        {
                            Id = x.Id,
                            LookupId = x.LookupId,
                            RowId = x.RowId,
                            FieldName = x.FieldName,
                            Value = x.Value,
                        }).OrderBy(x => x.Id).ToList();
                        //}
                    }
                    else
                    {
                        List<int?> DepartmentIds = _context.SalaryStructureDepartmentMapping.Select(x => x.DepartmentId).Distinct().ToList();
                        //if (DepartmentIds.Count > 0)
                        //{
                        list = _context.LookupData.Where(x => x.LookupId == DepartmentLookupID && !DepartmentIds.Contains(x.RowId) && x.FieldName != "DepartmentCode").Select(x => new LookupDataVM()
                        {
                            Id = x.Id,
                            LookupId = x.LookupId,
                            RowId = x.RowId,
                            FieldName = x.FieldName,
                            Value = x.Value,
                        }).OrderBy(x => x.Id).ToList();
                        //}
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
                    msg = "Error"
                };
            }
            return result;
        }
        

    }
}