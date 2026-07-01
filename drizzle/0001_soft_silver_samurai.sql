CREATE TABLE `analyses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`teamId` int NOT NULL,
	`objective` varchar(500) NOT NULL,
	`budget` decimal(15,2),
	`status` enum('pending','processing','completed','failed') NOT NULL DEFAULT 'pending',
	`scoutInsight` text,
	`performanceInsight` text,
	`tacticsInsight` text,
	`injuryInsight` text,
	`financeInsight` text,
	`executiveRecommendation` text,
	`confidenceScore` decimal(5,2),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `analyses_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `playerMetrics` (
	`id` int AUTO_INCREMENT NOT NULL,
	`playerId` int NOT NULL,
	`season` varchar(20) NOT NULL,
	`appearances` int NOT NULL,
	`minutes` int NOT NULL,
	`goals` int NOT NULL,
	`assists` int NOT NULL,
	`passes` int NOT NULL,
	`passAccuracy` decimal(5,2),
	`tackles` int NOT NULL,
	`interceptions` int NOT NULL,
	`fouls` int NOT NULL,
	`yellowCards` int NOT NULL,
	`redCards` int NOT NULL,
	`expectedGoals` decimal(5,2),
	`expectedAssists` decimal(5,2),
	`dribbles` int NOT NULL,
	`dribbleSuccess` decimal(5,2),
	`shotAccuracy` decimal(5,2),
	`aerialWins` int NOT NULL,
	`aerialWinPercentage` decimal(5,2),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `playerMetrics_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `playerSimilarity` (
	`id` int AUTO_INCREMENT NOT NULL,
	`playerId` int NOT NULL,
	`similarPlayerId` int NOT NULL,
	`similarityScore` decimal(5,2),
	`attributes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `playerSimilarity_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `playerWorkload` (
	`id` int AUTO_INCREMENT NOT NULL,
	`playerId` int NOT NULL,
	`season` varchar(20) NOT NULL,
	`minutesPerWeek` decimal(6,2),
	`gamesPerWeek` decimal(4,2),
	`fatigueScore` decimal(5,2),
	`injuryRisk` decimal(5,2),
	`injuryHistory` text,
	`recoveryTime` int,
	`lastInjury` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `playerWorkload_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `players` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`position` varchar(50) NOT NULL,
	`age` int NOT NULL,
	`nationality` varchar(100) NOT NULL,
	`currentTeamId` int,
	`marketValue` decimal(15,2),
	`salary` decimal(15,2),
	`jerseyNumber` int,
	`height` decimal(5,2),
	`weight` decimal(5,2),
	`preferredFoot` varchar(10),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `players_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `queries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`question` text NOT NULL,
	`response` text,
	`agentType` varchar(50),
	`confidenceScore` decimal(5,2),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `queries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `scenarios` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`analysisId` int,
	`scenarioName` varchar(255) NOT NULL,
	`scenarioType` varchar(100) NOT NULL,
	`parameters` text,
	`results` text,
	`confidenceIntervals` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `scenarios_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `teams` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`league` varchar(100) NOT NULL,
	`country` varchar(100) NOT NULL,
	`budget` decimal(15,2),
	`formation` varchar(50),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `teams_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `transferValues` (
	`id` int AUTO_INCREMENT NOT NULL,
	`playerId` int NOT NULL,
	`predictedValue` decimal(15,2),
	`confidence` decimal(5,2),
	`factors` text,
	`season` varchar(20) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `transferValues_id` PRIMARY KEY(`id`)
);
