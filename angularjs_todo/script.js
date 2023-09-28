const app = angular.module("app", []);

app.controller("myController", ($scope) => {
  // Initialize todos from localStorage, or an empty array if no data is found
  $scope.todos = JSON.parse(localStorage.getItem("todos")) || [];

  $scope.addTodos = function (text) {
    if (text) {
      $scope.todos.push({ text });
      $scope.text = ""; // Clear the input field

      // Update localStorage with the current todos array
      localStorage.setItem("todos", JSON.stringify($scope.todos));
    }
  };

  $scope.deleteTodo = function (index) {
    $scope.todos.splice(index, 1);

    // Update localStorage with the current todos array
    localStorage.setItem("todos", JSON.stringify($scope.todos));
  };
});
