using Microsoft.Practices.Unity;
using net5hondahack.Data;
using net5hondahack.Data.Providers;
using net5hondahack.Services;
using net5hondahack.Services.Cryptography;
using net5hondahack.Web.Core.Services;
using System.Configuration;
using System.Security.Principal;
using System.Threading;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Unity.WebApi;

namespace net5hondahack.Web
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            

            //this should be per request
            container.RegisterType<IAuthenticationService, OwinAuthenticationService>();

            container.RegisterType<ICryptographyService, Base64StringCryptographyService>(new ContainerControlledLifetimeManager());


            container.RegisterType<IDataProvider, SqlDataProvider>(
                new InjectionConstructor(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString));

            container.RegisterType<IPrincipal>(new TransientLifetimeManager(),
                     new InjectionFactory(con => HttpContext.Current.User));


            container.RegisterType<IUserService, UserService>(new ContainerControlledLifetimeManager());
     
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);

            DependencyResolver.SetResolver(new Unity.Mvc5.UnityDependencyResolver(container));


        }
    }
}
