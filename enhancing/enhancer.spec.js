
const enhancer = require('./enhancer.js');
// test away!
const elvinBow = {
    name:'Elvin Bow',
    durability: 90,
    enhancement: 15,
};

describe('enhancer.js', () => {
    //REPAIR FUNCTION
    describe('repair(item)', () => {
        it('should return an object with durability = 100', () => {
            const {name,enhancement} = elvinBow;
            expect(enhancer.repair(elvinBow)).toEqual({
                name: name,
                durability:100,
                enhancement: enhancement
            });
        });
    });

    //SUCCEED FUNCTION
    describe('succeed(item)', () => {
        const {name,durability,enhancement} = elvinBow;
        if (enhancement < 20) {
            it('should return an object with enhancement+1', () => {
                expect(enhancer.succeed(elvinBow)).toEqual({
                    name: name,
                    durability:durability,
                    enhancement: enhancement+1
                });
            });
        } else {
        //OBJECT ALREADY HAS MAX ENHANCE, RETURN SAME OBJECT
        it('should return unchanged if enhancement > 20', () => {
            expect(enhancer.succeed(elvinBow)).toEqual({
                name: name,
                durability:durability,
                enhancement: enhancement
            });
        });
        }
    });

    //FAIL FUNCTION
    describe('fail(item)', () => {
        let {name,durability,enhancement} = elvinBow;
        if (enhancement < 15) {
            it('should return an object with durability -=5', () => {
                expect(enhancer.fail(elvinBow)).toEqual({
                    name: name,
                    durability:durability -=5,
                    enhancement: enhancement
                });
            });
        } else if (enhancement >= 15 && enhancement < 17) {
            it('should return an object with durability -=10', () => {
                expect(enhancer.fail(elvinBow)).toEqual({
                    name: name,
                    durability:durability -=10,
                    enhancement: enhancement
                });
            });
        } else if (enhancement > 16) {
            it('should return an object with durability -=10, enhancement -=1', () => {
                expect(enhancer.fail(elvinBow)).toEqual({
                    name: name,
                    durability:durability -=10,
                    enhancement: enhancement -=1
                });
            });
        }
    });
});

