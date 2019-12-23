using System.ComponentModel.DataAnnotations;

namespace Project.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 8 caracters")]
        public string Password { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public string Email { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
}