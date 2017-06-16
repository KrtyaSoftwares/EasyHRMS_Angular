using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM
{
    public class EmployeeAttendanceGridRowVM
    {
        public int? EmployeeId { get; set; }
        public int? DepartmentId { get; set; }
        public DateTime? InTime { get; set; }
        public DateTime? OutTime { get; set; }
        public int TotalHours { get; set; }
        public bool IsAbsent { get; set; }
    }

    public class EmployeeAttendanceVM
    {
        public DateTime? SelectedDate { get; set; }
        public int? SelectedShiftId { get; set; }
        public int? SelectedDepartmentId { get; set; }

        public List<EmployeeAttendanceGridRowVM> EmployeeAttendanceGridData { get; set; }
    }
}
