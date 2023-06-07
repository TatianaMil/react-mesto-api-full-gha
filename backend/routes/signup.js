const router = require('express').Router(); // Создание экземпляра роутера Express

const { celebrate, Joi } = require('celebrate'); // Импорт модуля celebrate для валидации запросов

const { URL_REGEX } = require('../utils/constants'); // Импорт регулярного выражения для валидации URL
const { registerUserApi } = require('../controllers/users'); // Импорт контроллера для обработки запроса на регистрацию пользователя

// Маршрут для регистрации пользователя
router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(), // Валидация электронной почты пользователя
    password: Joi.string().required().min(6), // Валидация пароля пользователя
    name: Joi.string().min(2).max(30), // Валидация имени пользователя
    about: Joi.string().min(2).max(30), // Валидация информации о пользователе
    avatar: Joi.string().pattern(URL_REGEX), // Валидация ссылки на аватар пользователя
  }),
}), registerUserApi);

module.exports = router; // Экспорт роутера для использования в других модулях
