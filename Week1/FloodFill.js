var floodFill = function(image, sr, sc, color) {
  const startColor = image[sr][sc]
  if ( startColor === color ) return image;

  const visited = new Set();
  return fill(image, sr, sc, color, visited, startColor)
};


const fill = (image, sr, sc, color, visited, startColor) => {
  const rowInbound = 0 <= sr && sr < image.length;
  const colInbound = 0 <= sc && sc < image[0].length;

  const validPos = rowInbound && colInbound;
  if (!validPos) return image;

  console.log('hi', sr, sc, visited)

  const pos = `${sr}:${sc}`

  if (visited.has(pos)) return image;
  visited.add(pos)

  if ( image[sr][sc] !== startColor ) return image; 

  //set it to new color 
  image[sr][sc] = color;

  //check directions;

  //up
  fill(image, sr, sc - 1, color, visited, startColor)

  //down 
   fill(image, sr, sc + 1, color, visited, startColor)

  //left
  fill(image, sr - 1, sc, color, visited, startColor)

  //right
  fill(image, sr + 1, sc, color, visited, startColor)

  return image;
} 

//Time O(r * c) r = # number of rows, c = # of columns
//Space O( r * c)