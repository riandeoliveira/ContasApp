using System.Collections.Generic;
using System.Threading.Tasks;
using ContasApp.Contracts;
using ContasApp.Core.Models;

namespace ContasApp.Services;

public class UserService : BackgroundService
{
    private readonly IRepository<User> _userRepository;

    public async Task<IList<User>> FindAll()
    {
        return await _userRepository.FindAllAsync();
    }

    protected override Task ExecuteAsync(CancellationToken stoppingToken)
    {
        throw new NotImplementedException();
    }
}
