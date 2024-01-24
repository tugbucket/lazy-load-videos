# Lazy Load Videos
Plays and pauses videos when entering and leaving the viewport. Can also load videos when entering the viewport.

## Shortcode options
`[lazyloadvideos pauseonscroll="yes"]`

The parameters are _yes_ and _no_

By default it’s set to _yes_. The videos should start playing when you scroll into view and pause when scrolling out of view. 
If set to _no_, the videos start playing when scrolled into view and do not pause after scrolling out of view.

## Notes
To lazy load the videos, meaning only loading them when scrolled into view, you have to alter your HTML video tag. 

For example:
`<video src="<path to your video>"></video>`

Change that to:
`<video data-src="<path to your video>"></video>`

Note that the new HTML does not contain an src attribute and it now says data-src.
