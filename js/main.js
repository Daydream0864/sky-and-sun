

const myTimeout = setTimeout(myAnim, 5000);
const myTimeout2 = setTimeout(myAnim2, 5000);
const myTimeout3 = setTimeout(myAnim3, 10000);
const myTimeout4 = setTimeout(myAnim4, 15000);

function myAnim() {
    document.getElementById("reveal1").innerHTML = "I would have not a Home";
}

function myAnim3() {
    document.getElementById("reveal2").innerHTML = "And you nothing to look up to...";
    document.getElementById('reveal2').id = ('reveal3');
}

function myAnim4() {
    document.getElementById("reveal3").innerHTML = "I take pictures to see the sun and sky to never forget how important they are...";
    document.getElementById('reveal3').id = ('reveal4');

}


function myAnim2() {
    document.getElementById('reveal1').id = ('reveal2');
}
// ----------------------------------------------------




