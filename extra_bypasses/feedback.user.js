// ==UserScript==
// @name    Feedback to user
// ==/UserScript==

//---Feedback for users---------------------------------------------------------------------
/**
 * Shows a styled alert popup with customizable type, duration and position
 * @param {string} message - The message to display
 * @param {string} type - Alert type: 'info', 'success', 'error', or 'warning'
 * @param {number} duration - How long to show the alert in milliseconds
 * @param {string} prefix - Text prefix before the message
 * @param {string} position - Position of alert: 'primary' (top) or 'secondary' (below primary)
 */
function showAlert(message, type = 'info', duration = 1000, prefix = 'Bypass script: ', position = 'primary') {
    // Create alert element
    const alertDiv = document.createElement('div');
    
    // Set positioning styles
    alertDiv.style.position = 'fixed';
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translateX(-50%)';
    alertDiv.style.zIndex = '9999';
    alertDiv.style.padding = '10px 20px';
    alertDiv.style.borderRadius = '5px';
    alertDiv.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    alertDiv.style.textAlign = 'center';
    alertDiv.style.fontFamily = 'Arial, sans-serif';
    alertDiv.style.fontSize = '14px';
    alertDiv.style.maxWidth = '80%';
    alertDiv.style.transition = 'opacity 0.5s';
    
    // Set position based on parameter
    if (position === 'secondary') {
        alertDiv.style.top = '60px'; // Position below the primary alert
        alertDiv.dataset.position = 'secondary';
    } else {
        alertDiv.style.top = '10px'; // Default primary position
        alertDiv.dataset.position = 'primary';
    }
    
    // Set colors based on alert type
    switch(type) {
        case 'success':
            alertDiv.style.backgroundColor = '#4CAF50';
            alertDiv.style.color = 'white';
            prefix = '✅ ' + prefix + ':';
            break;
        case 'error':
            alertDiv.style.backgroundColor = '#F44336';
            alertDiv.style.color = 'white';
            prefix = '❌ ' + prefix + ':';
            break;
        case 'warning':
            alertDiv.style.backgroundColor = '#FF9800';
            alertDiv.style.color = 'white';
            prefix = '⚠️ ' + prefix + ':';
            break;
        default: // info
            alertDiv.style.backgroundColor = '#2196F3';
            alertDiv.style.color = 'white';
            prefix = 'ℹ️ ' + prefix + ':';
    }
    
    alertDiv.textContent = prefix + ' ' + message;
    
    // Check if any existing alerts would conflict
    const clearExistingAlert = () => {
        const existingAlerts = document.querySelectorAll(`div[data-position="${position}"]`);
        existingAlerts.forEach(alert => {
            if (alert.parentNode) {
                alert.style.opacity = '0';
                setTimeout(() => {
                    if (alert.parentNode) {
                        alert.parentNode.removeChild(alert);
                    }
                }, 300);
            }
        });
    };
    
    // Check if body exists, if not wait for it
    if (document.body) {
        clearExistingAlert();
        document.body.appendChild(alertDiv);
        
        // Remove after duration
        setTimeout(() => {
            alertDiv.style.opacity = '0';
            setTimeout(() => {
                if (alertDiv.parentNode) {
                    alertDiv.parentNode.removeChild(alertDiv);
                }
            }, 500);
        }, duration);
    } else {
        // Wait for body to be available
        document.addEventListener('DOMContentLoaded', () => {
            clearExistingAlert();
            document.body.appendChild(alertDiv);
            
            // Remove after duration
            setTimeout(() => {
                alertDiv.style.opacity = '0';
                setTimeout(() => {
                    if (alertDiv.parentNode) {
                        alertDiv.parentNode.removeChild(alertDiv);
                    }
                }, 500);
            }, duration);
        });
    }
    
    // Also log to console for debugging
    console.log(`[${prefix}] ${message}`);
}

showAlert("running...");

function redirectWithMessage(url) {
    showAlert("Redirecting to " + url, 'success', 3000, '', 'secondary');
    setTimeout(function() {window.location.assign(url);}, 1000);
}

//-------------------------------------------------------------------------------------
