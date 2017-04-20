using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_DA.Models;
using EasyHRMS_Angular.Models;
using Microsoft.EntityFrameworkCore;

namespace EasyHRMS_Angular.Controllers
{
    [Route("api/[controller]")]
    public class EmpController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly EhrmsContext _context;

        public EmpController(EhrmsContext context)
        {
            _context = context;
        }
        
        

        // GET: api/Emp/getAllEmp
        [HttpGet("getAllEmp"), Produces("application/json")]
        public object getAllEmp()
        {
            List<Emp> list = new List<Emp>();
            
            object result = null;
            try
            {
                using (_context)
                {
                    list =  _context.EmpData.Select(x => new Emp()
                   {
                    Id = x.Id,
                    Name = x.Name,
                    Status = x.Status
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


        // GET api/Contact/GetEmpByID/5
        [HttpGet("GetEmpByID/{id}"), Produces("application/json")]
        public object GetEmpByID(int id)
        {
            object result = null;
            EmpData objEmp = null;
            try
            {
                using (_context)
                {
                    objEmp =  _context.EmpData.FirstOrDefault(x => x.Id == id);
                    result = new
                    {
                        objEmp,
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
                    objEmp,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }


        // POST api/Emp/CreateEmp
        [HttpPost, Route("CreateEmp"), Produces("application/json")]
        public object CreateEmp([FromBody]EmpData model)
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
                        _context.EmpData.Add(model);
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


        // PUT api/Emp/UpdateEmp/5
        [HttpPut, Route("UpdateEmp/{id}")]
        public object UpdateEmp(int id, [FromBody]EmpData model)
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
                        var entityUpdate = _context.EmpData.FirstOrDefault(x => x.Id == id);
                        if (entityUpdate != null)
                        {
                            entityUpdate.Name = model.Name;
                            entityUpdate.Status = model.Status;
                           
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

        // POST api/Emp/CreateUpdateEmp
        [HttpPost, Route("CreateUpdateEmp/{id}"), Produces("application/json")]
        public object CreateUpdateEmp(int id, [FromBody]EmpData model)
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
                        if(id != 0)
                        {
                            var entityUpdate = _context.EmpData.FirstOrDefault(x => x.Id == id);
                            if (entityUpdate != null)
                            {
                                entityUpdate.Name = model.Name;
                                entityUpdate.Status = model.Status;

                                _context.SaveChanges();
                            }
                            _ctxTransaction.Commit();
                            message = "Entry Updated";
                        }
                        else
                        {
                            _context.EmpData.Add(model);
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

        // DELETE api/Contact/DeleteEmpByID/5
        [HttpDelete, Route("DeleteEmpByID/{id}")]
        public object DeleteEmpByID(int id)
        {
            object result = null;
            string message = "";
            using (_context)
            {
                using (var _ctxTransaction = _context.Database.BeginTransaction())
                {
                    try
                    {
                        var idToRemove = _context.EmpData.SingleOrDefault(x => x.Id == id);
                        if (idToRemove != null)
                        {
                            _context.EmpData.Remove(idToRemove);
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


        // GET: api/Emp/getAllEmp
        //[HttpGet("getAllEmp"), Produces("application/json")]
        //public async Task<object> getAllEmp()
        //{
        //    //List<Emp> list = new List<Emp>();
        //    List<EmpData> list = new List<EmpData>();

        //    object result = null;
        //    try
        //    {
        //        using (_context)
        //        {
        //            list = await _context.EmpData.ToListAsync();
        //            result = new
        //            {
        //                list,
        //                msg = "Success"
        //            };
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        ex.ToString();
        //    }
        //    return result;
        //}




    }
}