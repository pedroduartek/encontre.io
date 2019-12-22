using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Project.API.Models;

namespace Project.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Acess-Control-Allow-Origin", "*");
        }

        public static int CalculateNumberOfPets(this ICollection<Pet> pets)
        {
            return pets.Count;
        }
    }
}