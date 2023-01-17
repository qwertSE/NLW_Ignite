import Fastify from 'fastify';

const app = Fastify()
/* 
 * Métodos HTTP: 
Get - Buscar algo, 
Post - Criar algo, 
Put - atualizar algo, 
Patch - Atualizar um item especifico, 
Delete - Deletar algo que já existe. 
*/

/* Rotas */
app.get('/', () => {
    return 'Hello World'
})

app.listen({
    port: 3333
})