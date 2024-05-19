exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        { 
          book_id: 1,
          title: 'Cien Años de Soledad', 
          author: 'Gabriel García Márquez', 
          publisher: 'Editorial Sudamericana', 
          year_published: 1967, 
          genre: 'Novela', 
          price: 15.99, 
          stock_quantity: 100 
        },
        { 
          book_id: 2,
          title: 'Don Quijote de la Mancha', 
          author: 'Miguel de Cervantes', 
          publisher: 'Francisco de Robles', 
          year_published: 1605, 
          genre: 'Novela', 
          price: 18.50, 
          stock_quantity: 50 
        },
        { 
          book_id: 3,
          title: 'La Sombra del Viento', 
          author: 'Carlos Ruiz Zafón', 
          publisher: 'Planeta', 
          year_published: 2001, 
          genre: 'Misterio', 
          price: 20.00, 
          stock_quantity: 75 
        },
        { 
          book_id: 4,
          title: 'El Amor en los Tiempos del Cólera', 
          author: 'Gabriel García Márquez', 
          publisher: 'Editorial Oveja Negra', 
          year_published: 1985, 
          genre: 'Novela', 
          price: 17.99, 
          stock_quantity: 60 
        },
        { 
          book_id: 5,
          title: 'Rayuela', 
          author: 'Julio Cortázar', 
          publisher: 'Editorial Sudamericana', 
          year_published: 1963, 
          genre: 'Novela', 
          price: 14.50, 
          stock_quantity: 120 
        },
        { 
          book_id: 6,
          title: 'El Aleph', 
          author: 'Jorge Luis Borges', 
          publisher: 'Emecé Editores', 
          year_published: 1949, 
          genre: 'Cuento', 
          price: 13.99, 
          stock_quantity: 90 
        },
        { 
          book_id: 7,
          title: 'Ficciones', 
          author: 'Jorge Luis Borges', 
          publisher: 'Sur', 
          year_published: 1944, 
          genre: 'Cuento', 
          price: 12.99, 
          stock_quantity: 80 
        },
        { 
          book_id: 8,
          title: 'Pedro Páramo', 
          author: 'Juan Rulfo', 
          publisher: 'Fondo de Cultura Económica', 
          year_published: 1955, 
          genre: 'Novela', 
          price: 11.99, 
          stock_quantity: 70 
        },
        { 
          book_id: 9,
          title: 'La Casa de los Espíritus', 
          author: 'Isabel Allende', 
          publisher: 'Plaza & Janés', 
          year_published: 1982, 
          genre: 'Novela', 
          price: 16.50, 
          stock_quantity: 85 
        },
        { 
          book_id: 10,
          title: 'Como Agua para Chocolate', 
          author: 'Laura Esquivel', 
          publisher: 'Editorial Planeta', 
          year_published: 1989, 
          genre: 'Novela', 
          price: 19.99, 
          stock_quantity: 65 
        }
      ]);
    });
};