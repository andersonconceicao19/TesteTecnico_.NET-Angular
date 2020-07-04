using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TesteTecnico.Api.DTOs;
using TesteTecnico.Domain.Interfaces;
using TesteTecnico.Domain.Models;

namespace TesteTecnico.Api.Controllers
{
    [Route("api/[controller]")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepository _usuario;
        private readonly IMapper _mapper;

        public UsuarioController(IUsuarioRepository usuario, IMapper mapper)
        {
            _usuario = usuario;
            _mapper = mapper;
        }

        [HttpGet("")]
        public async Task<IActionResult> ObterTodos()
        {
            return Ok(_mapper.Map<IEnumerable<UsuarioDTO>>(await _usuario.ObterTodos()));
        }
        [HttpGet("{id:int}")]
        public async Task<IActionResult> ObterTodos(int id)
        {
            return Ok(await _usuario.ObterPorId(id));
        }


        [HttpPost("Adicionar")]
        public async Task<IActionResult> CriarUsuario([FromBody]UsuarioDTO usuarioDTO)
        {
            if (!ModelState.IsValid) return BadRequest();

            var usuario = _mapper.Map<Usuario>(usuarioDTO);
            await _usuario.Adicionar(usuario);

            return Ok(usuario);           
        }

        [HttpDelete("Excluir/{id}")]
        public async Task<IActionResult> RemoverUsuario([FromRoute]int id)
        {
            var usuario =await _usuario.ObterPorId(id);

            if (usuario == null) return NotFound("Não encontrado");

            await _usuario.Remover(id);

           
            return Ok("Deletado");
        }

        [HttpPut("Atualizar")]
        public async Task<IActionResult> AtualizarUsuario([FromBody]UsuarioDTO usuarioDTO)
        {
            
            if (!ModelState.IsValid) return BadRequest();
            var usuario = _mapper.Map<Usuario>(usuarioDTO);
            await _usuario.Atualizar(usuario);
            return Ok();
        }
    }
}
