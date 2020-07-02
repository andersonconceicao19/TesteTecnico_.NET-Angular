using Microsoft.VisualBasic;
using System;

namespace TesteTecnico.Domain.Models
{
    public class Usuario
    {
       
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Email { get; set; }
        public DateTime DataNascimento { get; set; } 
        public TipoEscolaridade TipoEscolaridade { get; set; }

    }
}
