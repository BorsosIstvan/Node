document.getElementById('fetch-qr').onclick = fetchAndRenderQrs;

async function fetchAndRenderQrs(){
    const response = await fetch("/qrcodes");
    const qrcodes = await response.json();

    console.log(qrcodes);

    let qrHTML = "<h1>Qr code list:</h1>";
    for (const qr of qrcodes){
        qrHTML +=`
        <p>${qr.name}</p>
        <p>${qr.description}</p>
        <p>${qr.qrcode}</p>
        `
    }

    document.getElementById('qr-list').innerHTML = qrHTML;
}

// add new qr form action
document.getElementById('new-qr').onsubmit = async function(event){
    event.preventDefault();
    const name = event.target.elements.name.value;
    const description = event.target.elements.name.value;
    const qrcode = event.target.elements.name.value;
    const res = await fetch("/qrcodes", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({name, description, qrcode})
    });

    if(res.ok){
        fetchAndRenderQrs();
    }

}