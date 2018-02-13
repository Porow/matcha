-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  mar. 13 fév. 2018 à 13:25
-- Version du serveur :  5.6.35
-- Version de PHP :  7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `matcha`
--

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `user_id` int(1) NOT NULL,
  `category` varchar(50) NOT NULL,
  `data` longtext NOT NULL,
  `update_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_target` int(11) NOT NULL,
  `is_checked` int(11) NOT NULL DEFAULT '0',
  `created_at` time NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `notifications`
--

INSERT INTO `notifications` (`id`, `type`, `user_id`, `user_target`, `is_checked`, `created_at`) VALUES
(1, 'likes', 2, 1, 0, '00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `reports`
--

CREATE TABLE `reports` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_target` int(11) NOT NULL,
  `description` longtext NOT NULL,
  `category` enum('persecution','offensive','spam','picture_unsuitable') NOT NULL,
  `status` enum('En cours','Terminé','','') NOT NULL,
  `admin_action` int(11) DEFAULT NULL,
  `resolved_by` varchar(50) NOT NULL,
  `resolved_at` date NOT NULL,
  `create_at` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `reports`
--

INSERT INTO `reports` (`id`, `user_id`, `user_target`, `description`, `category`, `status`, `admin_action`, `resolved_by`, `resolved_at`, `create_at`) VALUES
(1, 56, 100, '', 'offensive', 'Terminé', 0, 'Warren', '2018-02-10', '2018-02-09');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `identifiant` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` char(1) DEFAULT NULL,
  `orientation` varchar(15) DEFAULT NULL,
  `biography` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `profile_picture` longtext,
  `firstname` varchar(40) DEFAULT NULL,
  `lastname` varchar(40) DEFAULT NULL,
  `relationship` varchar(50) NOT NULL,
  `rating` int(5) NOT NULL DEFAULT '0',
  `age` int(1) NOT NULL,
  `level` int(11) NOT NULL DEFAULT '1',
  `status` int(11) NOT NULL,
  `access_token` varchar(255) DEFAULT NULL,
  `ban` int(11) NOT NULL DEFAULT '0',
  `last_connection` date DEFAULT NULL,
  `created_at` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `identifiant`, `password`, `email`, `gender`, `orientation`, `biography`, `tags`, `profile_picture`, `firstname`, `lastname`, `relationship`, `rating`, `age`, `level`, `status`, `access_token`, `ban`, `last_connection`, `created_at`) VALUES
(1, 'Francois Cipriani', '', 'syrion.dev@gmail.com', 'm', 'boys', 'I love', '#music', 'https://scontent.xx.fbcdn.net/v/t1.0-1/p480x480/19437355_10209668304730779_835056524548696789_n.jpg?oh=e971049eea35de999751528fe34f5c16&oe=5AD90831', 'Julien', 'Boston', 'single', 0, 20, 1, 0, 'EAALsImssMW4BAMMpJSaB6TCV9qlzILJvOmRMio0zyj4fbtBWa3nZAPKtjyCNxGUEX2YTihVcphzBFfwfNZAGXkY8TzGd7sLSg8DZAv23ugn4ZBA9ALHIfFgrYwe1lbh62OZCWT80P4VTI4udZCXb92aWQFlUd6veVAly2HY4Nwxs8OxFVadS2F', 0, '2018-02-13', '2018-02-12'),
(2, 'Marie', '$2y$10$5PzLgMQidTWdoeRz7VF6N..cxUsaZ..VxvYY8/RhyVepj.X/WQ1/O', 'marie@gmail.com', 'f', '0', 'Yo les gens', '#musique, #videos, #voyages, #newYork, #beach', NULL, 'Marie', 'Boston', 'single', 0, 20, 1, 0, NULL, 0, '2018-02-13', '2018-02-12');

-- --------------------------------------------------------

--
-- Structure de la table `visits`
--

CREATE TABLE `visits` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_visited` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `visits`
--
ALTER TABLE `visits`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `visits`
--
ALTER TABLE `visits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;