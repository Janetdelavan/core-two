const mod = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");

function toggleModal() {
    var modal = document.getElementById('modal');
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    modal.style.transform = "scale(1.0)"
}

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }

// trigger.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);

/*console.log('Hi');

fetch('https://api.airtable.com/v0/appHeSkxwjOR0q5KH/fauvism',{
    headers: {
        Authorization: 'Bearer keyF2Ys0wHSHQ5EfY',
    },
})
    .then (response => response.json())
    .then (data => {


        console.log(data);

        const container = document.querySelector ('.container');
        data.records.forEach(album => {
            console.log(album);
            container.innerHTML += `
                <div class="album">
                    <h3> ${album.fields.artist}</h3>
                    <h5> ${album.fields.title}</h5>
                </div>
                `;
        });
    }); 
*/
