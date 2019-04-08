
const enhancer = require('./enhancer.js');
// test away!
const elvinBow = {
    name:'Elvin Bow',
    durability: 90,
    enhancement: -1,
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
});

