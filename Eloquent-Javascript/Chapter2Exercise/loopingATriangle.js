//Пропоноване рішення з книжки
for (let line = "#"; line.length < 8; line += "#")
console.log(line);

//Рішення яке я спробував. Воно "повинно" працювати,
//бо є аналогічним для багатьох мов програмування
for (let triangleY = 0; triangleY <= 8; triangleY++){
    for (let triangleX = 0; triangleX <= triangleY; triangleX++){
        console.log('#');
    }
    console.log('\n');
}
//Фактично рішення не буде працювати коректно оскільки я не подумав про те що,
//console.log() не те саме що print().

/* С++ код який спрацював для мене
for (int i = 0; i <= 8; i++){
        for (int j = 0; j < i; j++){
            cout << '#';
        }
        cout << '\n';
    }
*/

//код js з print()
//онлайн працює. В Node.js потрібно провести ще маніпуляції
for (let triangleY = 0; triangleY <= 8; triangleY++){
    for (let triangleX = 0; triangleX <= triangleY; triangleX++){
        
        print('#');
    }
    print('\n');
}