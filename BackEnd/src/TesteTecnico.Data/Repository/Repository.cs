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
            return await _db.AsNoTracking().ToListAsync();
        }
        public async Task<TEntity> ObterPorId(int id)
        {
            return await _db.FindAsync(id);
        }
        public async Task Adicionar(TEntity entity)
        {
            _db.Add(entity);
            await Savechanges();

        }

        public async Task Atualizar(TEntity entity)
        {
            _db.Update(entity);
            await Savechanges();
        }

        public async Task Remover(int id)
        {
            _db.Remove(await ObterPorId(id));
            await Savechanges();
        }

        public async Task<int> Savechanges()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
