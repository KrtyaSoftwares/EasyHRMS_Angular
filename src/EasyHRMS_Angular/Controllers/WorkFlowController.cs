using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_DA.Models;
using EasyHRMS_Angular.Models;

namespace EasyHRMS_Angular.Controllers
{
    public class WorkFlowController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public WorkFlowController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET: api/WorkFlow/GetAllWorkFlow
        [HttpGet("GetAllWorkFlow"), Produces("application/json")]
        public object GetAllWorkFlow()
        {
            List<WorkFlowVM> list = new List<WorkFlowVM>();

            object result = null;
            try
            {
                using (_context)
                {
                    list = _context.WorkFlow.Select(x => new WorkFlowVM()
                    {
                        Id = x.Id,
                        Name = x.Name,
                        Description = x.Description,
                        FormName = x.FormName,
                        TriggerName = x.TriggerName,
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

        // GET api/WorkFlow/GetWorkFlowWithActionsByWFID/5
        [HttpGet("GetWorkFlowWithActionsByWFID/{id}"), Produces("application/json")]
        public object GetWorkFlowWithActionsByWFID(int id)
        {
            object result = null;
            WorkFlow objWorkFlow = new WorkFlow();
            List<WorkFlowActionVM> list = new List<WorkFlowActionVM>();
            try
            {
                using (_context)
                {
                    objWorkFlow = _context.WorkFlow.Where(x => x.Id == id).FirstOrDefault();
                    list = _context.WorkFlowAction.Where(x => x.WorkFlowId == id).Select(x => new WorkFlowActionVM()
                    {
                        Id = x.Id,
                        WorkFlowId = x.WorkFlowId,
                        Action = x.Action,
                        TemplateId = x.TemplateId,
                        ActionOrder = x.ActionOrder,
                        FromAddress = x.FromAddress,
                        ToAddress = x.ToAddress,
                        Ccaddress = x.Ccaddress,
                        Bccaddress = x.Bccaddress,
                        ReplyToAddress = x.ReplyToAddress,
                        EmailSubject = x.EmailSubject,
                        Attachment = x.Attachment
                    }).ToList();
                    result = new
                    {
                        objWorkFlow,
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
                    objWorkFlow,
                    list,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }


        // POST api/WorkFlow/CreateWorkFlowWithActions
        [HttpPost, Route("CreateWorkFlowWithActions"), Produces("application/json")]
        public object CreateWorkFlowWithActions([FromBody]WorkFlowWithActionVM model)
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
                        //model.CreateDate = DateTime.Now;
                        _context.WorkFlow.Add(model.WorkFlow);
                        //await _ctx.SaveChangesAsync();
                        _context.SaveChanges();
                        //_ctxTransaction.Commit();

                        if(model.WorkFlowActions.Count > 0)
                        {
                            foreach( var Action in model.WorkFlowActions)
                            {
                                if(model.WorkFlow.Id != 0)
                                {
                                    Action.WorkFlowId = model.WorkFlow.Id;
                                    _context.WorkFlowAction.Add(Action);
                                    _context.SaveChanges();
                                }
                            }
                        }
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


        //// PUT api/WorkFlow/UpdateWorkFlowWithActions/5
        //[HttpPost, Route("UpdateWorkFlowWithActions/{id}")]
        //public object UpdateWorkFlowWithActions(int id, [FromBody]WorkFlowWithActionVM model)
        //{
        //    object result = null; string message = ""; string errorcode = ""; string excp = "";
        //    if (model == null)
        //    {
        //        return BadRequest();
        //    }
        //    using (_context)
        //    {
        //        using (var _ctxTransaction = _context.Database.BeginTransaction())
        //        {
        //            try
        //            {
        //                var entityUpdate = _context.EmployeeLeave.FirstOrDefault(x => x.Id == id);
        //                //if (entityUpdate != null)
        //                //{
        //                //    PropertyInfo[] propertiesEU = entityUpdate.GetType().GetProperties();
        //                //    foreach (PropertyInfo pi in propertiesEU)
        //                //    {
        //                //        if (pi.Name != "EmployeeLeaveID")
        //                //        {
        //                //            pi.SetValue(entityUpdate, pi.GetValue(model));
        //                //            //var xl = pi.GetValue(entityUpdate);
        //                //        }
        //                //    }
        //                //    _context.SaveChanges();
        //                //}

        //                if (entityUpdate != null)
        //                {
        //                    entityUpdate.EmployeeId = model.EmployeeId;
        //                    entityUpdate.FromDate = model.FromDate;
        //                    entityUpdate.ToDate = model.ToDate;
        //                    entityUpdate.LeaveTypeId = model.LeaveTypeId;
        //                    entityUpdate.Status = model.Status;
        //                    entityUpdate.LeaveReason = model.LeaveReason;
        //                    entityUpdate.CreateDate = model.CreateDate;
        //                    entityUpdate.IsHalfDay = model.IsHalfDay;

        //                    _context.SaveChanges();
        //                }

        //                _ctxTransaction.Commit();
        //                message = "Entry Updated";
        //                errorcode = "0";
        //            }
        //            catch (Exception e)
        //            {
        //                _ctxTransaction.Rollback(); e.ToString();
        //                message = "Entry Update Failed!!";
        //                errorcode = "1";
        //                excp = e.ToString();
        //            }

        //            result = new
        //            {
        //                error = errorcode,
        //                msg = message,
        //                excp = excp
        //            };
        //        }
        //    }
        //    return result;
        //}


    }
}