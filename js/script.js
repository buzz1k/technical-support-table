var taskList = []; 

function addTask(){

    let task = {
      count: taskList.length + 1, 
      date: "Текущая дата",
      company: document.getElementById('companyName').value,
      contacts: '+7-'+document.getElementById('companyPhone').value,
      description: document.getElementById('description').value,
      status: 'Не обработано'
    };

    console.log(task);

    taskList.push(task);

    let tbl = document.getElementById("supportTable");
    let row = tbl.insertRow(1);

    Object.values(task).forEach(text => {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
    });    
}

exampleModal.querySelector('.modal-success-btn').onclick = callback;