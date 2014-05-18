sd_jqDropdown
=============

**Version:** *0.1.3*

A lightweight and simple cross browser select box replacement using jQuery.
Still *very* in beta and in need of much testing.
I will be working on this quite extensively over the coming weeks.

### Options

#### Mode
sd_jqDropdown allows you to choose between two display modes, ```dropDown``` or ```popUp```

To choose the mode, simply pass either of the above values into the mode parameter.

```js
sdDropdown({
    mode: 'dropDown'
});
```
```js
sdDropdown({
    mode: 'popUp'
});
```

#### Easing
The plugin allows you to choose your own easing mode. The plugin accepts all default jQuery easing modes, it _should_ also work with any custom easing modes from other plugins such as [jquery-ui](https://github.com/jquery/jquery-ui), however these are untested.

The default mode is ```swing```, but you could just as easily use any other such as ```linear```
```js
sdDropdown({
    easing: 'linear'
});
```


### Version History
- v0.1.3 Adds the ability to choose the easing mode.
- v0.1.2 Adds the ability to choose the mode, ```dropDown``` and ```popUp```
- v0.1.1 Adds the ability to differentiate between values and plaintext.

