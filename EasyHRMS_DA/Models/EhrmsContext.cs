using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EasyHRMS_DA.Models
{
    public partial class EhrmsContext : DbContext
    {
        public virtual DbSet<Currency> Currency { get; set; }
        public virtual DbSet<EmpData> EmpData { get; set; }
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

                entity.Property(e => e.LookupName).HasMaxLength(50);
            });
        }
    }
}