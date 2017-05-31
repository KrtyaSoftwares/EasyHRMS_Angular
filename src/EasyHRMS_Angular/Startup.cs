using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Angular2WebpackVisualStudio.Repositories.Things;
using Angular2WebpackVisualStudio.Models;
using Microsoft.EntityFrameworkCore;
using EasyHRMS_DA.Models;
//using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Diagnostics;
using Newtonsoft.Json;
using EasyHRMS_Angular.ModelsVM.TokenModel;

namespace Angular2WebpackVisualStudio
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins",
                    builder =>
                    {
                        builder
                            .AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                    });
            });

            // Add framework services.
            services.AddSingleton<IThingsRepository, ThingsRepository>();

            //var connection = @"Server=SAMIR-PC;Database=Ehrms;user id=sa;password=pass#123;Trusted_Connection=True;";
            var connection = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<Ehrms_ng2Context>(options => options.UseSqlServer(connection));

            //// Add EF services to the services container.
            //services.AddEntityFramework(Configuration)
            //  .AddSqlServer()
            //  .AddDbContext<ApplicationDbContext>();
            // Add Identity services to the services container.
            //services.AddIdentity<ApplicationUser, IdentityRole>(Configuration)
            //  .AddEntityFrameworkStores<ApplicationDbContext>();

            //services.AddIdentity<ApplicationUser, IdentityRole>()
            // .AddEntityFrameworkStores<EhrmsContext>();

            // services.AddIdentity<ApplicationUser, IdentityRole<int>>()
            // .AddEntityFrameworkStores<EhrmsContext,Int>().AddDefaultTokenProviders();

            // Enable the use of an [Authorize("Bearer")] attribute on methods and classes to protect.
            services.AddAuthorization(auth =>
            {
                auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme‌​)
                    .RequireAuthenticatedUser().Build());
            });
            // [Start] bhoomi
            // Add Identity services to the services container.
            services.AddIdentity<ApplicationUser, IdentityRole>()
              .AddEntityFrameworkStores<Ehrms_ng2Context>();
          
            // [End] bhoomi
            services.AddMvc();

          
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            var angularRoutes = new[] {
                 "/home",
                 "/about"
             };

            app.Use(async (context, next) =>
            {
                if (context.Request.Path.HasValue && null != angularRoutes.FirstOrDefault(
                    (ar) => context.Request.Path.Value.StartsWith(ar, StringComparison.OrdinalIgnoreCase)))
                {
                    context.Request.Path = new PathString("/");
                }

                await next();
            });

            app.UseCors("AllowAllOrigins");

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // [Start] Bhoomi - Identity 
            app.UseIdentity();
          
            //start token settings
            #region Handle Exception 
            app.UseExceptionHandler(appBuilder =>
            {
                appBuilder.Use(async (context, next) =>
                {
                    var error = context.Features[typeof(IExceptionHandlerFeature)] as IExceptionHandlerFeature;

                    if (error != null && error.Error is SecurityTokenExpiredException)
                    {
                        context.Response.StatusCode = 401;
                        context.Response.ContentType = "application/json";

                        await context.Response.WriteAsync(JsonConvert.SerializeObject(new RequestResult
                        {
                            State = RequestState.NotAuth,
                            Msg = "token expired"
                        }));
                    }
                    else if (error != null && error.Error != null)
                    {
                        context.Response.StatusCode = 500;
                        context.Response.ContentType = "application/json";
                        await context.Response.WriteAsync(JsonConvert.SerializeObject(new RequestResult
                        {
                            State = RequestState.Failed,
                            Msg = error.Error.Message
                        }));
                    }
                    else await next();
                });
            });
            #endregion

            #region UseJwtBearerAuthentication 
            app.UseJwtBearerAuthentication(new JwtBearerOptions()
            {
                TokenValidationParameters = new TokenValidationParameters()
                {
                    IssuerSigningKey = TokenAuthOption.Key,
                    ValidAudience = TokenAuthOption.Audience,
                    ValidIssuer = TokenAuthOption.Issuer,
                    ValidateIssuerSigningKey = true,
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.FromMinutes(0)
                }
            });
            #endregion

            //end token settings
            // [End] Bhoomi

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            //DbInitializer.Initialize(ctx);
        }
    }
}
