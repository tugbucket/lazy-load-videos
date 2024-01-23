<?php
/**
* Plugin Name: Lazy Load Videos
* Plugin URI: 
* Description: Plays videos when scrolled in to viewport.
* Version: 1.0
* Author: Alan Jackson
* Author URI: https://tugbucket.net
* License: GPL3
**/


function lazyloadvideo_tug2s8w($atts, $content = null){
	wp_register_script('lazyloadvideo_tug2s8w_js', plugins_url('/lazyloadvideo.js',__FILE__ ), array('jquery'), '', true);
	wp_enqueue_script('lazyloadvideo_tug2s8w_js');
	
    $llva = shortcode_atts( array(
        'pauseonscroll' => 'yes',
    ), $atts );
	
	$identifier = "";
	if($llva['pauseonscroll'] && $llva['pauseonscroll'] == "no"){
		$identifier = 'data-llv="'.$llva['pauseonscroll'].'"';
		
	}

	$llv = '';
	$llv .= '<div class="llv" '.$identifier.'></div>';
	return $llv;
}
add_shortcode('lazyloadvideo', 'lazyloadvideo_tug2s8w');
?>