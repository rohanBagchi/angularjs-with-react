var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoController', function($scope) {
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

    $scope.toggleComplete = function(todoID) {
        $scope.todos.forEach(function(todo) {
            if (todo.id === todoID) {
                todo.isComplete = !todo.isComplete;
            }
        });
    };

    $scope.addTodo = function() {
        $scope.todos.push({
            id: $scope.todos.length + 1,
            text: $scope.todoText,
            isComplete: false
        });
        $scope.todoText = '';
    };
    
    $scope.removeTodo = function(todoId) {
        $scope.todos = $scope.todos.filter(function(todo) {
            if (todo.id !== todoId) return todo;
        });
    };
});