using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_DA.Models;

namespace EasyHRMS_Angular.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeClaimAdvanceRequestController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public EmployeeClaimAdvanceRequestController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET: api/EmployeeClaimAdvanceRequest/GetAllEmployeeClaimAdvanceRequest
        [HttpGet("GetAllEmployeeClaimAdvanceRequest"), Produces("application/json")]
        public object GetAllEmployeeClaimAdvanceRequest()
        {
            List<EmployeeClaimAdvanceRequest> list = new List<EmployeeClaimAdvanceRequest>();
            object result = null;
            try
            {
                using (_context)
                {
                    list = _context.EmployeeClaimAdvanceRequest.ToList();

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


        // GET api/EmployeeClaimAdvanceRequest/GetEmployeeClaimAdvanceRequestById/5
        [HttpGet("GetEmployeeClaimAdvanceRequestById/{id}"), Produces("application/json")]
        public object GetEmployeeClaimAdvanceRequestById(int id)
        {
            object result = null;

            EmployeeClaimAdvanceRequest objEmployeeClaimAdvanceRequest = new EmployeeClaimAdvanceRequest();
            try
            {
                using (_context)
                {
                    objEmployeeClaimAdvanceRequest = _context.EmployeeClaimAdvanceRequest.FirstOrDefault(x => x.Id == id);

                    result = new
                    {
                        objEmployeeClaimAdvanceRequest,
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
                    objEmployeeClaimAdvanceRequest,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }

        // POST api/EmployeeClaimAdvanceRequest/CreateEmployeeClaimAdvanceRequest
        [HttpPost, Route("CreateEmployeeClaimAdvanceRequest"), Produces("application/json")]
        public object CreateEmployeeClaimAdvanceRequest([FromBody]EmployeeClaimAdvanceRequest model)
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
                        _context.EmployeeClaimAdvanceRequest.Add(model);
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


        // PUT api/EmployeeClaimAdvanceRequest/UpdateEmployeeClaimAdvanceRequest/5
        [HttpPost, Route("UpdateEmployeeClaimAdvanceRequest/{id}")]
        public object UpdateEmployeeClaimAdvanceRequest(int id, [FromBody]EmployeeClaimAdvanceRequest model)
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
                        var entityUpdate = _context.EmployeeClaimAdvanceRequest.FirstOrDefault(x => x.Id == id);

                        if (entityUpdate != null)
                        {
                            entityUpdate.Title = model.Title;
                            entityUpdate.Purpose = model.Purpose;
                            entityUpdate.Date = model.Date;
                            entityUpdate.Amount = model.Amount;
                            entityUpdate.Status = model.Status;
                            entityUpdate.EmployeeId = model.EmployeeId;
                            entityUpdate.Type = model.Type;
                            entityUpdate.Documents = model.Documents;
                            entityUpdate.PayDate = model.PayDate;

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


        // POST api/EmployeeClaimAdvanceRequest/CreateUpdateEmployeeClaimAdvanceRequest
        [HttpPost, Route("CreateUpdateEmployeeClaimAdvanceRequest/{id}"), Produces("application/json")]
        public object CreateUpdateEmployeeClaimAdvanceRequest(int id, [FromBody]EmployeeClaimAdvanceRequest model)
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
                            var entityUpdate = _context.EmployeeClaimAdvanceRequest.FirstOrDefault(x => x.Id == id);

                            if (entityUpdate != null)
                            {
                                entityUpdate.Title = model.Title;
                                entityUpdate.Purpose = model.Purpose;
                                entityUpdate.Date = model.Date;
                                entityUpdate.Amount = model.Amount;
                                entityUpdate.Status = model.Status;
                                entityUpdate.EmployeeId = model.EmployeeId;
                                entityUpdate.Type = model.Type;
                                entityUpdate.Documents = model.Documents;
                                entityUpdate.PayDate = model.PayDate;

                                _context.SaveChanges();
                            }
                            _ctxTransaction.Commit();
                            message = "Entry Updated";
                            errorcode = "0";
                        }
                        else
                        {
                            _context.EmployeeClaimAdvanceRequest.Add(model);
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

        // DELETE api/EmployeeClaimAdvanceRequest/DeleteEmployeeClaimAdvanceRequestById/5
        [HttpGet, Route("DeleteEmployeeClaimAdvanceRequestById/{id}")]
        public object DeleteEmployeeClaimAdvanceRequestById(int id)
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
                        var idToRemove = _context.EmployeeClaimAdvanceRequest.SingleOrDefault(x => x.Id == id);
                        if (idToRemove != null)
                        {
                            _context.EmployeeClaimAdvanceRequest.Remove(idToRemove);
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