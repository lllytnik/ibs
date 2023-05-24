export function displayErrorModal(message) {
    const modal = document.createElement('div');
    modal.className = 'error-modal';
    modal.textContent = message + " :(";

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.appendChild(modal);

    document.body.appendChild(overlay);
}