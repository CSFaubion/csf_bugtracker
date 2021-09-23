INSERT INTO `users` (`username`, `password`, `enabled`) VALUES ('user', '{bcrypt}$2a$10$3cBzC.OUAqLW3sWhAb.zRuKeSWaIRhouOnj1og64og4jpvaAyGTNK', 1);
-- password
INSERT INTO `users` (`username`, `password`, `enabled`) VALUES ('admin', '{bcrypt}$2a$10$e4jQHE8NgdXQaT9echVIa.AHzy4kMsg7QOYDBz2MujyfE1uq.CV4.', 1);
-- 4312745
INSERT INTO `users` (`username`, `password`, `enabled`) VALUES ('tech', '{bcrypt}$2a$10$VJ3isNlO5Ddl9DsOM9doQe9WYXBHtXT/RKMr2Upmw9Gcj9lKQiiDK', 1);
-- 3712967


INSERT INTO `authorities` (`username`, `authority`) VALUES ('user', 'USER');
INSERT INTO `authorities` (`username`, `authority`) VALUES ('admin', 'USER');
INSERT INTO `authorities` (`username`, `authority`) VALUES ('admin', 'ADMIN');
INSERT INTO `authorities` (`username`, `authority`) VALUES ('admin', 'TECHNICIAN');
INSERT INTO `authorities` (`username`, `authority`) VALUES ('tech', 'TECHNICIAN');
INSERT INTO `authorities` (`username`, `authority`) VALUES ('tech', 'USER');
