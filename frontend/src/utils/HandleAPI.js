import axios from 'axios';


const baseURL = "http://localhost:5000/api/todos";


const getAllToDo = (setToDo) => {
    axios
        .get(baseURL)
        .then(({ data }) => {
            console.log('Fetched todos:', data);
            setToDo(data);
        })
        .catch((error) => {
            console.error('Error fetching todos:', error);
        });
};


const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseURL}/save`, { text })
        .then(() => {
            setText("");
            getAllToDo(setToDo);
        })
        .catch((error) => {
            console.error('Error adding todo:', error);
        });
};


const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
        .put(`${baseURL}/update`, { _id: toDoId, text })
        .then(() => {
            setText("");
            setIsUpdating(false);
            getAllToDo(setToDo);
        })
        .catch((error) => {
            console.error('Error updating todo:', error);
        });
};


const deleteToDo = (_id, setToDo) => {
    axios
        .delete(`${baseURL}/delete`, { data: { _id } })
        .then(() => {
            getAllToDo(setToDo);
        })
        .catch((error) => {
            console.error('Error deleting todo:', error);
        });
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
