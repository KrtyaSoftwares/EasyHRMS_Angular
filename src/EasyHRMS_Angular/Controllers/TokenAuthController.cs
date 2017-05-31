using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using EasyHRMS_DA.Models;
using Newtonsoft.Json;
using Microsoft.Extensions.Logging;
using EasyHRMS_Angular.ModelsVM.IdentityTokenViewModels;
using EasyHRMS_Angular.ModelsVM.TokenModel;
//using EasyHRMS_Angular.Models;

namespace EasyHRMS_Angular.Controllers
{
    [Route("api/[controller]")]
    public class TokenAuthController : Controller
    {
        private readonly Ehrms_ng2Context _context;
        public string userid, roleid, rolename;

        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        //private readonly IEmailSender _emailSender;
        //private readonly ISmsSender _smsSender;
        private readonly ILogger _logger;

        public TokenAuthController(
            UserManager<ApplicationUser> userManager,
           SignInManager<ApplicationUser> signInManager,
           //IEmailSender emailSender,
           //ISmsSender smsSender,
           ILoggerFactory loggerFactory,
           Ehrms_ng2Context context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            //_emailSender = emailSender;
            //_smsSender = smsSender;
            _logger = loggerFactory.CreateLogger<IdentityTokenController>();
            _context = context;
        }

        [HttpPost("Login"), Produces("application/json")]
        public async Task<string> Login([FromBody]LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, lockoutOnFailure: true);
                if (result.Succeeded)
                {

                    var requestAt = DateTime.Now;
                    var expiresIn = requestAt + TokenAuthOption.ExpiresSpan;
                    User tokenUser = new User()
                    {
                        Username = model.Email,
                        Password = model.Password
                    };
                    var token = GenerateToken(tokenUser, expiresIn);

                    return JsonConvert.SerializeObject(new RequestResult
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
                }
                else
                {
                    return JsonConvert.SerializeObject(new RequestResult
                    {
                        State = RequestState.Failed,
                        Msg = "Username or password is invalid"
                    });
                }
            }
            // If we got this far, something failed, redisplay form
            return JsonConvert.SerializeObject(new RequestResult
            {
                State = RequestState.Failed,
                Msg = "Invalid login attempt."
            });
        }


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
        [HttpGet("GetUserInfo1")]
        public IActionResult GetUserInfo1()
        {
            var claimsIdentity = User.Identity as ClaimsIdentity;
            return Json(new RequestResult
            {
                State = RequestState.Success,
                Data = new { UserName = claimsIdentity.Name }
            });
        }
        [HttpPost("test")]
        [Authorize("Bearer")]
        public IActionResult test()
        {
            var claimsIdentity = User.Identity as ClaimsIdentity;
            return Json(new RequestResult
            {
                State = RequestState.Success,
                Data = new { UserName = claimsIdentity.Name }
            });
        }


        //POST : api/IdentityToken/Register
        //  [HttpPost, Route("Register"), Produces("application/json")]
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
                    //var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    //var callbackUrl = Url.Action("ConfirmEmail", "Account", new { userId = user.Id, code = code }, protocol: HttpContext.Request.Scheme);
                    //await _emailSender.SendEmailAsync(model.Email, "Confirm your account",
                    //    $"Please confirm your account by clicking this link: <a href='{callbackUrl}'>link</a>");
                    await _signInManager.SignInAsync(user, isPersistent: false);
                    _logger.LogInformation(3, "User created a new account with password.");

                    // start
                    var requestAt = DateTime.Now;
                    var expiresIn = requestAt + TokenAuthOption.ExpiresSpan;
                    User tokenUser = new User()
                    {
                        Username = model.Email,
                        Password = model.Password
                    };
                    var token = GenerateToken(tokenUser, expiresIn);

