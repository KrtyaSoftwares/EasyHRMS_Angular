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
    public class LookupListController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly EhrmsContext _context;

        public LookupListController(EhrmsContext context)
        {
            _context = context;
        }

        // GET api/LookupList/GetLookupListDataByLookupID/5
        [HttpGet("GetLookupListDataByLookupID/{id}"), Produces("application/json")]
        public object GetLookupListDataByLookupID(int id)
        {
            object result = null;
            //Holiday objHoliday = null;
            List<LookupListVM> lookuplist = new List<LookupListVM>();
            List<ListActionVM> actionlist = new List<ListActionVM>();
            try
            {
                using (_context)
                {
                    //objHoliday = _context.Holiday.FirstOrDefault(x => x.HolidayId == id);
                    lookuplist = _context.LookupList.Where(x => x.LookupId == id).Select(x => new LookupListVM()
                    {
                        Id = x.Id,
                        LookupId = x.LookupId,
                        FieldName = x.FieldName,
                        DisplayName = x.DisplayName,
                        FieldOrder = x.FieldOrder,
                        FieldType = x.FieldType,
                        IsVisible = x.IsVisible
                    }).ToList();

                    actionlist = _context.ListAction.Where(x => x.LookupId == id).Select(x => new ListActionVM()
                    {
                        Id = x.Id,
                        LookupId = x.LookupId,
                        Action = x.Action,
                        Route = x.Route
                    }).ToList();

                    result = new
                    {
                        lookuplist,
                        actionlist,
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
                    lookuplist,
                    actionlist,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }


    }
}