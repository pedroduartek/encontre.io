using System.Linq;
using AutoMapper;
using Project.API.Dtos;
using Project.API.Models;

namespace Project.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Pet, PetForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url));
            CreateMap<Pet, PetForDetailedDto>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url));
            CreateMap<User, UserForListDto>();
            CreateMap<User, UserForDetailedDto>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url));
            CreateMap<PetPhoto, PetPhotoForDetailedDto>();
            CreateMap<UserPhoto, UserPhotoForDetailedDto>();
            CreateMap<UserForUpdateDto, User>();
            CreateMap<PetForUpdateDto, Pet>();


        }
    }
}