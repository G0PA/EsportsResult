using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace ResultsWebProject.Controllers
{
    [Route("api/[controller]")]
    public class LeagueOfLegendsController : Controller
    {

        [HttpGet("[action]")]
        public IEnumerable<ResultEvent> HelloLeague()
        {
            //HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create("http://esportlivescore.com/ty_finished_d_2018-12-16.html?_url=%2Fl_en_ty_finished_d_2018-12-16.html");
            //request.Method = "GET";
            //String test = String.Empty;
            //using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            //{
            //    Stream dataStream = response.GetResponseStream();
            //    StreamReader reader = new StreamReader(dataStream);
            //    test = reader.ReadToEnd();
            //    reader.Close();
            //    dataStream.Close();
            //}
            //HtmlDocument doc = new HtmlDocument();
            //doc.LoadHtml(test);
            //var asd = doc.DocumentNode.SelectNodes("//div[contains(@id,'event_id')]");

            var table = GetTables(@"Server=(LocalDb)\MSSQLLocalDB; Initial Catalog=Results; Integrated Security=true;");
            JObject json = new JObject();
            
                var a = table.Rows[0]["GameName"].ToString();
                var b = table.Rows[0]["HomeTeam"].ToString();
                var c = table.Rows[0]["AwayTeam"].ToString();
            List<ResultEvent> events = new List<ResultEvent>()
            {
                new ResultEvent(a,b,c)
            };
            return events;
        }
        public static DataTable GetTables(string connectionString)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                SqlDataAdapter sqlData = new SqlDataAdapter("SELECT * FROM dbo.EsportResults", connection);
                DataTable dtbl = new DataTable();
                sqlData.Fill(dtbl);
                return dtbl;
            }
        }


    }
    public class ResultEvent
    {
        public string GameName { get; set; }
        public string HomeTeam { get; set; }
        public string AwayTeam { get; set; }
        public ResultEvent(string gameName, string homeTeam, string awayTeam)
        {
            GameName = gameName;
            HomeTeam = homeTeam;
            AwayTeam = awayTeam;
        }
    }
}