using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TesteTecnico.Domain.Models;

namespace TesteTecnico.Data.Mapping
{
    public class UsuarioMapping : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasKey(pk => pk.Id);                                
            builder.Property(u => u.Nome)
                .IsRequired()
                .HasColumnType("varchar(50)");
            builder.Property(u=> u.Email)
                .IsRequired()
                .HasColumnType("varchar(50)");
        }
    }
}
