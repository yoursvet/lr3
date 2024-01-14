async function getResponse() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1/todos"
        );
        let content = await response.json();

        let list = document.querySelector(".data");

        content.forEach(task => {
            list.innerHTML += `
                <tr class="data">
                    <td>${task.userId}</td>
                    <td>${task.title}</td>
                    <td>${task.completed ? 'Завершено' : 'В процессе'}</td>
                </tr>
            `;
        });
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

getResponse();
