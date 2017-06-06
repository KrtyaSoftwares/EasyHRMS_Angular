using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Logging;
using EasyHRMS_DA.Models;
using EasyHRMS_Angular.ModelsVM.IdentityTokenViewModels;
using EasyHRMS_Angular.ModelsVM.TokenModel;
//using EasyHRMS_Angular.Services;
using Microsoft.AspNetCore.Http; // Needed for the SetString and GetString extension methods
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Principal;
using Newtonsoft.Json;
// [Start] Below used for Email and SMS
using MimeKit;
using MailKit.Net.Smtp;
using MailKit.Security;
using System.Net.Http;
using System.Text;
using System.Net.Http.Headers;
using EasyHRMS_Angular.Services;
using Microsoft.Extensions.Options;
// [End]

namespace EasyHRMS_Angular.Controllers
{
    [Route("api/[controller]")]
    public class IdentityTokenController : Controller
    {
        private readonly Ehrms_ng2Context _context;
        public string userid, roleid, rolename;

        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        //private readonly IEmailSender _emailSender;
        //private readonly ISmsSender _smsSender;
        private readonly ILogger _logger;

        private IOptions<ApplicationSettings> _settings; // used for SMS
        public IdentityTokenController(
           UserManager<ApplicationUser> userManager,
           SignInManager<ApplicationUser> signInManager,
           //IEmailSender emailSender,
           //ISmsSender smsSender,
           ILoggerFactory loggerFactory,
           Ehrms_ng2Context context,
           IOptions<ApplicationSettings> settings)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            //_emailSender = emailSender;
            //_smsSender = smsSender;
            _logger = loggerFactory.CreateLogger<IdentityTokenController>();
            _context = context;
            _settings = settings;  // used for SMS
        }

        #region Login
        // POST : api/IdentityToken/Login
        [HttpPost("Login"), Produces("application/json")]
        //public async Task<string> Login([FromBody]LoginViewModel model, [FromBody]AspNetRoles rolemodel, [FromBody]AspNetUserRoles userrolemodel, [FromBody]AspNetUsers usermodel)
        public async Task<IActionResult> Login([FromBody]LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                //var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, lockoutOnFailure: false);
                var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, lockoutOnFailure: true);
                if (result.Succeeded)
                {
                    // [Start] 31-03-2017 added by bhoomi : set session for email ID
                    //  HttpContext.Session.SetString("EmailID", model.Email);
                    // [End] 31-03-2017 added by bhoomi

                    #region Role Wise response
                    // [Start] 29-03-2017 added by bhoomi
                    //var q = from m in _context.Users
                    //        where m.Email == model.Email
                    //        select new
                    //        {
                    //            m.Id
                    //        };

                    //foreach (var item in q)
                    //{
                    //    userid = item.Id;
                    //}
                    //var q1 = from m in _context.UserRoles
                    //         where m.UserId == userid
                    //         select new
                    //         {
                    //             m.RoleId
                    //         };

                    //foreach (var item in q1)
                    //{
                    //    roleid = item.RoleId;
                    //}
                    //var q2 = from m in _context.Roles
                    //         where m.Id == roleid
                    //         select new
                    //         {
                    //             m.Name
                    //         };

                    //foreach (var item in q2)
                    //{
                    //    rolename = item.Name;
                    //}
                    //if (rolename.Equals("Admin"))
                    //{
                    //    return RedirectToAction("AdminDashboard", "Administrator");
                    //}
                    //else if (rolename.Equals("Employee"))
                    //{
                    //    return RedirectToAction("EmployeeDashboard", "Employee");
                    //    
                    //}
                    // [End] 29-03-2017 added by bhoomi
                    #endregion

                    // _logger.LogInformation(1, "User logged in.");

                    // start
                    var requestAt = DateTime.Now;
                    var expiresIn = requestAt + TokenAuthOption.ExpiresSpan;
                    User tokenUser = new User()
                    {
                        Username = model.Email,
                        Password = model.Password
                    };
                    var token = GenerateToken(tokenUser, expiresIn);

                    return Json(new RequestResult
                    {
                        State = RequestState.Success,
                        Data = new
                        {
                            requertAt = requestAt,
                            expiresIn = TokenAuthOption.ExpiresSpan.TotalSeconds,
                            tokeyType = TokenAuthOption.TokenType,
                            accessToken = token
                        }
                    });
                    // End
                    // return RedirectToAction("Index", "Home");
                }
                //else
                //{
                //    return Json(new RequestResult
                //    {
                //        State = RequestState.Failed,
                //        Msg = "Username or password is invalid."
                //    });

