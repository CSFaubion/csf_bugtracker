-- version 1
DROP TABLE IF EXISTS action;

DROP TABLE IF EXISTS ticket;

-- START SPRING SECURITY TABLES
DROP TABLE IF EXISTS authority;

DROP TABLE IF EXISTS user;

create table `user`(
    `user_id` int NOT NULL AUTO_INCREMENT,
    `username` varchar(50) NOT NULL,
    `password` varchar(500) NOT NULL,
    `name` varchar(255),
    `phone` varchar(14),
    `email` varchar(255),
    `enabled` boolean NOT NULL,
    PRIMARY KEY (`user_id`)
);
create unique index ix_auth_username on `user` (`name`);

create table `authority` (
    `authority_id` int NOT NULL AUTO_INCREMENT,
    `user` int NOT NULL,
    `role` varchar(50) NOT NULL,
    PRIMARY KEY(`authority_id`),
    UNIQUE INDEX `user_role_UNIQUE` (`user` ASC, `role` ASC) VISIBLE,
    CONSTRAINT `fk_authorities_users` FOREIGN KEY (`user`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);



-- END SPRING SECURITY TABLES
CREATE TABLE `ticket` (
    `ticket_id` int NOT NULL AUTO_INCREMENT,
    `user_id` int,
    `ticket_description` varchar(255),
    `ticket_category` varchar(255),
    `recent_action` int,
    `resolution` int,
    `date_created` datetime,
    PRIMARY KEY (`ticket_id`),
    FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`)
);

CREATE TABLE `action` (
    `action_id` int NOT NULL AUTO_INCREMENT,
    `user_id` int,
    `ticket_id` int,
    `time_spent` time,
    `action_purpose` varchar(255),
    `action_description` varchar(10000),
    `ticket_resolved` boolean,
    `last_update` datetime,
    PRIMARY KEY (`action_id`),
    FOREIGN KEY (`ticket_id`) REFERENCES `ticket`(`ticket_id`),
    FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`)
);