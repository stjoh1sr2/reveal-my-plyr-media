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
});

player.addEventListener('playing', (event) => {
	console.log("You've resumed");
});

player.addEventListener('play', (event) => {
	console.log("You're now playing!");
});

/* player.addEventListener('timeupdate', (event) => {
 * 	console.log("The playtime has changed!");
 * });
 */

player.addEventListener('timeupdate', (event) => {
	console.log("The playtime has changed!");
});

player.addEventListener('seeking', (event) => {
	console.log("You're trying to skip around the video!");
});

player.addEventListener('seeked', (event) => {
	console.log("You've successfully skipped to a different part of the video!");
});