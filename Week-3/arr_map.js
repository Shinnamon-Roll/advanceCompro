const names = ['Alice', 'Bob', 'Charlie', 'Diana'];

const announcments = names.map(member => {
    return member + ' joined the team.';
})

console.log(announcments);

// Output:
// [ 'Alice joined the team.',
//   'Bob joined the team.',
//   'Charlie joined the team.',
//   'Diana joined the team.' ]