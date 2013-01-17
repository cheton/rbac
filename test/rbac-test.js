(function($, global, QUnit, undefined) {
"use strict";

module("rbac");
test("rbac test", function() {
    var options = {
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
                inherits: ['guest']
            },
            "guest": {
                permissions: [
                    "view resources"
                ],
                inherits: []
            }
        }
    };

    rbac.init(options, function(rbac) {
        equal("administrator", rbac.role());
    });

    // Administrator
    rbac.setRole("administrator");
    equal("administrator", rbac.role());
    deepEqual(rbac.permissions(), [
        "delete resources",
        "edit resources",
        "add resources",
        "view resources"
    ]);

    // Moderator
    rbac.setRole("moderator");
    equal("moderator", rbac.role());
    deepEqual(rbac.permissions(), [
        "edit resources",
        "add resources",
        "view resources"
    ]);

    // Guest
    rbac.setRole("guest");
    equal("guest", rbac.role());
    deepEqual(rbac.permissions(), [
        "view resources"
    ]);

    // Empty
    rbac.setRole("");
    equal("", rbac.role());
    deepEqual(rbac.permissions(), []);
});

})(jQuery, this, QUnit);
