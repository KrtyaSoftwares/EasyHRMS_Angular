using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_DA.Models;

namespace EasyHRMS_Angular.Controllers
{
    [Route("api/[controller]")]
    public class CheckListController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public CheckListController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET: api/CheckList/GetAllCheckList
        [HttpGet("GetAllCheckList"), Produces("application/json")]
        public object GetAllCheckList()
        {
            List<CheckList> list = new List<CheckList>();
            object result = null;
            try
            {
                using (_context)
                {
                    list = _context.CheckList.ToList();

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


        // GET api/CheckList/GetCheckListById/5
        [HttpGet("GetCheckListById/{id}"), Produces("application/json")]
        public object GetCheckListById(int id)
        {
            object result = null;

            CheckList objCheckList = new CheckList();
            try
            {
                using (_context)
                {
                    objCheckList = _context.CheckList.FirstOrDefault(x => x.Id == id);

                    result = new
                    {
                        objCheckList,
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
                    objCheckList,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }

        // POST api/CheckList/CreateCheckList
        [HttpPost, Route("CreateCheckList"), Produces("application/json")]
        public object CreateCheckList([FromBody]CheckList model)
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
                        _context.CheckList.Add(model);
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

        // PUT api/CheckList/UpdateCheckList/5
        [HttpPost, Route("UpdateCheckList/{id}")]
        public object UpdateCheckList(int id, [FromBody]CheckList model)
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
                        var entityUpdate = _context.CheckList.FirstOrDefault(x => x.Id == id);

                        if (entityUpdate != null)
                        {
                            entityUpdate.FormName = model.FormName;
                            entityUpdate.ChecklistName = model.ChecklistName;
                            entityUpdate.TaskId = model.TaskId;
                            entityUpdate.ChecklistOrder = model.ChecklistOrder;
                            entityUpdate.TaskOrder = model.TaskOrder;
                           
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


        // POST api/CheckList/CreateUpdateCheckList
        [HttpPost, Route("CreateUpdateCheckList/{id}"), Produces("application/json")]
        public object CreateUpdateCheckList(int id, [FromBody]CheckList model)
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
                            var entityUpdate = _context.CheckList.FirstOrDefault(x => x.Id == id);

                            if (entityUpdate != null)
                            {
                                entityUpdate.FormName = model.FormName;
                                entityUpdate.ChecklistName = model.ChecklistName;
                                entityUpdate.TaskId = model.TaskId;
                                entityUpdate.ChecklistOrder = model.ChecklistOrder;
                                entityUpdate.TaskOrder = model.TaskOrder;

                                _context.SaveChanges();
                            }
                            _ctxTransaction.Commit();
                            message = "Entry Updated";
                            errorcode = "0";
                        }
                        else
                        {
                            _context.CheckList.Add(model);
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

        // DELETE api/CheckList/DeleteCheckListById/5
        [HttpGet, Route("DeleteCheckListById/{id}")]
        public object DeleteCheckListById(int id)
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
                        var idToRemove = _context.CheckList.SingleOrDefault(x => x.Id == id);
                        if (idToRemove != null)
                        {
                            _context.CheckList.Remove(idToRemove);
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