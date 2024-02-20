const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    
    if (path === '/script.js') {
        // Aqui você pode definir qualquer lógica de autenticação
        // Por exemplo, você poderia verificar a senha enviada pelo cliente
        // e responder apenas com o conteúdo do script se a senha estiver correta

        const senhaCorreta = "123_mad_123";
        const senhaInserida = url.parse(req.url, true).query.senha;

        if (senhaInserida === senhaCorreta) {
            fs.readFile(__dirname + '/script.js', (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end(JSON.stringify(err));
                    return;
                }
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.end(data);
            });
        } else {
            res.writeHead(403);
            res.end("Acesso negado.");
        }
    } else {
        res.writeHead(404);
        res.end("Recurso não encontrado.");
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
