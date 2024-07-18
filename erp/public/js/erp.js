console.log('custom erp js loads...')

async function observeUrlChange() {

    console.log('observing...')
    let oldHref = document.location.href;
    const body = document.querySelector("body");
    const observer = new MutationObserver(async mutations => {

        for (const mutation of mutations) {

            if (oldHref !== document.location.href) {
                console.log('HREF CHANGES')
                setupPage()
                oldHref = document.location.href
            }
        } // next mutation
    });

    observer.observe(body, { childList: true, subtree: true });
};

function loader() {
    console.log('loader fires');
    setupPage();
}

window.addEventListener("load", observeUrlChange)

window.addEventListener("load", loader)

console.log('event listners added to load and body')

async function setupPage() {

    // get and parse current URL
    let url = new URL(document.location.href);
    let lastPart = url.pathname.split('/').filter(segment => segment !== "").pop();

    console.log(`setting up page for ${url.pathname} page ${lastPart}`)

    // handle any virtual dashboards (re-directs)
    if (lastPart === 'accounting-dashboard%3A') {
        window.location = '/app/dashboard-view/Simple%20Accounting'
        return
    }

}
