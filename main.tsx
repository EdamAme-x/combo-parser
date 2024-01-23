/** @jsx React.createElement */
import { WebUI } from "https://deno.land/x/webui@2.4.4/mod.ts";
import React from "https://esm.sh/react@18.2.0";
import * as ReactServer from "https://esm.sh/react-dom@18.2.0/server";

const mainWindow = new WebUI();
mainWindow.setPort(2189);
mainWindow.setIcon('<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>hacker-solid</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="Q3_icons" data-name="Q3 icons"> <g> <path d="M24,30a60.3,60.3,0,0,1-13-1.3L7,27.6V40.2a1.9,1.9,0,0,0,1.5,1.9l12,2.9a2.4,2.4,0,0,0,2.1-.8L24,42.5l1.4,1.7A2.1,2.1,0,0,0,27,45h.5l12-2.9A1.9,1.9,0,0,0,41,40.2V27.6l-4,1.1A60.3,60.3,0,0,1,24,30Zm-7,8c-2,0-4-1.9-4-3s2-1,4-1,4,.9,4,2S19,38,17,38Zm14,0c-2,0-4-.9-4-2s2-2,4-2,4-.1,4,1S33,38,31,38Z"></path> <path d="M39.4,16,37.3,6.2A4,4,0,0,0,33.4,3H29.1a3.9,3.9,0,0,0-3.4,1.9L24,7.8,22.3,4.9A3.9,3.9,0,0,0,18.9,3H14.6a4,4,0,0,0-3.9,3.2L8.6,16C4.5,17.3,2,19,2,21c0,3.9,9.8,7,22,7s22-3.1,22-7C46,19,43.5,17.3,39.4,16Z"></path> </g> </g> </g> </g></svg>', 'image/svg+xml');
mainWindow.setSize(400, 400);

// @ts-ignore: <lib side error>
mainWindow.show(ReactServer.renderToString(<html>
    <head>
        <title>combo parser</title>
    </head>
    <body>
        <div>
            wip
        </div>
    </body>
</html>));

await WebUI.wait();