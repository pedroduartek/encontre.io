using System;

namespace Project.API.Dtos
{
    public class PetPhotoForDetailedDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
    }
}