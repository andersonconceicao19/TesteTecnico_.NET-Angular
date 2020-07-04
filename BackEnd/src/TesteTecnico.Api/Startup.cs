using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TesteTecnico.Data.Context;
using TesteTecnico.Data.Repository;
using TesteTecnico.Domain.Interfaces;

namespace TesteTecnico.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("EnableCORS", builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().Build();
                });
            });
            services.AddDbContext<MeuDbContext>(
                options => options.UseSqlServer(Configuration.GetConnectionString("ConectaDB")
                ));

            /*Injetando dependencias*/
            services.AddScoped<MeuDbContext>();
            services.AddScoped<IUsuarioRepository, UsuarioRepository>();

            /*Configurando automapper*/
            services.AddAutoMapper(typeof(Startup));

            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();


            app.UseCors("EnableCORS");
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
