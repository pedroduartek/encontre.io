using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Project.API.Models;

namespace Project.API.Dtos
{
    public class PetForAddDto
    {
        public User User { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public string Color { get; set; }
        [Required]
        public string Size { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public bool Found { get; set; }
        [Required]
        public bool Active { get; set; }
        [Required]
        public string Gender { get; set; }

        public DateTime DateAdded { get; set; }
        public ICollection<PetPhoto> Photos { get; set; }

        public PetForAddDto()
        {
            Active = true;
        }
    }
}