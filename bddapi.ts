import * as yaml from 'js-yaml';

function extractServerUrl(specContent: string | null): string | undefined {
    if (!specContent) return;

    try {
        const spec = yaml.load(specContent) as any;

        if (spec?.servers?.length > 0) {
            return spec.servers[0].url;
        }

        if (spec?.host) {
            const scheme = spec.schemes?.[0] ?? 'https';
            const basePath = spec.basePath ?? '';
            return `${scheme}://${spec.host}${basePath}`;
        }
    } catch (e) {
        console.error('Failed to parse spec', e);
    }
}


📍 MODIFY generateBDD() (inside it, before axios call)

const serverUrlFromSpec = extractServerUrl(specContent);

📍 AFTER extracting URL → send to webview

if (serverUrlFromSpec && BDDPanel.currentPanel) {
    BDDPanel.currentPanel.webview.postMessage({
        type: 'setBaseApiUrl',
        baseApiUrl: serverUrlFromSpec
    });
}


🔴 2. src/commands/webview/bdd_webview/bddWebViewContent.ts


window.addEventListener('message', event => {
    const message = event.data;

    if (message.type === 'setBaseApiUrl') {
        const input = document.getElementById('apiUrlInput');
        if (input && !input.value) {
            input.value = message.baseApiUrl;
        }
    }
});

