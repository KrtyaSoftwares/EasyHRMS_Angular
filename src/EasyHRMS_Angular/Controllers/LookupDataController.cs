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
    public class LookupDataController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly Ehrms_ng2Context _context;

        public LookupDataController(Ehrms_ng2Context context)
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
                    }).OrderBy(x => x.Id).ToList();
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


        // POST api/LookupData/GetLookupDataByLookupIDsInBulk
        [HttpPost("GetLookupDataByLookupIDsInBulk"), Produces("application/json")]
        public object GetLookupDataByLookupIDsInBulk([FromBody]List<int> model)
        {
            object result = null;
            //Holiday objHoliday = null;
            List<LookupDataVM> list = new List<LookupDataVM>();
            List<LookupDataListVM> listoflookups = new List<LookupDataListVM>();
            try
            {
                using (_context)
                {
                    //objHoliday = _context.Holiday.FirstOrDefault(x => x.HolidayId == id);
                    if(model != null)
                    {
                       foreach(int id in model)
                        {
                            //string Lookupname = _context.Lookups.Where(y => y.LookupId == id).FirstOrDefault().LookupName;
                            list = _context.LookupData.Where(x => x.LookupId == id).Select(x => new LookupDataVM()
                            {
                                Id = x.Id,
                                LookupId = x.LookupId,
                                RowId = x.RowId,
                                FieldName = x.FieldName,
                                Value = x.Value,
                            }).OrderBy(x => x.Id).ToList();

                            listoflookups.Add(new LookupDataListVM() { Lookupid = id, LdataList = list });
                        }
                    }
                   
                    result = new
                    {
                        listoflookups,
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
                    listoflookups,
                    error = "1",
                    msg = "Error"
                };
            }
            return result;
        }


        // GET api/LookupData/GetLookupDataByFormIDInBulk/5
        [HttpGet("GetLookupDataByFormIDInBulk/{id}"), Produces("application/json")]
        public object GetLookupDataByFormIDInBulk(int id = 0)
        {
            object result = null;
            
            
            List<LookupDataVM> list = new List<LookupDataVM>();
            List<LookupDataListVM> listoflookups = new List<LookupDataListVM>();
            List<FormField> FormFieldlist = new List<FormField>();
            try
            {
                using (_context)
                {
                    List<string> DisplayInDD = new List<string>();
                    List<LookupFormBuilder> lookupFormBilderlist = _context.LookupFormBuilder.Where(x => x.IsDisplayInDd != null && x.IsDisplayInDd == true ).ToList();
                    if(lookupFormBilderlist.Count > 0)
                    {
                        foreach (var FormField in lookupFormBilderlist)
                        {
                            DisplayInDD.Add(FormField.FieldName);
                        }
                    }
                    if (id != 0)
                    {
                        FormFieldlist = _context.FormField.Where(y => y.FormId == id && y.OptionValue == null && y.LookupId != null).ToList();
                    }
                    //objHoliday = _context.Holiday.FirstOrDefault(x => x.HolidayId == id);
                    if (FormFieldlist.Count > 0)
                    {
                        foreach (var FormField in FormFieldlist)
                        {
                            if(DisplayInDD.Count > 0)
                            {
                                //string Lookupname = _context.Lookups.Where(y => y.LookupId == id).FirstOrDefault().LookupName;
                                list = _context.LookupData.Where(x => x.LookupId == FormField.LookupId && DisplayInDD.Contains(x.FieldName)).Select(x => new LookupDataVM()
                                {
                                    Id = x.Id,
                                    LookupId = x.LookupId,
                                    RowId = x.RowId,
                                    FieldName = x.FieldName,
                                    Value = x.Value,
                                }).OrderBy(x => x.Id).ToList();

                                listoflookups.Add(new LookupDataListVM() { Lookupid = FormField.LookupId, LdataList = list });
                            }
                            else
                            {
                                //string Lookupname = _context.Lookups.Where(y => y.LookupId == id).FirstOrDefault().LookupName;
                                list = _context.LookupData.Where(x => x.LookupId == FormField.LookupId).Select(x => new LookupDataVM()
                                {
                                    Id = x.Id,
                                    LookupId = x.LookupId,
                                    RowId = x.RowId,
                                    FieldName = x.FieldName,
                                    Value = x.Value,
                                }).OrderBy(x => x.Id).ToList();

                                listoflookups.Add(new LookupDataListVM() { Lookupid = FormField.LookupId, LdataList = list });
                            }
                           
                        }
                    }
                    result = new
                    {
                        listoflookups,
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
                    listoflookups,
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
                    }).OrderBy(x => x.Id).ToList();
                    
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

        [HttpPost, Route("CreateLookupRowData/{lid}"), Produces("application/json")]
        public object CreateLookupRowData(int lid, [FromBody]List<LookupData> model)
        {
            object result = null;
            //string message = "";
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
                }
            }
            return result;
        }


        [HttpPost("UpdateLookupRowData/{lid}"), Produces("application/json")]
        public object UpdateLookupRowData(int lid, [FromBody]List<LookupData> model)
        {
            object result = null;
            //string message = "";
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
                        foreach (LookupData ldata in model)
                        {
                            var entityUpdate = _context.LookupData.FirstOrDefault(x => x.Id == ldata.Id && x.LookupId == lid && x.RowId == ldata.RowId);
                            if (entityUpdate != null)
                            {
                                entityUpdate.FieldName = ldata.FieldName;
                                entityUpdate.Value = ldata.Value;
                                _context.SaveChanges();
                            }
                            
                            //_context.SaveChanges();
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
                        
                        result = new
                        {
                            error = "1",
                            msg = "Error"
                        };
                    }

                }
            }
            return result;
        }

        [HttpGet("DeleteLookupRowData/{lid}/{rid}"), Produces("application/json")]
        public object DeleteLookupRowData(int lid, int rid)
        {
            object result = null;
            //string message = "";
            //if (lid == "" || rid == "")
            //{
            //    return BadRequest();
            //}
            using (_context)
            {
                using (var _ctxTransaction = _context.Database.BeginTransaction())
                {
                    try
                    {
                        List<LookupData> rowlist = _context.LookupData.Where(x => x.LookupId == lid && x.RowId == rid).ToList();

                        if(rowlist != null)
                        {
                            foreach (LookupData ldata in rowlist)
                            {
                                var idToRemove = _context.LookupData.SingleOrDefault(x => x.Id == ldata.Id);
                                if (idToRemove != null)
                                {
                                    _context.LookupData.Remove(idToRemove);
                                    _context.SaveChanges();
                                }
                               // _ctxTransaction.Commit();
                            }
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

                        result = new
                        {
                            error = "1",
                            msg = "Error on Deleting!!"
                        };
                    }

                }
            }
            return result;
        }




    }
}