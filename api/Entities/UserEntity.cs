using ContasApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ContasApp.Entities;

public abstract class UserEntity : IEntityTypeConfiguration<User>
{
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
