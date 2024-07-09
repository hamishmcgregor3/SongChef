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

        [HttpGet("GetSongs")]
        public async Task<ActionResult<IEnumerable<SongRecModel>>> GetSongRecommendations()
        {
            return await _context.SongRecommendations
                .Include(s => s.Genre)
                .OrderByDescending(s => s.Id)
                .ToListAsync();
        }

        [HttpGet("GetSongsForUser")]
        public async Task<ActionResult<IEnumerable<SongRecModel>>> GetSongRecommendationsForUser(string username)
        {
            return await _context.SongRecommendations
                .Where(s => s.RecommendedBy == username).Include(s => s.Genre)
                .OrderByDescending(s => s.Id)
                .ToListAsync();
        }

        [HttpGet("GetGenres")]
        public async Task<ActionResult<IEnumerable<GenreModel>>> GetGenres()
        {
            return await _context.Genres.ToListAsync();
        }

        [HttpPost("AddSongRec")]
        public async Task<ActionResult<SongRecModel>> PostSongRecommendation(SongRecModel songrec)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.SongRecommendations.Add(songrec);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSongRecommendations), new { id = songrec.Id }, songrec);
        }
    }
}