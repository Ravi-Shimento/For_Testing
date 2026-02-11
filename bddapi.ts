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

    console.log("Spec URL updated successfully");
}


