using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EasyHRMS_DA.Models
{
    public partial class Ehrms_ng2Context : DbContext
    {
        public virtual DbSet<CheckList> CheckList { get; set; }
        public virtual DbSet<EmailTemplate> EmailTemplate { get; set; }
        public virtual DbSet<EmployeeDetails> EmployeeDetails { get; set; }
        public virtual DbSet<EmployeeLeave> EmployeeLeave { get; set; }
        public virtual DbSet<FormField> FormField { get; set; }
        public virtual DbSet<FormTab> FormTab { get; set; }
        public virtual DbSet<Forms> Forms { get; set; }
        public virtual DbSet<ListAction> ListAction { get; set; }
        public virtual DbSet<ListSearch> ListSearch { get; set; }
        public virtual DbSet<LookupData> LookupData { get; set; }
        public virtual DbSet<LookupFormBuilder> LookupFormBuilder { get; set; }
        public virtual DbSet<LookupList> LookupList { get; set; }
        public virtual DbSet<Lookups> Lookups { get; set; }
        public virtual DbSet<TaskTemplate> TaskTemplate { get; set; }
        public virtual DbSet<WorkFlow> WorkFlow { get; set; }
        public virtual DbSet<WorkFlowAction> WorkFlowAction { get; set; }


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
            modelBuilder.Entity<CheckList>(entity =>
            {
                entity.Property(e => e.ChecklistName)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<EmailTemplate>(entity =>
            {
                entity.Property(e => e.FormName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Message).IsRequired();

                entity.Property(e => e.TemplateName)
                    .IsRequired()
                    .HasMaxLength(100);
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

            modelBuilder.Entity<TaskTemplate>(entity =>
            {
                entity.Property(e => e.FormName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Priority).HasColumnType("nchar(10)");

                entity.Property(e => e.TemplateName)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<WorkFlow>(entity =>
            {
                entity.Property(e => e.Description).HasMaxLength(500);

                entity.Property(e => e.FormName)
                    .IsRequired()
                    .HasMaxLength(50);

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

                entity.Property(e => e.Attachment).HasMaxLength(500);

                entity.Property(e => e.Bccaddress).HasColumnName("BCCAddress");

                entity.Property(e => e.Ccaddress).HasColumnName("CCAddress");

                entity.Property(e => e.EmailSubject).HasMaxLength(500);

                entity.Property(e => e.ReplyToAddress).HasMaxLength(100);
            });
        }
    }
}