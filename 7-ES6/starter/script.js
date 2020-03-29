const sumAndAverage = (args, division) => {
  const sum = args.reduce((last, current) => last + current, 0);
  const average = (sum / division).toFixed(1);
  return [sum, average];
};

class Element {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class Park extends Element {
  constructor(name, year, numOfTrees, area) {
    super(name, year);
    this.numOfTrees = numOfTrees;
    this.area = area;
  }

  treeDensity() {
    const density = (this.numOfTrees / this.area).toFixed(3);
    console.log(`${this.name} has ${density} tree density.`);
  }

  age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

const park1 = new Park("Park1", "1990", 1000, 1234);
const park2 = new Park("Park2", "1890", 10, 12345);
const park3 = new Park("Park3", "2020", 100, 123);
const parks = [park1, park2, park3];

const parkReport = parks => {
  console.log("---------- Tree report -------------");
  console.log("1)");
  parks.forEach(park => park.treeDensity());
  console.log("2)");
  const ages = parks.map(park => park.age());
  console.log(
    `The average age of all parks is ${
      sumAndAverage(ages, parks.length)[1]
    } years old.`
  );
  console.log("3)");
  const moreThan1000trees = parks.filter(park => park.numOfTrees >= 1000);
  console.log(`${moreThan1000trees[0].name} has more than 1000 trees.`);
};

class Street extends Element {
  constructor(name, year, length, size = 3) {
    super(name, year);
    this.length = length;
    this.size = size;
  }

  sizeCategorize() {
    const sizeCategories = new Map();
    sizeCategories.set(1, "small");
    sizeCategories.set(2, "medium");
    sizeCategories.set(3, "large");
    sizeCategories.set(4, "x-large");
    return sizeCategories.get(this.size);
  }
}

const street1 = new Street("street1", 1990, 12, 1);
const street2 = new Street("street2", 1990, 123, 2);
const street3 = new Street("street3", 1990, 1234);
const street4 = new Street("street4", 1990, 12345, 4);
const streets = [street1, street2, street3, street4];

const streetReport = streets => {
  console.log("4)");
  const lengths = streets.map(street => street.length);
  const [sum, average] = sumAndAverage(lengths, streets.length);
  console.log(
    `The twn has total ${sum}km(average: ${average}km) length of streets.`
  );

  console.log("5)");
  streets.forEach(street => {
    console.log(`${street.name}'s size is ${street.sizeCategorize()}`);
  });
};

parkReport(parks);
streetReport(streets);
