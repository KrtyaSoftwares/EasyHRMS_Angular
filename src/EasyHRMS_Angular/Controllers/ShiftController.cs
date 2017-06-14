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
    public class ShiftController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public ShiftController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET: api/Shift/GetAllShift
        [HttpGet("GetAllShift"), Produces("application/json")]
        public object GetAllShift()
        {
            //List<TaskTemplate> list = new List<TaskTemplate>();
            List<ShiftVM> list = new List<ShiftVM>();
            object result = null;
            try
            {
                using (_context)
                {
                    //list = _context.TaskTemplate.ToList();
                    list = _context.Shift.Select(y => new
                    {
                        Id = y.Id,
                        ShiftName = y.ShiftName,
                        TimeIn = y.TimeIn,
                        TimeOut = y.TimeOut,
                        BreakTimeIn = y.BreakTimeIn,
                        BreakTimeOut = y.BreakTimeOut,
                        LateTime = y.LateTime,
                        EarlierTime = y.EarlierTime,
                        HalfdayTime = y.HalfdayTime,
                        IsShiftEnabled = y.IsShiftEnabled,
                        Inbuilt = y.Inbuilt
                    }).ToList().Select(y => new ShiftVM
                    {
                        Id = y.Id,
                        ShiftName = y.ShiftName,
                        TimeIn = y.TimeIn,
                        TimeOut = y.TimeOut,
                        BreakTimeIn = y.BreakTimeIn,
                        BreakTimeOut = y.BreakTimeOut,
                        LateTime = y.LateTime,
                        EarlierTime = y.EarlierTime,
                        HalfdayTime = y.HalfdayTime,
                        IsShiftEnabled = y.IsShiftEnabled,
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


        // GET api/Shift/GetShiftById/5
        [HttpGet("GetShiftById/{id}"), Produces("application/json")]
        public object GetShiftById(int id)
        {
            object result = null;
            Shift objShift = new Shift();
            try
            {
                using (_context)
                {
                    objShift = _context.Shift.FirstOrDefault(x => x.Id == id);

                    result = new
                    {
                        objShift,
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
                    objShift,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }

        // POST api/Shift/CreateShift
        [HttpPost, Route("CreateShift"), Produces("application/json")]
        public object CreateShift([FromBody]Shift model)
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
                        _context.Shift.Add(model);
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


        // PUT api/Shift/UpdateShift/5
        [HttpPost, Route("UpdateShift/{id}")]
        public object UpdateShift(int id, [FromBody]Shift model)
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
                        var entityUpdate = _context.Shift.FirstOrDefault(x => x.Id == id);

                        if (entityUpdate != null)
                        {
                            entityUpdate.ShiftName = model.ShiftName;
                            entityUpdate.TimeIn = model.TimeIn;
                            entityUpdate.TimeOut = model.TimeOut;
                            entityUpdate.BreakTimeIn = model.BreakTimeIn;
                            entityUpdate.BreakTimeOut = model.BreakTimeOut;
                            entityUpdate.LateTime = model.LateTime;
                            entityUpdate.EarlierTime = model.EarlierTime;
                            entityUpdate.HalfdayTime = model.HalfdayTime;
                            entityUpdate.IsShiftEnabled = model.IsShiftEnabled;
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


        // POST api/Shift/CreateUpdateShift
        [HttpPost, Route("CreateUpdateShift/{id}"), Produces("application/json")]
        public object CreateUpdateShift(int id, [FromBody]Shift model)
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
                            var entityUpdate = _context.Shift.FirstOrDefault(x => x.Id == id);

                            if (entityUpdate != null)
                            {
                                entityUpdate.ShiftName = model.ShiftName;
                                entityUpdate.TimeIn = model.TimeIn;
                                entityUpdate.TimeOut = model.TimeOut;
                                entityUpdate.BreakTimeIn = model.BreakTimeIn;
                                entityUpdate.BreakTimeOut = model.BreakTimeOut;
                                entityUpdate.LateTime = model.LateTime;
                                entityUpdate.EarlierTime = model.EarlierTime;
                                entityUpdate.HalfdayTime = model.HalfdayTime;
                                entityUpdate.IsShiftEnabled = model.IsShiftEnabled;
                                entityUpdate.Inbuilt = model.Inbuilt;
                                _context.SaveChanges();
                            }
                            _ctxTransaction.Commit();
                            message = "Entry Updated";
                            errorcode = "0";
                        }
                        else
                        {
                            _context.Shift.Add(model);
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

        // DELETE api/Shift/DeleteShiftById/5
        [HttpGet, Route("DeleteShiftById/{id}")]
        public object DeleteShiftById(int id)
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
                        List<ShiftSchedule> listToRemove = new List<ShiftSchedule>();

                        listToRemove = _context.ShiftSchedule.Where(y => y.ShiftId == id).ToList();
                        if (listToRemove.Count > 0)
                        {
                            _context.ShiftSchedule.RemoveRange(listToRemove);
                            _context.SaveChanges();
                        }

                        List<ShiftScheduleDetail> listToRemoveDetail = new List<ShiftScheduleDetail>();

                        listToRemoveDetail = _context.ShiftScheduleDetail.Where(y => y.ShiftId == id).ToList();
                        if (listToRemove.Count > 0)
                        {
                            _context.ShiftScheduleDetail.RemoveRange(listToRemoveDetail);
                            _context.SaveChanges();
                        }

                        var idToRemove = _context.Shift.SingleOrDefault(x => x.Id == id);
                        if (idToRemove != null)
                        {
                            _context.Shift.Remove(idToRemove);
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