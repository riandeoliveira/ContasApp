using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ContasApp.Bases;

namespace ContasApp.Core.Models;

[Table("users")]
public sealed class User : ModelBase, IEntityTypeConfiguration<User>
{
    [Column("username")]
    [DataType(DataType.Text)]
    [MaxLength(256)]
    [MinLength(2)]
    [Required]
    public required string Username { get; set; }

    [Column("email")]
    [DataType(DataType.EmailAddress)]
    [EmailAddress]
    [MaxLength(256)]
    [MinLength(4)]
    [Required]
    public required string Email { get; set; }

    [Column("password")]
    [DataType(DataType.Password)]
    [MaxLength(128)]
    [MinLength(8)]
    [Required]
    public required string Password { get; set; }

    [Column("name")]
    [DataType(DataType.Text)]
    [MaxLength(256)]
    [MinLength(2)]
    [Required]
    public required string Name { get; set; }

    public void Configure(EntityTypeBuilder<User> builder)
    {
        EntityTypeBuilder<User> table = builder.ToTable("users");

        table.HasKey(model => model.Id);
        table.Property(model => model.Id).HasColumnName("id").HasColumnOrder(1).IsRequired();

        table.Property(model => model.Username).HasColumnName("username").HasColumnOrder(2).HasMaxLength(256).IsRequired();
        table.Property(model => model.Email).HasColumnName("email").HasColumnOrder(3).HasMaxLength(256).IsRequired();
        table.Property(model => model.Password).HasColumnName("password").HasColumnOrder(4).HasMaxLength(128).IsRequired();
        table.Property(model => model.Name).HasColumnName("name").HasColumnOrder(5).HasMaxLength(256).IsRequired();

        table.Property(model => model.IsActive).HasColumnName("is_active").HasColumnOrder(6).IsRequired();
        table.Property(model => model.CreatedAt).HasColumnName("created_at").HasColumnOrder(7).IsRequired();
        table.Property(model => model.UpdatedAt).HasColumnName("updated_at").HasColumnOrder(8);
        table.Property(model => model.DeletedAt).HasColumnName("deleted_at").HasColumnOrder(9);
    }
}
