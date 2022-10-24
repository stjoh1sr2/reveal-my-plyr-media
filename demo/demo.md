## Reveal My Plyr Media

Combining the capabilities of [reveal.js](https://revealjs.com/) and [plyr](https://plyr.io/) to provide interaction data for media in slideshows.

---

## Supported Media Options

Reveal My Plyr Media supports tracking interactions with any media type that Plyr supports, including:

*   Youtube
*   Vimeo
*   HTML5 Video
*   HTML5 Audio

---

## Youtube

<div class="plyr__video-embed plyr__track">  
     <iframe  
      src="https://www.youtube.com/embed/aqz-KE-bpKQ"  
      allowfullscreen  
      allowtransparency  
      allow="autoplay">  
     </iframe>  
</div>

---

## Vimeo
<div class="plyr__video-embed plyr__track">
	<iframe
		src="https://player.vimeo.com/video/1084537?h=b1b3ab5aa2"
		allowfullscreen
		allowtransparency
		allow="autoplay">
	</iframe>
</div>

---

## HTML5
<video playsinline controls class="plyr__track">
	<source src="demo/media/BigBuckBunny.mp4" type="video/mp4" />
	<source src="demo/media/BigBuckBunny.webm" type="video/webm" />
	<source src="demo/media/BigBuckBunny.oog" type="video/oog" />
</video>