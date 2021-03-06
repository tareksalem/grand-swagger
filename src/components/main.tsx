import {Server} from "grandjs";
const {View} = require("grandjs");

const SwaggerComponent = (options:{docs: {[key:string]:any}}) => {
    return (
        <html lang={"en"}>
        <head>
        <meta charset="utf-8"/>
        <link rel="stylesheet" type="text/css" href="/swagger-assets/swagger-ui.css"/>
        </head>
        <body>
        <div id="swagger-ui"></div>
            <script src="/swagger-assets/swagger-ui-bundle.js"></script>
            <script src="/swagger-assets/swagger-ui-standalone-preset.js"></script>
            <script>
            {`
                window.onload = function() {
                    let ui = SwaggerUIBundle({
                        spec: ${JSON.stringify(options.docs)},
                        dom_id: '#swagger-ui',
                        deepLinking: true,
                        layout: 'StandaloneLayout',
                        presets: [
                          SwaggerUIBundle.presets.apis,
                          SwaggerUIStandalonePreset
                        ],
                        plugins: [
                            SwaggerUIBundle.plugins.DownloadUrl
                        ],
                      })
                    
                      window.ui = ui
                  }
            `}
            </script>
        </body>
        </html>
    )
}

module.exports = SwaggerComponent;