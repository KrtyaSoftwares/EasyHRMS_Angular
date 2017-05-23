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
    public class MailAlertController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public MailAlertController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET: api/MailAlert/GetAllMailAlert
        [HttpGet("GetAllMailAlert"), Produces("application/json")]
        public object GetAllMailAlert()
        {
            //List<MailAlert> list = new List<MailAlert>();
            List<MailAlertVM> list = new List<MailAlertVM>();
            object result = null;
            try
            {
                using (_context)
                {
                    //list = _context.MailAlert.ToList();
                    list = _context.MailAlert.Select(y => new MailAlertVM
                    {
                        Id = y.Id,
                        FormName = y.FormName,
                        MailAlertName = y.MailAlertName,
                        TemplateId = y.TemplateId,
                        FromAddress = y.FromAddress,
                        ToAddress = y.ToAddress,
                        Ccaddress = y.Ccaddress,
                        Bccaddress = y.Bccaddress,
                        ReplyToAddress = y.ReplyToAddress,
                        EmailSubject = y.EmailSubject,
                        Attachment = y.Attachment,
                        Message = y.Message,
                        CustomFormName = _context.Forms.Where(z => z.Id == y.FormName).FirstOrDefault().FormName

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



        // GET api/MailAlert/GetMailAlertById/5
        [HttpGet("GetMailAlertById/{id}"), Produces("application/json")]
        public object GetMailAlertById(int id)
        {
            object result = null;

            MailAlert objMailAlert = new MailAlert();
            try
            {
                using (_context)
                {
                    objMailAlert = _context.MailAlert.FirstOrDefault(x => x.Id == id);

                    result = new
                    {
                        objMailAlert,
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
                    objMailAlert,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }

        // POST api/MailAlert/CreateMailAlert
        [HttpPost, Route("CreateMailAlert"), Produces("application/json")]
        public object CreateMailAlert([FromBody]MailAlert model)
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
                        _context.MailAlert.Add(model);
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


        // PUT api/MailAlert/UpdateMailAlert/5
        [HttpPost, Route("UpdateMailAlert/{id}")]
        public object UpdateMailAlert(int id, [FromBody]MailAlert model)
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
                        var entityUpdate = _context.MailAlert.FirstOrDefault(x => x.Id == id);

                        if (entityUpdate != null)
                        {
                            entityUpdate.FormName = model.FormName;
                            entityUpdate.MailAlertName = model.MailAlertName;
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

                        var entityUpdateWorkFlowAction = _context.WorkFlowAction.FirstOrDefault(x => x.MailAlertId == id);
                        if (entityUpdateWorkFlowAction != null)
                        {
                            entityUpdateWorkFlowAction.Name = model.MailAlertName;
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


        // POST api/MailAlert/CreateUpdateMailAlert
        [HttpPost, Route("CreateUpdateMailAlert/{id}"), Produces("application/json")]
        public object CreateUpdateMailAlert(int id, [FromBody]MailAlert model)
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
                            var entityUpdate = _context.MailAlert.FirstOrDefault(x => x.Id == id);

                            if (entityUpdate != null)
                            {
                                entityUpdate.FormName = model.FormName;
                                entityUpdate.MailAlertName = model.MailAlertName;
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
                            _context.MailAlert.Add(model);
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

        // DELETE api/MailAlert/DeleteMailAlertById/5
        [HttpGet, Route("DeleteMailAlertById/{id}")]
        public object DeleteMailAlertById(int id)
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
                        var idToRemove = _context.MailAlert.SingleOrDefault(x => x.Id == id);
                        if (idToRemove != null)
                        {
                            _context.MailAlert.Remove(idToRemove);
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