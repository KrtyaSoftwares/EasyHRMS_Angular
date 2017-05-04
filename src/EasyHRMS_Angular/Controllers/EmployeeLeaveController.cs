using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_DA.Models;
using EasyHRMS_Angular.Models;
using System.Reflection;

namespace EasyHRMS_Angular.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeLeaveController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public EmployeeLeaveController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET: api/EmployeeLeave/GetAllEmployeeLeave
        [HttpGet("GetAllEmployeeLeave"), Produces("application/json")]
        public object GetAllEmployeeLeave()
        {
            //List<EmployeeLeaveVM> list = new List<EmployeeLeaveVM>();
            List<EmployeeLeave> list = new List<EmployeeLeave>();
            object result = null;
            try
            {
                using (_context)
                {
                    list = _context.EmployeeLeave.ToList();
                   
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



        // GET api/EmployeeLeave/GetEmployeeLeaveByEmployeeLeaveID/5
        [HttpGet("GetEmployeeLeaveByEmployeeLeaveID/{id}"), Produces("application/json")]
        public object GetEmployeeLeaveByEmployeeLeaveID(int id)
        {
            object result = null;
            //Holiday objHoliday = null;
            List<EmployeeLeave> list = new List<EmployeeLeave>();
            try
            {
                using (_context)
                {
                    //objHoliday = _context.Holiday.FirstOrDefault(x => x.HolidayId == id);
                    list = _context.EmployeeLeave.Where(x => x.EmployeeLeaveId == id).Select(x => new EmployeeLeave()
                    {
                        EmployeeLeaveId = x.EmployeeLeaveId,
                        EmployeeId = x.EmployeeId,
                        FromDate = x.FromDate,
                        ToDate = x.ToDate,
                        LeaveTypeId = x.LeaveTypeId,
                        Status = x.Status,
                        LeaveReason = x.LeaveReason,
                        CreateDate = x.CreateDate,
                        IsHalfDay = x.IsHalfDay
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
                    msg = "Error"
                };
            }
            return result;
        }

        // POST api/EmployeeLeave/CreateEmployeeLeave
        [HttpPost, Route("CreateEmployeeLeave"), Produces("application/json")]
        public object CreateEmployeeLeave([FromBody]EmployeeLeave model)
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
                        _context.EmployeeLeave.Add(model);
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


        // PUT api/EmployeeLeave/UpdateEmployeeLeave/5
        [HttpPost, Route("UpdateEmployeeLeave/{id}")]
        public object UpdateEmployeeLeave(int id, [FromBody]EmployeeLeave model)
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
                        var entityUpdate = _context.EmployeeLeave.FirstOrDefault(x => x.EmployeeId == id);
                        //if (entityUpdate != null)
                        //{
                        //    PropertyInfo[] propertiesEU = entityUpdate.GetType().GetProperties();
                        //    foreach (PropertyInfo pi in propertiesEU)
                        //    {
                        //        if (pi.Name != "EmployeeLeaveID")
                        //        {
                        //            pi.SetValue(entityUpdate, pi.GetValue(model));
                        //            //var xl = pi.GetValue(entityUpdate);
                        //        }
                        //    }
                        //    _context.SaveChanges();
                        //}

                        if (entityUpdate != null)
                        {
                            entityUpdate.EmployeeId = model.EmployeeId;
                            entityUpdate.FromDate = model.FromDate;
                            entityUpdate.ToDate = model.ToDate;
                            entityUpdate.LeaveTypeId = model.LeaveTypeId;
                            entityUpdate.Status = model.Status;
                            entityUpdate.LeaveReason = model.LeaveReason;
                            entityUpdate.CreateDate = model.CreateDate;
                            entityUpdate.IsHalfDay = model.IsHalfDay;

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


        // POST api/EmployeeLeave/CreateUpdateEmployeeLeave
        [HttpPost, Route("CreateUpdateEmployeeLeave/{id}"), Produces("application/json")]
        public object CreateUpdateEmployeeLeave(int id, [FromBody]EmployeeLeave model)
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
                            var entityUpdate = _context.EmployeeLeave.FirstOrDefault(x => x.EmployeeId == id);
                            //if (entityUpdate != null)
                            //{
                            //    PropertyInfo[] propertiesEU = entityUpdate.GetType().GetProperties();
                            //    foreach (PropertyInfo pi in propertiesEU)
                            //    {
                            //        pi.SetValue(entityUpdate, pi.GetValue(model));
                            //    }
                            //    _context.SaveChanges();
                            //}


                            if (entityUpdate != null)
                            {
                                entityUpdate.EmployeeId = model.EmployeeId;
                                entityUpdate.FromDate = model.FromDate;
                                entityUpdate.ToDate = model.ToDate;
                                entityUpdate.LeaveTypeId = model.LeaveTypeId;
                                entityUpdate.Status = model.Status;
                                entityUpdate.LeaveReason = model.LeaveReason;
                                entityUpdate.CreateDate = model.CreateDate;
                                entityUpdate.IsHalfDay = model.IsHalfDay;

                                _context.SaveChanges();
                            }
                            _ctxTransaction.Commit();
                            message = "Entry Updated";
                            errorcode = "0";
                        }
                        else
                        {
                            _context.EmployeeLeave.Add(model);
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

        // DELETE api/EmployeeLeave/DeleteEmployeeLeaveByID/5
        [HttpGet, Route("DeleteEmployeeLeaveByID/{id}")]
        public object DeleteEmployeeLeaveByID(int id)
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
                        var idToRemove = _context.EmployeeLeave.SingleOrDefault(x => x.EmployeeLeaveId == id);
                        if (idToRemove != null)
                        {
                            _context.EmployeeLeave.Remove(idToRemove);
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