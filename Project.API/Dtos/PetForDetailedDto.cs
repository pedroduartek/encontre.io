using System;
using System.Collections.Generic;
using Project.API.Models;

namespace Project.API.Dtos
{
    public class PetForDetailedDto
    {
        public int Id { get; set; }
        public UserForListDto User { get; set; }
        public int UserId { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Color { get; set; }
        public string Size { get; set; }
        public string Type { get; set; }
        public string Street { get; set; }
        public string PhotoUrl { get; set; }
        public DateTime DateAdded { get; set; }
        public string Description { get; set; }
        public ICollection<PetPhotoForDetailedDto> Photos { get; set; }
    }
}
