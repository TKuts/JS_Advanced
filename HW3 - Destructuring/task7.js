const array = ["value", () => "showValue"];

let [value, showValue] = array;

alert(value); // має бути виведено 'value'
alert(showValue()); // має бути виведено 'showValue'
