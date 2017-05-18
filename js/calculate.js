var val;
var result = "";
var flVal = 0.0;
var numResult = 0;
var valResult = 0;
var operation = "";

$(".btn-lg").click(function() {

    val = $(this).text();
    val = val.trim();
    val = val.replace(',', '.')
    flVal = parseFloat(result);

    switch (val) {
        case '+/-':
            numResult = flVal * -1;
            result = numResult;
            $("#number").val(numResult);
            break;

        case '√':
            numResult = Math.sqrt(flVal)
            result = numResult;
            $("#number").val(numResult);
            break;

        case '+':
            valResult = flVal;
            operation = "+";
            result = '';
            break;

        case '/':
            valResult = flVal;
            operation = "/";
            result = '';
            break;

        case '%':
            $("#number").val(0);
            result = 0;
            break;

        case '*':
            valResult = flVal;
            operation = "*";
            result = '';
            break;

        case '1/x':
            var tmpVal = parseFloat(result);
            var parseResult = parseFloat(1 / tmpVal);
            result = parseResult;
            $("#number").val(parseResult);
            break;

        case '-':
            valResult = flVal;
            operation = "-";
            result = '';
            break;

        case '=':
            if (operation === '+') {
                valResult += flVal;
            } else if (operation === '/') {
                valResult = parseFloat(valResult / flVal);
            } else if (operation === '*') {
                valResult *= flVal;
            } else if (operation === '-') {
                valResult -= flVal;
            }
            result = valResult;
            $("#number").val(result);
            operation = '';
            break;

        default:
            result += val;
            $("#number").val(result);
            flVal = parseFloat(result);
            break;
    }

    $("#number").keyup(function() {
        result = $(this).val();
    });

});