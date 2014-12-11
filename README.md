# Meteor Simple Number Spinner

A template for adding a simple number spinner

```html
{{> numberSpinner min=4 max=10 value=5 id="numberSpinner"}}
```
The template takes 4 arguments. min, max and value maps to the same values in the <input type="number"> html tag and the id is set as the id of this tag. The id used can further be used in your application for getting the value from the spinner.

In this example it would be:
```javascript
var val= $("#numberSpinner").val()
```

## Acknowledgement

The spinner is a rewrite of the jQuery plugin found here: http://www.jqueryscript.net/form/Simple-Number-Spinner-with-jQuery-CSS3-Simple-Spinner.html
