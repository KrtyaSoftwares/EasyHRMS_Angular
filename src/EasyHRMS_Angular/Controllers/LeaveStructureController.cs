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
    public class LeaveStructureController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public LeaveStructureController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET: api/LeaveStructure/GetAllLeaveStructure
        [HttpGet("GetAllLeaveStructure"), Produces("application/json")]
        public object GetAllLeaveStructure()
        {
            List<LeaveStructure> list = new List<LeaveStructure>();
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

                    list = _context.LeaveStructure.Select(y => new LeaveStructure
                    {
                        Id = y.Id,
                        LeaveStructureName = y.LeaveStructureName,
                        MaxLeaveCount = y.MaxLeaveCount,
                        IsCarryForward = y.IsCarryForward,
                        Status = y.Status,
                        IsAllowLeave = y.IsAllowLeave,
                        IsDefault = y.IsDefault

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

        // GET api/LeaveStructure/GetLeaveStructureById/5
        [HttpGet("GetLeaveStructureById/{id}"), Produces("application/json")]
        public object GetLeaveStructureById(int id)
        {
            object result = null;

            LeaveStructure objLeaveStructure = new LeaveStructure();
            List<int?> DepartmentIds = new List<int?>();
            List<int?> LeaveTypeIds = new List<int?>();
            try
            {
                using (_context)
                {
                    objLeaveStructure = _context.LeaveStructure.FirstOrDefault(x => x.Id == id);
                    DepartmentIds = _context.LeaveStructureDepartmentMapping.Where(y => y.LeaveStructureId == id).Select(z => z.DepartmentId).ToList();
                    LeaveTypeIds = _context.LeaveStructureLeaveTypeMapping.Where(y => y.LeaveStructureId == id).Select(z => z.LeaveTypeId).ToList();
                    result = new
                    {
                        objLeaveStructure,
                        DepartmentIds,
                        LeaveTypeIds,
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
                    objLeaveStructure,
                    DepartmentIds,
                    LeaveTypeIds,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }

        // POST api/LeaveStructure/CreateLeaveStructure
        [HttpPost, Route("CreateLeaveStructure"), Produces("application/json")]
        public object CreateLeaveStructure([FromBody]LeaveStructureVM model)
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
                        LeaveStructure objLeaveStructure = new LeaveStructure();
                        objLeaveStructure.LeaveStructureName = model.LeaveStructureName;
                        objLeaveStructure.MaxLeaveCount = model.MaxLeaveCount;
                        objLeaveStructure.IsCarryForward = model.IsCarryForward;
                        objLeaveStructure.Status = model.Status;
                        objLeaveStructure.IsAllowLeave = model.IsAllowLeave;
                        objLeaveStructure.IsDefault = model.IsDefault;
                        _context.LeaveStructure.Add(objLeaveStructure);
                        //await _ctx.SaveChangesAsync();
                        _context.SaveChanges();

                        if (model.DepartmentIds.Count > 0)
                        {
                            foreach (int DepartmentId in model.DepartmentIds)
                            {
                                LeaveStructureDepartmentMapping objMapping = null;
                                objMapping = new LeaveStructureDepartmentMapping { LeaveStructureId = objLeaveStructure.Id, DepartmentId = DepartmentId };
                                _context.Add(objMapping);
                            }
                            _context.SaveChanges();
                        }

                        if (model.LeaveTypeIds.Count > 0)
                        {
                            foreach (int LeaveTypeId in model.LeaveTypeIds)
                            {
                                LeaveStructureLeaveTypeMapping objMapping = null;
                                objMapping = new LeaveStructureLeaveTypeMapping { LeaveStructureId = objLeaveStructure.Id, LeaveTypeId = LeaveTypeId };
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

        // POST api/LeaveStructure/UpdateLeaveStructure/5
        [HttpPost, Route("UpdateLeaveStructure/{id}")]
        public object UpdateLeaveStructure(int id, [FromBody]LeaveStructureVM model)
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
                        var entityUpdate = _context.LeaveStructure.FirstOrDefault(x => x.Id == id);

                        if (entityUpdate != null)
                        {
                            entityUpdate.LeaveStructureName = model.LeaveStructureName;
                            entityUpdate.MaxLeaveCount = model.MaxLeaveCount;
                            entityUpdate.IsCarryForward = model.IsCarryForward;
                            entityUpdate.Status = model.Status;
                            entityUpdate.IsAllowLeave = model.IsAllowLeave;
                            entityUpdate.IsDefault = model.IsDefault;
                            _context.SaveChanges();
                        }

                        List<LeaveStructureDepartmentMapping> RemoveDepartmentList = _context.LeaveStructureDepartmentMapping.Where(y => y.LeaveStructureId == id).ToList();
                        if (RemoveDepartmentList.Count > 0)
                        {
                            _context.LeaveStructureDepartmentMapping.RemoveRange(RemoveDepartmentList);
                        }
                        if (model.DepartmentIds.Count > 0)
                        {
                            foreach (int DepartmentId in model.DepartmentIds)
                            {
                                LeaveStructureDepartmentMapping objMapping = null;
                                objMapping = new LeaveStructureDepartmentMapping { LeaveStructureId = id, DepartmentId = DepartmentId };
                                _context.Add(objMapping);
                            }
                            _context.SaveChanges();
                        }
                        List<LeaveStructureLeaveTypeMapping> RemoveLeaveTypeList = _context.LeaveStructureLeaveTypeMapping.Where(y => y.LeaveStructureId == id).ToList();
                        if (RemoveLeaveTypeList.Count > 0)
                        {
                            _context.LeaveStructureLeaveTypeMapping.RemoveRange(RemoveLeaveTypeList);
                        }
                        if (model.LeaveTypeIds.Count > 0)
                        {
                            foreach (int LeaveTypeId in model.LeaveTypeIds)
                            {
                                LeaveStructureLeaveTypeMapping objMapping = null;
                                objMapping = new LeaveStructureLeaveTypeMapping { LeaveStructureId = id, LeaveTypeId = LeaveTypeId };
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

        // POST api/LeaveStructure/CreateUpdateLeaveStructure
        [HttpPost, Route("CreateUpdateLeaveStructure/{id}"), Produces("application/json")]
        public object CreateUpdateLeaveStructure(int id, [FromBody]LeaveStructureVM model)
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
                            var entityUpdate = _context.LeaveStructure.FirstOrDefault(x => x.Id == id);

                            if (entityUpdate != null)
                            {
                                entityUpdate.LeaveStructureName = model.LeaveStructureName;
                                entityUpdate.MaxLeaveCount = model.MaxLeaveCount;
                                entityUpdate.IsCarryForward = model.IsCarryForward;
                                entityUpdate.Status = model.Status;
                                entityUpdate.IsAllowLeave = model.IsAllowLeave;
                                entityUpdate.IsDefault = model.IsDefault;
                                _context.SaveChanges();
                            }

                            List<LeaveStructureDepartmentMapping> RemoveDepartmentList = _context.LeaveStructureDepartmentMapping.Where(y => y.LeaveStructureId == id).ToList();
                            if (RemoveDepartmentList.Count > 0)
                            {
                                _context.LeaveStructureDepartmentMapping.RemoveRange(RemoveDepartmentList);
                            }
                            if (model.DepartmentIds.Count > 0)
                            {
                                foreach (int DepartmentId in model.DepartmentIds)
                                {
                                    LeaveStructureDepartmentMapping objMapping = null;
                                    objMapping = new LeaveStructureDepartmentMapping { LeaveStructureId = id, DepartmentId = DepartmentId };
                                    _context.Add(objMapping);
                                }
                                _context.SaveChanges();
                            }
                            List<LeaveStructureLeaveTypeMapping> RemoveLeaveTypeList = _context.LeaveStructureLeaveTypeMapping.Where(y => y.LeaveStructureId == id).ToList();
                            if (RemoveLeaveTypeList.Count > 0)
                            {
                                _context.LeaveStructureLeaveTypeMapping.RemoveRange(RemoveLeaveTypeList);
                            }
                            if (model.LeaveTypeIds.Count > 0)
                            {
                                foreach (int LeaveTypeId in model.LeaveTypeIds)
                                {
                                    LeaveStructureLeaveTypeMapping objMapping = null;
                                    objMapping = new LeaveStructureLeaveTypeMapping { LeaveStructureId = id, LeaveTypeId = LeaveTypeId };
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
                            LeaveStructure objLeaveStructure = new LeaveStructure();
                            objLeaveStructure.LeaveStructureName = model.LeaveStructureName;
                            objLeaveStructure.MaxLeaveCount = model.MaxLeaveCount;
                            objLeaveStructure.IsCarryForward = model.IsCarryForward;
                            objLeaveStructure.Status = model.Status;
                            objLeaveStructure.IsAllowLeave = model.IsAllowLeave;
                            objLeaveStructure.IsDefault = model.IsDefault;
                            _context.LeaveStructure.Add(objLeaveStructure);
                            //await _ctx.SaveChangesAsync();
                            _context.SaveChanges();

                            if (model.DepartmentIds.Count > 0)
                            {
                                foreach (int DepartmentId in model.DepartmentIds)
                                {
                                    LeaveStructureDepartmentMapping objMapping = null;
                                    objMapping = new LeaveStructureDepartmentMapping { LeaveStructureId = objLeaveStructure.Id, DepartmentId = DepartmentId };
                                    _context.Add(objMapping);
                                }
                                _context.SaveChanges();
                            }

                            if (model.LeaveTypeIds.Count > 0)
                            {
                                foreach (int LeaveTypeId in model.LeaveTypeIds)
                                {
                                    LeaveStructureLeaveTypeMapping objMapping = null;
                                    objMapping = new LeaveStructureLeaveTypeMapping { LeaveStructureId = objLeaveStructure.Id, LeaveTypeId = LeaveTypeId };
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

        // DELETE api/LeaveStructure/DeleteLeaveStructureById/5
        [HttpGet, Route("DeleteLeaveStructureById/{id}")]
        public object DeleteLeaveStructureById(int id)
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
                        List<LeaveStructureDepartmentMapping> RemoveDepartmentList = _context.LeaveStructureDepartmentMapping.Where(y => y.LeaveStructureId == id).ToList();
                        if (RemoveDepartmentList.Count > 0)
                        {
                            _context.LeaveStructureDepartmentMapping.RemoveRange(RemoveDepartmentList);
                        }
                        List<LeaveStructureLeaveTypeMapping> RemoveLeaveTypeList = _context.LeaveStructureLeaveTypeMapping.Where(y => y.LeaveStructureId == id).ToList();
                        if (RemoveLeaveTypeList.Count > 0)
                        {
                            _context.LeaveStructureLeaveTypeMapping.RemoveRange(RemoveLeaveTypeList);
                        }
                        _context.SaveChanges();
                        var idToRemove = _context.LeaveStructure.SingleOrDefault(x => x.Id == id);
                        if (idToRemove != null)
                        {
                            _context.LeaveStructure.Remove(idToRemove);
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

        // GET api/LeaveStructure/GetLookupDepartmentDataByLookupID/5
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
                    if (id > 0)
                    {
                        List<int?> DepartmentIds = _context.LeaveStructureDepartmentMapping.Where(x => x.LeaveStructureId != id).Select(x => x.DepartmentId).Distinct().ToList();
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
                        List<int?> DepartmentIds = _context.LeaveStructureDepartmentMapping.Select(x => x.DepartmentId).Distinct().ToList();
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