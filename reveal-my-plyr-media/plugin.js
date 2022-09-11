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
	console.log("You've now playing!");
	consoleLogDetails(event.detail.plyr);
});

player.addEventListener('seeking', (event) => {
	console.log("You're trying to skip around the video!");
	consoleLogDetails(event.detail.plyr);
});

player.addEventListener('seeked', (event) => {
	console.log("You've successfully skipped to a different part of the video!");
	consoleLogDetails(event.detail.plyr);
});

// Detail-printing
function consoleLogDetails(media) {
	const details = {
		playing: media.playing,
		paused: media.paused,
		ended: media.ended,
		buffered: media.buffered,
		currentTime: media.currentTime,
		seeking: media.seeking,
		volume: media.volume * 100. + "%",
		muted: media.muted,
		speed: media.speed,
		captionsActive: media.captions.active ? true : false,
		captionLanguage: media.captions.active ? media.language : "N/A",
		loop: media.loop,
		fullscreenActive: media.fullscreen.active,
		failed: media.failed,
		currentTime: media.currentTime
	}

	console.log(details);
}