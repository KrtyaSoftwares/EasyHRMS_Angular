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
    public class LookupsController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly EhrmsContext _context;

        public LookupsController(EhrmsContext context)
        {
            _context = context;
        }

        // GET: api/Lookups/getAllLookups
        [HttpGet("getAllLookups"), Produces("application/json")]
        public object getAllLookups()
        {
            List<LookupsVM> list = new List<LookupsVM>();

            object result = null;
            try
            {
                using (_context)
                {
                    list = _context.Lookups.Select(x => new LookupsVM()
                    {
                        Id = x.Id,
                        LookupName = x.LookupName,
                        LookupId = x.LookupId,
                        Category = x.Category,
                        IsActive = x.IsActive,
                        Header = x.Header
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
    }
}