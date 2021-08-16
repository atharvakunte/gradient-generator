function generateGradient() {
    var angle = document.getElementById('angle').value;
    var col1 = document.getElementById('color1').value;
    var col2 = document.getElementById('color2').value;
    document.getElementById('gradient-box').style.backgroundImage = `linear-gradient(${angle}deg, ${col1}, ${col2})`;
    document.getElementById('code-text').innerHTML = `<pre>background-image: linear-gradient(${angle}deg, ${col1}, ${col2});</pre>`
}