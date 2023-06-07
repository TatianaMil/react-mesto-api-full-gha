const router = require('express').Router(); // Создание экземпляра роутера Express

const { celebrate, Joi } = require('celebrate'); // Импорт модуля celebrate для валидации запросов

const { loginUser } = require('../controllers/users'); // Импорт контроллера для обработки запроса на вход пользователя

// Маршрут для входа пользователя
router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(), // Валидация электронной почты пользователя
    password: Joi.string().required().min(6), // Валидация пароля пользователя
  }),
}), loginUser);

module.exports = router; // Экспорт роутера для использования в других модулях
