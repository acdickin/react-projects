const SoundCloudWidgetBackup = () => {
  return (
    <div>
      <iframe
        width="80%"
        height="400"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1489425085&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div className="overflow-hidden text-[10px] font-light text-[#cccccc]">
        <a
          href="https://soundcloud.com/andrewcosmic"
          title="Andrew Cosmic"
          target="_blank"
          className="text-[#cccccc] no-underline"
        >
          Andrew Cosmic
        </a>{' '}
        ·
        <a
          href="https://soundcloud.com/andrewcosmic/sets/through-the-clouds"
          title="Through the clouds"
          target="_blank"
          className="overflow-hidden text-[#cccccc] no-underline"
        >
          Through the clouds
        </a>
      </div>
    </div>
  )
}

export default SoundCloudWidgetBackup
