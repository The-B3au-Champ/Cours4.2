
const { add } = require("./add.js");

test('add function>', () =>{
    expect(add(1,1)).toBe(2);
    expect(add()).toBe("Les variables ne sont pas définis");
    expect(add(-1,-1)).toBe(-2);
    expect(add(1,1,1)).toBe("Vous pouvez additionner seulement 2 nombres");
    expect(add("1", "1")).toBe("Vous devez utiliser des nombres");
    expect(add(1, "1")).toBe("Vous devez utiliser des nombres");
});
