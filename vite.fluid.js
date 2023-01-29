export default function ViteFluid() {
    return {
        name: 'ViteFluid',
        enforce: 'post',
        configureServer(server) {
            const fullReload = () => {
                server.ws.send({type: 'full-reload', path: '*'});
            };
            server.watcher.add(['./**/*.html', './**/*.typoscript', './**/*.yaml', './**/*.php']);
            server.watcher.on('add', fullReload);
            server.watcher.on('change', fullReload);
        },
    }
}