                    return JsonConvert.SerializeObject(new RequestResult
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

        // POST: api/IdentityToken/LogOff
        // [HttpPost, Route("LogOff")]
        [HttpPost("LogOff")]
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

        #region  Prashant Identity Code [Backup]
        //[HttpPost("Login")]
        //[AllowAnonymous]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Login(LoginViewModel model, string returnUrl = null)
        //public async Task<IActionResult> Login(LoginViewModel model)
        //{
        //ViewData["ReturnUrl"] = returnUrl;
        // if (ModelState.IsValid)
        //{
        // This doesn't count login failures towards account lockout
        // To enable password failures to trigger account lockout, set lockoutOnFailure: true
        //var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, lockoutOnFailure: false);
        //if (result.Succeeded)
        //{

        // _logger.LogInformation(1, "User logged in.");
        //return RedirectToLocal(returnUrl);

        //start
        // var requestAt = DateTime.Now;
        // var expiresIn = requestAt + TokenAuthOption.ExpiresSpan;
        // User tokenUser = new User()
        // {
        // Username = model.Email,
        // Password = model.Password
        //};
        //var token = GenerateToken(tokenUser, expiresIn);

        //return Json(new RequestResult
        //{
        //State = RequestState.Success,
        // Data = new
        //{
        // requertAt = requestAt,
        // expiresIn = TokenAuthOption.ExpiresSpan.TotalSeconds,
        //tokeyType = TokenAuthOption.TokenType,
        //accessToken = token
        //}
        //});
        //End

        // }
        //if (result.RequiresTwoFactor)
        //{
        //    return RedirectToAction(nameof(SendCode), new { ReturnUrl = returnUrl, RememberMe = model.RememberMe });
        //}
        //if (result.IsLockedOut)
        //{
        //_logger.LogWarning(2, "User account locked out.");
        //return View("Lockout");
        //return Json(new RequestResult
        //{
        //    State = RequestState.Failed,
        //    Msg = "Username Lockout"
        //});
        // }
        //else
        //{
        //ModelState.AddModelError(string.Empty, "Invalid login attempt.");
        //return View(model);
        // return Json(new RequestResult
        // {
        // State = RequestState.Failed,
        // Msg = "Username or password is invalid"
        //});
        //}
        //}

        // If we got this far, something failed, redisplay form
        //return View(model);
        //    return Json(new RequestResult
        //    {
        //        State = RequestState.Failed,
        //        Msg = "Invalid login attempt."
        //    });
        //}

        // POST: /Account/Register
        //[HttpPost("Register")]
        //[AllowAnonymous]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Register(RegisterViewModel model, string returnUrl = null)
        //public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
        //{
        //ViewData["ReturnUrl"] = returnUrl;
        //if (ModelState.IsValid)
        //{
        //    var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
        //var result = await _userManager.CreateAsync(user, model.Password);
        //var result = await _userManager.CreateAsync(user, model.Password);
        //if (result.Succeeded)
        //if (result)
        //{
        // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=532713
        // Send an email with this link
        //var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
        //var callbackUrl = Url.Action(nameof(ConfirmEmail), "Account", new { userId = user.Id, code = code }, protocol: HttpContext.Request.Scheme);
        //await _emailSender.SendEmailAsync(model.Email, "Confirm your account",
        //    $"Please confirm your account by clicking this link: <a href='{callbackUrl}'>link</a>");
        //await _signInManager.SignInAsync(user, isPersistent: false);
        //_logger.LogInformation(3, "User created a new account with password.");
        //return RedirectToLocal(returnUrl);

        //start
        //var requestAt = DateTime.Now;
        //var expiresIn = requestAt + TokenAuthOption.ExpiresSpan;
        //User tokenUser = new User()
        //{
        //    Username = model.Email,
        //    Password = model.Password
        //};
        //var token = GenerateToken(tokenUser, expiresIn);

        //return Json(new RequestResult
        //{
        //    State = RequestState.Success,
        //    Data = new
        //    {
        //        requertAt = requestAt,
        //        expiresIn = TokenAuthOption.ExpiresSpan.TotalSeconds,
        //        tokeyType = TokenAuthOption.TokenType,
        //        accessToken = token
        //    }
        //});
        //End

        //}
        //AddErrors(result);
        //    return Json(new RequestResult
        //    {
        //        State = RequestState.Failed,
        //        Msg = "Username or password is invalid"
        //    });
        //}

        // If we got this far, something failed, redisplay form
        //return View(model);
        //    return Json(new RequestResult
        //    {
        //        State = RequestState.Failed,
        //        Msg = "Username or password is invalid"
        //    });
        //}

        //
        // POST: /Account/Logout
        //[HttpPost("Logout")]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Logout()
        //{
        //    await _signInManager.SignOutAsync();
        //_logger.LogInformation(4, "User logged out.");
        //return RedirectToAction(nameof(HomeController.Index), "Home");
        //    return Json(new RequestResult
        //    {
        //        State = RequestState.Failed,
        //        Msg = "Logout Successfull"
        //    });
        //}





        //[HttpPost("LoginEx")]
        //public IActionResult LoginEx([FromBody]User user)
        //{
        //    User existUser = UserStorage.Users.FirstOrDefault(u => u.Username == user.Username && u.Password == user.Password);

        //    if (existUser != null)
        //    {

        //        var requestAt = DateTime.Now;
        //        var expiresIn = requestAt + TokenAuthOption.ExpiresSpan;
        //        var token = GenerateToken(existUser, expiresIn);

        //        return Json(new RequestResult
        //        {
        //            State = RequestState.Success,
        //            Data = new
        //            {
        //                requertAt = requestAt,
        //                expiresIn = TokenAuthOption.ExpiresSpan.TotalSeconds,
        //                tokeyType = TokenAuthOption.TokenType,
        //                accessToken = token
        //            }
        //        });
        //    }
        //    else
        //    {
        //        return Json(new RequestResult
        //        {
        //            State = RequestState.Failed,
        //            Msg = "Username or password is invalid"
        //        });
        //    }
        //}


        //[HttpGet("GetStaff")]
        //[Authorize("Bearer")]
        //public IActionResult GetStaff()
        //{
        //    List<string> model = new List<string>();
        //    foreach (User user in UserStorage.Users)
        //    {
        //        model.Add(user.Username);
        //    }
        //    return Json(model);
        //}

        //[HttpGet("GetStaffB")]

        //public IActionResult GetStaffB()
        //{
        //    List<string> model = new List<string>();
        //    foreach (User user in UserStorage.Users)
        //    {
        //        model.Add(user.Username);
        //    }
        //    return Json(model);
        //}


        //public static class UserStorage
        //{
        //    public static List<User> Users { get; set; } = new List<User> {
        //        new User {ID=Guid.NewGuid(),Username="user1",Password = "user1psd", Fname="user1", Lname="Lname1" },
        //        new User {ID=Guid.NewGuid(),Username="user2",Password = "user2psd", Fname="user2", Lname="Lname2"  },
        //        new User {ID=Guid.NewGuid(),Username="user3",Password = "user3psd", Fname="user3", Lname="Lname3"  }
        //    };

        //}
        #endregion

    }
}