-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-03-2019 a las 22:55:16
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `auditoria_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auditor`
--

CREATE TABLE `auditor` (
  `cedula` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `apellido` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `correo` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `contraseña` varchar(8) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'clave'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `auditor`
--

INSERT INTO `auditor` (`cedula`, `nombre`, `apellido`, `correo`, `telefono`, `contraseña`) VALUES
('1', 'auditor', 'auditor', 'auditor@hotmail.com', '648256', 'clave');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `nit` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `gerente` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `direccion` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`nit`, `nombre`, `gerente`, `direccion`, `telefono`) VALUES
('cliente1', 'cliente1', 'g1', 'g1', '3189532');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario1`
--

CREATE TABLE `formulario1` (
  `id_c1` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `cedula` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `nit` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `pregunta1` tinyint(1) NOT NULL,
  `pregunta2` tinyint(1) NOT NULL,
  `pregunta3` tinyint(1) NOT NULL,
  `pregunta4` tinyint(1) NOT NULL,
  `pregunta5` tinyint(1) NOT NULL,
  `pregunta6` tinyint(1) NOT NULL,
  `pregunta7` tinyint(1) NOT NULL,
  `pregunta8` tinyint(1) NOT NULL,
  `pregunta9` tinyint(1) NOT NULL,
  `pregunta10` tinyint(1) NOT NULL,
  `pregunta11` tinyint(1) NOT NULL,
  `pregunta12` tinyint(1) NOT NULL,
  `pregunta13` tinyint(1) NOT NULL,
  `doc` int(3) NOT NULL,
  `total` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `formulario1`
--

INSERT INTO `formulario1` (`id_c1`, `cedula`, `nit`, `pregunta1`, `pregunta2`, `pregunta3`, `pregunta4`, `pregunta5`, `pregunta6`, `pregunta7`, `pregunta8`, `pregunta9`, `pregunta10`, `pregunta11`, `pregunta12`, `pregunta13`, `doc`, `total`) VALUES
('1111', '1', 'cliente1', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario2`
--

