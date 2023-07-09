const names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

const searchName = (keyword, limit, callback) =>{
    const filteredNames = names.filter(name => name.toLowerCase().includes(keyword.toLowerCase()))
    const slicedNames = filteredNames.slice(0, limit)
    callback(slicedNames)
}

const printNames = (names) =>{
    console.log(names);
}

searchName('an',4,printNames)