using System.Collections.Generic;
using System.Threading.Tasks;
using Project.API.Dtos;
using Project.API.Models;

namespace Project.API.Data
{
    public interface IRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
        Task<IEnumerable<Pet>> GetFoundPets(int id);
        Task<IEnumerable<Pet>> GetLostPets(int id);
        Task<Pet> GetPet(int id);
        Task<IEnumerable<Pet>> GetUsersPets(int id);
        Task<bool> SaveAll();
        Task<Pet> PetRegister(Pet pet);
        Task<bool> PetExists(PetForRegisterDto petForRegisterDto);


    }
}