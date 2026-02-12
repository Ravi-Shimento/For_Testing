<div class="api-config">
    <input
        id="apiUrl"
        type="text"
        placeholder="Base API URL"
    />
    <button id="updateSpecUrl" title="Update Spec URL">✔</button>

document.getElementById('updateSpecUrl').onclick = () => {
    const apiUrl = document.getElementById('apiUrl')?.value?.trim();

    if (!apiUrl) {
        alert("Base API URL is empty");
        return;
    }

    vscode.postMessage({
        type: 'UPDATE_SPEC_URL',
        apiUrl
    });
};


case "UPDATE_SPEC_URL":
    this.updateSpecServerUrl(message.apiUrl);
    break;


private updateSpecServerUrl(newUrl: string) {
    const workspace = vscode.workspace.workspaceFolders?.[0];
    if (!workspace) {
        console.log("No workspace open");
        return;
    }

    const openApiPath = vscode.Uri.joinPath(
        workspace.uri,
        "behavioral_flow_output",
        "openapi.yaml"
    ).fsPath;

    const fs = require("fs");

    if (!fs.existsSync(openApiPath)) {
        console.log("openapi.yaml not found");
        return;
    }

    try {
        const specContent = fs.readFileSync(openApiPath, "utf-8");
        const spec = YAML.parse(specContent);

        // OpenAPI 3
        if (spec.servers && spec.servers.length > 0) {
            spec.servers[0].url = newUrl;
        }

        // Swagger 2
        if (spec.host) {
            const urlObj = new URL(newUrl);
            spec.host = urlObj.host;
            spec.schemes = [urlObj.protocol.replace(":", "")];
        }

        fs.writeFileSync(openApiPath, YAML.stringify(spec));

        // ✅ SEND SUCCESS MESSAGE BACK
        this.panel.webview.postMessage({
            type: "URL_UPDATED"
        });

    } catch (err) {
        console.error("Failed to update spec:", err);
    }
}


window.addEventListener('message', (event) => {


    if (message.type === "URL_UPDATED") {
    alert("Base API URL updated successfully ✅");
}


    if (message.type === "URL_UPDATED") {
    vscode.postMessage({ type: "showInfo", message: "Base API URL updated successfully" });
}


    case "showInfo":
    vscode.window.showInformationMessage(message.message);
    break;


    <div class="api-input-wrapper">
    <input
        id="apiUrl"
        type="text"
        placeholder="Base API URL"
    />
    <button id="updateUrlBtn" class="tick-btn" title="Update URL">
        ✓
    </button>
</div>


    .api-input-wrapper {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
}

#apiUrl {
    width: 100%;
    padding: 8px 32px 8px 10px;
    border-radius: 6px;
    border: 1px solid #d0d0d0;
    font-size: 13px;
    outline: none;
    box-sizing: border-box;
}

#apiUrl:focus {
    border-color: #007acc;
}

.tick-btn {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
    border: none;
    border-radius: 4px;
    background-color: #007acc;
    color: white;
    font-size: 12px;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tick-btn:hover {
    background-color: #005f99;
}



<div class="api-config">

    <!-- URL ROW -->
    <div class="form-row">
        <label class="inline-label">URL -</label>
        <input
            id="apiUrl"
            type="text"
            placeholder="Enter Base API URL"
        />
        <button id="updateSpecUrl" class="send-btn">
            Send
        </button>
    </div>

    <!-- TOKEN ROW -->
    <div class="form-row token-row">
        <label class="inline-label">Token -</label>
        <div class="token-wrapper">
            <input
                id="authTokenInput"
                type="password"
                placeholder="Enter Auth Token"
            />
            <span id="togglePassword" class="eye-icon">👁</span>
        </div>
    </div>

</div>


.api-config {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 15px;
}

/* Container */
.api-config {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 15px;
}

/* Row layout */
.form-row {
    display: flex;
    align-items: center;
    gap: 8px;
}

/* Label */
.inline-label {
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
}

/* URL input */
#apiUrl {
    flex: 1;
    padding: 8px 10px;
    border-radius: 6px;
    border: 1px solid #d0d0d0;
    font-size: 13px;
    outline: none;
}

#apiUrl:focus {
    border-color: #007acc;
}

/* Send button */
.send-btn {
    padding: 6px 14px;
    border: none;
    border-radius: 6px;
    background-color: #007acc;
    color: white;
    font-size: 13px;
    cursor: pointer;
}

.send-btn:hover {
    background-color: #005f99;
}

/* Token wrapper */
.token-wrapper {
    position: relative;
    flex: 1;
}

/* Token input */
#authTokenInput {
    width: 100%;
    padding: 8px 35px 8px 10px; /* space for eye */
    border-radius: 6px;
    border: 1px solid #d0d0d0;
    font-size: 13px;
    outline: none;
}

#authTokenInput:focus {
    border-color: #007acc;
}

/* Eye icon (FontAwesome) */
#authTokenIcon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    color: #666;
    cursor: pointer;
}

#authTokenIcon:hover {
    color: #007acc;
}


