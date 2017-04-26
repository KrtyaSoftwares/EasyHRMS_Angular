using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EasyHRMS_DA.Models
{
    public partial class EhrmsContext : DbContext
    {
        public virtual DbSet<AspNetRoleClaims> AspNetRoleClaims { get; set; }
        public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUserRoles> AspNetUserRoles { get; set; }
        public virtual DbSet<AspNetUserTokens> AspNetUserTokens { get; set; }
        public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }
        public virtual DbSet<Currency> Currency { get; set; }
        public virtual DbSet<EmpData> EmpData { get; set; }
        public virtual DbSet<EmployeeDetails> EmployeeDetails { get; set; }
        public virtual DbSet<FormBuilder> FormBuilder { get; set; }
        public virtual DbSet<Holiday> Holiday { get; set; }
        public virtual DbSet<ListAction> ListAction { get; set; }
        public virtual DbSet<LookupData> LookupData { get; set; }
        public virtual DbSet<LookupList> LookupList { get; set; }
        public virtual DbSet<Lookups> Lookups { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
        //    optionsBuilder.UseSqlServer(@"Server=SAMIR-PC; Initial Catalog = Ehrms; User ID = sa;Password = pass#123;");
        //}
        public EhrmsContext(DbContextOptions<EhrmsContext> options)
            : base(options) { }
        public EhrmsContext() { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AspNetRoleClaims>(entity =>
            {
                entity.Property(e => e.RoleId)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetRoleClaims)
                    .HasForeignKey(d => d.RoleId);
            });

            modelBuilder.Entity<AspNetRoles>(entity =>
            {
                entity.Property(e => e.Id).HasMaxLength(450);

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.NormalizedName).HasMaxLength(256);
            });

            modelBuilder.Entity<AspNetUserClaims>(entity =>
            {
                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserClaims)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserLogins>(entity =>
            {
                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey })
                    .HasName("PK_AspNetUserLogins");

                entity.Property(e => e.LoginProvider).HasMaxLength(450);

                entity.Property(e => e.ProviderKey).HasMaxLength(450);

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserLogins)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserRoles>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.RoleId })
                    .HasName("PK_AspNetUserRoles");

                entity.Property(e => e.UserId).HasMaxLength(450);

                entity.Property(e => e.RoleId).HasMaxLength(450);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.RoleId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserTokens>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name })
                    .HasName("PK_AspNetUserTokens");

                entity.Property(e => e.UserId).HasMaxLength(450);

                entity.Property(e => e.LoginProvider).HasMaxLength(450);

                entity.Property(e => e.Name).HasMaxLength(450);
            });

            modelBuilder.Entity<AspNetUsers>(entity =>
            {
                entity.Property(e => e.Id).HasMaxLength(450);

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

                entity.Property(e => e.NormalizedUserName).HasMaxLength(256);

                entity.Property(e => e.UserName).HasMaxLength(256);
            });

            modelBuilder.Entity<Currency>(entity =>
            {
                entity.Property(e => e.CurrencyId).HasColumnName("CurrencyID");

                entity.Property(e => e.CurrencyName).HasMaxLength(50);

                entity.Property(e => e.CurrencyShortName).HasMaxLength(50);

                entity.Property(e => e.CurrencySymbol).HasMaxLength(50);
            });

            modelBuilder.Entity<EmpData>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.Status).HasMaxLength(50);
            });

            modelBuilder.Entity<EmployeeDetails>(entity =>
            {
                entity.HasKey(e => e.EmployeeId)
                    .HasName("PK_Employee_Details");

                entity.ToTable("Employee_Details");

                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");

                entity.Property(e => e.AccountNumber).HasMaxLength(100);

                entity.Property(e => e.AlternateMobile).HasMaxLength(50);

                entity.Property(e => e.BankBranchName).HasMaxLength(200);

                entity.Property(e => e.BankName).HasMaxLength(200);

                entity.Property(e => e.BirthDate).HasColumnType("date");

                entity.Property(e => e.BloodGroup).HasMaxLength(100);

                entity.Property(e => e.Branch).HasMaxLength(100);

                entity.Property(e => e.Citizenship).HasMaxLength(100);

                entity.Property(e => e.CitizenshipCountry).HasMaxLength(100);

                entity.Property(e => e.City).HasMaxLength(100);

                entity.Property(e => e.Country).HasMaxLength(100);

                entity.Property(e => e.Department).HasMaxLength(100);

                entity.Property(e => e.EmailId)
                    .HasColumnName("EmailID")
                    .HasMaxLength(100);

                entity.Property(e => e.EmployeeCode).HasMaxLength(250);

                entity.Property(e => e.FatherHusbandName).HasMaxLength(100);

                entity.Property(e => e.FirstName).HasMaxLength(100);

                entity.Property(e => e.Gender).HasMaxLength(10);

                entity.Property(e => e.Grade).HasMaxLength(100);

                entity.Property(e => e.GuardianMobile).HasMaxLength(50);

                entity.Property(e => e.JobProfile).HasMaxLength(250);

                entity.Property(e => e.JobTitle).HasMaxLength(250);

                entity.Property(e => e.JoiningDate).HasColumnType("date");

                entity.Property(e => e.LandlinePhone).HasMaxLength(50);

                entity.Property(e => e.LastDayOfJob).HasColumnType("date");

                entity.Property(e => e.LastName).HasMaxLength(100);

                entity.Property(e => e.ManagerTeamLeaderId).HasColumnName("ManagerTeamLeaderID");

                entity.Property(e => e.MaritalStatus).HasMaxLength(100);

                entity.Property(e => e.MobileNumber).HasMaxLength(50);

                entity.Property(e => e.MotherName).HasMaxLength(100);

                entity.Property(e => e.PersonalMobile).HasMaxLength(50);

                entity.Property(e => e.Pincode).HasMaxLength(50);

                entity.Property(e => e.Position).HasMaxLength(100);

                entity.Property(e => e.Qualification).HasMaxLength(250);

                entity.Property(e => e.State).HasMaxLength(100);

                entity.Property(e => e.UserRoleId)
                    .HasColumnName("UserRoleID")
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<FormBuilder>(entity =>
            {
                entity.Property(e => e.DefaultValue).HasMaxLength(50);

                entity.Property(e => e.DisplayName).HasMaxLength(50);

                entity.Property(e => e.FieldName).HasMaxLength(50);

                entity.Property(e => e.FieldType).HasMaxLength(50);

                entity.Property(e => e.FormName).HasMaxLength(50);

                entity.Property(e => e.OptionValue).HasMaxLength(500);

                entity.Property(e => e.Placeholder).HasMaxLength(100);

                entity.Property(e => e.Validator).HasMaxLength(100);
            });

            modelBuilder.Entity<Holiday>(entity =>
            {
                entity.Property(e => e.HolidayId).HasColumnName("HolidayID");

                entity.Property(e => e.HolidayDate).HasColumnType("date");

                entity.Property(e => e.HolidayDesc).HasMaxLength(150);
            });

            modelBuilder.Entity<ListAction>(entity =>
            {
                entity.Property(e => e.Action)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Route)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<LookupData>(entity =>
            {
                entity.Property(e => e.FieldName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Value).HasMaxLength(50);
            });

            modelBuilder.Entity<LookupList>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.DisplayName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FieldName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FieldType).HasMaxLength(50);
            });

            modelBuilder.Entity<Lookups>(entity =>
            {
                entity.Property(e => e.Category).HasMaxLength(50);

                entity.Property(e => e.Header).HasMaxLength(50);

                entity.Property(e => e.ImageUrl).HasMaxLength(250);

                entity.Property(e => e.LookupName).HasMaxLength(50);
            });
        }
    }
}