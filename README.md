# Reveal My Plyr Media
Linking the capabilities of [plyr](https://plyr.io/) media and [reveal.js](https://revealjs.com/) slideshows, Reveal My Plyr Media aims to provide an easy way to collect data on media interactions within slideshows. By combining these accessible, feature-rich open-source frameworks and building off the useful [reveal.js-tracking](https://github.com/pantajoe/reveal.js-tracking) plugin, the Reveal My Plyr Media plugin offers additional insights into slideshow viewers' interactions with media.

A demo of a presentation using this project is [here](https://stjoh1sr2.github.io/reveal-my-plyr-media/) (make sure to turn off any ad or tracker blockers once you reach the page).

## How to Use
Reviewing Reveal.js's [documentation](https://revealjs.com/markup/) is helpful for creating a slideshow. Slideshows can be created [exclusively in HTML](https://revealjs.com/markup/) or [using Markdown](https://revealjs.com/markdown/), depending on the presentation's needs and the creator's technical abilities. Markdown may be easier to visualize than HTML and can be used with online editing programs, such as [this one](https://markdown-editor.github.io/). Reveal My Plyr Media supports either use of Reveal.

The reveal-my-plyr-media folder from this repo should be downloaded and included in the folder that houses your presentation HTML. Reveal.js, its plugins, and Plyr can optionally be included directly in your presentation folder as well, or supplied by a CDN.

The general structure of a Reveal.js presentation using Reveal My Plyr Media is:
1. Style sheets in the head of the HTML file housing the presentation. reveal.js has [default themes](https://revealjs.com/themes/) that may be useful, but be warned that these styles can sometimes cause issues with media size (see Common Issues section). Be sure to link to [Plyr's style CDN](https://github.com/sampotts/plyr#javascript) as well, or link the local filepath if you are including it directly.
2. Your presentation itself in the body of the file.
3. Under your presentation, links to Plyr (can be local or via a [CDN](https://github.com/sampotts/plyr#javascript)), reveal.js (can be local or via a CDN), any Reveal plugins you are using (for example, [Reveal Markdown](https://github.com/webpro/reveal-md) is necessary for using Markdown to create presentations). After those, the downloaded Reveal.js-tracking and Reveal My Plyr Media files should be linked.
4. Underneath linked scripts, create a script that initializes Reveal and calls the Reveal My Plyr Media plugin.

### Example Structure
TBA

### Reveal Configurations
TBA

### Using Markdown
TBA

## Running Locally
TBA

## Common Issues

### Tracking Data Intercepted
Depending on where the presentation is hosted and the user's personal device set-up, a browser may block the user's data from being sent to your chosen endpoint. This can be a result of ad-blocking or tracker-blocking software, including browser extensions. Disabling those extensions for the site that hosts the presentation is the simplest fix for this issue.

### Video Not Filling Frame
If you're using a default reveal.js theme for your presentation, there may be a style issue causing the video to only take up a portion of the frame. The rest of the frame is a background color, like black. 

The general cause of issues like this is a styling rule somewhere that limits the size of media displays. For example, many reveal.js themes limit the size of video displays to 95% max-width and max-height, causing the display to be smaller than the frame. Check that your max-height and max-width for media is not capped in your stylesheet if you encounter this issue.
