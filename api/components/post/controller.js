const TABLA = 'post';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        //store = require('../../../store/dummy');
        store = require('../../../store/mysql');
    }

    function list() {
        return store.list(TABLA);
    }
    async function upsert(body) {
        const post = {
            name: body.name,
            body: body.body,
        }

        if (body.id) {
            post.id = body.id;
        } else {
            post.id = nanoid();
        }
        return store.upsert(TABLA, post);
        console.log(post);
    }

    return {
        list,
        upsert
    };
}