using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SongChef.Data;
using SongChef.Models;

namespace SongChef.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class SongsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SongsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SongRecModel>>> GetSongRecommendations()
        {
            return await _context.SongRecommendations.Include(s => s.Genre).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<SongRecModel>> PostSongRecommendation(SongRecModel songRec)
        {
            _context.SongRecommendations.Add(songRec);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSongRecommendations), new { id = songRec.Id }, songRec);
        }
    }
}