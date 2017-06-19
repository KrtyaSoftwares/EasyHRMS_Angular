using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_DA.Models;
using EasyHRMS_Angular.ModelsVM;
using System.Globalization;

namespace EasyHRMS_Angular.Controllers
{
    [Route("api/[controller]")]
    public class ShiftScheduleController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public ShiftScheduleController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET: api/ShiftSchedule/GetAllShiftSchedule
        [HttpGet("GetAllShiftSchedule"), Produces("application/json")]
        public object GetAllShiftSchedule()
        {
            List<ShiftScheduleVM> list = new List<ShiftScheduleVM>();
            object result = null;
            try
            {
                using (_context)
                {
                    list = _context.ShiftSchedule.Select(g => new
                    {
                        Id = g.Id,
                        ShiftId = g.ShiftId,
                        ScheduleDate = g.ScheduleDate,
                        Month = g.Month,
                        Year = g.Year,
                        EmployeeId = g.EmployeeId,
                        ScheduleDetailId = g.ScheduleDetailId
                    }).ToList().Select(y => new ShiftScheduleVM
                    {
                        Id = y.Id,
                        ShiftId = y.ShiftId,
                        ScheduleDate = y.ScheduleDate,
                        Month = y.Month,
                        Year = y.Year,
                        EmployeeId = y.EmployeeId,
                        ScheduleDetailId = y.ScheduleDetailId
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

        // GET api/ShiftSchedule/GetShiftScheduleById/5
        [HttpGet("GetShiftScheduleById/{id}"), Produces("application/json")]
        public object GetShiftScheduleById(int id)
        {
            object result = null;

            ShiftScheduleVM objShiftSchedule = new ShiftScheduleVM();
            try
            {
                using (_context)
                {
                    objShiftSchedule = _context.ShiftSchedule.Where(x => x.Id == id).Select(y => new ShiftScheduleVM
                    {
                        Id = y.Id,
                        ShiftId = y.ShiftId,
                        Year = y.Year,
                        Month = y.Month,
                        ScheduleDate = y.ScheduleDate,
                        //StartDate = y.StartDate,
                        //EndDate = y.EndDate,
                        EmployeeId = y.EmployeeId,
                        ScheduleDetailId = y.ScheduleDetailId
                        //EmployeeIds = _context.ShiftScheduleEmployeeMapping.Where(z => z.ScheduleId == y.Id).Select(p => p.EmployeeId).ToList()
                    }).FirstOrDefault();

                    result = new
                    {
                        objShiftSchedule,
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
                    objShiftSchedule,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }

        // GET: api/ShiftSchedule/GetAllShiftForShiftSchedule
        [HttpGet("GetAllShiftForShiftSchedule"), Produces("application/json")]
        public object GetAllShiftForShiftSchedule()
        {
            List<ShiftVM> list = new List<ShiftVM>();
            object result = null;
            try
            {
                using (_context)
                {
                    list = _context.Shift.Select(y => new
                    {
                        Id = y.Id,
                        ShiftName = y.ShiftName,
                        TimeIn = y.TimeIn,
                        TimeOut = y.TimeOut,
                        BreakTimeIn = y.BreakTimeIn,
                        BreakTimeOut = y.BreakTimeOut,
                        ShiftScheduleCount = _context.ShiftScheduleDetail.Where(x => x.ShiftId == y.Id).Count()
                    }).ToList().Select(y => new ShiftVM
                    {
                        Id = y.Id,
                        ShiftName = y.ShiftName,
                        TimeIn = y.TimeIn,
                        TimeOut = y.TimeOut,
                        BreakTimeIn = y.BreakTimeIn,
                        BreakTimeOut = y.BreakTimeOut,
                        ShiftScheduleCount = y.ShiftScheduleCount
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

        // GET api/ShiftSchedule/GetShiftScheduleByShiftId/5
        [HttpGet("GetShiftScheduleByShiftId/{id}"), Produces("application/json")]
        public object GetShiftScheduleByShiftId(int id)
        {
            object result = null;

            List<ShiftScheduleVM> list = new List<ShiftScheduleVM>();
            try
            {
                using (_context)
                {
                    list = _context.ShiftScheduleDetail.Where(x => x.ShiftId == id).Select(y => new
                    {
                        Id = y.Id,
                        ShiftId = y.ShiftId,
                        ScheduleType = y.ScheduleType,
                        Monthly = y.Monthly,
                        Weekly = y.Weekly,
                        Daily = y.Daily,
                        ByWeekly = y.ByWeekly,
                        StartDate = y.StartDate,
                        EndDate = y.EndDate,
                        Year = _context.ShiftSchedule.Where(z => z.ScheduleDetailId == y.Id).FirstOrDefault().Year,
                        Month = _context.ShiftSchedule.Where(z => z.ScheduleDetailId == y.Id).FirstOrDefault().Month,
                        ScheduleDate = _context.ShiftSchedule.Where(z => z.ScheduleDetailId == y.Id).FirstOrDefault().ScheduleDate,
                        //EmployeeCount = _context.ShiftScheduleEmployeeMapping.Where(z => z.ScheduleId == y.Id).Count()
                        EmployeeCount = _context.ShiftSchedule.Where(z => z.ScheduleDetailId == y.Id).Select(z => z.EmployeeId).Distinct().Count()
                    }).ToList().Select(y => new ShiftScheduleVM
                    {
                        Id = y.Id,
                        ShiftId = y.ShiftId,
                        ScheduleType = y.ScheduleType,
                        Monthly = y.Monthly,
                        Weekly = y.Weekly,
                        Daily = y.Daily,
                        ByWeekly = y.ByWeekly,
                        StartDate = y.StartDate,
                        EndDate = y.EndDate,
                        Year = y.Year,
                        Month = y.Month,
                        ScheduleDate = y.ScheduleDate,
                        EmployeeCount = y.EmployeeCount
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

        // GET api/ShiftSchedule/GetShiftScheduleMappingByShiftDetailId/5
        [HttpGet("GetShiftScheduleMappingByShiftDetailId/{id}"), Produces("application/json")]
        public object GetShiftScheduleMappingByShiftDetailId(int id)
        {
            object result = null;

            List<ShiftScheduleVM> list = new List<ShiftScheduleVM>();
            try
            {
                using (_context)
                {
                    list = _context.ShiftSchedule.Where(x => x.ScheduleDetailId == id).Select(y => new
                    {
                        Id = y.Id,
                        ShiftId = y.ShiftId,
                        ScheduleType = _context.ShiftScheduleDetail.Where(z => z.Id == y.ScheduleDetailId).FirstOrDefault().ScheduleType,
                        Monthly = _context.ShiftScheduleDetail.Where(z => z.Id == y.ScheduleDetailId).FirstOrDefault().Monthly,
                        Weekly = _context.ShiftScheduleDetail.Where(z => z.Id == y.ScheduleDetailId).FirstOrDefault().Weekly,
                        Daily = _context.ShiftScheduleDetail.Where(z => z.Id == y.ScheduleDetailId).FirstOrDefault().Daily,
                        ByWeekly = _context.ShiftScheduleDetail.Where(z => z.Id == y.ScheduleDetailId).FirstOrDefault().ByWeekly,
                        StartDate = _context.ShiftScheduleDetail.Where(z => z.Id == y.ScheduleDetailId).FirstOrDefault().StartDate,
                        EndDate = _context.ShiftScheduleDetail.Where(z => z.Id == y.ScheduleDetailId).FirstOrDefault().EndDate,
                        Year = y.Year,
                        Month = y.Month,
                        ScheduleDate = y.ScheduleDate,
                        //EmployeeCount = _context.ShiftScheduleEmployeeMapping.Where(z => z.ScheduleId == y.Id).Count()
                        //EmployeeCount = _context.ShiftSchedule.Where(z => z.ScheduleDetailId == y.Id).Select(z => z.EmployeeId).Distinct().Count()
                    }).ToList().Select(y => new ShiftScheduleVM
                    {
                        Id = y.Id,
                        ShiftId = y.ShiftId,
                        ScheduleType = y.ScheduleType,
                        Monthly = y.Monthly,
                        Weekly = y.Weekly,
                        Daily = y.Daily,
                        ByWeekly = y.ByWeekly,
                        StartDate = y.StartDate,
                        EndDate = y.EndDate,
                        Year = y.Year,
                        Month = y.Month,
                        ScheduleDate = y.ScheduleDate,
                        //EmployeeCount = y.EmployeeCount
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
        public bool IsWorkingDay(DayOfWeek Name)
        {
            //using (_context)
            //{
            var data = _context.WorkingDays.FirstOrDefault();

            if (DayOfWeek.Monday == Name)
            {
                if (data.Mon == true)
                    return true;
            }
            else if (DayOfWeek.Tuesday == Name)
            {
                if (data.Tue == true)
                    return true;
            }
            else if (DayOfWeek.Wednesday == Name)
            {
                if (data.Wed == true)
                    return true;
            }
            else if (DayOfWeek.Thursday == Name)
            {
                if (data.Thers == true)
                    return true;
            }
            else if (DayOfWeek.Friday == Name)
            {
                if (data.Fri == true)
                    return true;
            }
            else if (DayOfWeek.Saturday == Name)
            {
                if (data.Sat == true)
                    return true;
            }
            else if (DayOfWeek.Sunday == Name)
            {
                if (data.Sun == true)
                    return true;
            }

            return false;
            //}
        }

        [HttpPost, Route("CreateShiftSchedule"), Produces("application/json")]
        public object CreateShiftSchedule([FromBody]ShiftScheduleVM model)
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
                        ShiftScheduleDetail objShiftscheduleDetail = new ShiftScheduleDetail();
                        objShiftscheduleDetail.ScheduleType = model.ScheduleType;
                        objShiftscheduleDetail.Monthly = model.Monthly;
                        objShiftscheduleDetail.Weekly = model.Weekly;
                        objShiftscheduleDetail.Daily = model.Daily;
                        objShiftscheduleDetail.ByWeekly = model.ByWeekly;
                        objShiftscheduleDetail.StartDate = model.StartDate;
                        objShiftscheduleDetail.EndDate = model.EndDate;
                        objShiftscheduleDetail.ShiftId = model.ShiftId;
                        _context.ShiftScheduleDetail.Add(objShiftscheduleDetail);
                        _context.SaveChanges();

                        if (model.EmployeeIds.Count > 0)
                        {
                            foreach (var Empid in model.EmployeeIds)
                            {
                                //ShiftScheduleEmployeeMapping obj = new ShiftScheduleEmployeeMapping
                                //{
                                //    ScheduleId = objShiftSchedule.Id,
                                //    EmployeeId = Empid,
                                //    ShiftId = objShiftSchedule.ShiftId
                                //};
                                //_context.ShiftScheduleEmployeeMapping.Add(obj);
                                if ((bool)model.Daily == true)
                                {
                                    if (IsWorkingDay(model.ScheduleDate.Value.DayOfWeek))
                                    {
                                        ShiftSchedule objShiftSchedule = new ShiftSchedule();
                                        objShiftSchedule.ShiftId = model.ShiftId;
                                        objShiftSchedule.Year = model.Year;
                                        objShiftSchedule.Month = model.Month;
                                        objShiftSchedule.ScheduleDate = model.ScheduleDate;
                                        objShiftSchedule.EmployeeId = Empid;
                                        objShiftSchedule.ScheduleDetailId = objShiftscheduleDetail.Id;
                                        //objShiftSchedule.StartDate = model.StartDate;
                                        //objShiftSchedule.EndDate = model.EndDate;
                                        _context.ShiftSchedule.Add(objShiftSchedule);
                                        _context.SaveChanges();
                                    }
                                }
                                else
                                {
                                    if (model.StartDate != null && model.EndDate != null)
                                    {
                                        for (DateTime date = (DateTime)model.StartDate; date <= model.EndDate; date = date.AddDays(1))
                                        {
                                            if (IsWorkingDay(date.DayOfWeek))
                                            {
                                                ShiftSchedule objShiftSchedule = new ShiftSchedule();
                                                objShiftSchedule.ShiftId = model.ShiftId;
                                                objShiftSchedule.Year = model.Year;
                                                objShiftSchedule.Month = model.Month;
                                                objShiftSchedule.ScheduleDate = date;
                                                objShiftSchedule.EmployeeId = Empid;
                                                objShiftSchedule.ScheduleDetailId = objShiftscheduleDetail.Id;
                                                //objShiftSchedule.StartDate = model.StartDate;
                                                //objShiftSchedule.EndDate = model.EndDate;
                                                _context.ShiftSchedule.Add(objShiftSchedule);
                                            }
                                        }

                                        _context.SaveChanges();
                                    }
                                }


                            }
                        }

                        //await _ctx.SaveChangesAsync();

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

        // PUT api/ShiftSchedule/UpdateShiftSchedule/5
        [HttpPost, Route("UpdateShiftSchedule/{id}")]
        public object UpdateShiftSchedule(int id, [FromBody]ShiftScheduleVM model)
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
                        List<ShiftSchedule> listToRemove = new List<ShiftSchedule>();

                        if (id != 0)
                        {
                            listToRemove = _context.ShiftSchedule.Where(y => y.ScheduleDetailId == id).ToList();
                            if (listToRemove.Count > 0)
                            {
                                _context.ShiftSchedule.RemoveRange(listToRemove);
                                _context.SaveChanges();
                            }
                        }

                        var entityUpdate = _context.ShiftScheduleDetail.FirstOrDefault(x => x.Id == id);

                        if (entityUpdate != null)
                        {
                            entityUpdate.ScheduleType = model.ScheduleType;
                            entityUpdate.Monthly = model.Monthly;
                            entityUpdate.Weekly = model.Weekly;
                            entityUpdate.Daily = model.Daily;
                            entityUpdate.ByWeekly = model.ByWeekly;
                            entityUpdate.StartDate = model.StartDate;
                            entityUpdate.EndDate = model.EndDate;
                            entityUpdate.ShiftId = model.ShiftId;

                            _context.SaveChanges();
                        }

                        if (model.EmployeeIds.Count > 0)
                        {
                            foreach (var Empid in model.EmployeeIds)
                            {
                                //ShiftScheduleEmployeeMapping obj = new ShiftScheduleEmployeeMapping
                                //{
                                //    ScheduleId = objShiftSchedule.Id,
                                //    EmployeeId = Empid,
                                //    ShiftId = objShiftSchedule.ShiftId
                                //};
                                //_context.ShiftScheduleEmployeeMapping.Add(obj);
                                if ((bool)model.Daily == true)
                                {
                                    if (IsWorkingDay(model.ScheduleDate.Value.DayOfWeek))
                                    {
                                        ShiftSchedule objShiftSchedule = new ShiftSchedule();
                                        objShiftSchedule.ShiftId = model.ShiftId;
                                        objShiftSchedule.Year = model.Year;
                                        objShiftSchedule.Month = model.Month;
                                        objShiftSchedule.ScheduleDate = model.ScheduleDate;
                                        objShiftSchedule.EmployeeId = model.EmployeeId;
                                        objShiftSchedule.ScheduleDetailId = entityUpdate.Id;
                                        //objShiftSchedule.StartDate = model.StartDate;
                                        //objShiftSchedule.EndDate = model.EndDate;
                                        _context.ShiftSchedule.Add(objShiftSchedule);
                                        _context.SaveChanges();
                                    }
                                }
                                else
                                {
                                    if (model.StartDate != null && model.EndDate != null)
                                    {
                                        for (DateTime date = (DateTime)model.StartDate; date <= model.EndDate; date = date.AddDays(1))
                                        {
                                            if (IsWorkingDay(date.DayOfWeek))
                                            {
                                                ShiftSchedule objShiftSchedule = new ShiftSchedule();
                                                objShiftSchedule.ShiftId = model.ShiftId;
                                                objShiftSchedule.Year = model.Year;
                                                objShiftSchedule.Month = model.Month;
                                                objShiftSchedule.ScheduleDate = date;
                                                objShiftSchedule.EmployeeId = model.EmployeeId;
                                                objShiftSchedule.ScheduleDetailId = entityUpdate.Id;
                                                //objShiftSchedule.StartDate = model.StartDate;
                                                //objShiftSchedule.EndDate = model.EndDate;
                                                _context.ShiftSchedule.Add(objShiftSchedule);
                                            }
                                        }

                                        _context.SaveChanges();
                                    }
                                }


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


        // POST api/ShiftSchedule/CreateUpdateShiftSchedule
        [HttpPost, Route("CreateUpdateShiftSchedule/{id}"), Produces("application/json")]
        public object CreateUpdateShiftSchedule(int id, [FromBody]ShiftScheduleVM model)
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
                            List<ShiftSchedule> listToRemove = new List<ShiftSchedule>();

                            listToRemove = _context.ShiftSchedule.Where(y => y.ScheduleDetailId == id).ToList();
                            if (listToRemove.Count > 0)
                            {
                                _context.ShiftSchedule.RemoveRange(listToRemove);
                                _context.SaveChanges();
                            }

                            var entityUpdate = _context.ShiftScheduleDetail.FirstOrDefault(x => x.Id == id);

                            if (entityUpdate != null)
                            {
                                entityUpdate.ScheduleType = model.ScheduleType;
                                entityUpdate.Monthly = model.Monthly;
                                entityUpdate.Weekly = model.Weekly;
                                entityUpdate.Daily = model.Daily;
                                entityUpdate.ByWeekly = model.ByWeekly;
                                entityUpdate.StartDate = model.StartDate;
                                entityUpdate.EndDate = model.EndDate;
                                entityUpdate.ShiftId = model.ShiftId;

                                _context.SaveChanges();
                            }

                            if (model.EmployeeIds.Count > 0)
                            {
                                foreach (var Empid in model.EmployeeIds)
                                {
                                    //ShiftScheduleEmployeeMapping obj = new ShiftScheduleEmployeeMapping
                                    //{
                                    //    ScheduleId = objShiftSchedule.Id,
                                    //    EmployeeId = Empid,
                                    //    ShiftId = objShiftSchedule.ShiftId
                                    //};
                                    //_context.ShiftScheduleEmployeeMapping.Add(obj);
                                    if ((bool)model.Daily == true)
                                    {
                                        if (IsWorkingDay(model.ScheduleDate.Value.DayOfWeek))
                                        {
                                            ShiftSchedule objShiftSchedule = new ShiftSchedule();
                                            objShiftSchedule.ShiftId = model.ShiftId;
                                            objShiftSchedule.Year = model.Year;
                                            objShiftSchedule.Month = model.Month;
                                            objShiftSchedule.ScheduleDate = model.ScheduleDate;
                                            objShiftSchedule.EmployeeId = model.EmployeeId;
                                            objShiftSchedule.ScheduleDetailId = entityUpdate.Id;
                                            //objShiftSchedule.StartDate = model.StartDate;
                                            //objShiftSchedule.EndDate = model.EndDate;
                                            _context.ShiftSchedule.Add(objShiftSchedule);
                                            _context.SaveChanges();
                                        }
                                    }
                                    else
                                    {
                                        if (model.StartDate != null && model.EndDate != null)
                                        {
                                            for (DateTime date = (DateTime)model.StartDate; date <= model.EndDate; date = date.AddDays(1))
                                            {
                                                if (IsWorkingDay(date.DayOfWeek))
                                                {
                                                    ShiftSchedule objShiftSchedule = new ShiftSchedule();
                                                    objShiftSchedule.ShiftId = model.ShiftId;
                                                    objShiftSchedule.Year = model.Year;
                                                    objShiftSchedule.Month = model.Month;
                                                    objShiftSchedule.ScheduleDate = date;
                                                    objShiftSchedule.EmployeeId = model.EmployeeId;
                                                    objShiftSchedule.ScheduleDetailId = entityUpdate.Id;
                                                    //objShiftSchedule.StartDate = model.StartDate;
                                                    //objShiftSchedule.EndDate = model.EndDate;
                                                    _context.ShiftSchedule.Add(objShiftSchedule);
                                                }
                                            }

                                            _context.SaveChanges();
                                        }
                                    }
                                }
                            }

                            _ctxTransaction.Commit();
                            message = "Entry Updated";
                            errorcode = "0";
                        }
                        else
                        {
                            ShiftScheduleDetail objShiftscheduleDetail = new ShiftScheduleDetail();
                            objShiftscheduleDetail.ScheduleType = model.ScheduleType;
                            objShiftscheduleDetail.Monthly = model.Monthly;
                            objShiftscheduleDetail.Weekly = model.Weekly;
                            objShiftscheduleDetail.Daily = model.Daily;
                            objShiftscheduleDetail.ByWeekly = model.ByWeekly;
                            objShiftscheduleDetail.StartDate = model.StartDate;
                            objShiftscheduleDetail.EndDate = model.EndDate;
                            objShiftscheduleDetail.ShiftId = model.ShiftId;
                            _context.ShiftScheduleDetail.Add(objShiftscheduleDetail);
                            _context.SaveChanges();

                            if (model.EmployeeIds.Count > 0)
                            {
                                foreach (var Empid in model.EmployeeIds)
                                {
                                    //ShiftScheduleEmployeeMapping obj = new ShiftScheduleEmployeeMapping
                                    //{
                                    //    ScheduleId = objShiftSchedule.Id,
                                    //    EmployeeId = Empid,
                                    //    ShiftId = objShiftSchedule.ShiftId
                                    //};
                                    //_context.ShiftScheduleEmployeeMapping.Add(obj);
                                    if ((bool)model.Daily == true)
                                    {
                                        if (IsWorkingDay(model.ScheduleDate.Value.DayOfWeek))
                                        {
                                            ShiftSchedule objShiftSchedule = new ShiftSchedule();
                                            objShiftSchedule.ShiftId = model.ShiftId;
                                            objShiftSchedule.Year = model.Year;
                                            objShiftSchedule.Month = model.Month;
                                            objShiftSchedule.ScheduleDate = model.ScheduleDate;
                                            objShiftSchedule.EmployeeId = model.EmployeeId;
                                            objShiftSchedule.ScheduleDetailId = objShiftscheduleDetail.Id;
                                            //objShiftSchedule.StartDate = model.StartDate;
                                            //objShiftSchedule.EndDate = model.EndDate;
                                            _context.ShiftSchedule.Add(objShiftSchedule);
                                            _context.SaveChanges();
                                        }
                                    }
                                    else
                                    {
                                        if (model.StartDate != null && model.EndDate != null)
                                        {
                                            for (DateTime date = (DateTime)model.StartDate; date <= model.EndDate; date = date.AddDays(1))
                                            {
                                                if (IsWorkingDay(date.DayOfWeek))
                                                {
                                                    ShiftSchedule objShiftSchedule = new ShiftSchedule();
                                                    objShiftSchedule.ShiftId = model.ShiftId;
                                                    objShiftSchedule.Year = model.Year;
                                                    objShiftSchedule.Month = model.Month;
                                                    objShiftSchedule.ScheduleDate = date;
                                                    objShiftSchedule.EmployeeId = model.EmployeeId;
                                                    objShiftSchedule.ScheduleDetailId = objShiftscheduleDetail.Id;
                                                    //objShiftSchedule.StartDate = model.StartDate;
                                                    //objShiftSchedule.EndDate = model.EndDate;
                                                    _context.ShiftSchedule.Add(objShiftSchedule);
                                                }
                                            }
                                            _context.SaveChanges();
                                        }
                                    }
                                }
                            }
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

        // DELETE api/ShiftSchedule/DeleteShiftScheduleById/5
        [HttpGet, Route("DeleteShiftScheduleById/{id}")]
        public object DeleteShiftScheduleById(int id)
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

                        listToRemove = _context.ShiftSchedule.Where(y => y.ScheduleDetailId == id).ToList();
                        if (listToRemove.Count > 0)
                        {
                            _context.ShiftSchedule.RemoveRange(listToRemove);
                            _context.SaveChanges();
                        }
                        var idToRemove = _context.ShiftScheduleDetail.SingleOrDefault(x => x.Id == id);
                        if (idToRemove != null)
                        {
                            _context.ShiftScheduleDetail.Remove(idToRemove);
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

        // GET api/ShiftSchedule/GetShiftScheduleDDListData
        [HttpGet, Route("GetShiftScheduleDDListData")]
        public object GetShiftScheduleDDListData([FromQuery]int year, [FromQuery]int month, [FromQuery]int scheduletypeid)
        {
            object result = null; string message = ""; string errorcode = ""; string excp = "";

            List<string> list = new List<string>();
            if (year == 0 && month == 0 && scheduletypeid == 0)
            {
                return BadRequest();
            }
            using (_context)
            {
                try
                {
                    int iYear = year;
                    int iMonth = month;
                   
                    int countDays = DateTime.DaysInMonth(iYear, iMonth);
                    DateTime StartDate, EndDate;
                    //int j = 1;
                    string sStartDate = iMonth.ToString()
                           + "/1" + "/" + iYear.ToString();
                    string eEndDate = iMonth.ToString() + "/"
                       + countDays + "/" + iYear.ToString();

                    if (scheduletypeid == 4)
                    {
                        StartDate = DateTime.Parse(sStartDate);
                        if (countDays == 30 || countDays == 31)
                        {
                            string Sweek = StartDate.ToString("dd/MMM") + " - " + StartDate.AddDays(14).ToString("dd/MMM");
                            //dt.Rows.Add("1", Sweek);
                            list.Add(Sweek);
                            //EndDate = DateTime.Parse(eEndDate);
                            EndDate = DateTime.Parse(eEndDate, CultureInfo.InvariantCulture);
                            string Eweek = StartDate.AddDays(15).ToString("dd/MMM") + " - " + EndDate.ToString("dd/MMM");
                            //dt.Rows.Add("2", Eweek);
                            list.Add(Eweek);
                        }
                        else if (countDays == 28 || countDays == 29)
                        {
                            string Sweek = StartDate.ToString("dd/MMM") + " - " + StartDate.AddDays(13).ToString("dd/MMM");
                            //dt.Rows.Add("1", Sweek);
                            list.Add(Sweek);
                            EndDate = DateTime.Parse(eEndDate);
                            string Eweek = StartDate.AddDays(14).ToString("dd/MMM") + " - " + EndDate.ToString("dd/MMM");
                            //dt.Rows.Add("2", Eweek);
                            list.Add(Eweek);
                        }
                    }
                    else
                    {
                        StartDate = StartOfWeek(DateTime.Parse(sStartDate), DayOfWeek.Monday);
                        EndDate = StartDate.AddDays(6);
                        //dt.Rows.Add(j.ToString(), StartDate.ToString("dd/MMM") + " - " + EndDate.ToString("dd/MMM"));
                        list.Add(StartDate.ToString("dd/MMM") + " - " + EndDate.ToString("dd/MMM"));
                        //j++;

                        for (int i = EndDate.Day; i <= countDays; i = i + 7)
                        {
                            //sStartDate = iMonth.ToString()
                            //+ "/" + i.ToString()
                            //+ "/" + iYear.ToString();

                            sStartDate = i.ToString()
                            + "/" + iMonth.ToString()
                            + "/" + iYear.ToString();

                            DateTime temp = DateTime.Parse(sStartDate);
                            DateTime dt_start = DateTime.Parse(sStartDate).AddDays(1);

                            DateTime dt_finish = dt_start.AddDays(6);
                            string sReturn = dt_start.ToString("dd/MMM") + " - " + dt_finish.ToString("dd/MMM");
                            //dt.Rows.Add(j.ToString(), sReturn);
                            list.Add(sReturn);
                            //j++;
                            if ((dt_finish.AddDays(1)).Month != iMonth)
                                break;
                        }
                    }

                    message = "Success!!";
                    errorcode = "0";
                }
                catch (Exception e)
                {
                    e.ToString();
                    message = "Error!!";
                    errorcode = "1";
                    excp = e.ToString();
                }

                result = new
                {
                    list ,
                    error = errorcode,
                    msg = message,
                    excp = excp
                };

            }
            return result;
        }
        public DateTime StartOfWeek(DateTime dt, DayOfWeek startofweek)
        {
            int diff = dt.DayOfWeek - startofweek;
            if (diff < 0)
            {
                diff += 7;
            }

            return dt.AddDays(-1 * diff).Date;
        }


    }
}