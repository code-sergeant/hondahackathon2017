using net5hondahack.Models.ViewModels;
using System.Web.Mvc;

namespace net5hondahack.Web.Controllers
{
    public class BaseController : Controller
    {
        protected T GetViewModel<T>() where T : BaseViewModel, new()
        {
            T model = new T();

            //customize base view model here

            return model;
        }
    }
}
