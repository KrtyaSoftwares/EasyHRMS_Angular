using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.Models
{
    public class EmployeeDetailsVM
    {
        public int EmployeeId { get; set; }
        public string EmployeeCode { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailId { get; set; }
        public string MobileNumber { get; set; }
        public string Gender { get; set; }
        public DateTime? BirthDate { get; set; }
        public string MaritalStatus { get; set; }
        public string FatherHusbandName { get; set; }
        public string MotherName { get; set; }
        public string BloodGroup { get; set; }
        public string Citizenship { get; set; }
        public string CitizenshipCountry { get; set; }
        public string Department { get; set; }
        public string Branch { get; set; }
        public string UserRoleId { get; set; }
        public string Qualification { get; set; }
        public string JobTitle { get; set; }
        public int? ManagerTeamLeaderId { get; set; }
        public DateTime? JoiningDate { get; set; }
        public string JobProfile { get; set; }
        public string Position { get; set; }
        public string Grade { get; set; }
        public int? TotalExperience { get; set; }
        public DateTime? LastDayOfJob { get; set; }
        public bool IsActive { get; set; }
        public string ResidentAddress { get; set; }
        public string PermanantAddress { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Pincode { get; set; }
        public string PersonalMobile { get; set; }
        public string AlternateMobile { get; set; }
        public string LandlinePhone { get; set; }
        public string GuardianMobile { get; set; }
        public string BankName { get; set; }
        public string BankBranchName { get; set; }
        public string AccountNumber { get; set; }
    }
}
