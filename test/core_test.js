/**
 * Created by dns on 15.10.13.
 */

define(['build/core'], function(core) {
    "use strict";

    var Cow = core.Cow;

    describe("Yandex Metrika API", function () {
        it("should return counter_id", function () {
            var cow = new Cow("Mister");
            expect(cow.greets("my")).to.eql("Mister greets my");
        })
    })
});