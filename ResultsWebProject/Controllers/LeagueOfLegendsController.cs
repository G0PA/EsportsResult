using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
namespace ResultsWebProject.Controllers
{
    [Route("api/[controller]")]
    public class LeagueOfLegendsController : Controller
    {

        [HttpGet("[action]")]
        public string HelloLeague()
        {
            return "hello from League Of Legends";
        }


    }
}