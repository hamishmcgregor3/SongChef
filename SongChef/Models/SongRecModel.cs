namespace SongChef.Models
{
    public class SongRecModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Artist { get; set; }
        public int GenreId { get; set; }
        public GenreModel? Genre { get; set; }
        public string IdealListeningExperience { get; set; }
        public string RecommendedBy { get; set; }
    }
}