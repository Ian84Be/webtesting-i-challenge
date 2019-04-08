
module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (typeof(item) !== 'object') {
    return 'error: input must be an object';
  }
  let {name,durability,enhancement} = item;
  if (!name || typeof(durability) !== 'number' || typeof(enhancement) !== 'number') {
    return 'error: object must include name, durability, and enhancement properties';
  }
  
  if (enhancement < 20) enhancement +=1;

  const success = {
    name:name,
    durability:durability,
    enhancement: enhancement
  };
  return { ...success };
}

function fail(item) {
  if (typeof(item) !== 'object') {
    return 'error: input must be an object';
  }
  let {name,durability,enhancement} = item;
  if (!name || typeof(durability) !== 'number' || typeof(enhancement) !== 'number') {
    return 'error: object must include name, durability, and enhancement properties';
  }

  if (enhancement < 15) durability -=5;
  if (enhancement >= 15) durability -=10;
  if (enhancement > 16) enhancement -=1;

  const failure = {
    name:name,
    durability:durability,
    enhancement: enhancement
  };
  return { ...failure };
}

function repair(item) {
  if (typeof(item) !== 'object') {
    return 'error: input must be an object';
  }
  const {name,enhancement} = item;
  if (!name || typeof(enhancement) !== 'number') {
    return 'error: object must include name and enhancement properties';
  }

  const repaired = {
    name:name,
    durability:100,
    enhancement:enhancement
  };
  return { ...repaired };
}

function get(item) {
  if (typeof(item) !== 'object') {
    return 'error: input must be an object';
  }
  let {name,durability,enhancement} = item;
  if (!name || typeof(durability) !== 'number' || typeof(enhancement) !== 'number') {
    return 'error: object must include name, durability, and enhancement properties';
  }

  if (enhancement > 0) name = `[+${enhancement}] ${name}`;

  const result = {
    name:name,
    durability:durability,
    enhancement: enhancement
  };
  return { ...result };
}
