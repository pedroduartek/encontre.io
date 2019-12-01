using System.Collections.Generic;
using System.Linq;
using Project.API.Models;
using Newtonsoft.Json;
using Project.API.Data;

namespace DatingApp.API.Data
{
    public class Seed
    {
        public static void SeedUsers(DataContext context){
            if (!context.Users.Any()){
                var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);
                
                foreach (var user in users)
                {
                    byte[] passwordHash, passwordSalt;
                    CreatePasswordHash("password", out passwordHash, out passwordSalt);

                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;
                    user.Username = user.Username.ToLower();
                    context.Users.Add(user);
                }
                context.SaveChanges();
            }
        }
        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public static void SeedPets(DataContext context){
            if (!context.Pets.Any()){
                var petData = System.IO.File.ReadAllText("Data/PetSeedData.json");
                var pets = JsonConvert.DeserializeObject<List<Pet>>(petData);
                
                foreach (var pet in pets)
                {
                    context.Pets.Add(pet);
                }
                context.SaveChanges();
            }
        }

    }
}