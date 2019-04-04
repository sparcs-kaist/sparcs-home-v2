/**
 * @name projects
 * @author lannstark
 * @description
 *  - id : Primary Key
 *  - title : Project title
 *  - pm : Project manager
 *  - explanation : Project explanation
 *  - homepage_url : Homepage URL
 *  - github_url : github URL
 *  - created_date : Created date
 */

use sparcs_home;

CREATE TABLE IF NOT EXISTS `projects` (
  `id` tinyint(1) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `pm` varchar(20) NOT NULL,
  `explanation` text NOT NULL,
  `homepage_url` varchar(100),
  `github_url` varchar(100),
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

