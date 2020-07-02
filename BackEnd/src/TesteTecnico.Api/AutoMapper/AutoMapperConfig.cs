using AutoMapper;
using TesteTecnico.Api.DTOs;
using TesteTecnico.Domain.Models;

namespace TesteTecnico.Api.AutoMapper
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<UsuarioDTO, Usuario>().ReverseMap();
        }
    }
}
