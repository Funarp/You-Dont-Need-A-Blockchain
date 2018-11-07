module.exports = {
  1: {
    question: `你需要共享一个一致的数据存储么?`,
    fact: `如果你不需要一致的数据存储, 你不需要区块链. 考虑一下电子表格吧.`,
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
    question: `是否有多个实体需要提供数据？`,
    fact: `区块链通常在数据来自多个实体的时候被使用. 考虑一下数据库吧.`,
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
        item: "NO... 但是我需要审查.",
        answer: true
      }
    ]
  },
  3: {
    question: `数据记录, 一旦写入，再也不进行删改?`,
    fact: `区块链不允许修改历史数据, 它们具有很强的可审计性. 考虑一下数据库吧.`,
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
    question: `敏感信息将不会被写入数据存储?`,
    fact: `你不应该把需要长期保密的敏感信息写入区块链. 试试加密数据库.`,
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
    question: `具有写权限的实体是否难以决定数据存储的控制权?`,
    fact: `如果在何方运行数据存储上无信任问题传统数据库会更高效.`,
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
    question: `你是否需要对所有写入的数据进行放篡改记录?`,
    fact: `如果你不需要审核何时发生何事，数据库就足够了`,
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
