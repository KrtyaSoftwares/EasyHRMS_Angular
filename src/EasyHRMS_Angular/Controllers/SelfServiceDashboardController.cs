using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyHRMS_DA.Models;
using Microsoft.AspNetCore.Authorization;

namespace EasyHRMS_Angular.Controllers
{
    [Route("api/[controller]")]
    public class SelfServiceDashboardController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public SelfServiceDashboardController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET: api/SelfServiceDashboard/GetHolidayDetail
        [HttpGet("GetHolidayDetail"), Produces("application/json")]
        [Authorize("Bearer")]
        public object GetHolidayDetail()
        {
            int HolidayLookupId = 1;
            int CurrentYearHolidayCount = 0;
            int CurrentMonthHolidayCount = 0;
            DateTime NextHolidayDate = new DateTime();
            object result = null;
            try
            {
                using (_context)
                {
                    List<DateTime> Holidaylist = _context.LookupData.Where(x => x.LookupId == HolidayLookupId && x.FieldName == "HolidayDate").Select(x => Convert.ToDateTime(x.Value)).ToList();
                    CurrentYearHolidayCount = Holidaylist.Where(y => y.Year == DateTime.Now.Year).Count();
                    CurrentMonthHolidayCount = Holidaylist.Where(y => y.Month == DateTime.Now.Month).Count();
                    NextHolidayDate = Holidaylist.Where(y => y > DateTime.Now).FirstOrDefault();
                    result = new
                    {
                        CurrentYearHolidayCount,
                        CurrentMonthHolidayCount,
                        NextHolidayDate,
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
                    CurrentYearHolidayCount,
                    CurrentMonthHolidayCount,
                    NextHolidayDate,
                    error = "1",
                    msg = "Error",
                    excp = ex.ToString()
                };
            }
            return result;
        }
    }
}