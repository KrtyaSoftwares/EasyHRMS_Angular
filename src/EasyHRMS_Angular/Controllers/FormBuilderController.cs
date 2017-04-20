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
    public class FormBuilderController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly EhrmsContext _context;

        public FormBuilderController(EhrmsContext context)
        {
            _context = context;
        }

        // GET: api/Emp/getAllEmp
        [HttpGet("getAllFormB"), Produces("application/json")]
        public object getAllFormB()
        {
            List<FormBuilderVM> list = new List<FormBuilderVM>();

            object result = null;
            try
            {
                using (_context)
                {
                    list = _context.FormBuilder.Select(x => new FormBuilderVM()
                    {
                        Id = x.Id,
                        FormName = x.FormName,
                        FieldName = x.FieldName,
                        FieldType = x.FieldType,
                        IsRequire = x.IsRequire,
                        FieldOrder = x.FieldOrder,
                        OptionValue = x.OptionValue,
                        DefaultValue = x.DefaultValue
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

        // GET api/Contact/GetFBFieldSetByFormID/5
        [HttpGet("GetFBFieldSetByFormID/{id}"), Produces("application/json")]
        public object GetFBFieldSetByFormID(int id)
        {
            object result = null;
            //Holiday objHoliday = null;
            List<FormBuilderVM> list = new List<FormBuilderVM>();
            try
            {
                using (_context)
                {
                    //objHoliday = _context.Holiday.FirstOrDefault(x => x.HolidayId == id);
                    list = _context.FormBuilder.Where(x => x.FormId == id).Select(x => new FormBuilderVM()
                    {
                        Id = x.Id,
                        FormName = x.FormName,
                        FieldName = x.FieldName,
                        FieldType = x.FieldType,
                        IsRequire = x.IsRequire,
                        FieldOrder = x.FieldOrder,
                        OptionValue = x.OptionValue,
                        DefaultValue = x.DefaultValue
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