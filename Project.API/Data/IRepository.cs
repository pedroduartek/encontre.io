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
        Task<IEnumerable<Pet>> GetDeactivatedPets(int id);
        Task<Pet> GetPet(int id);
        Task<IEnumerable<Pet>> GetUsersPets(int id);
        Task<IEnumerable<Pet>> GetDeactivatedUsersPets(int id);
        Task<bool> SaveAll();
        bool HasChanges();
        Task<Pet> AddPet(Pet pet);
        Task<bool> PetExists(PetForAddDto petForAddDto);
        void ActiveToggle(Pet pet);
        Task<PetPhoto> GetPetPhoto(int id);
        Task<UserPhoto> GetUserPhoto(int id);
        Task<UserPhoto> GetMainPhotoForUser(int userId);
        Task<PetPhoto> GetMainPhotoForPet(int petId);


    }
}