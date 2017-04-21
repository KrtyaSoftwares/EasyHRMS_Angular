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
        public virtual DbSet<LookupData> LookupData { get; set; }
        public virtual DbSet<LookupMaster> LookupMaster { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer(@"Server=SAMIR-PC; Initial Catalog = Ehrms; User ID = sa;Password = pass#123;");
        }

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

                entity.Property(e => e.FieldName).HasMaxLength(50);

                entity.Property(e => e.FieldType).HasMaxLength(50);

                entity.Property(e => e.FormName).HasMaxLength(50);

                entity.Property(e => e.OptionValue).HasMaxLength(500);
            });

            modelBuilder.Entity<Holiday>(entity =>
            {
                entity.Property(e => e.HolidayId).HasColumnName("HolidayID");

                entity.Property(e => e.HolidayDate).HasColumnType("date");

                entity.Property(e => e.HolidayDesc).HasMaxLength(150);
            });

            modelBuilder.Entity<LookupData>(entity =>
            {
                entity.Property(e => e.FieldName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Value).HasMaxLength(50);
            });

            modelBuilder.Entity<LookupMaster>(entity =>
            {
                entity.Property(e => e.LookupName).HasMaxLength(50);
            });
        }
    }
}