INSERT INTO `users` (`username`, `password`, `enabled`) VALUES ('user', '{noop}userpass', 1);
INSERT INTO `users` (`username`, `password`, `enabled`) VALUES ('admin', '{noop}adminpass', 1);
INSERT INTO `users` (`username`, `password`, `enabled`) VALUES ('tech', '{noop}techpass', 1);

INSERT INTO `authorities` (`username`, `authority`) VALUES ('user', 'USER');
INSERT INTO `authorities` (`username`, `authority`) VALUES ('admin', 'USER');
INSERT INTO `authorities` (`username`, `authority`) VALUES ('admin', 'ADMIN');
INSERT INTO `authorities` (`username`, `authority`) VALUES ('admin', 'TECHNICIAN');
INSERT INTO `authorities` (`username`, `authority`) VALUES ('tech', 'TECHNICIAN');
INSERT INTO `authorities` (`username`, `authority`) VALUES ('tech', 'USER');

INSERT INTO `user` (`user_id`, `name`, `phone`, `email`, `display_name`) VALUES (1, 'david', '7123456789', 'dave@daveman.com', 'user');
INSERT INTO `user` (`user_id`, `name`, `phone`, `email`, `display_name`) VALUES (2, 'sally', '4561234567', 'sally@sallygirl.com', 'tech');
INSERT INTO `user` (`user_id`, `name`, `phone`, `email`, `display_name`) VALUES (3, 'Mike McMan', '1245634569', 'MrMcMan@gmail.com', 'admin');

INSERT INTO `ticket` (`ticket_id`, `user_id`, `ticket_description`, `ticket_category`, `recent_action`, `resolution`, `date_created`) VALUES (1, 1, 'problem with lorem ipsum', 'bug', 3, 1, '2020/01/02 11:14:00');
INSERT INTO `ticket` (`ticket_id`, `user_id`, `ticket_description`, `ticket_category`, `recent_action`, `resolution`, `date_created`) VALUES (2, 2, 'cannot see the future', 'bug', 4, 0, '2020/05/15 01:15:00');
INSERT INTO `ticket` (`ticket_id`, `user_id`, `ticket_description`, `ticket_category`, `recent_action`, `resolution`, `date_created`) VALUES (3, 2, 'new simpler system feature. Maybe it should print gold.', 'feature', 5, 0, '2021/01/10 03:00:00');
INSERT INTO `ticket` (`ticket_id`, `user_id`, `ticket_description`, `ticket_category`, `recent_action`, `resolution`, `date_created`) VALUES (4, 3, 'tech needs to have more reasonable demands.', 'bug', 6, 0, '2021/01/11 08:21:00');

INSERT INTO `action` (`action_id`, `user_id`, `ticket_id`, `time_spent`, `action_purpose`, `action_description`, `ticket_resolved`, `last_update`) VALUES (1, 1, 1, '00:00:01', 'Create Ticket', 'Ticket Created', 0, '2020/01/02 11:14:00');
INSERT INTO `action` (`action_id`, `user_id`, `ticket_id`, `time_spent`, `action_purpose`, `action_description`, `ticket_resolved`, `last_update`) VALUES (2, 2, 1, '12:45:00', 'Confirm Bug', 'Attempted to confirm lorem ipsum bug.', 0, '2020/01/12 12:14:05');
INSERT INTO `action` (`action_id`, `user_id`, `ticket_id`, `time_spent`, `action_purpose`, `action_description`, `ticket_resolved`, `last_update`) VALUES (3, 2, 1, '99:12:34', 'Bug Fixing', 'Fixed lorem ipsum bug. Replaced with living language.', 1, '2020/01/32 15:40:10');
INSERT INTO `action` (`action_id`, `user_id`, `ticket_id`, `time_spent`, `action_purpose`, `action_description`, `ticket_resolved`, `last_update`) VALUES (4, 2, 2, '00:00:01', 'Create Ticket', 'Ticket Created', 0, '2020/05/15 01:15:00');
INSERT INTO `action` (`action_id`, `user_id`, `ticket_id`, `time_spent`, `action_purpose`, `action_description`, `ticket_resolved`, `last_update`) VALUES (5, 2, 3, '00:00:01', 'Create Ticket', 'Ticket Created', 1, '2021/01/10 03:00:00');
INSERT INTO `action` (`action_id`, `user_id`, `ticket_id`, `time_spent`, `action_purpose`, `action_description`, `ticket_resolved`, `last_update`) VALUES (6, 3, 4, '00:00:01', 'Create Ticket', 'Ticket Created', 2, '2021/01/11 08:21:00');
