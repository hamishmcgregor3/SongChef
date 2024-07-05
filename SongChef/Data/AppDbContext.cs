using Microsoft.EntityFrameworkCore;
using SongChef.Models;

namespace SongChef.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<SongRecModel> SongRecommendations { get; set; }
        public DbSet<GenreModel> Genres { get; set; }
    }
}
