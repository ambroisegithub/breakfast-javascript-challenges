import { describe, it } from "mocha";
import { expect } from "chai";
import fridayTheThirteenths from "./multiply.js"; // Note the .js extension

describe("Tests", () => {
    it("test", () => {
        expect(fridayTheThirteenths(1999, 2000)).to.equal("8/13/1999 10/13/2000");
        expect(fridayTheThirteenths(2000)).to.equal("10/13/2000");
    });
});