document.getElementById('fetch-qr').onclick = fetchAndRenderQrs;

async function fetchAndRenderQrs(){
    const response = await fetch('/qrcodes.json');
    const qrcodes = await response.json();
    
    let qrHTML = "<h1>Qr code list:</h1>";
    for (const qr of qrcodes){
        qrHTML +=`
        <p>${qr.name}</p>
        <p>${qr.description}</p>
        `
    }

    document.getElementById('qr-list').innerHTML = qrHTML;
}