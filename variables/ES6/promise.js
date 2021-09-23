function getList() {
    return new Promise(resolve => {
      setTimeout(() => resolve(['Shailendra', 'Kumar']), 1000);
    });
  }
  function findPerson(who) {
    const listPromise = getList();
    listPromise
      .then(list => {
        const found = list.some(person => person === who);  
        console.log(found); // logs true
      });
  }
  findPerson('Shailendra');