                //}
                #region
                if (result.RequiresTwoFactor)
                {
                    // return RedirectToAction(nameof(SendCode), new { ReturnUrl = returnUrl, RememberMe = model.RememberMe });
                    return RedirectToAction(nameof(SendCode), new { RememberMe = model.RememberMe });
                }
                if (result.IsLockedOut)
                {
                    // _logger.LogWarning(2, "User account locked out.");
                    // return View("Lockout");
                    return Json(new RequestResult
                    {
                        State = RequestState.Failed,
                        Msg = "User account locked out."
                    });
                }
                else
                {
                    //  ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                    return Json(new RequestResult
                    {
                        State = RequestState.Failed,
                        Msg = "Username or password is invalid."
                    });
                    //  return View(model);
                }
                #endregion
            }
            // If we got this far, something failed, redisplay form
            //  return View(model);
            return Json(new RequestResult
            {
                State = RequestState.Failed,
                Msg = "Invalid login attempt."
            });
        }
        #endregion

        #region Generate Token
        private string GenerateToken(User user, DateTime expires)
        {
            var handler = new JwtSecurityTokenHandler();

            #region
            //start ex claims

            //var now = DateTime.UtcNow;

            // Specifically add the jti (nonce), iat (issued timestamp), and sub (subject/user) claims.
            // You can add other claims here, if you want:
            //var claims = new Claim[]
            //{
            //new Claim(JwtRegisteredClaimNames.Sub, user.Username),
            //new Claim(JwtRegisteredClaimNames.Jti, await _options.NonceGenerator()),
            //new Claim(JwtRegisteredClaimNames.Iat, ToUnixEpochDate(now).ToString(), ClaimValueTypes.Integer64)
            //};
            // Create the JWT and write it to a string
            //var jwt = new JwtSecurityToken(
            //    issuer: _options.Issuer,
            //    audience: _options.Audience,
            //    claims: claims,
            //    notBefore: now,
            //    expires: now.Add(_options.Expiration),
            //    signingCredentials: _options.SigningCredentials);
            //var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            //End ex claims
            #endregion

            ClaimsIdentity identity = new ClaimsIdentity(
                new GenericIdentity(user.Username, "TokenAuth"),
                new[] { new Claim("ID", user.ID.ToString()) }
            );

            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = TokenAuthOption.Issuer,
                Audience = TokenAuthOption.Audience,
                SigningCredentials = TokenAuthOption.SigningCredentials,
                Subject = identity,
                Expires = expires
            });
            return handler.WriteToken(securityToken);
        }
        #endregion

        // Token test method
        // GET : api/IdentityToken/GetUserInfo
        [HttpGet("GetUserInfo")]
        [Authorize("Bearer")]
        public string GetUserInfo()
        {
            var claimsIdentity = User.Identity as ClaimsIdentity;

            return JsonConvert.SerializeObject(new RequestResult
            {
                State = RequestState.Success,
                Data = new
                {
                    UserName = claimsIdentity.Name
                }
            });
        }

        #region Registration
        //POST : api/IdentityToken/Register
        [HttpPost("Register"), Produces("application/json")]
        public async Task<string> Register([FromBody]RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=532713
                    // Send an email with this link
                    var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    var callbackUrl = Url.Action("ConfirmEmail", "IdentityToken", new { userId = user.Id, code = code }, protocol: HttpContext.Request.Scheme);
                    //await _emailSender.SendEmailAsync(model.Email, "Confirm your account",
                    //    $"Please confirm your account by clicking this link: <a href='{callbackUrl}'>link</a>");
                    await SendEmailAsync(model.Email, "Confirm your account", $"Please confirm your account by clicking this link: <a href='{callbackUrl}'>link</a>");

                    await _signInManager.SignInAsync(user, isPersistent: false);

                    return JsonConvert.SerializeObject(new RequestResult
                    {
                        State = RequestState.Success,
                        Msg = "Please check your email to confirm your account."
                    });
                    //  _logger.LogInformation(3, "User created a new account with password.");
                    //   return RedirectToLocal(returnUrl);
                }
                string message = null;
                message = AddErrors(result);
                return JsonConvert.SerializeObject(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = message
                });
            }

            // If we got this far, something failed, redisplay form
            // return View(model);
            return JsonConvert.SerializeObject(new RequestResult
            {
                State = RequestState.Failed,
                Msg = "Registration Falied."
            });
        }
        #endregion

        #region LogOff
        // POST: api/IdentityToken/LogOff
        [HttpPost("LogOff"), Produces("application/json")]
        public async Task<string> LogOff()
        {
            await _signInManager.SignOutAsync();
            //  _logger.LogInformation(4, "User logged out.");
            //return RedirectToAction("Login");
            return JsonConvert.SerializeObject(new RequestResult
            {
                State = RequestState.Success,
                Msg = "User logged out."
            });
        }
        #endregion

        #region Confirm Email
        // GET: /api/IdentityToken/ConfirmEmail
        [HttpGet("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail([FromQuery]string userId, [FromQuery]string code)
        {
            if (userId == null || code == null)
            {
                // return View("Error");
                return Json(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "An error has occurred."
                });
            }
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                // return View("Error");
                return Json(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "An error has occurred."
                });
            }
            var result = await _userManager.ConfirmEmailAsync(user, code);
            if (result.Succeeded)
            {
                return Json(new RequestResult
                {
                    State = RequestState.Success,
                    Msg = "Email Confirmation Done."
                });
            }
            else
            {
                return Json(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "An error has occurred."
                });
            }
            //  return View(result.Succeeded ? "ConfirmEmail" : "Error");
        }
        #endregion

        #region Change Password
        // POST: /api/IdentityToken/ChangePassword
        [HttpPost("ChangePassword"), Produces("application/json")]
        public async Task<string> ChangePassword([FromBody]ChangePasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return JsonConvert.SerializeObject(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "An error has occurred."
                });
            }
            var user = await GetCurrentUserAsync();
            if (user != null)
            {
                var result = await _userManager.ChangePasswordAsync(user, model.OldPassword, model.NewPassword);
                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, isPersistent: false);
                    //  _logger.LogInformation(3, "User changed their password successfully.");
                    //  return RedirectToAction(nameof(Index), new { Message = ManageMessageId.ChangePasswordSuccess });

                    return JsonConvert.SerializeObject(new RequestResult
                    {
                        State = RequestState.Success,
                        Msg = "Your password has been changed."
                    });
                }
                string message = null;
                message = AddErrors(result);
                return JsonConvert.SerializeObject(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = message
                });
            }
            //  return RedirectToAction(nameof(Index), new { Message = ManageMessageId.Error });
            return JsonConvert.SerializeObject(new RequestResult
            {
                State = RequestState.Failed,
                Msg = "An error has occurred."
            });
        }
        #endregion

        #region Forgot Password
        // POST: /api/IdentityToken/ForgotPassword
        [HttpPost("ForgotPassword"), Produces("application/json")]
        public async Task<string> ForgotPassword([FromBody]ForgotPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByNameAsync(model.Email);
                if (user == null || !(await _userManager.IsEmailConfirmedAsync(user)))
                // if (user == null)
                {
                    // Don't reveal that the user does not exist or is not confirmed
                    //ViewData["Message"] = "Please check your email to reset your password.";
                    //return View("ForgotPassword");
                    return JsonConvert.SerializeObject(new RequestResult
                    {
                        State = RequestState.Failed,
                        Msg = "Please check your email to reset your password."
                    });
                }

                // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=532713
                //  Send an email with this link
                var code = await _userManager.GeneratePasswordResetTokenAsync(user);
                var callbackUrl = Url.Action("ResetPassword", "IdentityToken", new { userId = user.Id, code = code }, protocol: HttpContext.Request.Scheme);
                //   await _emailSender.SendEmailAsync(model.Email, "Reset Password", $"Please reset your password by clicking here: <a href='{callbackUrl}'>link</a>");
                await SendEmailAsync(model.Email, "Reset Password", $"Please reset your password by clicking here: <a href='{callbackUrl}'>link</a>");
                return JsonConvert.SerializeObject(new RequestResult
                {
                    State = RequestState.Success,
                    Msg = "Please check your email to reset your password."
                });
                // return View("ForgotPasswordConfirmation");
            }

            // If we got this far, something failed, redisplay form
            //   return View(model);
            return JsonConvert.SerializeObject(new RequestResult
            {
                State = RequestState.Failed,
                Msg = "An error has occurred."
            });
        }
        #endregion

        #region Reset Password
        // GET: api/IdentityToken/ResetPassword
        [HttpGet("ResetPassword")]
        public IActionResult ResetPassword(string code = null)
        {
            if (code == null)
            {
                return Json(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "An error has occurred."
                });
            }
            else
            {
                return Json(new RequestResult
                {
                    State = RequestState.Success,
                    Msg = "Reset Your Password."
                });
            }
            //  return code == null ? View("Error") : View();
        }

        // POST: /api/IdentityToken/ResetPassword
        [HttpPost("ResetPassword"), Produces("application/json")]
        public async Task<IActionResult> ResetPassword([FromBody]ResetPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                // return View(model);
                return Json(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "An error has occurred."
                });
            }
            var user = await _userManager.FindByNameAsync(model.Email);
            if (user == null)
            {
                // Don't reveal that the user does not exist
                //  return RedirectToAction(nameof(IdentityTokenController.ResetPasswordConfirmation), "IdentityToken");
                return Json(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "An error has occurred."
                });
            }
            var result = await _userManager.ResetPasswordAsync(user, model.Code, model.Password);
            if (result.Succeeded)
            {
                return RedirectToAction(nameof(IdentityTokenController.ResetPasswordConfirmation), "IdentityToken");
                //return JsonConvert.SerializeObject(new RequestResult
                //{
                //    State = RequestState.Failed,
                //    Msg = "Reset Password Confirmation."
                //});
            }
            string message = null;
            message = AddErrors(result);
            //  return View();
            return Json(new RequestResult
            {
                State = RequestState.Failed,
                Msg = message
            });
        }

        // GET: api/IdentityToken/ResetPasswordConfirmation
        [HttpGet("ResetPasswordConfirmation")]
        public IActionResult ResetPasswordConfirmation()
        {
            return Json(new RequestResult
            {
                State = RequestState.Success,
                Msg = "Your password has been reset."
            });

            // return View();
        }

        #endregion

        #region Email Sending Code
        public async Task SendEmailAsync(string email, string subject, string message)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("", "krtya.test00@gmail.com"));
            emailMessage.To.Add(new MailboxAddress("", email));
            emailMessage.Subject = subject;

            emailMessage.Body = new TextPart("html")
            {
                Text = message
            };

            using (var client = new SmtpClient())
            {
                await client.ConnectAsync("smtp.gmail.com", 587, false);
                client.AuthenticationMechanisms.Remove("XOAUTH2"); // Must be removed for Gmail SMTP  Note: since we don't have an OAuth2 token, disable 	// the XOAUTH2 authentication mechanism. 
                client.Authenticate("krtya.test00@gmail.com", "Pass#123");
                await client.SendAsync(emailMessage);
                await client.DisconnectAsync(true);
            }
        }
        #endregion

        #region SMS Sending Code
        //[HttpGet("SendSms", Name = "SendSms")]
        //public async Task<IActionResult> SendSms()
        [HttpGet("SendSms", Name = "SendSms")]
        public async Task<IActionResult> SendSms(string phone, string code)
        {
            using (var client = new HttpClient())
            {
                var byteArray = Encoding.ASCII.GetBytes($"{_settings.Value.TwilioId}:{_settings.Value.TwilioToken}");
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

                var content = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("To","$+91" + phone),
                    new KeyValuePair<string, string>("From", _settings.Value.TwilioPhoneNumber),
                    new KeyValuePair<string, string>("Body", code)
                });

                await client.PostAsync(_settings.Value.TwilioUrl, content);
            }
            return new OkObjectResult(true);
        }
        #endregion


        // GET: /api/IdentityToken/SendCode
        [HttpGet("SendCode")]
        public async Task<ActionResult> SendCode(bool rememberMe = false)
        {
            var user = await _signInManager.GetTwoFactorAuthenticationUserAsync();
            if (user == null)
            {
                //return View("Error");
                return Json(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "An error has occurred."
                });
            }
            var userFactors = await _userManager.GetValidTwoFactorProvidersAsync(user);
            var factorOptions = userFactors.Select(purpose => new SelectListItem { Text = purpose, Value = purpose }).ToList();
            return View(new SendCodeViewModel { Providers = factorOptions, RememberMe = rememberMe });
        }

        // POST: /api/IdentityToken/SendCode
        [HttpPost("SendCode"), Produces("application/json")]
        public async Task<IActionResult> SendCode([FromBody]SendCodeViewModel model)
        {
            if (!ModelState.IsValid)
            {
                //return View();
                return Json(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "An error has occurred."
                });
            }

            var user = await _signInManager.GetTwoFactorAuthenticationUserAsync();
            if (user == null)
            {
                // return View("Error");
                return Json(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "An error has occurred."
                });
            }

            // Generate the token and send it
            var code = await _userManager.GenerateTwoFactorTokenAsync(user, model.SelectedProvider);
            if (string.IsNullOrWhiteSpace(code))
            {
                // return View("Error");
                return Json(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "An error has occurred."
                });
            }

            var message = "Your security code is: " + code;
            if (model.SelectedProvider == "Email")
            {
                // await _emailSender.SendEmailAsync(await _userManager.GetEmailAsync(user), "Security Code", message);
                await SendEmailAsync(await _userManager.GetEmailAsync(user), "Security Code", message);
            }
            else if (model.SelectedProvider == "Phone")
            {
                // await _smsSender.SendSmsAsync(await _userManager.GetPhoneNumberAsync(user), message);
                string UserPhone = await _userManager.GetPhoneNumberAsync(user);
                await SendSms(UserPhone, message);
            }

            return RedirectToAction(nameof(VerifyCode), new { Provider = model.SelectedProvider, ReturnUrl = model.ReturnUrl, RememberMe = model.RememberMe });
        }

        // GET: /api/IdentityToken/VerifyCode
        [HttpGet("VerifyCode")]
        public async Task<IActionResult> VerifyCode(string provider, bool rememberMe, string returnUrl = null)
        {
            // Require that the user has already logged in via username/password or external login
            var user = await _signInManager.GetTwoFactorAuthenticationUserAsync();
            if (user == null)
            {
                // return View("Error");
                return Json(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "An error has occurred."
                });
            }
            return View(new VerifyCodeViewModel { Provider = provider, ReturnUrl = returnUrl, RememberMe = rememberMe });
        }

        // POST: /api/IdentityToken/VerifyCode
        [HttpPost("VerifyCode"), Produces("application/json")]
        public async Task<IActionResult> VerifyCode([FromBody]VerifyCodeViewModel model)
        {
            if (!ModelState.IsValid)
            {
                //  return View(model);
                return Json(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "An error has occurred."
                });
            }

            // The following code protects for brute force attacks against the two factor codes.
            // If a user enters incorrect codes for a specified amount of time then the user account
            // will be locked out for a specified amount of time.
            var result = await _signInManager.TwoFactorSignInAsync(model.Provider, model.Code, model.RememberMe, model.RememberBrowser);
            if (result.Succeeded)
            {
                // return RedirectToLocal(model.ReturnUrl);

                if (Url.IsLocalUrl(model.ReturnUrl))
                {
                    return Redirect(model.ReturnUrl);
                }
                else
                {
                    //  return RedirectToAction(nameof(HomeController.Index), "Home");
                }
            }
            if (result.IsLockedOut)
            {
                //  _logger.LogWarning(7, "User account locked out.");
                //  return View("Lockout");
                return Json(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "User account locked out."
                });
            }
            else
            {
                // ModelState.AddModelError(string.Empty, "Invalid code.");
                // return View(model);
                return Json(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "Invalid code."
                });
            }
        }

        #region Helpers

        private string AddErrors(IdentityResult result)
        {
            string str = null;
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
                str = error.Description;
            }
            return str;
        }

        private Task<ApplicationUser> GetCurrentUserAsync()
        {
            return _userManager.GetUserAsync(HttpContext.User);
        }

        //private IActionResult RedirectToLocal(string returnUrl)
        //{
        //    if (Url.IsLocalUrl(returnUrl))
        //    {
        //        return Redirect(returnUrl);
        //    }
        //    else
        //    {
        //        return RedirectToAction(nameof(HomeController.Index), "Home");
        //    }
        //}

        #endregion

    }
}