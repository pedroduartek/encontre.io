using System;
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
        public string Street { get; set; }
        public string Color { get; set; }
        public string Size { get; set; }
        public string Type { get; set; }
        public string Gender { get; set; }
        public string Description { get; set; }
        public bool Found { get; set; }
        public bool Active { get; set; }
        public DateTime DateAdded { get; set; }
        public ICollection<PetPhoto> Photos { get; set; }
    }
}