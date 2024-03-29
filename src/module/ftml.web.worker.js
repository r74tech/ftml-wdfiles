let ftml = require("@vscode-ftml/ftml-wasm");
ftml.init();
onmessage = async (e) => {
    if (!ftml.ready) await ftml.loading;
    const ftmlSource = e.data;
    const {
        html,
        styles 
    } = ftml.renderHTML(ftmlSource);
    postMessage({
        html,
        styles 
    });
}