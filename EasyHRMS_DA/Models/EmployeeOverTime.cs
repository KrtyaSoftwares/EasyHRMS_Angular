using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class EmployeeOverTime
    {
        public int Id { get; set; }
        public string WorkingHours { get; set; }
        public string OverTimeDeviation { get; set; }
        public decimal? OverTimeCost { get; set; }
        public decimal? FixCost { get; set; }
        public decimal? UnderTimeCost { get; set; }
        public decimal? UnderFixCost { get; set; }
        public string UnderDeviation { get; set; }
        public bool? IsOverTimeEnabled { get; set; }
        public bool? IsUnderCutEnabled { get; set; }
        public bool? IsOverTimeFixedCost { get; set; }
        public bool? IsUnderCutFixedCost { get; set; }
        public bool? IsAdvancedEnabled { get; set; }
        public bool? IsBonusDeductEnabled { get; set; }
        public bool? IsTdsenabled { get; set; }
        public TimeSpan? StartBreakTime { get; set; }
        public TimeSpan? EndBreakTime { get; set; }
        public string BreakDuration { get; set; }
        public bool? IsBreakTimeEnabled { get; set; }
        public decimal? PercentageOverTime { get; set; }
        public decimal? PercentageUnderCut { get; set; }
        public bool? IsPercentageOverTime { get; set; }
        public bool? IsPercentageUnderCut { get; set; }
        public bool? IsShiftEnabled { get; set; }
        public string LateTime { get; set; }
        public string EarlierTime { get; set; }
        public TimeSpan? HalfdayTime { get; set; }
        public int? AssessmentMonthId { get; set; }
        public int? TaxApplicableMonthId { get; set; }
        public int? AssessmentYearId { get; set; }
        public int? TaxApplicableYearId { get; set; }
        public bool? IspensionEnabled { get; set; }
        public int? PayrollStartMonth { get; set; }
        public int? PayrollStartYear { get; set; }
    }
}
