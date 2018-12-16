using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
namespace ResultsWebProject.Controllers
{
    [Route("api/[controller]")]
    public class MainPageController : Controller
    {

        [HttpGet("[action]")]
        public string HelloThere()
        {
            return "hello there";
        }


    }
}
