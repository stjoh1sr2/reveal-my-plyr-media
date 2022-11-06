# Reveal My Plyr Media
Linking the capabilities of [plyr](https://plyr.io/) media and [reveal.js](https://revealjs.com/) slideshows, Reveal My Plyr Media aims to provide an easy way to collect data on media interactions within slideshows. By combining these accessible, feature-rich open-source frameworks and building off the useful [reveal.js-tracking](https://github.com/pantajoe/reveal.js-tracking) plugin, the Reveal My Plyr Media plugin offers additional insights into slideshow viewers' interactions with media.

A demo of a presentation using this project is [here](https://stjoh1sr2.github.io/reveal-my-plyr-media/) (make sure to turn off any ad or tracker blockers once you reach the page).

### What Interactions Are Tracked?
The interactions tracked by this plugin include:
- Playing media
- Pausing media
- Seeking in the media's timeline (e.g. skipping to a specific part of a video)
- Entering fullscreen mode for media
- Exiting fullscreen mode for media

### What Details Are Available?
This plugin builds on the reveal.js-tracking plugin, adding to the timeline that exists there. Each media interaction contains the following information in a JSON format:

| Attribute | Description |
|--------------|-----------|
| mediaEvent | The type of interaction that occurred |
| playing | Whether or not the media was actively playing at the time of interaction |
| paused | Whether or not the media was paused at the time of interaction |
| ended | Whether or not the media was finished playing at the time of interaction |
| currentTime | The media timestamp of the time of interaction in hh:mm:ss format
| seeking | Whether or not the user was skipping around in the media at the time of interaction |
| volume | The media volume at the time of interaction, from 0%-100% |
| muted | Whether or not the media was muted at the time of interaction |
| speed | The playback speed of the media at the time of interaction |
| mediaSource | A URL or filepath that links to the media |
| captionsActive | Whether or not captions were active at the time of interaction |
| captionsLanguage | The language of the captions at the time of interaction, if captions exist |
| loop | Whether or not the media is on loop |
| fullscreenActive | Whether or not the media is in fullscreen mode at the time of interaction |
| failed | Whether or not the media has failed to load correctly |

## How to Use
Reviewing Reveal.js's [documentation](https://revealjs.com/markup/) is helpful for creating a slideshow. Slideshows can be created [exclusively in HTML](https://revealjs.com/markup/) or [using Markdown](https://revealjs.com/markdown/), depending on the presentation's needs and the creator's technical abilities. Markdown may be easier to visualize than HTML and can be used with online editing programs, such as [this one](https://markdown-editor.github.io/). Reveal My Plyr Media supports either use of Reveal.

The reveal-my-plyr-media folder from this repo should be downloaded and included in the folder that houses your presentation HTML. Reveal.js, its plugins, and Plyr can optionally be included directly in your presentation folder as well, or supplied by a CDN.

The general structure of a Reveal.js presentation using Reveal My Plyr Media is:
1. Style sheets in the head of the HTML file housing the presentation. reveal.js has [default themes](https://revealjs.com/themes/) that may be useful, but be warned that these styles can sometimes cause issues with media size (see Common Issues section). Be sure to link to [Plyr's style CDN](https://github.com/sampotts/plyr#javascript) as well, or link the local filepath if you are including it directly.
2. Your presentation itself in the body of the file.
3. Under your presentation, links to Plyr (can be local or via a [CDN](https://github.com/sampotts/plyr#javascript)), reveal.js (can be local or via a CDN), any Reveal plugins you are using (for example, [Reveal Markdown](https://github.com/webpro/reveal-md) is necessary for using Markdown to create presentations). After those, the downloaded Reveal.js-tracking and Reveal My Plyr Media files should be linked.
4. Underneath linked scripts, create a script that initializes Reveal and calls the Reveal My Plyr Media plugin.

### Video Structure
Regardless of whether Markdown is being used, the videos themselves have to be included in a specific HTML format for Reveal My Plyr Media to function correctly. You can copy and paste the templates below directly into your presentation HTML/Markdown, replacing the src URLs with links to your media.

#### Youtube
```html
<div class="plyr__video-embed plyr__track">
	<iframe  
		src="https://www.youtube.com/embed/aqz-KE-bpKQ"  
		allowfullscreen  
		allowtransparency  
		allow="autoplay">  
	</iframe>  
</div>
```

#### Vimeo
```html
<div class="plyr__video-embed plyr__track">
	<iframe
		src="https://player.vimeo.com/video/1084537?h=b1b3ab5aa2"
		allowfullscreen
		allowtransparency
		allow="autoplay">
	</iframe>
</div>
```

#### HTML5
```html
<video playsinline controls class="plyr__track" data-poster="demo/media/poster.png">
	<source src="demo/media/BigBuckBunny.mp4" type="video/mp4" />
	<source src="demo/media/BigBuckBunny.webm" type="video/webm" />
	<source src="demo/media/BigBuckBunny.oog" type="video/oog" />
</video>
```

### General Template
A template for the structure described above (using markdown) is:
```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

		<title>Presentation Title</title>

		<link rel="stylesheet" href="path/to/reveal.css">
		<link rel="stylesheet" href="path/to/theme.css">
		<link rel="stylesheet" href="reveal-my-plyr-media/tracking/css/tracking.css">
		<link rel="stylesheet" href="path/to/plyr.css" />
	</head>
	<body>
		<div class="reveal">
			<div class="slides">
				<section data-markdown>
					<script type="text/template">
						<!-- Insert slide content here in Markdown -->
					</script>
				</section>
			</div>
		</div>
		
		<script src="path/to/plyr.polyfilled.js"></script>
		<script src="path/to/reveal.js"></script>
		<script src="path/to/markdown.js"></script>
		<script src="reveal-my-plyr-media/tracking/js/tracking"></script>
		<script src="reveal-my-plyr-media/plugin.js"></script>
		<script>
			Reveal.initialize({
				// Insert Reveal configurations, including tracking configurations, here
				dependencies: [{ src: 'reveal-my-plyr-media/tracking/js/tracking.js', async: false }],
				plugins: [ RevealMarkdown /* Insert any additional plugins here */ ]
			}).then(() => {
				revealMyPlyrMedia();
				Reveal.getPlugin('tracking').giveConsent(); // Can remove if you would like to allow users to opt-out of tracking via a consent banner
			});
		</script>
	</body>
</html>
```

### Reveal Configurations
Information on initializing reveal.js is available [here](https://revealjs.com/initialization/), and information on initializing reveal.js-tracking is available [here](https://github.com/pantajoe/reveal.js-tracking#basic-usage). Your needs may vary, but this plugin requires including configurations for reveal.js-tracking at a minimum, as well as calling the plugin itself after the reveal initialization.

A sample configuration is included below (keep in mind that RevealHighlight and RevealNotes are **not** required for Reveal My Plyr Media, but the reveal.js-tracking dependency is).
```javascript
Reveal.initialize({
				hash: true,
				tracking: {
					apiConfig: {
						authenticationAPI: {
							// configure the API where to request a user token from
							requestTokenEndpoint: 'https://learning.analytics/api/authentication/generate-token',
						},
						// configure where to send the tracked data
						trackingAPI: 'https://c5255c65-a238-4663-9ed3-569e1dbcf530.mock.pstmn.io',
					},
					consentBanner: false,
					dwellTime: true,
					links: true,
					media: true,
					slideTransitions: true,
				},
				markdown: {
					sanitize: false
				},
				dependencies: [{ src: 'reveal-my-plyr-media/tracking/js/tracking.js', async: false }],
				plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
			}).then(() => { 
				revealMyPlyrMedia(); // Required
				Reveal.getPlugin('tracking').giveConsent(); // Optional - exclude if you want to allow users to opt-out of tracking
			});
```

### Using Markdown
[RevealMarkdown](https://revealjs.com/markdown/) is a great tool that can be used in conjunction with Reveal My Plyr Media. There are two ways to use Markdown with reveal.js. You can include the Markdown directly in an HTML file:
```html
<section data-markdown>
	<script type="text/template">
		# Reveal My Plyr Media

		Combining the capabilities of [reveal.js](https://revealjs.com/) and [plyr](https://plyr.io/) to provide interaction data for media in slideshows.

		---

		## Supported Media Options

		Reveal My Plyr Media supports tracking interactions with any media type that Plyr supports, including:

		*   Youtube
		*   Vimeo
		*   HTML5 Video
		*   HTML5 Audio
	</script>
</section>
```
Or you can link to an external Markdown file:
```html
<div class="reveal">
	<div class="slides">
		<section data-markdown="demo/demo.md">
		</section>
	</div>
</div>
```
Note: When testing a presentation using external Markdown, reveal.js must be running [from a local web server](https://revealjs.com/installation/#full-setup ).

## Common Issues

### Tracking Data Intercepted
Depending on where the presentation is hosted and the user's personal device set-up, a browser may block the user's data from being sent to your chosen endpoint. This can be a result of ad-blocking or tracker-blocking software, including browser extensions. Disabling those extensions for the site that hosts the presentation is the simplest fix for this issue.

### Video Not Filling Frame
#### Video Shrunk Within Frame
If you're using a default reveal.js theme for your presentation, there may be a style issue causing the video to only take up a portion of the frame. The rest of the frame is a background color, like black. 

The general cause of issues like this is a styling rule somewhere that limits the size of media displays. For example, many reveal.js themes limit the size of video displays to 95% max-width and max-height, causing the display to be smaller than the frame. Check that your max-height and max-width for media is not capped in your stylesheet if you encounter this issue.

#### Black Bar at the Top of Frame
When using markdown, there may be occassional issues where Reveal-Markdown adds a white space within a frame, which causes a black bar to appear above a video. To solve this, make sure to specify the font size to be 0 within the frame.