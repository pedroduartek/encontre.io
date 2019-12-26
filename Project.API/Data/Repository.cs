using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Project.API.Dtos;
using Project.API.Models;

namespace Project.API.Data
{
    public class Repository : IRepository
    {
        private readonly DataContext _context;
        public Repository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Pet> GetPet(int id)
        {
            var pet = await _context.Pets
                .Where(p => p.Active)
                .Include(p => p.Photos)
                .Include(p => p.User)
                .FirstOrDefaultAsync(p => p.Id == id);
            return pet;
        }

        public async Task<IEnumerable<Pet>> GetFoundPets(int id)
        {
            var pets = await _context.Pets
                .Include(p => p.Photos)
                .Where(p => p.UserId != id)
                .Where(p => p.Active)
                .Where(p => p.Found).ToListAsync();
            return pets;
        }
        public async Task<IEnumerable<Pet>> GetLostPets(int id)
        {
            var pets = await _context.Pets
                .Include(p => p.Photos)
                .Where(p => p.UserId != id)
                .Where(p => p.Active)
                .Where(p => p.Found == false).ToListAsync();
            return pets;
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users
                .Include(u => u.Photos)
                .Include(u => u.RegisteredPets)
                .ThenInclude(p => p.Photos)
                .FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.Include(u => u.RegisteredPets).ToListAsync();
            return users;
        }

        public async Task<IEnumerable<Pet>> GetUsersPets(int id)
        {
            var pets = await _context.Pets
                .Where(p => p.UserId == id)
                .Where(p => p.Active)
                .Include(p => p.Photos).ToListAsync();
            return pets;
        }


        public bool HasChanges()
        {
            return _context.ChangeTracker.HasChanges();
        }
        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> PetExists(PetForAddDto petForAddDto)
        {
            var pets = await _context.Pets.ToListAsync();

            foreach (var pet in pets) //ugly as hell
            {
                if (
                        pet.City == petForAddDto.City &
                        pet.Color == petForAddDto.Color &
                        pet.Country == petForAddDto.Country &
                        pet.Size == petForAddDto.Size &
                        pet.Street == petForAddDto.Street
                    )
                    return true;
            }

            return false;
        }

        public async Task<Pet> AddPet(Pet pet)
        {
            await _context.Pets.AddAsync(pet);
            await _context.SaveChangesAsync();

            return pet;
        }
    }
}