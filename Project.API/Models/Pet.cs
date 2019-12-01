using System.Collections.Generic;

namespace Project.API.Models
{
    public class Pet
    {
        public int Id { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Color { get; set; }
        public string Size { get; set; }
        public string Type { get; set; }
        public ICollection<PetPhoto> Photos { get; set; }
    }
}