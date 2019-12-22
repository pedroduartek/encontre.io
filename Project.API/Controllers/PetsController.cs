using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Project.API.Data;
using Project.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System;
using System.Linq;
using Project.API.Models;

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

        [HttpGet("petslist/{id}")]
        public async Task<IActionResult> GetPets(int id)
        {
            var pets = await _repo.GetPets(id);
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

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePet(int id, PetForUpdateDto petForUpdadeDto)
        {
            var user = await _repo.GetUser(int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value));
            var userPets = user.RegisteredPets;
            var petFromRepo = await _repo.GetPet(id);


            if (!userPets.Contains(petFromRepo))
                return Unauthorized();


            _mapper.Map(petForUpdadeDto, petFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating pet {id} failed on save");
        }

        [HttpPost]
        public async Task<IActionResult> Register(PetForRegisterDto petForRegisterDto)
        {
            if (await _repo.PetExists(petForRegisterDto))
                return BadRequest("Pet already registered");

            var petToCreate = new Pet();
            _mapper.Map(petForRegisterDto, petToCreate);

            var createdPet = await _repo.PetRegister(petToCreate);

            return StatusCode(201);
        }

    }
}