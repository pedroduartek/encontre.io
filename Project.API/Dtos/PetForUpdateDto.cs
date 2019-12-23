using System.Collections.Generic;
using Project.API.Models;

namespace Project.API.Dtos
{
    public class PetForUpdateDto
    {
        public string Country { get; set; }
        public string City { get; set; }
        public string Color { get; set; }
        public string Size { get; set; }
        public string Type { get; set; }
        public string Street { get; set; }
        public string Gender { get; set; }
        public bool Found { get; set; }
        public bool Active { get; set; }
        public string Description { get; set; }
    }
}
