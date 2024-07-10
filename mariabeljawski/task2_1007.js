
// Задача. Удалить всех заблокированных юзеров из China и Brazil с отрицательным балансом
db.users.deleteMany({
    status: "blocked",
    country: { $in: ["China", "Brazil"] },
    balance: { $lt: 0 }
});