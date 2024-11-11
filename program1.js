const getTotalIsles = function (grid) {


  // write your code here

};

module.exports = getTotalIsles;const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let islandCount = 0;

  const dfs = (i, j) => {
      // Check if we are out of bounds or at water ('W')
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
          return;
      }

      // Mark the current cell as water to avoid re-visiting
      grid[i][j] = 'W';

      // Move in all four directions (up, down, left, right)
      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
  };

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 'L') {
              // Start a DFS to mark the entire island
              islandCount++;
              dfs(i, j);
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
