﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM
{
    public class User
    {
        public Guid ID { get; set; }
        public string Username { get; set; }

        public string Password { get; set; }

        public string Fname { get; set; }
        public string Lname { get; set; }

    }
}
