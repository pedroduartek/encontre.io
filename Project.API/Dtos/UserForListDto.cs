using System;
using System.Collections.Generic;
using Project.API.Models;

namespace Project.API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string PhotoUrl { get; set; }
    }
}