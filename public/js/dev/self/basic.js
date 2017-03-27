/**
 * Created by Donghui Huo on 2016/3/15.
 */
var defaultIndexFirstHeight = 800;
var $ = jQuery = require('jquery');
require("flexslider");
require("bootstrap");
var utilFun = require("utilFun");
$(document).ready(function () {
    var scrollMonitor = require("scrollMonitor");
    //do something
    $('.main-slider-container .flexslider').flexslider({
        fadeFirstSlide: false,
        controlNav: false,
        directionNav: true,
        animationSpeed: 1000,
        slideshowSpeed: 5000,
        slideshow: true,
        prevText: "",
        nextText: "",
    });
    $('.flexslider.products').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: true,
        animationLoop: false,
        itemWidth: 260,
        itemMargin: 5,
        prevText: "",
        nextText: ""
    });
    $('.flexslider.project-sub').flexslider({
        fadeFirstSlide: false,
        controlNav: false,
        directionNav: true,
        animationSpeed: 1000,
        slideshowSpeed: 5000,
        slideshow: false,
        prevText: "",
        nextText: "",
    });
    $(".navbar-nav li.active").removeClass("active");
    $(".navbar-nav li." + $("body").attr("id") + "-li").addClass("active");
    $(".navbar-nav li." + $("body").attr("id") + "-li-parent").addClass("active");
});

