function bounceOff(form1, form2) {
    if (form1.x - form2.x < form2.width / 2 + form1.width / 2
        && form2.x - form1.x < form2.width / 2 + form1.width / 2) {
        form1.velocityX = form1.velocityX * (-1);
        form2.velocityX = form2.velocityX * (-1);
    }
    if (form1.y - form2.y < form2.height / 2 + form1.height / 2
        && form2.y - form1.y < form2.height / 2 + form1.height / 2) {
        form1.velocityY = form1.velocityY * (-1);
        form2.velocityY = form2.velocityY * (-1);
    }
}

function isTouching(k, l) {
    if (k.x - l.x < l.width / 2 + k.width / 2
        && l.x - k.x < l.width / 2 + k.width / 2
        && k.y - l.y < l.height / 2 + k.height / 2
        && l.y - k.y < l.height / 2 + k.height / 2) {
        return 1;
    }
    else {
        return 0;
    }

}