-- START SPRING SECURITY TABLES
create table users(
    username varchar(50) not null primary key,
    password varchar(500) not null,
    enabled boolean not null
);

create table authorities (
    username varchar(50) not null,
    authority varchar(50) not null,
    constraint fk_authorities_users foreign key(username) references users(username)
);

create unique index ix_auth_username on authorities (username, authority);
-- END SPRING SECURITY TABLES

CREATE TABLE `user` (
    `user_id` int,
    `name` varchar(255),
    `phone` varchar(14),
    `email` varchar(255),
    `display_name` varchar(50),
    PRIMARY KEY (`user_id`),
    FOREIGN KEY (`display_name`) REFERENCES `users`(`username`)
);

CREATE TABLE `ticket` (
    `ticket_id` int,
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
    `action_id` int,
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
