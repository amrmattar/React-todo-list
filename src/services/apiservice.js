import axios from "axios";
const apiUrl = "http://localhost:8080/tasks";

export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.patch(apiUrl + "/" + id, task);
}

export function deleteTaskById(id) {
    return axios.delete(apiUrl + "/" + id);
}