CREATE TABLE `formulario2` (
  `id_c2` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `nit` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `cedula` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `pregunta1` tinyint(1) NOT NULL,
  `pregunta2` tinyint(1) NOT NULL,
  `pregunta3` tinyint(1) NOT NULL,
  `pregunta4` tinyint(1) NOT NULL,
  `pregunta5` tinyint(1) NOT NULL,
  `doc` int(3) NOT NULL,
  `total` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `formulario2`
--

INSERT INTO `formulario2` (`id_c2`, `nit`, `cedula`, `pregunta1`, `pregunta2`, `pregunta3`, `pregunta4`, `pregunta5`, `doc`, `total`) VALUES
('2222', 'cliente1', '1', 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario3`
--

CREATE TABLE `formulario3` (
  `id_c3` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `cedula` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `nit` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `pregunta1` tinyint(1) NOT NULL,
  `pregunta2` tinyint(1) NOT NULL,
  `pregunta3` tinyint(1) NOT NULL,
  `pregunta4` tinyint(1) NOT NULL,
  `pregunta5` tinyint(1) NOT NULL,
  `pregunta6` tinyint(1) NOT NULL,
  `pregunta7` tinyint(1) NOT NULL,
  `pregunta8` tinyint(1) NOT NULL,
  `pregunta9` tinyint(1) NOT NULL,
  `pregunta10` tinyint(1) NOT NULL,
  `pregunta11` tinyint(1) NOT NULL,
  `pregunta12` tinyint(1) NOT NULL,
  `pregunta13` tinyint(1) NOT NULL,
  `pregunta14` tinyint(1) NOT NULL,
  `pregunta15` tinyint(1) NOT NULL,
  `pregunta16` tinyint(1) NOT NULL,
  `doc` int(3) NOT NULL,
  `total` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `formulario3`
--

INSERT INTO `formulario3` (`id_c3`, `cedula`, `nit`, `pregunta1`, `pregunta2`, `pregunta3`, `pregunta4`, `pregunta5`, `pregunta6`, `pregunta7`, `pregunta8`, `pregunta9`, `pregunta10`, `pregunta11`, `pregunta12`, `pregunta13`, `pregunta14`, `pregunta15`, `pregunta16`, `doc`, `total`) VALUES
('3333', '1', 'cliente1', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario4`
--

CREATE TABLE `formulario4` (
  `id_c4` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `nit` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `cedula` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `pregunta1` tinyint(1) NOT NULL,
  `pregunta2` tinyint(1) NOT NULL,
  `pregunta3` tinyint(1) NOT NULL,
  `pregunta4` int(1) NOT NULL,
  `pregunta5` tinyint(1) NOT NULL,
  `pregunta6` tinyint(1) NOT NULL,
  `pregunta7` tinyint(1) NOT NULL,
  `doc` int(3) NOT NULL,
  `total` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `formulario4`
--

INSERT INTO `formulario4` (`id_c4`, `nit`, `cedula`, `pregunta1`, `pregunta2`, `pregunta3`, `pregunta4`, `pregunta5`, `pregunta6`, `pregunta7`, `doc`, `total`) VALUES
('1111', 'cliente1', '1', 1, 1, 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario5`
--

CREATE TABLE `formulario5` (
  `id_c5` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `nit` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `cedula` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `pregunta1` tinyint(1) NOT NULL,
  `pregunta2` tinyint(1) NOT NULL,
  `pregunta3` tinyint(1) NOT NULL,
  `pregunta4` tinyint(1) NOT NULL,
  `pregunta5` tinyint(1) NOT NULL,
  `pregunta6` tinyint(1) NOT NULL,
  `pregunta7` tinyint(1) NOT NULL,
  `pregunta8` tinyint(1) NOT NULL,
  `pregunta9` tinyint(1) NOT NULL,
  `pregunta10` tinyint(1) NOT NULL,
  `pregunta11` tinyint(1) NOT NULL,
  `pregunta12` tinyint(1) NOT NULL,
  `pregunta13` tinyint(1) NOT NULL,
  `pregunta14` tinyint(1) NOT NULL,
  `pregunta15` tinyint(1) NOT NULL,
  `pregunta16` tinyint(1) NOT NULL,
  `pregunta17` tinyint(1) NOT NULL,
  `pregunta18` tinyint(1) NOT NULL,
  `pregunta19` tinyint(1) NOT NULL,
  `pregunta20` tinyint(1) NOT NULL,
  `pregunta21` tinyint(1) NOT NULL,
  `doc` int(3) NOT NULL,
  `total` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `formulario5`
--

INSERT INTO `formulario5` (`id_c5`, `nit`, `cedula`, `pregunta1`, `pregunta2`, `pregunta3`, `pregunta4`, `pregunta5`, `pregunta6`, `pregunta7`, `pregunta8`, `pregunta9`, `pregunta10`, `pregunta11`, `pregunta12`, `pregunta13`, `pregunta14`, `pregunta15`, `pregunta16`, `pregunta17`, `pregunta18`, `pregunta19`, `pregunta20`, `pregunta21`, `doc`, `total`) VALUES
('1', 'cliente1', '1', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario6`
--

CREATE TABLE `formulario6` (
  `id_c6` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `nit` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `cedula` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `pregunta1` tinyint(1) NOT NULL,
  `pregunta2` tinyint(1) NOT NULL,
  `pregunta3` tinyint(1) NOT NULL,
  `pregunta4` tinyint(1) NOT NULL,
  `pregunta5` tinyint(1) NOT NULL,
  `pregunta6` tinyint(1) NOT NULL,
  `doc` int(3) NOT NULL,
  `total` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `formulario6`
--

INSERT INTO `formulario6` (`id_c6`, `nit`, `cedula`, `pregunta1`, `pregunta2`, `pregunta3`, `pregunta4`, `pregunta5`, `pregunta6`, `doc`, `total`) VALUES
('1', 'cliente1', '1', 1, 1, 1, 1, 1, 1, 1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auditor`
--
ALTER TABLE `auditor`
  ADD PRIMARY KEY (`cedula`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`nit`);

--
-- Indices de la tabla `formulario1`
--
ALTER TABLE `formulario1`
  ADD PRIMARY KEY (`id_c1`),
  ADD KEY `cedula` (`cedula`),
  ADD KEY `nit` (`nit`) USING BTREE;

--
-- Indices de la tabla `formulario2`
--
ALTER TABLE `formulario2`
  ADD PRIMARY KEY (`id_c2`),
  ADD KEY `nit` (`nit`,`cedula`);

--
-- Indices de la tabla `formulario3`
--
ALTER TABLE `formulario3`
  ADD PRIMARY KEY (`id_c3`),
  ADD KEY `cedula` (`cedula`,`nit`);

--
-- Indices de la tabla `formulario4`
--
ALTER TABLE `formulario4`
  ADD PRIMARY KEY (`id_c4`);

--
-- Indices de la tabla `formulario5`
--
ALTER TABLE `formulario5`
  ADD PRIMARY KEY (`id_c5`);

--
-- Indices de la tabla `formulario6`
--
ALTER TABLE `formulario6`
  ADD PRIMARY KEY (`id_c6`),
  ADD KEY `nit` (`nit`,`cedula`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
