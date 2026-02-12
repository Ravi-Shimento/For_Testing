<div class="form-row">
    <label for="apiUrl" class="inline-label">URL -</label>

    <input
        id="apiUrl"
        type="text"
        placeholder="Base API URL"
    />

    <button id="updateSpecUrl" class="send-btn">
        SEND
    </button>
</div>

<div class="form-row">
    <label for="authTokenInput" class="inline-label">Token -</label>

    <div class="token-wrapper">
        <input
            id="authTokenInput"
            type="password"
            placeholder="Auth Token"
        />

        <i id="authTokenIcon" class="fas fa-eye eye-icon"></i>
    </div>
</div>


.form-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.inline-label {
    font-size: 13px;
    font-weight: 600;
    min-width: 60px;
}

#apiUrl,
#authTokenInput {
    flex: 1;
    height: 34px;
    padding: 0 12px;
    border-radius: 6px;
    border: 1px solid #d0d0d0;
    font-size: 13px;
    outline: none;
    box-sizing: border-box;
}

#apiUrl:focus,
#authTokenInput:focus {
    border-color: #007acc;
}

.send-btn {
    height: 34px;
    padding: 0 18px;
    font-size: 13px;
    font-weight: 600;
    border-radius: 6px;
    border: none;
    background-color: #007acc;
    color: white;
    cursor: pointer;
}

.send-btn:hover {
    background-color: #005f99;
}

/* TOKEN WRAPPER FOR EYE INSIDE INPUT */
.token-wrapper {
    position: relative;
    flex: 1;
}

.token-wrapper input {
    width: 100%;
    padding-right: 34px; /* space for eye */
}

/* SMALL CLEAN EYE ICON */
.eye-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;  /* smaller eye */
    color: #666;
    cursor: pointer;
}

.eye-icon:hover {
    color: #007acc;
}


