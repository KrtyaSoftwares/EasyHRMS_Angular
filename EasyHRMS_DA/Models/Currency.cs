﻿using System;
using System.Collections.Generic;

namespace EasyHRMS_DA.Models
{
    public partial class Currency
    {
        public int CurrencyId { get; set; }
        public string CurrencyName { get; set; }
        public string CurrencySymbol { get; set; }
        public string CurrencyShortName { get; set; }
    }
}
