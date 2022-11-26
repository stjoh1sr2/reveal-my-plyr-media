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
			dispatchPlyrInteraction(event.detail.plyr, 'pause');
		});

		players[i].on('playing', (event) => {
			dispatchPlyrInteraction(event.detail.plyr, 'playing');
		});

		players[i].on('seeked', (event) => {
			dispatchPlyrInteraction(event.detail.plyr, 'seek');
		});

		players[i].on('enterfullscreen', (event) => {
			dispatchPlyrInteraction(event.detail.plyr, 'enterFullscreen');
		});

		players[i].on('exitfullscreen', (event) => {
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
	
	// Update latest interaction (for demo only)
	var infoDiv = document.getElementById('banner-message');
	if (infoDiv != null && type != "exitFullscreen" && type != "enterFullscreen") {
		infoDiv.innerHTML = "Latest Media Interaction: " + type + " (" + 
			(media.playing ? "playing, " : "paused, ") +
			"timestamp: " + (new Date(media.currentTime * 1000).toISOString().substr(11, 8)) + ", " + 
			(media.seeking ? "seeking, " : "not seeking, ") +
			"volume: " + media.volume * 100 + "%, " +
			"speed: " + media.speed + "x)";
	}
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