using System.Collections;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ContasApp.Controllers;

// TODO: Explorar atributos do controller

[ApiController]
public class UserController : ControllerBase
{
    [HttpGet]
    public Task<IList>? FindAll()
    {
        return null;
    }
}
