using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_DA.Models;

namespace EasyHRMS_Angular.Controllers
{
    [Route("api/[controller]")]
    public class WorkFlowTaskController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public WorkFlowTaskController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET: api/WorkFlowTask/GetAllWorkFlowTask
        [HttpGet("GetAllWorkFlowTask"), Produces("application/json")]
        public object GetAllWorkFlowTask()
        {
            List<WorkFlowTask> list = new List<WorkFlowTask>();
            object result = null;
            try
            {
                using (_context)
                {
                    list = _context.WorkFlowTask.ToList();

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


        // GET api/WorkFlowTask/GetWorkFlowTaskById/5
        [HttpGet("GetWorkFlowTaskById/{id}"), Produces("application/json")]
        public object GetWorkFlowTaskById(int id)
        {
            object result = null;
            WorkFlowTask objWorkFlowTask = new WorkFlowTask();
            try
            {
                using (_context)
                {
                    objWorkFlowTask = _context.WorkFlowTask.FirstOrDefault(x => x.Id == id);

                    result = new
                    {
                        objWorkFlowTask,
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
                    objWorkFlowTask,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }

        // POST api/WorkFlowTask/CreateWorkFlowTask
        [HttpPost, Route("CreateWorkFlowTask"), Produces("application/json")]
        public object CreateWorkFlowTask([FromBody]WorkFlowTask model)
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
                        _context.WorkFlowTask.Add(model);
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


        // PUT api/WorkFlowTask/UpdateWorkFlowTask/5
        [HttpPost, Route("UpdateWorkFlowTask/{id}")]
        public object UpdateWorkFlowTask(int id, [FromBody]WorkFlowTask model)
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
                        var entityUpdate = _context.WorkFlowTask.FirstOrDefault(x => x.Id == id);

                        if (entityUpdate != null)
                        {
                            entityUpdate.TaskName = model.TaskName;
                            entityUpdate.Description = model.Description;
                            entityUpdate.TaskOwner = model.TaskOwner;
                            entityUpdate.DueDate = model.DueDate;
                            entityUpdate.TemplateId = model.TemplateId;
                            entityUpdate.FromAddress = model.FromAddress;
                            entityUpdate.ToAddress = model.ToAddress;
                            entityUpdate.Ccaddress = model.Ccaddress;
                            entityUpdate.Bccaddress = model.Bccaddress;
                            entityUpdate.ReplyToAddress = model.ReplyToAddress;
                            entityUpdate.EmailSubject = model.EmailSubject;
                            entityUpdate.Attachment = model.Attachment;
                            entityUpdate.Message = model.Message;
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


        // POST api/WorkFlowTask/CreateUpdateWorkFlowTask
        [HttpPost, Route("CreateUpdateWorkFlowTask/{id}"), Produces("application/json")]
        public object CreateUpdateWorkFlowTask(int id, [FromBody]WorkFlowTask model)
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
                            var entityUpdate = _context.WorkFlowTask.FirstOrDefault(x => x.Id == id);

                            if (entityUpdate != null)
                            {
                                entityUpdate.TaskName = model.TaskName;
                                entityUpdate.Description = model.Description;
                                entityUpdate.TaskOwner = model.TaskOwner;
                                entityUpdate.DueDate = model.DueDate;
                                entityUpdate.TemplateId = model.TemplateId;
                                entityUpdate.FromAddress = model.FromAddress;
                                entityUpdate.ToAddress = model.ToAddress;
                                entityUpdate.Ccaddress = model.Ccaddress;
                                entityUpdate.Bccaddress = model.Bccaddress;
                                entityUpdate.ReplyToAddress = model.ReplyToAddress;
                                entityUpdate.EmailSubject = model.EmailSubject;
                                entityUpdate.Attachment = model.Attachment;
                                entityUpdate.Message = model.Message;
                                _context.SaveChanges();
                            }
                            _ctxTransaction.Commit();
                            message = "Entry Updated";
                            errorcode = "0";
                        }
                        else
                        {
                            _context.WorkFlowTask.Add(model);
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

        // DELETE api/WorkFlowTask/DeleteWorkFlowTaskById/5
        [HttpGet, Route("DeleteWorkFlowTaskById/{id}")]
        public object DeleteWorkFlowTaskById(int id)
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
                        var idToRemove = _context.WorkFlowTask.SingleOrDefault(x => x.Id == id);
                        if (idToRemove != null)
                        {
                            _context.WorkFlowTask.Remove(idToRemove);
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