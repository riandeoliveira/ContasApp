using ContasApp.Contracts;
using ContasApp.Core.Contexts;
using ContasApp.Core.Models;
using ContasApp.Repositories;
using ContasApp.Services;
using Microsoft.EntityFrameworkCore;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

string? connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationContext>(options => options.UseSqlite(connectionString));


builder.Services.AddHostedService<UserService>();
builder.Services.AddScoped<IRepository<User>, Repository<User>>();


WebApplication app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
