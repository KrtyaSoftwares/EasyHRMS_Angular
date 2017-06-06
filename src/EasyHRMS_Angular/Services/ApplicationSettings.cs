using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.Services
{
    public class ApplicationSettings
    { 
        // Other settings removed for brevity
        //public string TwilioUrl { get; set; }
        //public string TwilioId { get; set; }
        //public string TwilioToken { get; set; }
        //public string TwilioPhoneNumber { get; set; }

        public string TwilioUrl = "https://api.twilio.com/2010-04-01/Accounts/AC1b96c7592fd6390e8902bdfd98793c72/Messages.json";
        public string TwilioId = "AC1b96c7592fd6390e8902bdfd98793c72";
        public string TwilioToken = "e9532520837032c51dfd3944f9466b66";
        public string TwilioPhoneNumber = "+19143803959";
    }
}
