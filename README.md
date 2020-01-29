# Center Animation on a File
Center all aos animation in one file


## Example 
### Add new animation

```javascript
var animation = {
   "center-img": { // Name element
        'class': "1", //0-> id , 1 -> class
        "data-aos": "fade",
        "data-aos-offset": "0",
        "data-aos-delay": "200",
        "data-aos-duration": "500",
        "data-aos-easing": "linear",
        "data-aos-mirror": "false",
        "data-aos-once": "true"
    },
    "center-text": { // Name element
        'class': "1", //0-> id , 1 -> class
        "data-aos": "flip-left",
        "data-aos-offset": "0",
        "data-aos-delay": "200",
        "data-aos-duration": "500",
        "data-aos-easing": "linear",
        "data-aos-mirror": "false",
        "data-aos-once": "true"
    }
}
```

Initialize 
```javascript
$( document ).ready(function() {
    callanimation();
});
```
