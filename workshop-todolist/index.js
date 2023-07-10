'use strict';

const taskInput = document.querySelector('.task-input');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('.filter-input');
const form = document.querySelector('.create-task-form');

document.addEventListener('DOMContentLoaded', renderTasks);
clearBtn.addEventListener('click', clearAllTasks);
taskList.addEventListener('click', claerSingleTask);
form.addEventListener('submit', createTask);

/**
 * Отримуємо дані з localStorage
 * @return {[String]} - масив з задачами, або пустий масив, якщо localStorage пустий
 */
function getTasksFromLocalStorage() {
    return localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
}

/**
 * Записуємо дані в localStorage
 * @param {Array} tasks - масив з задачами
 */
function setTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function generateUUID() {
    return Math.random().toString(36).substr(2, 9);
  }
/**
 * Створюємо окрему задачу
 * @param {String} task - окрема задача
 */
function createSingleTaskElement(task) {
    const li = document.createElement('li');
    const taskItem = document.createElement('li');
    taskItem.dataset.taskId = task.id;
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    const deleteElement = document.createElement('span');
    deleteElement.className = 'delete-item';
    deleteElement.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(deleteElement);

    taskList.appendChild(li);
}

function renderTasks() {
    const tasks = getTasksFromLocalStorage();

    tasks.forEach((task) => {
        createSingleTaskElement(task);
    })
}

/**
 * Створюємо окрему задачу
 * @param {Event} event - The triggering event
 */
function createTask(event) {
    event.preventDefault();
    if (taskInput.value.trim() === ''){
        return;
    }

    createSingleTaskElement(taskInput.value);

    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';
}

/**
 * Додаємо нову створену задачу в localStorage
 * @param {String} task - окрема задача
 */
function storeTaskInLocalStorage(task) {
    const tasks = getTasksFromLocalStorage();
    const taskId = generateUUID();
    const task = {
        id: taskId,
    };
    tasks.push(task);

    setTasksToLocalStorage(tasks);
}

function clearAllTasks() {
    if (confirm('Ви впевнені що хочете видалити всі задачі?')) {
        localStorage.clear();
        taskList.innerHTML = '';
    }
}

/**
 * Видаляємо окрему задачу з localStorage та з DOM
 * @param {Event} event - The triggering event
 */
function claerSingleTask(event) {
    const iconContainer = event.target.parentElement;
    if (iconContainer.classList.contains('delete-item')) {
        if (confirm('Ви впевнені що хочете видалити цю задачу?')) {
        iconContainer.parentElement.remove();
        removeTaskFromLocalStorage(iconContainer.parentElement);
        }
    }       
}

/**
 * Видаляємо окрему задачу з localStorage та з DOM
 * @param taskToRemove - DOM елемент
 */
function removeTaskFromLocalStorage(taskToRemove) {
    const tasks = getTasksFromLocalStorage();
    const taskId = taskToRemove.dataset.taskId;

    tasks.forEach((task, index) => {
        if (taskToRemove.textContent === task) {
            tasks.splice(index, 1);
        }
    })
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasksToLocalStorage(updatedTasks);
}