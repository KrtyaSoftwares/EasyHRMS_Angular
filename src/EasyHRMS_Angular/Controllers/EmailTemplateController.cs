using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_DA.Models;

namespace EasyHRMS_Angular.Controllers
{
    [Route("api/[controller]")]
    public class EmailTemplateController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public EmailTemplateController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET: api/EmailTemplate/GetAllEmailTemplate
        [HttpGet("GetAllEmailTemplate"), Produces("application/json")]
        public object GetAllEmailTemplate()
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



        // GET api/EmailTemplate/GetEmailTemplateById/5
        [HttpGet("GetEmailTemplateById/{id}"), Produces("application/json")]
        public object GetEmailTemplateById(int id)
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

        // POST api/EmailTemplate/CreateEmailTemplate
        [HttpPost, Route("CreateEmailTemplate"), Produces("application/json")]
        public object CreateEmailTemplate([FromBody]EmailTemplate model)
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


        // PUT api/EmailTemplate/UpdateEmailTemplate/5
        [HttpPost, Route("UpdateEmailTemplate/{id}")]
        public object UpdateEmailTemplate(int id, [FromBody]EmailTemplate model)
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


        // POST api/EmailTemplate/CreateUpdateEmailTemplate
        [HttpPost, Route("CreateUpdateEmailTemplate/{id}"), Produces("application/json")]
        public object CreateUpdateEmailTemplate(int id, [FromBody]EmailTemplate model)
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

        // DELETE api/EmailTemplate/DeleteEmailTemplateById/5
        [HttpGet, Route("DeleteEmailTemplateById/{id}")]
        public object DeleteEmailTemplateById(int id)
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