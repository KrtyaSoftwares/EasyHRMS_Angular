using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace EasyHRMS_DA.Models
{
    public partial class Ehrms_ng2Context : IdentityDbContext<ApplicationUser>
    //public partial class Ehrms_ng2Context : DbContext
    {
        //public virtual DbSet<AspNetRoleClaims> AspNetRoleClaims { get; set; }
        //public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }
        //public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
        //public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
        //public virtual DbSet<AspNetUserRoles> AspNetUserRoles { get; set; }
        //public virtual DbSet<AspNetUserTokens> AspNetUserTokens { get; set; }
        //public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }
        public virtual DbSet<CheckList> CheckList { get; set; }
        public virtual DbSet<EmailTemplate> EmailTemplate { get; set; }
        public virtual DbSet<EmployeeClaimAdvanceRequest> EmployeeClaimAdvanceRequest { get; set; }
        public virtual DbSet<EmployeeDetails> EmployeeDetails { get; set; }
        public virtual DbSet<EmployeeLeave> EmployeeLeave { get; set; }
        public virtual DbSet<EmployeeOverTime> EmployeeOverTime { get; set; }
        public virtual DbSet<EmployeePayrollCategory> EmployeePayrollCategory { get; set; }
        public virtual DbSet<EmployeePayrollMain> EmployeePayrollMain { get; set; }
        public virtual DbSet<EmployeePayrollSalaryDetail> EmployeePayrollSalaryDetail { get; set; }
        public virtual DbSet<FormField> FormField { get; set; }
        public virtual DbSet<FormTab> FormTab { get; set; }
        public virtual DbSet<Forms> Forms { get; set; }
        public virtual DbSet<LeaveStructure> LeaveStructure { get; set; }
        public virtual DbSet<LeaveStructureDepartmentMapping> LeaveStructureDepartmentMapping { get; set; }
        public virtual DbSet<LeaveStructureLeaveTypeMapping> LeaveStructureLeaveTypeMapping { get; set; }
        public virtual DbSet<ListAction> ListAction { get; set; }
        public virtual DbSet<ListSearch> ListSearch { get; set; }
        public virtual DbSet<LookupData> LookupData { get; set; }
        public virtual DbSet<LookupFormBuilder> LookupFormBuilder { get; set; }
        public virtual DbSet<LookupList> LookupList { get; set; }
        public virtual DbSet<Lookups> Lookups { get; set; }
        public virtual DbSet<MailAlert> MailAlert { get; set; }
        public virtual DbSet<SalaryStructure> SalaryStructure { get; set; }
        public virtual DbSet<SalaryStructureDepartmentMapping> SalaryStructureDepartmentMapping { get; set; }
        public virtual DbSet<SalaryStructurePayrollCategoryMapping> SalaryStructurePayrollCategoryMapping { get; set; }
        public virtual DbSet<TaskTemplate> TaskTemplate { get; set; }
        public virtual DbSet<WorkFlow> WorkFlow { get; set; }
        public virtual DbSet<WorkFlowAction> WorkFlowAction { get; set; }
        public virtual DbSet<WorkFlowTask> WorkFlowTask { get; set; }


        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
        //    optionsBuilder.UseSqlServer(@"Server=win-2012\sql2014; Initial Catalog = Ehrms-ng2; User ID = sa;Password = pass#123;");
        //}
        public Ehrms_ng2Context(DbContextOptions<Ehrms_ng2Context> options)
            : base(options) { }
        public Ehrms_ng2Context() { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<AspNetRoleClaims>(entity =>
            //{
            //    entity.Property(e => e.RoleId)
            //        .IsRequired()
            //        .HasMaxLength(450);

            //    entity.HasOne(d => d.Role)
            //        .WithMany(p => p.AspNetRoleClaims)
            //        .HasForeignKey(d => d.RoleId);
            //});

            //modelBuilder.Entity<AspNetRoles>(entity =>
            //{
            //    entity.Property(e => e.Id).HasMaxLength(450);

            //    entity.Property(e => e.Name).HasMaxLength(256);

            //    entity.Property(e => e.NormalizedName).HasMaxLength(256);
            //});

            //modelBuilder.Entity<AspNetUserClaims>(entity =>
            //{
            //    entity.Property(e => e.UserId)
            //        .IsRequired()
            //        .HasMaxLength(450);

            //    entity.HasOne(d => d.User)
            //        .WithMany(p => p.AspNetUserClaims)
            //        .HasForeignKey(d => d.UserId);
            //});

            //modelBuilder.Entity<AspNetUserLogins>(entity =>
            //{
            //    entity.HasKey(e => new { e.LoginProvider, e.ProviderKey })
            //        .HasName("PK_AspNetUserLogins");

            //    entity.Property(e => e.LoginProvider).HasMaxLength(450);

            //    entity.Property(e => e.ProviderKey).HasMaxLength(450);

            //    entity.Property(e => e.UserId)
            //        .IsRequired()
            //        .HasMaxLength(450);

            //    entity.HasOne(d => d.User)
            //        .WithMany(p => p.AspNetUserLogins)
            //        .HasForeignKey(d => d.UserId);
            //});

            //modelBuilder.Entity<AspNetUserRoles>(entity =>
            //{
            //    entity.HasKey(e => new { e.UserId, e.RoleId })
            //        .HasName("PK_AspNetUserRoles");

            //    entity.Property(e => e.UserId).HasMaxLength(450);

            //    entity.Property(e => e.RoleId).HasMaxLength(450);

            //    entity.HasOne(d => d.Role)
            //        .WithMany(p => p.AspNetUserRoles)
            //        .HasForeignKey(d => d.RoleId);

            //    entity.HasOne(d => d.User)
            //        .WithMany(p => p.AspNetUserRoles)
            //        .HasForeignKey(d => d.UserId);
            //});

            //modelBuilder.Entity<AspNetUserTokens>(entity =>
            //{
            //    entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name })
            //        .HasName("PK_AspNetUserTokens");

            //    entity.Property(e => e.UserId).HasMaxLength(450);

            //    entity.Property(e => e.LoginProvider).HasMaxLength(450);

            //    entity.Property(e => e.Name).HasMaxLength(450);
            //});

            //modelBuilder.Entity<AspNetUsers>(entity =>
            //{
            //    entity.Property(e => e.Id).HasMaxLength(450);

            //    entity.Property(e => e.Email).HasMaxLength(256);

            //    entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

            //    entity.Property(e => e.NormalizedUserName).HasMaxLength(256);

            //    entity.Property(e => e.Password).HasMaxLength(128);

            //    entity.Property(e => e.UserName).HasMaxLength(256);
            //});


            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<CheckList>(entity =>
            {
                entity.Property(e => e.ChecklistName)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<EmailTemplate>(entity =>
            {
                entity.Property(e => e.Message).IsRequired();

                entity.Property(e => e.TemplateName)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<EmployeeClaimAdvanceRequest>(entity =>
            {
                entity.ToTable("Employee_ClaimAdvanceRequest");

                entity.Property(e => e.Amount).HasColumnType("decimal");

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.PayDate).HasColumnType("date");

                entity.Property(e => e.Status).HasMaxLength(50);

                entity.Property(e => e.Title).HasMaxLength(200);

                entity.Property(e => e.Type).HasColumnType("char(1)");
            });

            modelBuilder.Entity<EmployeeDetails>(entity =>
            {
                entity.HasKey(e => e.EmployeeId)
                    .HasName("PK_Employee_Details");

                entity.ToTable("Employee_Details");

                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");

                entity.Property(e => e.F1).HasMaxLength(500);

                entity.Property(e => e.F10).HasMaxLength(500);

                entity.Property(e => e.F11).HasMaxLength(500);

                entity.Property(e => e.F12).HasMaxLength(500);

                entity.Property(e => e.F13).HasMaxLength(500);

                entity.Property(e => e.F14).HasMaxLength(500);

                entity.Property(e => e.F15).HasMaxLength(500);

                entity.Property(e => e.F16).HasMaxLength(500);

                entity.Property(e => e.F17).HasMaxLength(500);

                entity.Property(e => e.F18).HasMaxLength(500);

                entity.Property(e => e.F19).HasMaxLength(500);

                entity.Property(e => e.F2).HasMaxLength(500);

                entity.Property(e => e.F20).HasMaxLength(500);

                entity.Property(e => e.F21).HasMaxLength(500);

                entity.Property(e => e.F22).HasMaxLength(500);

                entity.Property(e => e.F23).HasMaxLength(500);

                entity.Property(e => e.F24).HasMaxLength(500);

                entity.Property(e => e.F25).HasMaxLength(500);

                entity.Property(e => e.F26).HasMaxLength(500);

                entity.Property(e => e.F27).HasMaxLength(500);

                entity.Property(e => e.F28).HasMaxLength(500);

                entity.Property(e => e.F29).HasMaxLength(500);

                entity.Property(e => e.F3).HasMaxLength(500);

                entity.Property(e => e.F30).HasMaxLength(500);

                entity.Property(e => e.F31).HasMaxLength(500);

                entity.Property(e => e.F32).HasMaxLength(500);

                entity.Property(e => e.F33).HasMaxLength(500);

                entity.Property(e => e.F34).HasMaxLength(500);

                entity.Property(e => e.F35).HasMaxLength(500);

                entity.Property(e => e.F36).HasMaxLength(500);

                entity.Property(e => e.F37).HasMaxLength(500);

                entity.Property(e => e.F38).HasMaxLength(500);

                entity.Property(e => e.F39).HasMaxLength(500);

                entity.Property(e => e.F4).HasMaxLength(500);

                entity.Property(e => e.F40).HasMaxLength(500);

                entity.Property(e => e.F5).HasMaxLength(500);

                entity.Property(e => e.F6).HasMaxLength(500);

                entity.Property(e => e.F7).HasMaxLength(500);

                entity.Property(e => e.F8).HasMaxLength(500);

                entity.Property(e => e.F9).HasMaxLength(500);
            });

            modelBuilder.Entity<EmployeeLeave>(entity =>
            {
                entity.ToTable("Employee_Leave");

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.FromDate).HasColumnType("date");

                entity.Property(e => e.Status).HasMaxLength(50);

                entity.Property(e => e.ToDate).HasColumnType("date");
            });

            modelBuilder.Entity<EmployeeOverTime>(entity =>
            {
                entity.ToTable("Employee_OverTime");

                entity.Property(e => e.BreakDuration).HasMaxLength(500);

                entity.Property(e => e.EarlierTime).HasMaxLength(50);

                entity.Property(e => e.FixCost)
                    .HasColumnName("Fix_Cost")
                    .HasColumnType("decimal");

                entity.Property(e => e.IsTdsenabled).HasColumnName("IsTDSEnabled");

                entity.Property(e => e.LateTime).HasMaxLength(50);

                entity.Property(e => e.OverTimeCost).HasColumnType("decimal");

                entity.Property(e => e.OverTimeDeviation)
                    .HasColumnName("OverTime_Deviation")
                    .HasColumnType("varchar(50)");

                entity.Property(e => e.PercentageOverTime).HasColumnType("decimal");

                entity.Property(e => e.PercentageUnderCut).HasColumnType("decimal");

                entity.Property(e => e.UnderDeviation)
                    .HasColumnName("Under_Deviation")
                    .HasColumnType("varchar(50)");

                entity.Property(e => e.UnderFixCost)
                    .HasColumnName("Under_Fix_Cost")
                    .HasColumnType("decimal");

                entity.Property(e => e.UnderTimeCost).HasColumnType("decimal");

                entity.Property(e => e.WorkingHours).HasColumnType("varchar(50)");
            });

            modelBuilder.Entity<EmployeePayrollCategory>(entity =>
            {
                entity.ToTable("Employee_PayrollCategory");

                entity.Property(e => e.Amount).HasColumnType("numeric");

                entity.Property(e => e.Description).HasMaxLength(50);

                entity.Property(e => e.Percentage).HasColumnType("numeric");

                entity.Property(e => e.Period).HasColumnName("period");
            });

            modelBuilder.Entity<EmployeePayrollMain>(entity =>
            {
                entity.ToTable("Employee_PayrollMain");

                entity.Property(e => e.Holidays).HasColumnType("decimal");

                entity.Property(e => e.TotalPayment).HasColumnType("money");

                entity.Property(e => e.WeekOff).HasColumnType("decimal");

                entity.Property(e => e.WorkingDays).HasColumnType("decimal");
            });

            modelBuilder.Entity<EmployeePayrollSalaryDetail>(entity =>
            {
                entity.ToTable("Employee_PayrollSalaryDetail");

                entity.Property(e => e.Amount).HasColumnType("decimal");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.GrossSalary).HasColumnType("decimal");
            });

            modelBuilder.Entity<FormField>(entity =>
            {
                entity.Property(e => e.DefaultValue).HasMaxLength(50);

                entity.Property(e => e.DisplayName).HasMaxLength(50);

                entity.Property(e => e.FieldName).HasMaxLength(50);

                entity.Property(e => e.FieldType).HasMaxLength(50);

                entity.Property(e => e.Placeholder).HasMaxLength(100);

                entity.Property(e => e.Validator).HasMaxLength(100);
            });

            modelBuilder.Entity<FormTab>(entity =>
            {
                entity.Property(e => e.Category).HasMaxLength(50);

                entity.Property(e => e.TabName).HasMaxLength(50);
            });

            modelBuilder.Entity<Forms>(entity =>
            {
                entity.Property(e => e.DisplayName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FormName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<LeaveStructure>(entity =>
            {
                entity.Property(e => e.LeaveStructureName).HasMaxLength(50);
            });

            modelBuilder.Entity<LeaveStructureDepartmentMapping>(entity =>
            {
                entity.ToTable("LeaveStructure_Department_Mapping");
            });

            modelBuilder.Entity<LeaveStructureLeaveTypeMapping>(entity =>
            {
                entity.ToTable("LeaveStructure_LeaveType_Mapping");
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

            modelBuilder.Entity<ListSearch>(entity =>
            {
                entity.Property(e => e.FieldName).HasMaxLength(50);

                entity.Property(e => e.FieldType).HasMaxLength(50);
            });

            modelBuilder.Entity<LookupData>(entity =>
            {
                entity.Property(e => e.FieldName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Value).HasMaxLength(50);
            });

            modelBuilder.Entity<LookupFormBuilder>(entity =>
            {
                entity.Property(e => e.DefaultValue).HasMaxLength(50);

                entity.Property(e => e.DisplayName).HasMaxLength(50);

                entity.Property(e => e.FieldName).HasMaxLength(50);

                entity.Property(e => e.FieldType).HasMaxLength(50);

                entity.Property(e => e.FormName).HasMaxLength(50);

                entity.Property(e => e.IsDisplayInDd).HasColumnName("IsDisplayInDD");

                entity.Property(e => e.OptionValue).HasMaxLength(500);

                entity.Property(e => e.Placeholder).HasMaxLength(100);

                entity.Property(e => e.Validator).HasMaxLength(100);
            });

            modelBuilder.Entity<LookupList>(entity =>
            {
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

            modelBuilder.Entity<MailAlert>(entity =>
            {
                entity.Property(e => e.Attachment).HasMaxLength(500);

                entity.Property(e => e.Bccaddress).HasColumnName("BCCAddress");

                entity.Property(e => e.Ccaddress).HasColumnName("CCAddress");

                entity.Property(e => e.EmailSubject).HasMaxLength(500);

                entity.Property(e => e.MailAlertName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.ReplyToAddress).HasMaxLength(100);
            });

            modelBuilder.Entity<SalaryStructure>(entity =>
            {
                entity.Property(e => e.Name).HasMaxLength(50);
            });

            modelBuilder.Entity<SalaryStructureDepartmentMapping>(entity =>
            {
                entity.ToTable("SalaryStructure_Department_Mapping");
            });

            modelBuilder.Entity<SalaryStructurePayrollCategoryMapping>(entity =>
            {
                entity.ToTable("SalaryStructure_PayrollCategory_Mapping");
            });

            modelBuilder.Entity<TaskTemplate>(entity =>
            {
                entity.Property(e => e.Priority).HasMaxLength(10);

                entity.Property(e => e.TaskName).HasMaxLength(100);

                entity.Property(e => e.TemplateName)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<WorkFlow>(entity =>
            {
                entity.Property(e => e.Description).HasMaxLength(500);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.TriggerName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<WorkFlowAction>(entity =>
            {
                entity.Property(e => e.Action)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<WorkFlowTask>(entity =>
            {
                entity.Property(e => e.Attachment).HasMaxLength(500);

                entity.Property(e => e.Bccaddress).HasColumnName("BCCAddress");

                entity.Property(e => e.Ccaddress).HasColumnName("CCAddress");

                entity.Property(e => e.DueDate).HasMaxLength(500);

                entity.Property(e => e.EmailSubject).HasMaxLength(500);

                entity.Property(e => e.ReplyToAddress).HasMaxLength(100);

                entity.Property(e => e.TaskName)
                    .IsRequired()
                    .HasMaxLength(100);
            });
        }
    }
}