# Reveal My Plyr Media
Linking the capabilities of [plyr](https://plyr.io/) media and [reveal.js](https://revealjs.com/) slideshows, Reveal My Plyr Media aims to provide an easy way to collect data on media interactions within slideshows. By combining these accessible, feature-rich open-source frameworks and building off the useful [reveal.js-tracking](https://github.com/pantajoe/reveal.js-tracking) plugin, the Reveal My Plyr Media plugin offers additional insights into slideshow viewers' interactions with media.

A Gitlab Pages demo is avaliable [here](https://stjoh1sr2.gitlab.io/reveal-my-plyr-media/) (current status: tracking is non-functional).
## Setup
TBA
## Common Issues
### Tracking Data Intercepted
Depending on where the presentation is hosted and the user's personal device set-up, a browser may block the user's data from being sent to your chosen endpoint. This can be a result of ad-blocking or tracker-blocking software, including browser extensions. Disabling those extensions for the site that hosts the presentation is the simplest fix for this issue.
### Video Not Filling Frame
If you're using a default reveal.js theme for your presentation, there may be a style issue causing the video to only take up a portion of the frame. The rest of the frame is a background color, like black. 

The general cause of issues like this is a styling rule somewhere that limits the size of media displays. For example, many reveal.js themes limit the size of video displays to 95% max-width and max-height, causing the display to be smaller than the frame. Check that your max-height and max-width for media is not capped in your stylesheet if you encounter this issue.
