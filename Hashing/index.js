class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  // hash method
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  // Set method to set the key-value in table
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  // Get method to retrieve the value for specific key
  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  // Delete method to remove the for specific key
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  // Display the context of the hash table
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "John doe");
table.set("age", 25);
table.display();

console.log(table.get("name"));

table.remove("name");
table.display();
