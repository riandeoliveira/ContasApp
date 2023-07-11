using ContasApp.Bases;
using ContasApp.Contexts;
using Microsoft.EntityFrameworkCore;

namespace ContasApp.Repositories;

public sealed class Repository<T> : IRepository<T> where T : ModelBase
{
    private readonly ApplicationContext _applicationContext;

    public Repository(ApplicationContext applicationContext)
    {
        this._applicationContext = applicationContext;
    }

    public async Task<IList<T>> FindAllAsync()
    {
        return await this._applicationContext.Set<T>().ToListAsync();
    }
}
