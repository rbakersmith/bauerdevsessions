using LINQjsDemo.Web.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace LINQjsDemo.Web.Controllers
{
    public class CitiesController : ApiController
    {
        // GET api/cities
        public IEnumerable<CityModel> Get()
        {
            var result = new List<CityModel>
            {
                new CityModel { Name = "Sydney", State="NSW", Population = 4667283 },
                new CityModel { Name = "Melbourne", State="VIC", Population = 4246345 },
                new CityModel { Name = "Brisbane", State="QLD", Population = 2189878 },
                new CityModel { Name = "Perth", State = "WA", Population = 1897548 },
                new CityModel { Name = "Adelaide", State = "SA", Population = 1277174 },
                new CityModel { Name = "Gold Coast", State = "QLD", Population = 590889 },
                new CityModel { Name = "Newcastle", State = "NSW", Population = 418958 },
                new CityModel { Name = "Canberra", State = "ACT", Population = 411609 },
                new CityModel { Name = "Sunshine Coast", State = "QLD", Population = 285169 },
                new CityModel { Name = "Wollongong", State = "NSW", Population = 282099 }
            };

            return result;
        }
    }
}
