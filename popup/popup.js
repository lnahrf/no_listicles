function renderPlaceholder(root) {
    root.innerText = 'Open DEV.TO to remove listicles.';
}

function renderState(root, removed) {
    const ul = document.createElement('ul');

    for (const a of removed) {
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
        chrome.tabs.sendMessage(id, {}, reply => {
            const root = document.getElementById('root');

            if (reply?.domUrl && reply?.removed) {
                return renderState(root, reply.removed);
            }
            return renderPlaceholder(root);
        });
    });
}

(function () {
    getState();
})();
