document.getElementById('fetch-qr').onclick = fetchAndRenderQrs;

async function fetchAndRenderQrs(){
    const response = await fetch("/qrcodes");
    const qrcodes = await response.json();
    console.log('qrcodes');
}