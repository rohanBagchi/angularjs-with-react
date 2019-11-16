import angular from 'angular';

const todoApp = angular.module('todoApp', []);

todoApp.controller('TodoController', $scope => {
    $scope.todos = [
        {
            id: 1,
            text: 'Learn Angularjs',
            isComplete: false
        },
        {
            id: 2,
            text: 'Learn Angular 7',
            isComplete: false
        },
    ];

    $scope.toggleComplete = todoID => {
        $scope.todos.forEach(todo => {
            if (todo.id === todoID) {
                todo.isComplete = !todo.isComplete;
            }
        });
    };

    $scope.addTodo = () => {
        $scope.todos.push({
            id: $scope.todos.length + 1,
            text: $scope.todoText,
            isComplete: false
        });
        $scope.todoText = '';
    };
    
    $scope.removeTodo = function(todoId) {
        $scope.todos = $scope.todos.filter(todo => {
            if (todo.id !== todoId) return todo;
        });
    };
});