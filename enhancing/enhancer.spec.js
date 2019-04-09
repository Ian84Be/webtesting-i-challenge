
const enhancer = require('./enhancer.js');

describe('enhancer.js', () => {
    //REPAIR FUNCTION
    describe('repair(item)', () => {
        it('should return item with durability = 100', () => {
            const elvinBow = {
                name:'Elvin Bow',
                durability: 90,
                enhancement: 0,
            };
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
        it('should return item with enhancement+1 if enhancement < 20', () => {
            const succeedMace1 = {
                name:'Spiked Mace',
                durability: 90,
                enhancement: 0,
            };
            const {name,durability,enhancement} = succeedMace1;
            expect(enhancer.succeed(succeedMace1)).toEqual({
                name: name,
                durability:durability,
                enhancement: enhancement+1
            });
        });

        //OBJECT ALREADY HAS MAX ENHANCE, RETURN SAME OBJECT
        it('should return unchanged if enhancement >= 20', () => {
            const succeedMace2 = {
                name:'Spiked Mace',
                durability: 90,
                enhancement: 20,
            };
            const {name,durability,enhancement} = succeedMace2;
            expect(enhancer.succeed(succeedMace2)).toEqual({
                name: name,
                durability:durability,
                enhancement: enhancement
            });
        });
    });

    //FAIL FUNCTION
    describe('fail(item)', () => {
        it('should return item with durability -=5 if enhancement < 15', () => {
            const failSword1 = {
                name:'Bastard Sword',
                durability: 90,
                enhancement: 0,
            };
            let {name,durability,enhancement} = failSword1;
            expect(enhancer.fail(failSword1)).toEqual({
                name: name,
                durability:durability -=5,
                enhancement: enhancement
            });
        });

        it('should return item with durability -=10 if enhancement >= 15 && enhancement < 17', () => {
            const failSword2 = {
                name:'Bastard Sword',
                durability: 90,
                enhancement: 16,
            };
            let {name,durability,enhancement} = failSword2;
            expect(enhancer.fail(failSword2)).toEqual({
                name: name,
                durability:durability -=10,
                enhancement: enhancement
            });
        });

        it('should return item with durability -=10, enhancement -=1 if enhancement > 16', () => {
            const failSword3 = {
                name:'Bastard Sword',
                durability: 90,
                enhancement: 20,
            };
            let {name,durability,enhancement} = failSword3;
            expect(enhancer.fail(failSword3)).toEqual({
                name: name,
                durability:durability -=10,
                enhancement: enhancement -=1
            });
        });

        it('should destroy the item if durability <= 0', () => {
            const failSword3 = {
                name:'Bastard Sword',
                durability: 10,
                enhancement: 20,
            };
            let {name,durability,enhancement} = failSword3;
            expect(enhancer.fail(failSword3)).toBe('message: Item has been destroyed');
        });
    });
        
    //GET FUNCTION
    describe('get(item)', () => {
        it('should return item with name = "[+e] name" if enhancement > 0', () => {
            const getBow1 = {
                name:'Elvin Bow',
                durability: 90,
                enhancement: 7,
            };
            const {name,durability,enhancement} = getBow1;
            expect(enhancer.get(getBow1)).toEqual({
                name: `[+${enhancement}] ${name}`,
                durability:durability,
                enhancement: enhancement
            });
        });

        it('should return unchanged if enhancement =< 0', () => {
            const getBow2 = {
                name:'Elvin Bow',
                durability: 90,
                enhancement: 0,
            };
            const {name,durability,enhancement} = getBow2;
            expect(enhancer.get(getBow2)).toEqual({
                name: name,
                durability:durability,
                enhancement: enhancement
            });
        });
    });
});

