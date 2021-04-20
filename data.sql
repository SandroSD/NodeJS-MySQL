INSERT INTO `roles`
    VALUES  ('ADMIN', 'Administrador', 'Perfil Administrador.', 1),
            ('USER', 'Usuario', 'Perfil Usuario.', 1);

INSERT INTO `permissions`
    VALUES  ('PERSONAS_GRID', 'ADMIN'),
            ('PERSONAS_GET_BY_ID', 'ADMIN'),
            ('PERSONAS_CREATE', 'ADMIN'),
            ('PERSONAS_UPDATE', 'ADMIN'),
            ('PERSONAS_REMOVE', 'ADMIN'),
            ('PERSONAS_GRID', 'USER'),
            ('PERSONAS_GET_BY_ID', 'USER');

INSERT INTO `personas`
    VALUES  (1, 'Roberto', 'Lorenzo', 'rlorenzo@mail.com', '$2b$10$Phid/SQ1seFysD5NyE0ppOdAPTXNj.T23sUknq4/np5XpIq5w2gsu', '1991-03-21', NULL, 'ADMIN', 1),
            (2, 'Fulano', 'De Tal', 'fdetal@mail.com', '$2b$10$Phid/SQ1seFysD5NyE0ppOdAPTXNj.T23sUknq4/np5XpIq5w2gsu', '1990-12-03', 'Calle 123', 'USER', 0);
