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
    public class FormsController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public FormsController(Ehrms_ng2Context context)
        {
            _context = context;
        }

        // GET: api/Forms/GetAllFormDef
        [HttpGet("GetAllFormDef"), Produces("application/json")]
        public object GetAllFormDef()
        {
            List<FormsVM> list = new List<FormsVM>();

            object result = null;
            try
            {
                using (_context)
                {
                    list = _context.Forms.Select(x => new FormsVM()
                    {
                        Id = x.Id,
                        FormName = x.FormName,
                        DisplayName = x.DisplayName
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

        // GET api/Forms/GetAllFormDefByFormID/5
        [HttpGet("GetAllFormDefByFormID/{id}"), Produces("application/json")]
        public object GetAllFormDefByFormID(int id)
        {
            object result = null;
            //Holiday objHoliday = null;
            Forms objForm = new Forms();
            List<FormTabVM> formTablist = new List<FormTabVM>();
            List<FormFieldVM> formFieldlist = new List<FormFieldVM>();
            try
            {
                using (_context)
                {
                    objForm = _context.Forms.FirstOrDefault(x => x.Id == id);
                    formTablist = _context.FormTab.Where(x => x.FormId == id).Select(x => new FormTabVM()
                    {
                        Id = x.Id,
                        FormId = x.FormId,
                        TabName = x.TabName,
                        Category = x.Category,
                        TabOrder = x.TabOrder,
                        CategoryOrder = x.CategoryOrder
                    }).ToList();
                    formFieldlist = _context.FormField.Where(x => x.FormId == id).Select(x => new FormFieldVM()
                    {
                        Id = x.Id,
                        FormId = x.FormId,
                        FormTabId = x.FormTabId,
                        DisplayName = x.DisplayName,
                        FieldName = x.FieldName,
                        FieldType = x.FieldType,
                        IsRequire = x.IsRequire,
                        FieldOrder = x.FieldOrder,
                        OptionValue = x.OptionValue,
                        DefaultValue = x.DefaultValue,
                        Validator = x.Validator,
                        Placeholder = x.Placeholder,
                        IsActive = x.IsActive,
                        IsVisibleInList = x.IsVisibleInList,
                        ListOrder = x.ListOrder
                    }).ToList();
                    result = new
                    {
                        objForm,
                        formTablist,
                        formFieldlist,
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
                    objForm,
                    formTablist,
                    formFieldlist,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }
    


}
}