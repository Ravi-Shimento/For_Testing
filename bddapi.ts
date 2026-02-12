<div class="api-input-wrapper">
    <label for="apiUrl" style="font-size:13px; font-weight:600; margin-bottom:4px; display:block;">
        URL -
    </label>

    <div style="display:flex; align-items:center; gap:6px;">
        <input
            id="apiUrl"
            type="text"
            placeholder="Base API URL"
        />
        <button id="updateSpecUrl" class="tick-btn" title="Update Spec URL">
            Send
        </button>
    </div>
</div>


<div style="margin-top:10px;">
    <label for="authTokenInput" style="font-size:13px; font-weight:600; margin-bottom:4px; display:block;">
        Token -
    </label>

    <div style="position:relative;">
        <input
            id="authTokenInput"
            type="password"
            placeholder="Auth Token"
        />
        <button class="btn btn-outline-secondary toggle-password" type="button" tabindex="-1">
            <i id="authTokenIcon" class="fas fa-eye"></i>
        </button>
    </div>
</div>



