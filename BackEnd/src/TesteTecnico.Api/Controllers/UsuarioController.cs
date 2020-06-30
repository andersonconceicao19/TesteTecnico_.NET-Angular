using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TesteTecnico.Domain.Interfaces;

namespace TesteTecnico.Api.Controllers
{
    [Route("[controller]")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepository _usuario;

        public UsuarioController(IUsuarioRepository usuario)
        {
            _usuario = usuario;
        }

        public async Task<IActionResult> Index()
        {
            return Ok(await _usuario.ObterTodos());
        }
    }
}
