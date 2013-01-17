# Introduction

Role-based access control with javascript (incl. jquery plugin)

# Usage

Assuming you have the following HTML file

    <div class="content">
        <div data-rbac-roles="administrator,moderator">
            <p>Only administrator or moderator have permission to view this page.</p>
        </div>
        <div data-rbac-permissions="delete resources">
            <p>You have permission to delete resources.</p>
        </div>
    </div>

you can define the roles and permissions

    rbac.init({
        role: "administrator",
        rules: {
            "administrator": {
                permissions: [
                    "delete resources"
                ],
                inherits: ["moderator"]
            },
            "moderator": {
                permissions: [
                    "edit resources",
                    "add resources"
                ],
                inherits: ["guest"]
            },
            "guest": {
                permissions: [
                    "view resources"
                ],
                inherits: []
            }
        }
    }, function(rbac) {
        console.log('Your current role is ' + rbac.role());
        $('.content').rbac(); // You can remove unauthorized elements from the DOM.
    });

# License

Copyright (c) 2013 Cheton Wu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
