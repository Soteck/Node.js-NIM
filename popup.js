/**
 * MIT License
 *
 *    Copyright (c) 2016 June07
 *
 *    Permission is hereby granted, free of charge, to any person obtaining a copy
 *    of this software and associated documentation files (the "Software"), to deal
 *    in the Software without restriction, including without limitation the rights
 *    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *    copies of the Software, and to permit persons to whom the Software is
 *    furnished to do so, subject to the following conditions:
 *
 *    The above copyright notice and this permission notice shall be included in all
 *    copies or substantial portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 */
var ngApp = angular.module('NimPopupApp', []);
ngApp
    .controller('nimPopupController', ['$scope', '$window', function ($scope, $window) {
        $scope.bg = $window.chrome.extension.getBackgroundPage().angular.element('#nim').scope();
        $scope.host = $scope.bg.host;
        $scope.port = $scope.bg.port;
        $scope.timer = $scope.bg.timer;
        
        setInterval(function () {
            $scope.timer++;
            $scope.$apply();
        }, 1000);
        $scope.clickHandler = function () {
            $scope.bg.save("host", $scope.host);
            $scope.bg.save("port", $scope.port);
            $scope.bg.openTab($scope.host, $scope.port, function (result) {
                $scope.message = result;
            });
        }
    }])
