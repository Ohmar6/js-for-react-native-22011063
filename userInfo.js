

/**
 * Function to create user profiles.
 * Each profile contains the original name, the modified name, and an auto-incremented id.
 * @param {string[]} names - The array of original names.
 * @param {string[]} modifiedNames - The array of modified names.
 * @returns {Object[]} - The array of user profiles.
 */
function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error("The two arrays must have the same length.");
    }

    return names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage:
// const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
// const modifiedNames = ["alice", "BOB", "charlie", "DAVID", "eve"];
// console.log(createUserProfiles(names, modifiedNames));
// Output: 
// [
//     { id: 1, originalName: 'Alice', modifiedName: 'alice' },
//     { id: 2, originalName: 'Bob', modifiedName: 'BOB' },
//     { id: 3, originalName: 'Charlie', modifiedName: 'charlie' },
//     { id: 4, originalName: 'David', modifiedName: 'DAVID' },
//     { id: 5, originalName: 'Eve', modifiedName: 'eve' }
// ]
