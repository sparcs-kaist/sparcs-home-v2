/**
 * @name seminars
 * @author lannstark
 * @description
 *  - id : Primary Key
 *  - title : Seminar title
 *  - speaker: Seminar spekaer
 *  - file_name: File name
 *  - created_date : Created date
 */

use sparcs_home;

CREATE TABLE IF NOT EXISTS `seminars` (
  `id` tinyint(1) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `speaker` varchar(30) NOT NULL,
  `file_name` varchar(80) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
