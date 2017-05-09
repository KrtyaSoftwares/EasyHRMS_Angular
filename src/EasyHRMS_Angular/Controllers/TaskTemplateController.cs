using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_DA.Models;

namespace EasyHRMS_Angular.Controllers
{
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
            List<EmailTemplate> list = new List<EmailTemplate>();
            object result = null;
            try
            {
                using (_context)
                {
                    list = _context.EmailTemplate.ToList();

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

            EmailTemplate objEmailTemplate = new EmailTemplate();
            try
            {
                using (_context)
                {
                    objEmailTemplate = _context.EmailTemplate.FirstOrDefault(x => x.Id == id);

                    result = new
                    {
                        objEmailTemplate,
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
                    objEmailTemplate,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }

        // POST api/TaskTemplate/CreateTaskTemplate
        [HttpPost, Route("CreateTaskTemplate"), Produces("application/json")]
        public object CreateTaskTemplate([FromBody]EmailTemplate model)
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
                        _context.EmailTemplate.Add(model);
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
        public object UpdateTaskTemplate(int id, [FromBody]EmailTemplate model)
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
                        var entityUpdate = _context.EmailTemplate.FirstOrDefault(x => x.Id == id);
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
                            entityUpdate.FormName = model.FormName;
                            entityUpdate.TemplateName = model.TemplateName;
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


        // POST api/TaskTemplate/CreateUpdateTaskTemplate
        [HttpPost, Route("CreateUpdateTaskTemplate/{id}"), Produces("application/json")]
        public object CreateUpdateTaskTemplate(int id, [FromBody]EmailTemplate model)
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
                            var entityUpdate = _context.EmailTemplate.FirstOrDefault(x => x.Id == id);
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
                                entityUpdate.FormName = model.FormName;
                                entityUpdate.TemplateName = model.TemplateName;
                                entityUpdate.Message = model.Message;

                                _context.SaveChanges();
                            }
                            _ctxTransaction.Commit();
                            message = "Entry Updated";
                            errorcode = "0";
                        }
                        else
                        {
                            _context.EmailTemplate.Add(model);
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
                        var idToRemove = _context.EmailTemplate.SingleOrDefault(x => x.Id == id);
                        if (idToRemove != null)
                        {
                            _context.EmailTemplate.Remove(idToRemove);
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