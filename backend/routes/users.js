const router = require('express').Router(); // Создание экземпляра роутера Express

const { celebrate, Joi } = require('celebrate'); // Импорт модуля celebrate для валидации запросов

const { URL_REGEX } = require('../utils/constants'); // Импорт регулярного выражения для проверки URL

const {
  getUsers,
  getUserId,
  getCurrentUserInfo,
  editProfileUserApi,
  updateProfileUserAvatar,
} = require('../controllers/users'); // Импорт контроллеров для обработки запросов к пользователям

// Маршрут для получения списка пользователей
router.get('/', getUsers);

// Маршрут для получения информации о текущем пользователе
router.get('/me', getCurrentUserInfo);

// Маршрут для получения информации о конкретном пользователе по его идентификатору
router.get('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().length(24).hex().required(), // Валидация идентификатора пользователя
  }),
}), getUserId);

// Маршрут для редактирования данных текущего пользователя
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30), // Валидация имени пользователя
    about: Joi.string().min(2).max(30), // Валидация информации о пользователе
  }),
}), editProfileUserApi);

// Маршрут для обновления аватара текущего пользователя
router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi
      .string()
      .pattern(URL_REGEX),
    // Валидация ссылки на аватар пользователя с использованием регулярного выражения
  }),
}), updateProfileUserAvatar);

module.exports = router; // Экспорт роутера для использования в других модулях
