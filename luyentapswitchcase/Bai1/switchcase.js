let browser =prompt("Nhap browser ");
switch (browser) {
    case 'Edge':
        alert("You've got the Edge! ");
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
                    alert('Okay we support these browsers too');
    break;
    default:
        alert('We hope that this page looks ok!');
}