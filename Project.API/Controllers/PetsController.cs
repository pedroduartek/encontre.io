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

        [HttpGet("found")]
        public async Task<IActionResult> GetFoundPets()
        {
            var pets = await _repo.GetFoundPets(int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value));
            var petsToReturn = _mapper.Map<IEnumerable<PetForListDto>>(pets);

            return Ok(petsToReturn);
        }
        [HttpGet("deactivated")]
        public async Task<IActionResult> GetDeactivedPets()
        {
            var pets = await _repo.GetDeactivatedPets(int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value));
            var petsToReturn = _mapper.Map<IEnumerable<PetForListDto>>(pets);

            return Ok(petsToReturn);
        }
        [HttpGet("lost/")]
        public async Task<IActionResult> GetLostPets()
        {
            var pets = await _repo.GetLostPets(int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value));
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

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdatePet(int id, PetForUpdateDto petForUpdadeDto)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var petFromRepo = await _repo.GetPet(id);

            if (petFromRepo.UserId != userId)
                return Unauthorized();

            _mapper.Map(petForUpdadeDto, petFromRepo);

            if (!_repo.HasChanges())
                throw new Exception($"No changes were made");


            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating pet {id} failed on save");
        }

        [HttpPost("add")]
        public async Task<IActionResult> Add(PetForAddDto petForAddDto)
        {
            if (await _repo.PetExists(petForAddDto))
                return BadRequest("Pet already registered");

            petForAddDto.UserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var petToCreate = _mapper.Map<Pet>(petForAddDto);

            var createdPet = await _repo.AddPet(petToCreate);

            return StatusCode(201);
        }

        [HttpPut("activeToggle/{id}")]
        public async Task<IActionResult> ActiveToggle(int id)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var petFromRepo = await _repo.GetPet(id);

            if (petFromRepo.UserId != userId)
                return Unauthorized();

            _repo.ActiveToggle(petFromRepo);


            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Deactivating pet {id} failed on save");
        }


    }
}