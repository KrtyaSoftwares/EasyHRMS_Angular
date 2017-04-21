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
    public class LookupDataController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly EhrmsContext _context;

        public LookupDataController(EhrmsContext context)
        {
            _context = context;
        }

        // GET api/LookupData/GetLookupDataByLookupID/5
        [HttpGet("GetLookupDataByLookupID/{id}"), Produces("application/json")]
        public object GetLookupDataByLookupID(int id)
        {
            object result = null;
            //Holiday objHoliday = null;
            List<LookupDataVM> list = new List<LookupDataVM>();
            try
            {
                using (_context)
                {
                    //objHoliday = _context.Holiday.FirstOrDefault(x => x.HolidayId == id);
                    list = _context.LookupData.Where(x => x.LookupId == id).Select(x => new LookupDataVM()
                    {
                        Id = x.Id,
                        LookupId = x.LookupId,
                        RowId = x.RowId,
                        FieldName = x.FieldName,
                        Value = x.Value,
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


        // GET api/LookupData/GetLRowDataByLRID/5/1
        [HttpGet("GetLRowDataByLRID/{lid}/{rid}"), Produces("application/json")]
        public object GetLRowDataByLRID(int lid, int rid)
        {
            object result = null;
            //Holiday objHoliday = null;
            List<LookupDataVM> list = new List<LookupDataVM>();
            
            try
            {
                using (_context)
                {
                    //objHoliday = _context.Holiday.FirstOrDefault(x => x.HolidayId == id);
                    list = _context.LookupData.Where(x => x.LookupId == lid && x.RowId == rid).Select(x => new LookupDataVM()
                    {
                        Id = x.Id,
                        LookupId = x.LookupId,
                        RowId = x.RowId,
                        FieldName = x.FieldName,
                        Value = x.Value,
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

        [HttpPost("CreateLookupRowData/{lid}"), Produces("application/json")]
        public object CreateLookupRowData(int lid, [FromBody]List<LookupData> model)
        {
            object result = null;
            string message = "";
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
                        int incrowid = 1;
                        LookupData LastRowForLookup = _context.LookupData.Where(x => x.LookupId == lid).LastOrDefault();
                        if (LastRowForLookup != null)
                        {
                            incrowid = LastRowForLookup.RowId + 1;
                        }
                        
                        foreach(LookupData ldata in model)
                        {
                            ldata.RowId = incrowid;
                            _context.LookupData.Add(ldata);
                           
                            _context.SaveChanges();
                            
                        }

                        _ctxTransaction.Commit();
                        
                        result = new
                        {
                            error = "0",
                            msg = "Success"
                        };

                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback();
                        e.ToString();
                        //message = "Saved Error";
                        result = new
                        {
                            error = "1",
                            msg = "Error"
                        };
                    }

                    result = new
                    {
                        message
                    };
                }
            }
            return result;
        }


        //[HttpPost("CreateLookupRowData/{lid}"), Produces("application/json")]
        //public object CreateLookupRowData(int lid, [FromBody]List<LookupData> model)
        //{
        //    object result = null;
        //    string message = "";
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
        //                int incrowid = 1;
        //                LookupData LastRowForLookup = _context.LookupData.Where(x => x.LookupId == lid).LastOrDefault();
        //                if (LastRowForLookup != null)
        //                {
        //                    incrowid = LastRowForLookup.RowId + 1;
        //                }

        //                foreach (LookupData ldata in model)
        //                {
        //                    ldata.RowId = incrowid;
        //                    _context.LookupData.Add(ldata);

        //                    _context.SaveChanges();

        //                }

        //                _ctxTransaction.Commit();

        //                result = new
        //                {
        //                    error = "0",
        //                    msg = "Success"
        //                };

        //            }
        //            catch (Exception e)
        //            {
        //                _ctxTransaction.Rollback();
        //                e.ToString();
        //                //message = "Saved Error";
        //                result = new
        //                {
        //                    error = "1",
        //                    msg = "Error"
        //                };
        //            }

        //            result = new
        //            {
        //                message
        //            };
        //        }
        //    }
        //    return result;
        //}




    }
}