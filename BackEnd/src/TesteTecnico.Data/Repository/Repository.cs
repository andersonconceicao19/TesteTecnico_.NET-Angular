using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using TesteTecnico.Data.Context;
using TesteTecnico.Domain.Interfaces;
using TesteTecnico.Domain.Models;

namespace TesteTecnico.Data.Repository
{
    public abstract class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        private readonly MeuDbContext _context;
        private readonly DbSet<TEntity> _db;

        protected Repository(MeuDbContext context )
        {
            _context = context;
            _db = _context.Set<TEntity>();
        }

        public async Task<IEnumerable<TEntity>> ObterTodos()
        {
            return await _db.ToListAsync();
        }
        public Task Adicionar(TEntity usuario)
        {
            throw new NotImplementedException();
        }

        public Task Atualizar(TEntity usuario)
        {
            throw new NotImplementedException();
        }

        public Task Remover(int id)
        {
            throw new NotImplementedException();
        }
        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
