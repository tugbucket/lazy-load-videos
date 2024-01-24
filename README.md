# Lazy Load Videos
Plays and pauses videos when entering and leaving the viewport. Can also load videos when entering the viewport.

## Shortcode options
[lazyloadvideos pauseonscroll="yes"]
the parameters are _yes_ and _no_

By default it’s set to _yes_. The videos should start playing when you scroll into view and pause when scrolling out of view. 
If set to _no_, the videos start playing when scrolled into view and do not pause after scrolling out of view.

## Notes
To lazy load the videos, meaning only loading them when scrolled into view, you have to alter your HTML video tag. 

For example:
`<video class="elementor-video" src="<path to your video>" autoplay="" loop="" muted="muted" playsinline="" controlslist="nodownload" played="true"></video>`

Change that to:
`<video class="elementor-video" data-src="<path to your video>" autoplay="" loop="" muted="muted" playsinline="" controlslist="nodownload" played="true"></video>`

Note that the new HTML does not contain an src attribute and it now says data-src.
