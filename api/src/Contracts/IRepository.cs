namespace ContasApp.Contracts;

public interface IRepository<T>
{
    Task<IList<T>> FindAllAsync();
}
