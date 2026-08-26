








const generateLeaderboard = (students) =>
    !Array.isArray(students)||students.length===0||!students.every(e=>e.name&&e.score&&typeof e.score==="number")
        ? "Invalid" 
        : students.filter(f=>f.score>=70).map(m=>m.name.toUpperCase()).slice(0, 3)





console.log(generateLeaderboard([
    {"name":"Rafi","score":90},
    {"name":"Sadia","score":65},
    {"name":"Karim","score":85},
    {"name":"Nafis","score":75},
    {"name":"Sahadat","score":95},
    {"name":"Emni","score":72}
]))
console.log(generateLeaderboard([
    {"name":"A","score":70},
    {"name":"B","score":71}
]))
console.log(generateLeaderboard([]));
console.log(generateLeaderboard("students"));
console.log(generateLeaderboard([
    {"name":"Rafi"}
]));
console.log(generateLeaderboard([
    {"name":"Rafi","score":"90"}
]));

















