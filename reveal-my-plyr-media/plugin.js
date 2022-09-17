/****************************************************************
 * Author: Samuel St John, stjoh1sr@cmich.edu
 * 
 * A reveal.js plugin to interface with Plyr and allow tracking
 * on video/audio interactions and events.
 * 
 ****************************************************************/

// Event listeners
player.addEventListener('pause', (event) => {
	console.log("You've paused!");
	consoleLogDetails(event.detail.plyr);
});

player.addEventListener('playing', (event) => {
	console.log("You're playing!");
	consoleLogDetails(event.detail.plyr);
});

player.addEventListener('seeked', (event) => {
	console.log("You've successfully skipped around the video!");
	consoleLogDetails(event.detail.plyr);
});

player.addEventListener('volumechange', (event) => {
	console.log("You've changed the volume!");
	consoleLogDetails(event.detail.plyr);
});

player.addEventListener('enterfullscreen', (event) => {
	console.log("You've entered fullscreen mode!");
	consoleLogDetails(event.detail.plyr);
});

player.addEventListener('exitfullscreen', (event) => {
	console.log("You've left fullscreen mode!");
	consoleLogDetails(event.detail.plyr);
});

// Detail-printing
function consoleLogDetails(media) {
	const details = {
		playing: media.playing,
		paused: media.paused,
		ended: media.ended,
		currentTime: new Date(media.currentTime * 1000).toISOString().substr(11, 8),
		seeking: media.seeking,
		volume: media.volume * 100. + "%",
		muted: media.muted,
		speed: media.speed,
		mediaSource: media.source,
		captionsActive: media.captions.active ? true : false,
		captionLanguage: media.captions.active ? media.language : "N/A",
		loop: media.loop,
		fullscreenActive: media.fullscreen.active,
		failed: media.failed
	}

	console.log(details);
}