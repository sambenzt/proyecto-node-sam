CREATE SCHEMA proyectoIntegrador;

USE proyectoIntegrador;

CREATE TABLE usuarios( 
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(225),
email VARCHAR(225) UNIQUE,
nacimiento date,
contraseña VARCHAR(225) NOT NULL,
telefono VARCHAR(20),
imagen VARCHAR(225)
);


CREATE TABLE posteos(
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
imagen VARCHAR(225),
descripcion VARCHAR(250),
fecha_de_creacion date,
usuario_id INT UNSIGNED,
FOREIGN KEY(usuario_id) REFERENCES usuarios(id)
);


CREATE TABLE comentarios(
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
comentario VARCHAR(250),
fecha_de_creacion DATE,
usuario_id INT UNSIGNED,
FOREIGN KEY(usuario_id) REFERENCES usuarios(id),
posteo_id INT UNSIGNED,
FOREIGN KEY(posteo_id) REFERENCES posteos(id)
);


ALTER TABLE usuarios
ADD imagen VARCHAR(225);


ALTER TABLE usuarios 
DROP imagen;

DELETE FROM usuarios WHERE id = 1;


INSERT INTO usuarios values
(DEFAULT, 'Martina Unaunzaga', 'mar@gmail.com', '2001-11-18', 'holahola', '1167257560', '/imagenes/perfil.jpg'),
(DEFAULT, 'Lautaro Espiño', 'laue@hotmail.com', '2000-11-18', 'loros', '1144352578', '/imagenes/hola.jpg'),
(DEFAULT, 'Julieta Rodriguez', 'jular@gmail.com', '2001-10-02', '1234j', '1122681396', '/imagenes/fot.jpg'),
(DEFAULT, 'Martina Liparini', 'mlipa@yahoo.com', '2001-10-08', 'rocco', '1149971187', '/imagenes/jamaica.jpg'),
(DEFAULT, 'José Gimenez', 'josecito@hotmail.com', '1997-06-23', 'pajaros', '1199786534', '/imagenes/porfile.jpg');




INSERT INTO posteos values
(DEFAULT, '/images/wine.jpg', 'El mejor vino que vas a probar en tu vida', '2021-09-11', 1),
(DEFAULT, '/images/losvinos.jpg', 'Siempre con un tinto en la mano', '2021-07-23', 3),
(DEFAULT, '/images/tinto.jpg', 'Para este domingo que mejor?', '2021-08-14', 5),
(DEFAULT, '/images/rutini.jpg', 'Tomate un Rutini', '2021-06-18', 2),
(DEFAULT, '/images/blanco.jpg', 'Siempre brindando con un vino blanco', '2021-08-25', 5),
(DEFAULT, '/images/rosado.jpg', 'Te gusta el rosado?', '2021-07-05', 4),
(DEFAULT, '/images/losmejores.jpg', 'Los mejores vinos los tenemos nosotros', '2021-06-28', 1),
(DEFAULT, '/images/malbec.jpg', 'Sabado con Malbec', '2021-07-19', 3),
(DEFAULT, '/images/vinos.jpg', 'Disfruta de unas copas con amigos', '2021-06-06', 2),
(DEFAULT, '/images/tuvino.jpg', 'El vino que estas buscando', '2021-05-20', 1);

INSERT INTO comentarios values
(DEFAULT, 'Muy buen vino la verdad', '2021-08-11', 3, 1),
(DEFAULT, 'La calidad no es muy buena', '2021-07-15', 4, 1),
(DEFAULT, 'El mas rico!', '2021-10-23', 1, 1),
(DEFAULT, 'Demasiado caro', '2021-09-19', 2, 1),
(DEFAULT, '@flor te gusta??', '2021-10-23', 1, 2),
(DEFAULT, 'Lo voy a comprar ya mismo', '2021-10-23', 2, 2),
(DEFAULT, 'El precio es muy elevado.', '2021-10-23', 3, 2),
(DEFAULT, 'Me encanta este vino!', '2021-10-23', 4, 2),
(DEFAULT, 'Buenisimooooo', '2021-10-23', 1, 3),
(DEFAULT, 'Lo tendria que probar...', '2021-10-23', 2, 3),
(DEFAULT, 'Lo probe y no me parecio tan bueno', '2021-10-23', 3, 3),
(DEFAULT, 'Quiero una copaa', '2021-10-23', 4, 3),
(DEFAULT, 'Lo voy a probar', '2021-10-23', 1, 4),
(DEFAULT, 'No me gustó', '2021-10-23', 2, 4),
(DEFAULT, 'Quiero el rosadoo', '2021-10-23', 3, 4),
(DEFAULT, 'Quiero probarlo', '2021-10-23', 4, 4),
(DEFAULT, '@tomas compro uno para hoy?', '2021-10-23', 1, 5),
(DEFAULT, 'Prefiero un Malbec', '2021-10-23', 2, 5),
(DEFAULT, 'El mas rico!', '2021-10-23', 3, 5),
(DEFAULT, 'Muy buen vino', '2021-10-23', 4, 5),
(DEFAULT, 'Quiero mill', '2021-10-23', 1, 6),
(DEFAULT, 'Ayer compré el mismo', '2021-10-23', 2, 6),
(DEFAULT, '@josefina este es para vos!', '2021-10-23', 3, 6),
(DEFAULT, 'Podrá ser tan bueno?', '2021-10-23', 4, 6),
(DEFAULT, 'Amo!!', '2021-10-23', 5, 7),
(DEFAULT, 'Quieroo', '2021-10-23', 5, 7),
(DEFAULT, 'Siiiiii', '2021-10-23', 5, 7),
(DEFAULT, 'No lo recomiendo', '2021-10-23', 1, 7),
(DEFAULT, 'No es tan rico', '2021-10-23', 2, 8),
(DEFAULT, 'El dia se presta para eso', '2021-10-23', 3, 8),
(DEFAULT, 'Delicioso', '2021-10-23', 4, 8),
(DEFAULT, '@julianr lo probamos??', '2021-10-23', 5, 8),
(DEFAULT, 'Que ganas de un vinitoo', '2021-10-23', 1, 9),
(DEFAULT, 'Perdon pero yo soy fan del blanco', '2021-10-23', 2, 9),
(DEFAULT, 'Siempre elijo el mismo', '2021-10-23', 3, 9),
(DEFAULT, '@maruna el sabado con estee', '2021-10-23', 4, 9),
(DEFAULT, 'Quiero todosss', '2021-10-23', 5, 10),
(DEFAULT, 'No me gustó tanto', '2021-10-23', 1, 10),
(DEFAULT, 'Riquisimo', '2021-10-23', 2, 10),
(DEFAULT, 'Voy a probarlo', '2021-10-23', 3, 10);










