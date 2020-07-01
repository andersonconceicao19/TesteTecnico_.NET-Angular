using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TesteTecnico.Domain.Models;

namespace TesteTecnico.Domain.Interfaces
{
    public interface IRepository<TEntity>: IDisposable where TEntity: class
    {
        Task<IEnumerable<TEntity>> ObterTodos();
        Task<TEntity> ObterPorId(int id);
        Task Adicionar(TEntity entity);
        Task Atualizar(TEntity entity);
        Task Remover(int id);


    }
}
