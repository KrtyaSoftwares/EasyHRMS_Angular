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
    public class EmployeeAttendanceController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public EmployeeAttendanceController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // POST api/CheckList/CreateEmployeeAttendance
        [HttpPost, Route("CreateEmployeeAttendance"), Produces("application/json")]
        public object CreateEmployeeAttendance([FromBody]EmployeeAttendanceVM model)
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
                        if (model.SelectedDate == null)
                        {
                            return BadRequest();
                        }
                        DateTime TillDate = GetTillDate(model.SelectedDate.Value.Month, model.SelectedDate.Value.Year);

                        if (model.SelectedDate != null && model.SelectedShiftId != null)
                        {
                            PayrollShiftWiseAttendance objAttendance = new PayrollShiftWiseAttendance();
                            //DateTime AttendanceDate = Convert.ToDateTime(model.SelectedDate);
                            DateTime? AttendanceDate = model.SelectedDate;
                            Shift shift = _context.Shift.Where(y => y.Id == model.SelectedShiftId).FirstOrDefault();

                            var Result = DeleteEmployeeAttendance(model.SelectedShiftId, AttendanceDate);
                            if(Result == 1)
                            {
                                return BadRequest();
                            }

                            foreach (var item in model.EmployeeAttendanceGridData)
                            {
                                EmployeeAttendance _EmployeeAttendance = new EmployeeAttendance();
                                if(item.IsAbsent == true)
                                {
                                    int LookupId = 9;
                                    int leavetype = _context.LookupData.Where(z => z.LookupId == LookupId).FirstOrDefault() != null ? _context.LookupData.Where(z => z.LookupId == LookupId).FirstOrDefault().RowId : 0;
                                    if(leavetype == 0)
                                    {
                                        LookupData objLookupData = new LookupData();
                                        objLookupData.LookupId = 9;
                                        objLookupData.RowId = 1;
                                        objLookupData.FieldName = "LeaveTypeTitle";
                                        objLookupData.Value = "casual leave";
                                        _context.LookupData.Add(objLookupData);
                                        LookupData objLookupData1 = new LookupData();
                                        objLookupData1.LookupId = 9;
                                        objLookupData1.RowId = 1;
                                        objLookupData1.FieldName = "LeavePeriod";
                                        objLookupData1.Value = "Yearly";
                                        _context.LookupData.Add(objLookupData1);
                                        LookupData objLookupData2 = new LookupData();
                                        objLookupData2.LookupId = 9;
                                        objLookupData2.RowId = 1;
                                        objLookupData2.FieldName = "NumberOfLeave";
                                        objLookupData2.Value = "12";
                                        _context.LookupData.Add(objLookupData2);
                                        _context.SaveChanges();

                                        leavetype = objLookupData.RowId;
                                    }

                                    _EmployeeAttendance.EmployeeId = item.EmployeeId;
                                    _EmployeeAttendance.DepartmentId = item.DepartmentId;
                                    _EmployeeAttendance.FromDate = model.SelectedDate;
                                    _EmployeeAttendance.Attendance = "Absent";
                                    _EmployeeAttendance.LeaveReason = "";
                                    _EmployeeAttendance.LeaveTypeId = leavetype;
                                    _EmployeeAttendance.IsOnHalfDay = 1;
                                    _EmployeeAttendance.IsChanged = false;
                                    _EmployeeAttendance.CreatedDate = DateTime.Now;
                                    _EmployeeAttendance.ShiftId = model.SelectedShiftId;

                                    _context.EmployeeAttendance.Add(_EmployeeAttendance);


                                }
                            }
                        }
                        //_context.CheckList.Add(model);
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

        private int DeleteEmployeeAttendance(int? selectedShiftId, DateTime? attendanceDate)
        {
            string message = "";
            string errorcode = "";
            string excp = "";
            if (selectedShiftId == null && attendanceDate == null)
            {
                return 1;
            }
            using (_context)
            {
                using (var _ctxTransaction = _context.Database.BeginTransaction())
                {
                    try
                    {
                        if (attendanceDate == null)
                        {
                            return 1;
                        }

                        List<EmployeeAttendance> AttToRemove = _context.EmployeeAttendance.Where(y => y.ShiftId == selectedShiftId && y.FromDate == attendanceDate).ToList();

                         _context.EmployeeAttendance.RemoveRange(AttToRemove);

                        //_context.CheckList.Add(model);
                        //await _ctx.SaveChangesAsync();
                        _context.SaveChanges();
                        _ctxTransaction.Commit();
                        
                        message = "Saved Successfully";
                        errorcode = "0";
                        return 0;
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback();
                        e.ToString();
                        message = "Saved Error";
                        errorcode = "1";
                        excp = e.ToString();
                        return 1;
                    }

                }
            }
            //return 0;
        }
        
        public DateTime GetTillDate(int month, int year)
        {
            DateTime TillDate = new DateTime();
            DateTime Date = new DateTime(year, month, 1);

            if (Date.Date < DateTime.Now.Date)
            {
                if (Date.Date.Month == DateTime.Now.Month && Date.Date.Year == DateTime.Now.Year)
                    return TillDate = new DateTime(year, month, DateTime.Now.Day).AddDays(-1);
                else
                    return TillDate = new DateTime(year, month, DateTime.DaysInMonth(year, month));
            }
            else
                return TillDate = new DateTime(year, month, DateTime.Now.Day).AddDays(-1);

            //DateTime TillDate = new DateTime();
            //DateTime Date = new DateTime(year, month, 1);
            //DateTime LastMonthDate = Date.AddMonths(-1);

            //if (DateTime.Now.Month != LastMonthDate.Month && DateTime.Now.Year != LastMonthDate.Year)
            //    return TillDate = new DateTime(year, month, DateTime.DaysInMonth(year, month));
            //else
            //    return TillDate = new DateTime(year, month, DateTime.Now.Day).AddDays(-1);
        }


    }
}