using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Cryptography;

namespace EasyHRMS_Angular.ModelsVM.TokenModel
{
    public class RSAKeyHelper
    {
        public static RSAParameters GenerateKey()
        {
            using (var key = new RSACryptoServiceProvider(2048))
            {
                return key.ExportParameters(true);
            }
            //using (var key = new RandomNumberGenerator(2048))
            //{
            //    return key.ExportParameters(true);
            //}
        }
    }
}
