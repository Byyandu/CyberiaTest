# CyberiaTest
Результат выполнения тестового задания по вакансии "начинающий frontend-разработчик"

Инструкция к проекту (Главная):
1. Откройте репозиторий на GitHub, нажмите на зелёную кнопку CODE и Выберите Download ZIP;
2. Разархивируйте файл в необходимой папке;
3. Запустите командную строку cmd, перейдите в папку используя команды: cd (путь), cd ..\ (для перехода в родительскую папку);
4. После перехода в папку с проектом, введите код: npm start;
5. Проект запущен

Если npm start выводит сообщение "npm не является командой":
1. Скачайте windows installer .msi Node.js v18.20.7 with npm по ссылке: https://nodejs.org/en/download;
2. Следуйте указаниям установщика;
3. После завершения установки, перезагрузите компьютер и запустите командную строку cmd;
4. Проверьте установку npm командой npm -v
5. Далее следуйте иснтрукции к проекту с пометкой (Главная).

Если npm start выдает ошибку «скрипт запуска отсутствует» (npm ERR! missing script: start):
1. Удалите папку node_modules и файл package-lock.json вручную, или используя команды (Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json) для PowerShell, или (rd /s /q "node_modules") и (del package-lock.json) для cmd;
2. Переустановите зависимости командой npm install;
3. Установите модуль react router dom --- npm install react-router-dom;
4. Попробуйте запустить проект с npm start;

При появлении ошибки с надписью (envelope routines::unsupported), способы решения проблемы несовместимости:
1. Попробуйте ввести в PowerShell команду ($env:NODE_OPTIONS="--openssl-legacy-provider"; npm start);
2. При запуске через cmd, попробуйте ввести перед вводом npm install команду (set NODE_OPTIONS=--openssl-legacy-provider)
3. Попробуйте добавить в код файла package.json следующий код: "start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start". Данный код нужно добавить в секцию ("scripts":).

