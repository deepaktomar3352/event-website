export default function swDev() {
    function urlBas64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/')

            const rawData = window.atob(base64);
            const outputArray = new Uint8Array(rawData.length);

            for (let i=0; i< rawData.length; ++i){
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray
    }
    function determineAppServerKey() {
        var vapidPublicKey = 'BGtkbcjrO12YMoDuq2sCQeHlu47uPx3SHTgFKZFYiBW8Qr0D9vgyZSZPdw6_4ZFEI9Snk1VEAj2qTYI1I1YxBXE'
        return urlBas64ToUint8Array(vapidPublicKey);
    }

    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((response) => {
        console.warn("Response", response)
        return response.pushManager.getSubscription()
        .then(function(subscription){
            return response.pushManager.subscribe({
                userVisibleOnly:true,
                applicationServerKey:determineAppServerKey()
            })
        });
    })
}