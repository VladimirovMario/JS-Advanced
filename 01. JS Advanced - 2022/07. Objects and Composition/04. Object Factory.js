function objectFactory(library, orders) {
  const result = [];

  for (const currOrder of orders) {
    const obj = {};

    for (const nameModel in currOrder.template) {
      obj[nameModel] = currOrder.template[nameModel];
    }
    result.push(obj);

    for (const currFunction of currOrder.parts) {
      obj[currFunction] = library[currFunction];
    }
  }

  return result;
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}.`);
  },
};

const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];

const products = objectFactory(library, orders);

console.log(products);


products[3].play(`Cardi B`, `Bodak Yellow`)//
products[2].scan()
products[2].print()

/*
[
  { name: 'ACME Printer', print: [Function: print] },
  { name: 'Initech Scanner', scan: [Function: scan] },
  {
    name: 'ComTron Copier',
    scan: [Function: scan],
    print: [Function: print]
  },
  { name: 'BoomBox Stereo', play: [Function: play] }
]
BoomBox Stereo is playing 'Bodak Yellow' by Cardi B.
ComTron Copier is scanning a document
ComTron Copier is printing a page
*/