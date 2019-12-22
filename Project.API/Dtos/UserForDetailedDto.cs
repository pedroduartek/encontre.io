using System;
using System.Collections.Generic;
using Project.API.Models;

namespace Project.API.Dtos
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Email { get; set; }
        public int NumberOfPets { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Gender { get; set; }
        public string PhotoUrl { get; set; }
        public ICollection<UserPhotoForDetailedDto> Photos { get; set; }
        public ICollection<PetForListDto> RegisteredPets { get; set; }
    }
}