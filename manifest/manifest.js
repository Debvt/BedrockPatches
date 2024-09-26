let type = null;
function generateUUID() {
    // Generate a UUID using browser crypto functions
    return ([1e7] + '-1e3-4e3-8e3-' + [1e11]).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


function manifest() {
    // Generate UUIDs for the manifest
    const packUUID = generateUUID();
    const moduleUUID = generateUUID();

    // Template for the manifest with placeholders replaced
    let template = `{
        "format_version": 2,
        "header": {
            "name": "Bedrock Patches Pack",
            "description": "Bedrock Patches Pack",
            "uuid": "${packUUID}",
            "version": [
                1,
                0,
                0
            ],
            "min_engine_version": [
                1,
                20,
                0
            ]
        },
        "modules": [
            {
                "type": "${type}",
                "uuid": "${moduleUUID}",
                "version": [
                    1,
                    0,
                    0
                ]
            }
        ],
        "metadata": {
            "authors": [
                "Bedrock Patches"
            ],
            "url": [
                "https://Debvt.github.io/BedrockPatches/"
            ]
        }
    }`;

    return template; // Return the final manifest template
}
