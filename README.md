ESPECIFICAÇÕES PARA O PROJETO FUNCIONAR

Para rodar este projeto são necessarias algumas etapas:
  

      No FrontEnd
    - Ter instalado o node e angular em seu computador.
    - Após conferir se há os prés requisitos acima, será necessário abrir o terminal no projeto e 
        baixar as dependencias com o comando -> npm install.
      após estas etapas, basta digitar no mesmo terminal --> ng serve <<-- para que a aplicação rode na porta 4200


Notará que enquanto servidor não estiver ativo, não conseguirá utilizar a aplicação. Então vá até o backEnd e realize as seguintes etapas;
      
      No BackEnd
     - É necessário ter o VisualStudio em seu computador.
     - Abrir a solução no VisualStudio e esperar as dependencias baixarem.
     
     Após conferir as etapas acima, você precisará adicionar criar o banco de dados 
      via Pacote NUGET dentro do visual studio
        - no terminal certifique-se de está referenciando o projeto correto, 
          que é responsavel por administrar a camada de dados >> TesteTecnico.Data <<
              comando: update-database
         - após a criação do banco de dados, notará que ele foi criado no >> SQLServer Object Explore<< nativo do proprio VisualStudio.
            Caso deseja o >>SQLServer management studio<<, basta modificar a connection string que está no arquivo appsettings, na camada de API.
      Com tudo configurado (banco de dados, frontend, aplicação .netcore, etc) basta "rodar" o projeto TesteTecnico.Api. 
 
 Tendo os dois projetos configurados, conseguirá vê a aplicação rodando corretamente

      
