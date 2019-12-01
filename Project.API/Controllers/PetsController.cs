using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Project.API.Data;
using Project.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Project.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PetsController : ControllerBase
    {
        private readonly IRepository _repo;
        private readonly IMapper _mapper;
        public PetsController(IRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetPets()
        {
            var pets = await _repo.GetPets();
            var petsToReturn = _mapper.Map<IEnumerable<PetForListDto>>(pets);

            return Ok(petsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPet(int id)
        {
            var pet = await _repo.GetPet(id);
            var petToReturn = _mapper.Map<PetForDetailedDto>(pet);

            return Ok(petToReturn);
        }
    }
}