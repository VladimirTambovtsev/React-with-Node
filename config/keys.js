// проверка на продакшн/девелопер версию
if (process.env.NODE_ENV === 'production') {
	// продакшн -> вернуть ключи продашкна
	module.exports = require('./prod');
} else {
	// девелопмент версия -> вернуть ключи дев 
	module.exports = require('./dev');
}