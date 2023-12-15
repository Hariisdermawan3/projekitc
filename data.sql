-- Active: 1695195074098@@127.0.0.1@3306@senibudaya
CREATE TABLE`senibudaya`.`users` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `nama` VARCHAR(255) NOT NULL,
        `username` VARCHAR(255) NOT NULL,
        `email` VARCHAR(255) NOT NULL,
        `password` VARCHAR(255) NOT NULL,
        `role` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

CREATE TABLE`senibudaya`.`ulasan` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `username` VARCHAR(255) NOT NULL,
        `paragraf` TEXT NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;