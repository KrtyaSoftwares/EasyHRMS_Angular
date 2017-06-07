using EasyHRMS_DA.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//using System.Net.Mail;

namespace EasyHRMS_Angular.Services
{
    public class WorkFlowService
    {
        private readonly Ehrms_ng2Context _context;

        public WorkFlowService(Ehrms_ng2Context context)
        {
            _context = context;
        }

        public Object CheckForWorkFlow(int FormId, string Trigger)
        {
            object result = null;
            Boolean IsWorkFlow = false;
            int WorkFlowId = 0;

            try
            {
                using (_context)
                {
                    IsWorkFlow = _context.WorkFlow.Any(y => y.FormName == FormId && y.TriggerName == Trigger);
                    WorkFlowId = _context.WorkFlow.Where(y => y.FormName == FormId && y.TriggerName == Trigger).FirstOrDefault() != null ? _context.WorkFlow.Where(y => y.FormName == FormId && y.TriggerName == Trigger).FirstOrDefault().Id : 0 ;
                   result = new
                   {
                       //list,
                       IsWorkFlow,
                       WorkFlowId,
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
                    //list,
                    IsWorkFlow,
                    WorkFlowId,
                    error = "1",
                    msg = ex.ToString()
                };
            }
            return result;
        }



        public Object SendMailForWorkFlow(int WorkFlowId)
        {
            object result = null;
            //Boolean IsWorkFlow = false;
            //int WorkFlowId = 0;
            List<WorkFlowAction> list = new List<WorkFlowAction>();
            try
            {
                using (_context)
                {
                   
                    list = _context.WorkFlowAction.Where(y => y.WorkFlowId == WorkFlowId).OrderBy(z => z.ActionOrder).ToList();
                    if(list.Count > 0)
                    {
                        foreach (var WorkflowAction in list)
                        {
                            if(WorkflowAction.Action == "MailAlerts" && WorkflowAction.MailAlertId != null)
                            {
                                SendMailForMailAlert(WorkflowAction.MailAlertId);
                            }
                            else if (WorkflowAction.Action == "Checklists" && WorkflowAction.CheckListId != null)
                            {
                                SendMailForCheckList(WorkflowAction.CheckListId);
                            }
                            else if (WorkflowAction.Action == "Tasks" && WorkflowAction.TaskId != null)
                            {
                                SendMailForTask(WorkflowAction.TaskId);
                            }
                        }
                    }
                    result = new
                    {
                        //list,
                        //IsWorkFlow,
                       // WorkFlowId,
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
                    //list,
                    //IsWorkFlow,
                    //WorkFlowId,
                    error = "1",
                    msg = ex.ToString()
                };
            }
            return result;
        }

        private void SendMailForTask(int? taskId)
        {
            throw new NotImplementedException();
        }

        private void SendMailForCheckList(int? checkListId)
        {
            throw new NotImplementedException();
        }

        private void SendMailForMailAlert(int? mailAlertId)
        {
            throw new NotImplementedException();
        }
    }



}
