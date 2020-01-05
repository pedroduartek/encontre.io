using System;

namespace Project.API.Models
{
    public class PetPhoto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
        public Pet Pet { get; set; }
        public int PetId { get; set; }
        public string PublicId { get; set; }

    }
}