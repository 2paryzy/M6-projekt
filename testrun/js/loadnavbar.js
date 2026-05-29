fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });
text.innerHTML = `
<div class="modal-columns">
    
    <div>
        <h3>Kørere</h3>
        <p>1. Verstappen – 12</p>
        <p>2. Norris – 4</p>
        <p>3. Leclerc – 3</p>
    </div>

    <div>
        <h3>Teams</h3>
        <p>1. Red Bull</p>
        <p>2. McLaren</p>
        <p>3. Ferrari</p>
    </div>

</div>
`;
``
