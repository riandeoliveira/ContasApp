using System.Collections.Generic;
using System.Threading.Tasks;

namespace ContasApp.Repositories;

public interface IRepository<T>
{
    Task<IList<T>> FindAllAsync();
}
