function renderRemovedState(removed) {
    const root = document.getElementById('root');

    const ul = document.createElement('ul');

    for(const a of removed){
        const li = document.createElement('li');
        li.innerText = a;
        ul.appendChild(li);
    }

    root.appendChild(ul);
    const counter = document.getElementById('counter');
    counter.innerHTML = `<strong>${Array.from(removed).length}</strong> listicles removed!`;
}

function getState() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        const id = tabs[0].id;
        chrome.tabs.sendMessage(id, {}, removed => {
            renderRemovedState(new Set(removed));
        });
    });
}

(function () {
    getState();
})();
