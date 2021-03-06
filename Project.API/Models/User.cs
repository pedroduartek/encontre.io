using System;
using System.Collections.Generic;

namespace Project.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Email { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Gender { get; set; }
        public ICollection<UserPhoto> Photos { get; set; }
        public ICollection<Pet> RegisteredPets { get; set; }

    }
}