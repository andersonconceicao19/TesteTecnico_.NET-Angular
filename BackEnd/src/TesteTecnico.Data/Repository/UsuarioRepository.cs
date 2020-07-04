using TesteTecnico.Data.Context;
using TesteTecnico.Domain.Interfaces;
using TesteTecnico.Domain.Models;

namespace TesteTecnico.Data.Repository
{
    public class UsuarioRepository: Repository<Usuario>, IUsuarioRepository
    {
        public UsuarioRepository(MeuDbContext context) : base(context) { }
    }
}
