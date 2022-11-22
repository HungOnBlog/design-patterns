class Tree {
  position: {
    x: number;
    y: number;
  };
  ownerName: string;
  treeType: TreeType;

  constructor(
    position: { x: number; y: number },
    ownerName: string,
    treeType: TreeType,
  ) {
    this.position = position;
    this.ownerName = ownerName;
    this.treeType = treeType;
  }

  draw() {
    // Draw tree image
    console.log(
      `Drawing tree at ${this.position.x}, ${this.position.y} with owner ${this.ownerName}`,
    );

    // Draw tree type
    this.treeType.draw();
  }
}

class TreeType {
  treeType: string;
  treeImage: string; // Image base64 string

  constructor(treeType: string, treeImage: string) {
    this.treeType = treeType;
    this.treeImage = treeImage;
  }

  draw() {
    // Draw tree image
    console.log(this.treeImage);
  }
}

function game() {
  const trees: Tree[] = [];

  const appleTypeTree = new TreeType('Apple', 'data:image/png;base64,apple');

  const hungTree1 = new Tree({ x: 1, y: 1 }, 'Hung', appleTypeTree);
  const hungTree2 = new Tree({ x: 2, y: 2 }, 'Hung', appleTypeTree);
  const hungTree3 = new Tree({ x: 3, y: 3 }, 'Hung', appleTypeTree);

  trees.push(...[hungTree1, hungTree2, hungTree3]);

  for (const t of trees) {
    t.draw();
  }
}
