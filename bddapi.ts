#apiUrl,
#authTokenInput {
    width: 100%;
    height: 36px;
    padding: 0 12px;
    border-radius: 6px;
    border: 1px solid #d0d0d0;
    font-size: 13px;
    outline: none;
    box-sizing: border-box;
}
.form-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
}

.inline-label {
    font-size: 13px;
    font-weight: 600;
    min-width: 90px;
}

#apiUrl {
    flex: 1;
}

.token-wrapper {
    position: relative;
    flex: 1;
}
.token-wrapper input {
    padding-right: 36px; /* space for eye */
}

.eye-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    color: #666;
    cursor: pointer;
}

.eye-icon:hover {
    color: #007acc;
}
.send-btn {
    height: 36px;
    padding: 0 20px;
    font-size: 13px;
    font-weight: 600;
    border-radius: 6px;
    border: none;
    background-color: #007acc;
    color: white;
    cursor: pointer;
}
