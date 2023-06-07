const router = require('express').Router(); // Создание экземпляра роутера Express

const { celebrate, Joi } = require('celebrate'); // Импорт модуля celebrate для валидации запросов

const { URL_REGEX } = require('../utils/constants'); // Импорт регулярного выражения для проверки URL

const {
  getInitialCards,
  createNewCardApi,
  addLike,
  removeLike,
  removeCard,
} = require('../controllers/cards'); // Импорт контроллеров для обработки запросов к карточкам

// Маршрут для создания новой карточки
router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30), // Валидация имени карточки
    link: Joi.string()
      .required()
      .pattern(URL_REGEX), // Валидация ссылки на карточку с использованием регулярного выражения
  }),
}), createNewCardApi);

// Маршрут для получения списка начальных карточек
router.get('/', getInitialCards);

// Маршрут для добавления лайка к карточке
router.put('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(), // Валидация идентификатора карточки
  }),
}), addLike);

// Маршрут для удаления лайка с карточки
router.delete('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(), // Валидация идентификатора карточки
  }),
}), removeLike);

// Маршрут для удаления карточки
router.delete('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().length(24).hex().required(), // Валидация идентификатора карточки
  }),
}), removeCard);

module.exports = router; // Экспорт роутера для использования в других модулях
