function removeParent(span) {
    let parent = span;
    for (let i = 0; i < 18; i++) {
        parent = parent.parentElement; // ch biết cách tối ưu ;-;
    }
    parent.remove();
}

// Tạo observer cho DOM
function observerCallback(mutationsList) {
    mutationsList.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                const spans = node.querySelectorAll('span');
                spans.forEach(span => {
                    if (span.textContent.trim() === 'Theo dõi') {
                        removeParent(span);
                    }
                });
            }
        });
    });
}

const observer = new MutationObserver(observerCallback);

observer.observe(document.body, { childList: true, subtree: true });
