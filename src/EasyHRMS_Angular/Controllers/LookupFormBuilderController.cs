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
    public class LookupFormBuilderController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly EhrmsContext _context;

        public LookupFormBuilderController(EhrmsContext context)
        {
            _context = context;
        }

        // GET: api/FormBuilder/GetAllFormB
        [HttpGet("GetAllFormB"), Produces("application/json")]
        public object GetAllFormB()
        {
            List<LookupFormBuilderVM> list = new List<LookupFormBuilderVM>();

            object result = null;
            try
            {
                using (_context)
                {
                    list = _context.LookupFormBuilder.Select(x => new LookupFormBuilderVM()
                    {
                        Id = x.Id,
                        FormId = x.FormId,
                        FormName = x.FormName,
                        DisplayName = x.DisplayName,
                        FieldName = x.FieldName,
                        FieldType = x.FieldType,
                        IsRequire = x.IsRequire,
                        FieldOrder = x.FieldOrder,
                        OptionValue = x.OptionValue,
                        DefaultValue = x.DefaultValue,
                        Validator = x.Validator,
                        Placeholder = x.Placeholder
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

        // GET api/FormBuilder/GetFBFieldSetByFormID/5
        [HttpGet("GetFBFieldSetByFormID/{id}"), Produces("application/json")]
        public object GetFBFieldSetByFormID(int id)
        {
            object result = null;
            //Holiday objHoliday = null;
            List<LookupFormBuilderVM> list = new List<LookupFormBuilderVM>();
            try
            {
                using (_context)
                {
                    //objHoliday = _context.Holiday.FirstOrDefault(x => x.HolidayId == id);
                    list = _context.LookupFormBuilder.Where(x => x.FormId == id).Select(x => new LookupFormBuilderVM()
                    {
                        Id = x.Id,
                        FormId = x.FormId,
                        FormName = x.FormName,
                        DisplayName = x.DisplayName,
                        FieldName = x.FieldName,
                        FieldType = x.FieldType,
                        IsRequire = x.IsRequire,
                        FieldOrder = x.FieldOrder,
                        OptionValue = x.OptionValue,
                        DefaultValue = x.DefaultValue,
                        Validator = x.Validator,
                        Placeholder = x.Placeholder
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