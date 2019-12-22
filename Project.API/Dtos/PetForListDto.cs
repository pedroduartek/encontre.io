
namespace Project.API.Dtos
{
    public class PetForListDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Color { get; set; }
        public string Size { get; set; }
        public string Type { get; set; }
        public string PhotoUrl { get; set; }
    }
}