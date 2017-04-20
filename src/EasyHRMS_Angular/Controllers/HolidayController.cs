using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_DA.Models;
using EasyHRMS_Angular.Models;

namespace EasyHRMS_Angular.Controllers
{
    [Route("api/[controller]")]
    public class HolidayController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly EhrmsContext _context;

        public HolidayController(EhrmsContext context)
        {
            _context = context;
        }

        // GET: api/Emp/getAllEmp
        [HttpGet("getAllHoliday"), Produces("application/json")]
        public object getAllHoliday()
        {
            List<HolidayVM> list = new List<HolidayVM>();

            object result = null;
            try
            {
                using (_context)
                {
                    list = _context.Holiday.Select(x => new HolidayVM()
                    {
                        HolidayId = x.HolidayId,
                        HolidayDate = x.HolidayDate,
                        HolidayDesc = x.HolidayDesc,
                        IsActive = x.IsActive 
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

        // GET api/Contact/GetHolidayByID/5
        [HttpGet("GetHolidayByID/{id}"), Produces("application/json")]
        public object GetHolidayByID(int id)
        {
            object result = null;
            Holiday objHoliday = null;
            try
            {
                using (_context)
                {
                    objHoliday = _context.Holiday.FirstOrDefault(x => x.HolidayId == id);
                    result = new
                    {
                        objHoliday,
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
                    objHoliday,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }

        // POST api/Emp/CreateHoliday
        [HttpPost, Route("CreateHoliday"), Produces("application/json")]
        public object CreateHoliday([FromBody]Holiday model)
        {
            object result = null;
            string message = "";
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
                        _context.Holiday.Add(model);
                        //await _ctx.SaveChangesAsync();
                        _context.SaveChanges();
                        _ctxTransaction.Commit();
                        message = "Saved Successfully";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback();
                        e.ToString();
                        message = "Saved Error";
                    }

                    result = new
                    {
                        message
                    };
                }
            }
            return result;
        }

        // PUT api/Emp/UpdateHoliday/5
        [HttpPut, Route("UpdateHoliday/{id}")]
        public object UpdateHoliday(int id, [FromBody]Holiday model)
        {
            object result = null; string message = "";
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
                        var entityUpdate = _context.Holiday.FirstOrDefault(x => x.HolidayId == id);
                        if (entityUpdate != null)
                        {
                            entityUpdate.HolidayDate = model.HolidayDate;
                            entityUpdate.HolidayDesc = model.HolidayDesc;
                            entityUpdate.IsActive = model.IsActive;

                            _context.SaveChanges();
                        }
                        _ctxTransaction.Commit();
                        message = "Entry Updated";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback(); e.ToString();
                        message = "Entry Update Failed!!";
                    }

                    result = new
                    {
                        message
                    };
                }
            }
            return result;
        }


        // POST api/Emp/CreateUpdateHoliday
        [HttpPost, Route("CreateUpdateHoliday/{id}"), Produces("application/json")]
        public object CreateUpdateHoliday(int id, [FromBody]Holiday model)
        {
            object result = null;
            string message = "";
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
                            var entityUpdate = _context.Holiday.FirstOrDefault(x => x.HolidayId == id);
                            if (entityUpdate != null)
                            {
                                entityUpdate.HolidayDate = model.HolidayDate;
                                entityUpdate.HolidayDesc = model.HolidayDesc;
                                entityUpdate.IsActive = model.IsActive;

                                _context.SaveChanges();
                            }
                            _ctxTransaction.Commit();
                            message = "Entry Updated";
                        }
                        else
                        {
                            _context.Holiday.Add(model);
                            //await _ctx.SaveChangesAsync();
                            _context.SaveChanges();
                            _ctxTransaction.Commit();
                            message = "Saved Successfully";
                        }

                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback();
                        e.ToString();
                        message = "Saved Error";
                    }

                    result = new
                    {
                        message
                    };
                }
            }
            return result;
        }

        // DELETE api/Contact/DeleteHolidayByID/5
        [HttpDelete, Route("DeleteHolidayByID/{id}")]
        public object DeleteHolidayByID(int id)
        {
            object result = null;
            string message = "";
            using (_context)
            {
                using (var _ctxTransaction = _context.Database.BeginTransaction())
                {
                    try
                    {
                        var idToRemove = _context.Holiday.SingleOrDefault(x => x.HolidayId == id);
                        if (idToRemove != null)
                        {
                            _context.Holiday.Remove(idToRemove);
                            _context.SaveChanges();
                        }
                        _ctxTransaction.Commit();
                        message = "Deleted Successfully";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback(); e.ToString();
                        message = "Error on Deleting!!";
                    }

                    result = new
                    {
                        message
                    };
                }
            }
            return result;
        }


    }
}