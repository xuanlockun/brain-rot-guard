document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleBtn");
    const statusImg = document.getElementById("statusImg");

    chrome.storage.sync.get("enabled", (data) => {
        const isEnabled = data.enabled !== false;
        updateUI(isEnabled);
    });

    toggleBtn.addEventListener("click", () => {
        chrome.storage.sync.get("enabled", (data) => {
            const newState = !(data.enabled !== false);
            chrome.storage.sync.set({ enabled: newState }, () => {
                updateUI(newState);
            });
        });
    });

    function updateUI(isEnabled) {
        toggleBtn.textContent = isEnabled ? "Disable" : "Enable";
        toggleBtn.style.backgroundColor = isEnabled ? "#dc3545" : "#007bff";
        toggleBtn.style.color = "white";
        statusImg.src = isEnabled ? "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHc4ZnYzODE5djJ5bmVhN21lNXQ0MGdxN21mdHI4cGVxcnIzODBhbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l44QzsOLXxcrigdgI/giphy.gif" : "https://media.giphy.com/media/z8rEcJ6I0hiUM/giphy.gif?cid=790b76118w8fv3819v2ynea7me5t40gq7mftr8peqrr380ao&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    }
});
