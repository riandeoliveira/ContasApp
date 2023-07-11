using ContasApp.Models;
using Microsoft.EntityFrameworkCore;

namespace ContasApp.Contexts;

public sealed class ApplicationContext : DbContext
{
    public required DbSet<User> Users { get; set; }

    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {
    }

    protected override sealed void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationContext).Assembly);

        base.OnModelCreating(modelBuilder);
    }
}
