module.exports = {
  1: {
    question: `Do you need a shared consistent data store?`,
    fact: `If you don't need a consistent data store, you don't need a Blockchain. Consider a spreadsheet.`,
    choices: [
      {
        id: Math.random(),
        item: "YES",
        answer: true
      },
      {
        id: Math.random(),
        item: "NO",
        answer: false
      }
    ]
  },
  2: {
    question: `Does more than one entity need to contribute data?`,
    fact: `Blockchains are usually used when data comes from multiple entities. Consider using a database.`,
    choices: [
      {
        id: Math.random(),
        item: "YES",
        answer: true
      },
      {
        id: Math.random(),
        item: "NO",
        answer: false
      },
      {
        id: Math.random(),
        item: "NO... BUT I NEED AUDITING",
        answer: true
      }
    ]
  },
  3: {
    question: `Will data records ever need to be updated or deleted once they are written?`,
    fact: `Blockchains do not allow for modification of historical data. Consider a database.`,
    choices: [
      {
        id: Math.random(),
        item: "YES",
        answer: true
      },
      {
        id: Math.random(),
        item: "NO",
        answer: false
      }
    ]
  },
  4: {
    question: `Sensitive identifiers will not be written to the data store?`,
    fact: `You should not write sensitive information to a Blockchain that requires long term confidentiality. Try an encrypted database.`,
    choices: [
      {
        id: Math.random(),
        item: "YES",
        answer: true
      },
      {
        id: Math.random(),
        item: "NO",
        answer: false
      }
    ]
  },
  5: {
    question: `Are entities with write access having a hard time deciding who should be in control of the data store?`,
    fact: `If there are no trust issues over who runs the data store a traditional database should suffice.`,
    choices: [
      {
        id: Math.random(),
        item: "YES",
        answer: true
      },
      {
        id: Math.random(),
        item: "NO",
        answer: false
      }
    ]
  },
  6: {
    question: `Do you want a tamperproof log of all writes to the data store?`,
    fact: `If you don't need to audit what happened and when it happened a database will suffice.`,
    choices: [
      {
        id: Math.random(),
        item: "YES",
        answer: true
      },
      {
        id: Math.random(),
        item: "NO",
        answer: false
      }
    ]
  }
};
