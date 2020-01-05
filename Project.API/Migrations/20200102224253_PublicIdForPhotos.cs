using Microsoft.EntityFrameworkCore.Migrations;

namespace Project.API.Migrations
{
    public partial class PublicIdForPhotos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PublicID",
                table: "UserPhotos",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PublicID",
                table: "PetPhotos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PublicID",
                table: "UserPhotos");

            migrationBuilder.DropColumn(
                name: "PublicID",
                table: "PetPhotos");
        }
    }
}
