const tablisting2 = require("./tablisting2")

// @ponicode
describe("_onRefresh", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[12345, "a1969970175", 987650], ["a1969970175", 12, 12345], [987650, 12, 56784]]
        inst = new tablisting2.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst._onRefresh()
        }
    
        expect(callFunction).not.toThrow()
    })
})
