; **Задача. Вывести юзеров не из `Germany`**
; (проекция: `все поля, кроме страны`)

db.users.find(
    { country: { $ne: "Germany" } },
    {_id:1, fullname: 1, title:1,duration_secs:1}
)