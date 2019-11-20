-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema resource_allocation
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema resource_allocation
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS `resource_allocation` DEFAULT CHARACTER SET utf8 ;
USE `resource_allocation` ;

-- -----------------------------------------------------
-- Table `resource_allocation`.`sub_business`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`sub_business` (
  `sub_business_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`sub_business_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`factory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`factory` (
  `factory_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `sub_business_id` INT NOT NULL,
  `shift1` TINYINT NULL,
  `shift2` TINYINT NULL,
  `shift3` TINYINT NULL,
  PRIMARY KEY (`factory_id`),
  CONSTRAINT `fk_factory_sub_business1`
    FOREIGN KEY (`sub_business_id`)
    REFERENCES `resource_allocation`.`sub_business` (`sub_business_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`operation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`operation` (
  `operation_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`operation_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`task` (
  `task_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`task_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`shift`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`shift` (
  `shift_id` INT NOT NULL AUTO_INCREMENT,
  `number` INT NULL,
  `hours_from` TIME NULL,
  `to` TIME NULL,
  PRIMARY KEY (`shift_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`operator`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`operator` (
  `operator_id` INT NOT NULL AUTO_INCREMENT,
  `sso` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `role` VARCHAR(45) NULL,
  `shift_id` INT NULL,
  PRIMARY KEY (`operator_id`),
  CONSTRAINT `shift_operators`
    FOREIGN KEY (`shift_id`)
    REFERENCES `resource_allocation`.`shift` (`shift_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`production_line`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`production_line` (
  `production_line_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`production_line_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`factory_to_prod`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`factory_to_prod` (
  `factory_to_prod_id` INT NOT NULL AUTO_INCREMENT,
  `factory_id` INT NOT NULL,
  `production_line_id` INT NOT NULL,
  PRIMARY KEY (`factory_to_prod_id`),
  CONSTRAINT `fk_factory_prod_factory1`
    FOREIGN KEY (`factory_id`)
    REFERENCES `resource_allocation`.`factory` (`factory_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_factory_prod_production_line1`
    FOREIGN KEY (`production_line_id`)
    REFERENCES `resource_allocation`.`production_line` (`production_line_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`operation_to_prodline`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`operation_to_prodline` (
  `operation_to_prodline_id` INT NOT NULL AUTO_INCREMENT,
  `operations_id` INT NOT NULL,
  `production_line_id` INT NOT NULL,
  PRIMARY KEY (`operation_to_prodline_id`),
  CONSTRAINT `fk_operations_prodline_operations1`
    FOREIGN KEY (`operations_id`)
    REFERENCES `resource_allocation`.`operation` (`operation_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_operations_prodline_production_line1`
    FOREIGN KEY (`production_line_id`)
    REFERENCES `resource_allocation`.`production_line` (`production_line_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`operation_to_task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`operation_to_task` (
  `operation_to_task_id` INT NOT NULL AUTO_INCREMENT,
  `task_id` INT NOT NULL,
  `operation_id` INT NOT NULL,
  PRIMARY KEY (`operation_to_task_id`),
  CONSTRAINT `fk_operations_tasks_tasks1`
    FOREIGN KEY (`task_id`)
    REFERENCES `resource_allocation`.`task` (`task_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_operations_tasks_operations1`
    FOREIGN KEY (`operation_id`)
    REFERENCES `resource_allocation`.`operation` (`operation_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`requirement_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`requirement_type` (
  `requirement_id` INT NOT NULL,
  `requirement_type` VARCHAR(45) NULL,
  PRIMARY KEY (`requirement_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`requirement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`requirement` (
  `requirement_id` INT NOT NULL AUTO_INCREMENT,
  `type_id` INT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`requirement_id`),
  CONSTRAINT `type_requirements`
    FOREIGN KEY (`type_id`)
    REFERENCES `resource_allocation`.`requirement_type` (`requirement_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`requirement_to_task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`requirement_to_task` (
  `requirement_to_task_id` INT NOT NULL AUTO_INCREMENT,
  `task_id` INT NOT NULL,
  `requirement_id` INT NOT NULL,
  PRIMARY KEY (`requirement_to_task_id`),
  CONSTRAINT `fk_requirement_per_task_tasks1`
    FOREIGN KEY (`task_id`)
    REFERENCES `resource_allocation`.`task` (`task_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_requirement_per_task_requirements1`
    FOREIGN KEY (`requirement_id`)
    REFERENCES `resource_allocation`.`requirement` (`requirement_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`capability`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`capability` (
  `capability_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`capability_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`operator_capability`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`operator_capability` (
  `operators_capability_id` INT NOT NULL AUTO_INCREMENT,
  `operator_id` INT NULL,
  `capability_id` INT NULL,
  PRIMARY KEY (`operators_capability_id`),
  CONSTRAINT `operator_id`
    FOREIGN KEY (`operator_id`)
    REFERENCES `resource_allocation`.`operator` (`operator_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `capability_id`
    FOREIGN KEY (`capability_id`)
    REFERENCES `resource_allocation`.`capability` (`capability_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`unavailability_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`unavailability_type` (
  `unavailability_type_id` INT NOT NULL AUTO_INCREMENT,
  `unavailability_type` VARCHAR(45) NULL,
  PRIMARY KEY (`unavailability_type_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `resource_allocation`.`unavailability`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resource_allocation`.`unavailability` (
  `unavailability_id` INT NOT NULL,
  `operators_SSO` INT NULL,
  `type2_id` INT NULL,
  `startdate` DATETIME NULL,
  `starthour` TIME NULL,
  `finishdate` DATETIME NULL,
  `finishhour` TIME NULL,
  PRIMARY KEY (`unavailability_id`),
  CONSTRAINT `types_unavailability`
    FOREIGN KEY (`type2_id`)
    REFERENCES `resource_allocation`.`unavailability_type` (`unavailability_type_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `operators_unavailability`
    FOREIGN KEY (`operators_SSO`)
    REFERENCES `resource_allocation`.`operator` (`sso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
