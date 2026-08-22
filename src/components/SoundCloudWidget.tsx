const SoundCloudWidget = () => {
  return (
    <div id="music" className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold md:text-3xl">Sound Cloud Music</h2>
      <iframe
        width="100%"
        height="450"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1489425085&color=%23cccccc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
    </div>
  )
}

export default SoundCloudWidget
