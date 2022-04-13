console.log('Hi');

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
    