using System.Threading.Tasks;
using Project.API.Models;

namespace Project.API.Data
{
    public interface IAuthRepository
    {
        Task<User> UserRegister(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExists(string username);
    }
}