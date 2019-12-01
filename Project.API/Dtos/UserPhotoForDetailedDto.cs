using System;

namespace Project.API.Dtos
{
    public class UserPhotoForDetailedDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
    }
}