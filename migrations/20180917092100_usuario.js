exports.up = function(knex, Promise) {  
    return Promise.all([
      knex.schema.createTable('usuarios', function(table){
        table.string('fone_usuario');
        table.string('nome_usuario');
        table.boolean('email_verificado').defaultTo(false);
        table.string('email_usuario');
        table.string('senha_usuario');
        table.string('tipo_usuario');
        table.string('cargo_usuario');
        table.increments('id_usuario').primary().unsigned();
        table.timestamps();
      })
    ])
};

exports.down = function(knex, Promise) {  
    return Promise.all([
       knex.schema.dropTable('usuarios')
    ])
};