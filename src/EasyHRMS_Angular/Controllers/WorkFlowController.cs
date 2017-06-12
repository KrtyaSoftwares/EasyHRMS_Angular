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

        #region WorkFlow

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
                    list = _context.WorkFlow.Select(x => new
                    {
                        Id = x.Id,
                        Name = x.Name,
                        Description = x.Description,
                        FormName = x.FormName,
                        TriggerName = x.TriggerName,
                        Status = x.Status,
                        CustomFormName = _context.Forms.Where(y => y.Id == x.FormName).FirstOrDefault().FormName,
                        MailAlertsCount = _context.WorkFlowAction.Where(y => y.Action == "MailAlerts").Count(),
                        TasksCount = _context.WorkFlowAction.Where(y => y.Action == "Tasks").Count(),
                        CheckListCount = _context.WorkFlowAction.Where(y => y.Action == "CheckLists").Count(),

                    }).ToList().Select(x => new WorkFlowVM
                    {
                        Id = x.Id,
                        Name = x.Name,
                        Description = x.Description,
                        FormName = x.FormName,
                        TriggerName = x.TriggerName,
                        Status = x.Status,
                        CustomFormName = x.CustomFormName,
                        MailAlertsCount = x.MailAlertsCount,
                        TasksCount = x.TasksCount,
                        CheckListCount = x.CheckListCount,

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
                    msg = ex.ToString()
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
                        MailAlertId = x.MailAlertId,
                        TaskId = x.TaskId,
                        CheckListId = x.CheckListId,
                        Name = x.Name
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
                        //WorkFlow objWorkFlow = new WorkFlow();
                        //objWorkFlow.Name = model.WorkFlow.Name;
                        //objWorkFlow.Description = model.WorkFlow.Description;
                        //objWorkFlow.FormName = model.WorkFlow.FormName;
                        //objWorkFlow.Status = model.WorkFlow.Status;
                        //objWorkFlow.TriggerName = model.WorkFlow.TriggerName;
                        //_context.WorkFlow.Add(objWorkFlow);
                        //await _ctx.SaveChangesAsync();
                        _context.WorkFlow.Add(model.WorkFlow);
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


        // PUT api/WorkFlow/UpdateWorkFlowWithActions/5
        [HttpPost, Route("UpdateWorkFlowWithActions/{id}")]
        public object UpdateWorkFlowWithActions(int id, [FromBody]WorkFlowWithActionVM model)
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
                        var entityUpdate = _context.WorkFlow.FirstOrDefault(x => x.Id == model.WorkFlow.Id);

                        if (entityUpdate != null)
                        {
                            entityUpdate.Name = model.WorkFlow.Name;
                            entityUpdate.Description = model.WorkFlow.Description;
                            entityUpdate.FormName = model.WorkFlow.FormName;
                            entityUpdate.Status = model.WorkFlow.Status;
                            entityUpdate.TriggerName = model.WorkFlow.TriggerName;

                            _context.SaveChanges();
                        }

                        if (model.WorkFlowActions.Count > 0)
                        {
                            //List<WorkFlowAction> listToRemove = _context.WorkFlowAction.Where(y => y.WorkFlowId == model.WorkFlow.Id).ToList();
                            //if(listToRemove.Count > 0)
                            //{
                            //    foreach (var Action in listToRemove)
                            //    {
                            //        _context.WorkFlowAction.Remove(Action);
                            //    }
                            //    _context.SaveChanges();
                            //}
                            foreach (var WFAction in model.WorkFlowActions)
                            {
                                if(WFAction.Id == 0)
                                {
                                    if (model.WorkFlow.Id != 0)
                                    {
                                        WFAction.WorkFlowId = model.WorkFlow.Id;
                                        _context.WorkFlowAction.Add(WFAction);
                                        _context.SaveChanges();
                                    }
                                }
                                else
                                {
                                    var entityUpdateAction = _context.WorkFlowAction.FirstOrDefault(x => x.Id == WFAction.Id);

                                    if (entityUpdateAction != null)
                                    {
                                        entityUpdateAction.Action = WFAction.Action;
                                        entityUpdateAction.ActionOrder = WFAction.ActionOrder;
                                        entityUpdateAction.TemplateId = WFAction.TemplateId;
                                        entityUpdateAction.MailAlertId = WFAction.MailAlertId;
                                        entityUpdateAction.TaskId = WFAction.TaskId;
                                        entityUpdateAction.CheckListId = WFAction.CheckListId;
                                        entityUpdateAction.Name = WFAction.Name;
                                        
                                        _context.SaveChanges();
                                    }
                                }
                               
                            }
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

        // DELETE api/WorkFlow/DeleteWorkFlowById/5
        [HttpGet, Route("DeleteWorkFlowById/{id}")]
        public object DeleteWorkFlowById(int id)
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
                        List<WorkFlowAction> listToRemove = _context.WorkFlowAction.Where(y => y.WorkFlowId == id).ToList();
                        if (listToRemove.Count > 0)
                        {
                            foreach (var Action in listToRemove)
                            {
                                _context.WorkFlowAction.Remove(Action);
                            }
                            _context.SaveChanges();
                        }

                        var idToRemove = _context.WorkFlow.SingleOrDefault(x => x.Id == id);
                        if (idToRemove != null)
                        {
                            _context.WorkFlow.Remove(idToRemove);
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

        // PUT api/WorkFlow/UpdateWorkFlowStatus/5
        [HttpPost, Route("UpdateWorkFlowStatus/{id}")]
        public object UpdateWorkFlowStatus(int id, [FromBody]bool status)
        {
            object result = null; string message = ""; string errorcode = ""; string excp = "";
           
            using (_context)
            {
                using (var _ctxTransaction = _context.Database.BeginTransaction())
                {
                    try
                    {
                        var entityUpdate = _context.WorkFlow.FirstOrDefault(x => x.Id == id);

                        if (entityUpdate != null)
                        {
                            entityUpdate.Status = status;
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
        #endregion WorkFlow

        #region WorkFlowAction

        // DELETE api/WorkFlow/DeleteWorkFlowActionById/5
        [HttpGet, Route("DeleteWorkFlowActionById/{id}")]
        public object DeleteWorkFlowActionById(int id)
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
                        var idToRemove = _context.WorkFlowAction.SingleOrDefault(x => x.Id == id);
                        if (idToRemove != null)
                        {
                            _context.WorkFlowAction.Remove(idToRemove);
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

        #endregion WorkFlowAction


    }
}