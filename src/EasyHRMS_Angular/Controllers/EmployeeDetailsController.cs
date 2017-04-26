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
    public class EmployeeDetailsController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly EhrmsContext _context;

        public EmployeeDetailsController(EhrmsContext context)
        {
            _context = context;
        }

        // GET: api/Emp/getAllEmployee
        [HttpGet("getAllEmployee"), Produces("application/json")]
        public object getAllEmployee()
        {
            List<EmployeeDetailsVM> list = new List<EmployeeDetailsVM>();

            object result = null;
            try
            {
                using (_context)
                {
                    list = _context.EmployeeDetails.Select(x => new EmployeeDetailsVM()
                    {
                        EmployeeId = x.EmployeeId,
                        EmployeeCode = x.EmployeeCode,
                        FirstName = x.FirstName,
                        LastName = x.LastName,
                        EmailId = x.EmailId,
                        MobileNumber = x.MobileNumber,
                        Gender = x.Gender,
                        BirthDate = x.BirthDate,
                        MaritalStatus = x.MaritalStatus,
                        FatherHusbandName = x.FatherHusbandName,
                        MotherName = x.MotherName,
                        BloodGroup = x.BloodGroup,
                        Citizenship = x.Citizenship,
                        CitizenshipCountry = x.CitizenshipCountry,
                        Department = x.Department,
                        Branch = x.Branch,
                        UserRoleId = x.UserRoleId,
                        Qualification = x.Qualification,
                        JobTitle = x.JobTitle,
                        ManagerTeamLeaderId = x.ManagerTeamLeaderId,
                        JoiningDate = x.JoiningDate,
                        JobProfile = x.JobProfile,
                        Position = x.Position,
                        Grade = x.Grade,
                        TotalExperience = x.TotalExperience,
                        LastDayOfJob = x.LastDayOfJob,
                        IsActive = x.IsActive,
                        ResidentAddress = x.ResidentAddress,
                        PermanantAddress = x.PermanantAddress,
                        Country = x.Country,
                        State = x.State,
                        City = x.City,
                        Pincode = x.Pincode,
                        PersonalMobile = x.PersonalMobile,
                        AlternateMobile = x.AlternateMobile,
                        LandlinePhone = x.LandlinePhone,
                        GuardianMobile = x.GuardianMobile,
                        BankName = x.BankName,
                        BankBranchName = x.BankBranchName,
                        AccountNumber = x.AccountNumber
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
                    msg = "Error",
                    excp = ex.ToString()
            };
            }
            return result;
        }

        // GET api/Contact/GetEmployeeByID/5
        [HttpGet("GetEmployeeByID/{id}"), Produces("application/json")]
        public object GetEmployeeByID(int id)
        {
            object result = null;
            EmployeeDetails objEmployee = null;
            try
            {
                using (_context)
                {
                    objEmployee = _context.EmployeeDetails.FirstOrDefault(x => x.EmployeeId == id);
                    result = new
                    {
                        objEmployee,
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
                    objEmployee,
                    error = "1",
                    msg = "Error",
                    excp = ex.ToString()

                };
            }
            return result;
        }

        // POST api/Emp/CreateEmployee
        [HttpPost, Route("CreateEmployee"), Produces("application/json")]
        public object CreateEmployee([FromBody]EmployeeDetails model)
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
                        _context.EmployeeDetails.Add(model);
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

        // PUT api/Emp/UpdateEmployee/5
        [HttpPost, Route("UpdateEmployee/{id}")]
        public object UpdateEmployee(int id, [FromBody]EmployeeDetails model)
        {
            object result = null; string message = ""; string errorcode = ""; string excp = "";
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
                        var entityUpdate = _context.EmployeeDetails.FirstOrDefault(x => x.EmployeeId == id);
                        if (entityUpdate != null)
                        {
                            entityUpdate.EmployeeCode = model.EmployeeCode;
                            entityUpdate.FirstName = model.FirstName;
                            entityUpdate.LastName = model.LastName;
                            entityUpdate.EmailId = model.EmailId;
                            entityUpdate.MobileNumber = model.MobileNumber;
                            entityUpdate.Gender = model.Gender;
                            entityUpdate.BirthDate = model.BirthDate;
                            entityUpdate.MaritalStatus = model.MaritalStatus;
                            entityUpdate.FatherHusbandName = model.FatherHusbandName;
                            entityUpdate.MotherName = model.MotherName;
                            entityUpdate.BloodGroup = model.BloodGroup;
                            entityUpdate.Citizenship = model.Citizenship;
                            entityUpdate.CitizenshipCountry = model.CitizenshipCountry;
                            entityUpdate.Department = model.Department;
                            entityUpdate.Branch = model.Branch;
                            entityUpdate.UserRoleId = model.UserRoleId;
                            entityUpdate.Qualification = model.Qualification;
                            entityUpdate.JobTitle = model.JobTitle;
                            entityUpdate.ManagerTeamLeaderId = model.ManagerTeamLeaderId;
                            entityUpdate.JoiningDate = model.JoiningDate;
                            entityUpdate.JobProfile = model.JobProfile;
                            entityUpdate.Position = model.Position;
                            entityUpdate.Grade = model.Grade;
                            entityUpdate.TotalExperience = model.TotalExperience;
                            entityUpdate.LastDayOfJob = model.LastDayOfJob;
                            entityUpdate.IsActive = model.IsActive;
                            entityUpdate.ResidentAddress = model.ResidentAddress;
                            entityUpdate.PermanantAddress = model.PermanantAddress;
                            entityUpdate.Country = model.Country;
                            entityUpdate.State = model.State;
                            entityUpdate.City = model.City;
                            entityUpdate.Pincode = model.Pincode;
                            entityUpdate.PersonalMobile = model.PersonalMobile;
                            entityUpdate.AlternateMobile = model.AlternateMobile;
                            entityUpdate.LandlinePhone = model.LandlinePhone;
                            entityUpdate.GuardianMobile = model.GuardianMobile;
                            entityUpdate.BankName = model.BankName;
                            entityUpdate.BankBranchName = model.BankBranchName;
                            entityUpdate.AccountNumber = model.AccountNumber;

                            _context.SaveChanges();
                        }
                        _ctxTransaction.Commit();
                        message = "Entry Updated";
                        errorcode = "0";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback(); e.ToString();
                        message = "Entry Update Failed!!";
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


        // POST api/Emp/CreateUpdateEmployee
        [HttpPost, Route("CreateUpdateEmployee/{id}"), Produces("application/json")]
        public object CreateUpdateEmployee(int id, [FromBody]EmployeeDetails model)
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
                        if (id != 0)
                        {
                            var entityUpdate = _context.EmployeeDetails.FirstOrDefault(x => x.EmployeeId == id);
                            if (entityUpdate != null)
                            {
                                entityUpdate.EmployeeCode = model.EmployeeCode;
                                entityUpdate.FirstName = model.FirstName;
                                entityUpdate.LastName = model.LastName;
                                entityUpdate.EmailId = model.EmailId;
                                entityUpdate.MobileNumber = model.MobileNumber;
                                entityUpdate.Gender = model.Gender;
                                entityUpdate.BirthDate = model.BirthDate;
                                entityUpdate.MaritalStatus = model.MaritalStatus;
                                entityUpdate.FatherHusbandName = model.FatherHusbandName;
                                entityUpdate.MotherName = model.MotherName;
                                entityUpdate.BloodGroup = model.BloodGroup;
                                entityUpdate.Citizenship = model.Citizenship;
                                entityUpdate.CitizenshipCountry = model.CitizenshipCountry;
                                entityUpdate.Department = model.Department;
                                entityUpdate.Branch = model.Branch;
                                entityUpdate.UserRoleId = model.UserRoleId;
                                entityUpdate.Qualification = model.Qualification;
                                entityUpdate.JobTitle = model.JobTitle;
                                entityUpdate.ManagerTeamLeaderId = model.ManagerTeamLeaderId;
                                entityUpdate.JoiningDate = model.JoiningDate;
                                entityUpdate.JobProfile = model.JobProfile;
                                entityUpdate.Position = model.Position;
                                entityUpdate.Grade = model.Grade;
                                entityUpdate.TotalExperience = model.TotalExperience;
                                entityUpdate.LastDayOfJob = model.LastDayOfJob;
                                entityUpdate.IsActive = model.IsActive;
                                entityUpdate.ResidentAddress = model.ResidentAddress;
                                entityUpdate.PermanantAddress = model.PermanantAddress;
                                entityUpdate.Country = model.Country;
                                entityUpdate.State = model.State;
                                entityUpdate.City = model.City;
                                entityUpdate.Pincode = model.Pincode;
                                entityUpdate.PersonalMobile = model.PersonalMobile;
                                entityUpdate.AlternateMobile = model.AlternateMobile;
                                entityUpdate.LandlinePhone = model.LandlinePhone;
                                entityUpdate.GuardianMobile = model.GuardianMobile;
                                entityUpdate.BankName = model.BankName;
                                entityUpdate.BankBranchName = model.BankBranchName;
                                entityUpdate.AccountNumber = model.AccountNumber;

                                _context.SaveChanges();
                            }
                            _ctxTransaction.Commit();
                            message = "Entry Updated";
                        }
                        else
                        {
                            _context.EmployeeDetails.Add(model);
                            //await _ctx.SaveChangesAsync();
                            _context.SaveChanges();
                            _ctxTransaction.Commit();
                            message = "Saved Successfully";
                            errorcode = "0";
                        }

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

        // DELETE api/Contact/DeleteEmployeeByID/5
        [HttpGet, Route("DeleteEmployeeByID/{id}")]
        public object DeleteEmployeeByID(int id)
        {
            object result = null;
            string message = "";
            string errorcode = "";
            string excp = "";
            using (_context)
            {
                using (var _ctxTransaction = _context.Database.BeginTransaction())
                {
                    try
                    {
                        var idToRemove = _context.EmployeeDetails.SingleOrDefault(x => x.EmployeeId == id);
                        if (idToRemove != null)
                        {
                            _context.EmployeeDetails.Remove(idToRemove);
                            _context.SaveChanges();
                        }
                        _ctxTransaction.Commit();
                        message = "Deleted Successfully";
                        errorcode = "0";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback(); e.ToString();
                        message = "Error on Deleting!!";
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



    }
}