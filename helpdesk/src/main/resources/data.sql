INSERT INTO
    `user` (
        `user_id`,
        `username`,
        `password`,
        `name`,
        `phone`,
        `email`,
        `enabled`
    )
VALUES
    (
        1,
        'admin',
        '{bcrypt}$2a$10$e4jQHE8NgdXQaT9echVIa.AHzy4kMsg7QOYDBz2MujyfE1uq.CV4.',
        'admin',
        '3154678167',
        'susan@j.com',
        1
    );

INSERT INTO
    `user` (
        `user_id`,
        `username`,
        `password`,
        `name`,
        `phone`,
        `email`,
        `enabled`
    )
VALUES
    (
        2,
        'tech',
        '{bcrypt}$2a$10$VJ3isNlO5Ddl9DsOM9doQe9WYXBHtXT/RKMr2Upmw9Gcj9lKQiiDK',
        'tech',
        '8275635241',
        'sally@j.com',
        1
    );

INSERT INTO
    `user` (
        `user_id`,
        `username`,
        `password`,
        `name`,
        `phone`,
        `email`,
        `enabled`
    )
VALUES
    (
        3,
        'user',
        '{bcrypt}$2a$10$3cBzC.OUAqLW3sWhAb.zRuKeSWaIRhouOnj1og64og4jpvaAyGTNK',
        'user',
        '1234324564',
        'bob@j.com',
        1
    );

INSERT INTO
    `authority` (`authority_id`, `user`, `role`)
VALUES
    (1, 1, 'ROLE_USER');

INSERT INTO
    `authority` (`authority_id`, `user`, `role`)
VALUES
    (2, 2, 'ROLE_USER');

INSERT INTO
    `authority` (`authority_id`, `user`, `role`)
VALUES
    (3, 3, 'ROLE_USER');

INSERT INTO
    `authority` (`authority_id`, `user`, `role`)
VALUES
    (4, 1, 'ROLE_TECH');

INSERT INTO
    `authority` (`authority_id`, `user`, `role`)
VALUES
    (5, 2, 'ROLE_TECH');

INSERT INTO
    `authority` (`authority_id`, `user`, `role`)
VALUES
    (6, 1, 'ROLE_ADMIN');