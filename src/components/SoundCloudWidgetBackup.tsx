const SoundCloudWidgetBackup = () => {
    return (
        <div>
            <iframe
                width="80%"
                height="400"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1489425085&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <div
                style={{
                    fontSize: "10px",
                    color: "#cccccc",
                    lineBreak: "anywhere",
                    wordBreak: "normal",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                    fontWeight: 100
                }}>
                <a href="https://soundcloud.com/andrewcosmic" title="Andrew Cosmic" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>Andrew Cosmic</a> ·
                <a href="https://soundcloud.com/andrewcosmic/sets/through-the-clouds" title="Through the clouds" target="_blank"
                    style={{ color: "#cccccc", textDecoration: "none", overflowX: "hidden", overflowY: "hidden" }}>Through the clouds</a></div>

        </div >
    )
}

export default SoundCloudWidgetBackup