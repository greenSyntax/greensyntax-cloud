export default function SpotifyPlaylist() {
  const playlistId = "5iE3doMl2FPyH3TPPJXZpM";

  return (
    <section className="w-full pb-24">
      <h2 className="text-[18px] font-semibold mb-6">
        What I&apos;m Listening To
      </h2>

      <div className="w-full rounded-xl overflow-hidden">
        <iframe
          title="Spotify Embed: Recommendation Playlist"
          src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
          width="50%"
          height="100%"
          style={{ minHeight: "360px" }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </section>
  );
}