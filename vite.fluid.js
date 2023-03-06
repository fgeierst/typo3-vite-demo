export default function ViteFluid() {
    return {
        name: 'ViteFluid',
        enforce: 'post',
        configureServer(server) {
            const fullReload = () => {
                server.ws.send({type: 'full-reload', path: '*'});
            };
            server.watcher.on('add', fullReload);
            server.watcher.on('change', (file) =>{
                if (file.endsWith('.html') || file.endsWith('.typoscript') || file.endsWith('.yaml') || file.endsWith('.php')) {
                    fullReload();
                }
            });
        },
    }
}
