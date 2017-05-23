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
    public class TaskTemplateController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public TaskTemplateController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET: api/TaskTemplate/GetAllTaskTemplate
        [HttpGet("GetAllTaskTemplate"), Produces("application/json")]
        public object GetAllTaskTemplate()
        {
            //List<TaskTemplate> list = new List<TaskTemplate>();
            List<TaskTemplateVM> list = new List<TaskTemplateVM>();
            object result = null;
            try
            {
                using (_context)
                {
                    //list = _context.TaskTemplate.ToList();
                    list = _context.TaskTemplate.Select(y => new
                    {
                        Id = y.Id,
                        TemplateName = y.TemplateName,
                        FormName = y.FormName,
                        TaskName = y.TaskName,
                        Description = y.Description,
                        Priority = y.Priority,
                        TaskOwner = y.TaskOwner,
                        DueDate = y.DueDate,
                       
                        CustomFormName = _context.Forms.Where(z => z.Id == y.FormName).FirstOrDefault().FormName

                    }).ToList().Select(y => new TaskTemplateVM
                    {
                        Id = y.Id,
                        TemplateName = y.TemplateName,
                        FormName = y.FormName,
                        TaskName = y.TaskName,
                        Description = y.Description,
                        Priority = y.Priority,
                        TaskOwner = y.TaskOwner,
                        DueDate = y.DueDate,

                        CustomFormName = y.CustomFormName

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
        

        // GET api/TaskTemplate/GetTaskTemplateById/5
        [HttpGet("GetTaskTemplateById/{id}"), Produces("application/json")]
        public object GetTaskTemplateById(int id)
        {
            object result = null;
            TaskTemplate objTaskTemplate = new TaskTemplate();
            try
            {
                using (_context)
                {
                    objTaskTemplate = _context.TaskTemplate.FirstOrDefault(x => x.Id == id);

                    result = new
                    {
                        objTaskTemplate,
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
                    objTaskTemplate,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }

        // POST api/TaskTemplate/CreateTaskTemplate
        [HttpPost, Route("CreateTaskTemplate"), Produces("application/json")]
        public object CreateTaskTemplate([FromBody]TaskTemplate model)
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
                        _context.TaskTemplate.Add(model);
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


        // PUT api/TaskTemplate/UpdateTaskTemplate/5
        [HttpPost, Route("UpdateTaskTemplate/{id}")]
        public object UpdateTaskTemplate(int id, [FromBody]TaskTemplate model)
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
                        var entityUpdate = _context.TaskTemplate.FirstOrDefault(x => x.Id == id);
                      
                        if (entityUpdate != null)
                        {
                            entityUpdate.TemplateName = model.TemplateName;
                            entityUpdate.FormName = model.FormName;
                            entityUpdate.TaskName = model.TaskName;
                            entityUpdate.Description = model.Description;
                            entityUpdate.Priority = model.Priority;
                            entityUpdate.TaskOwner = model.TaskOwner;
                            entityUpdate.DueDate = model.DueDate;
                            _context.SaveChanges();
                        }

                        var entityUpdateWorkFlowAction = _context.WorkFlowAction.FirstOrDefault(x => x.TaskId == id);
                        if (entityUpdateWorkFlowAction != null)
                        {
                            entityUpdateWorkFlowAction.Name = model.TaskName;
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


        // POST api/TaskTemplate/CreateUpdateTaskTemplate
        [HttpPost, Route("CreateUpdateTaskTemplate/{id}"), Produces("application/json")]
        public object CreateUpdateTaskTemplate(int id, [FromBody]TaskTemplate model)
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
                            var entityUpdate = _context.TaskTemplate.FirstOrDefault(x => x.Id == id);
                           
                            if (entityUpdate != null)
                            {
                                entityUpdate.TemplateName = model.TemplateName;
                                entityUpdate.FormName = model.FormName;
                                entityUpdate.Description = model.Description;
                                entityUpdate.TaskName = model.TaskName;
                                entityUpdate.Priority = model.Priority;
                                entityUpdate.TaskOwner = model.TaskOwner;
                                entityUpdate.DueDate = model.DueDate;
                                _context.SaveChanges();
                            }
                            _ctxTransaction.Commit();
                            message = "Entry Updated";
                            errorcode = "0";
                        }
                        else
                        {
                            _context.TaskTemplate.Add(model);
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

        // DELETE api/TaskTemplate/DeleteTaskTemplateById/5
        [HttpGet, Route("DeleteTaskTemplateById/{id}")]
        public object DeleteTaskTemplateById(int id)
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
                        var WorkFlowAction = _context.WorkFlowAction.FirstOrDefault(x => x.TaskId == id);
                        if (WorkFlowAction != null)
                        {
                            message = "Can Not Delete As This Task Selected in other Form(WorkFlow)";
                            errorcode = "2";
                        }
                        else
                        {
                            var idToRemove = _context.TaskTemplate.SingleOrDefault(x => x.Id == id);
                            if (idToRemove != null)
                            {
                                _context.TaskTemplate.Remove(idToRemove);
                                _context.SaveChanges();
                            }
                            _ctxTransaction.Commit();
                            message = "Deleted Successfully";
                            errorcode = "0";
                        }
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