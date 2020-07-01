using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TesteTecnico.Api.DTOs
{
    public class UsuarioDTO
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public string Sobrenome { get; set; }

        [EmailAddress(ErrorMessage = "É necessário colocar o email corretamente!!")]
        [Required]
        public string Email { get; set; }

        [Required]
        public DateTime DataNascimento { get; set; }

        [DisplayName("Escolaridade")]
        public int TipoEscolaridade { get; set; }
    }
}
