create table customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15));

-- Query OK, 0 rows affected (0.32 sec)
show tables;
--     -> ;
-- MariaDB [test_mysql]> 
-- +----------------------+
-- | Tables_in_test_mysql |
-- +----------------------+
-- | customer             |
-- +----------------------+
-- 1 row in set (0.00 sec)

-- MariaDB [test_mysql]> 
describe customer;
-- +---------+-----------------+------+-----+---------+----------------+
-- | Field   | Type            | Null | Key | Default | Extra          |
-- +---------+-----------------+------+-----+---------+----------------+
-- | id      | int(6) unsigned | NO   | PRI | NULL    | auto_increment |
-- | name    | varchar(50)     | NO   |     | NULL    |                |
-- | address | varchar(100)    | NO   |     | NULL    |                |
-- | phone   | varchar(15)     | YES  |     | NULL    |                |
-- +---------+-----------------+------+-----+---------+----------------+
-- 4 rows in set (0.03 sec)
