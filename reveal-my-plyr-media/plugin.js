/****************************************************************
 * Author: Samuel St John, stjoh1sr@cmich.edu
 * 
 * A reveal.js plugin to interface with Plyr and allow tracking
 * on video/audio interactions and events.
 * 
 ****************************************************************/
var i = 0;
var players;

function revealMyPlyrMedia() {
	players = Plyr.setup('.plyr__track');
	awaitPlayerInitialization();
}

/*
 * Ensures players initialize before listeners are added.
 */
function awaitPlayerInitialization() {
	if (players == null || typeof players == 'undefined') {
		setTimeout(awaitPlayerInitialization, 200);
	} else {
		initializeListeners(); 
	}
}

/*
 * Binds listeners to plyr objects for certain media interactions.
 */
function initializeListeners() {
	while (i < players.length) {
		players[i].on('pause', (event) => {
			console.log("You've paused!");
			dispatchPlyrInteraction(event.detail.plyr, 'pause');
		});

		players[i].on('playing', (event) => {
			console.log("You're playing!");
			dispatchPlyrInteraction(event.detail.plyr, 'playing');
		});

		players[i].on('seeked', (event) => {
			console.log("You've successfully skipped around the video!");
			dispatchPlyrInteraction(event.detail.plyr, 'seek');
		});

		players[i].on('volumechange', (event) => {
			if (event.detail.currentTime > 0) {
				console.log("You've changed the volume!");
				dispatchPlyrInteraction(event.detail.plyr, 'volumeChange');
			}
		});

		players[i].on('enterfullscreen', (event) => {
			console.log("You've entered fullscreen mode!");
			dispatchPlyrInteraction(event.detail.plyr, 'enterFullscreen');
		});

		players[i].on('exitfullscreen', (event) => {
			console.log("You've left fullscreen mode!");
			dispatchPlyrInteraction(event.detail.plyr, 'exitFullscreen');
		});

		i++;
	}
}

/*
 * Dispatches events to the reveal-tracking plugin.
 */
function dispatchPlyrInteraction(media, type) {
	document.dispatchEvent(new CustomEvent('plyrInteraction', { detail: buildDetails(media, type)}));
}

/* 
 * Builds an object including media details for interactions.
 */
function buildDetails(media, type) {
	return {
		mediaEvent: type,
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
}