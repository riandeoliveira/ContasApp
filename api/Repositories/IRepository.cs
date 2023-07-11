namespace ContasApp.Repositories;

public interface IRepository<T>
{
    Task<IList<T>> FindAllAsync();
}
