const faker = require("faker");
const fs = require("fs");
const generatePersonsData = (number) => {
  const lists = [];
  while (number >= 0) {
    lists.push({
      godNo: faker.finance.iban(),
      erpGodNo: faker.finance.iban(),
      dsgnGrpNo: faker.finance.iban(),
      godNm: faker.commerce.productName(),
      salePrc: faker.commerce.price(1000,100000,0),
      aplSalePrc: faker.commerce.price(1000,100000,0),
      invQty: faker.finance.mask(),
      brndNm : faker.company.companyName(0),
      imgUrl: `${faker.image.fashion()}?random=${Math.round(Math.random() * 10000)}`,
    });
    number--;
  }

  let prod = {
    godList : lists
  }

  return prod;
};

const equalDatas = (number, number2) => {
  const godLists = [], brandLists = [];
  while (number >= 0) {
    godLists.push({
      godNo: faker.finance.iban(),
      erpGodNo: faker.finance.iban(),
      dsgnGrpNo: faker.finance.iban(),
      godNm: faker.commerce.productName(),
      salePrc: faker.commerce.price(1000,100000,0),
      aplSalePrc: faker.commerce.price(1000,100000,0),
      invQty: faker.finance.mask(),
      brndNm: faker.company.companyName(0),
      regDt : faker.date.past(10),
      imgUrl: `${faker.image.fashion()}?random=${Math.round(Math.random() * 10000)}`,
    });
    number--;
  }

  while (number2 >= 0) {
    brandLists.push({
      brndId: faker.finance.iban(),
      brndNm: faker.company.companyName(),
      brndKorFlterNm: faker.company.companySuffix(),
      brndStroyIntrcnCont: faker.finance.mask(),
      pcBrndImgFileUrl: `${faker.image.fashion()}?random=${Math.round(Math.random() * 10000)}`,
      moBrndImgFileUrl: `${faker.image.fashion()}?random=${Math.round(Math.random() * 10000)}`,
      godList: [{
        godNo: faker.finance.iban(),
        erpGodNo: faker.finance.iban(),
        dsgnGrpNo: faker.finance.iban(),
        godNm: faker.commerce.productName(),
        salePrc: faker.commerce.price(1000,100000,0),
        aplSalePrc: faker.commerce.price(1000,100000,0),
        invQty: faker.finance.mask(),
        brndNm: faker.company.companyName(0),
        regDt : faker.date.past(10),
        imgUrl: `${faker.image.fashion()}?random=${Math.round(Math.random() * 10000)}`
      },{
        godNo: faker.finance.iban(),
        erpGodNo: faker.finance.iban(),
        dsgnGrpNo: faker.finance.iban(),
        godNm: faker.commerce.productName(),
        salePrc: faker.commerce.price(1000,100000,0),
        aplSalePrc: faker.commerce.price(1000,100000,0),
        invQty: faker.finance.mask(),
        brndNm: faker.company.companyName(0),
        regDt : faker.date.past(10),
        imgUrl: `${faker.image.fashion()}?random=${Math.round(Math.random() * 10000)}`
      },{
        godNo: faker.finance.iban(),
        erpGodNo: faker.finance.iban(),
        dsgnGrpNo: faker.finance.iban(),
        godNm: faker.commerce.productName(),
        salePrc: faker.commerce.price(1000,100000,0),
        aplSalePrc: faker.commerce.price(1000,100000,0),
        invQty: faker.finance.mask(),
        brndNm: faker.company.companyName(0),
        regDt : faker.date.past(10),
        imgUrl: `${faker.image.fashion()}?random=${Math.round(Math.random() * 10000)}`
      },{
        godNo: faker.finance.iban(),
        erpGodNo: faker.finance.iban(),
        dsgnGrpNo: faker.finance.iban(),
        godNm: faker.commerce.productName(),
        salePrc: faker.commerce.price(1000,100000,0),
        aplSalePrc: faker.commerce.price(1000,100000,0),
        invQty: faker.finance.mask(),
        brndNm: faker.company.companyName(0),
        regDt : faker.date.past(10),
        imgUrl: `${faker.image.fashion()}?random=${Math.round(Math.random() * 10000)}`
      },{
        godNo: faker.finance.iban(),
        erpGodNo: faker.finance.iban(),
        dsgnGrpNo: faker.finance.iban(),
        godNm: faker.commerce.productName(),
        salePrc: faker.commerce.price(1000,100000,0),
        aplSalePrc: faker.commerce.price(1000,100000,0),
        invQty: faker.finance.mask(),
        brndNm: faker.company.companyName(0),
        regDt : faker.date.past(10),
        imgUrl: `${faker.image.fashion()}?random=${Math.round(Math.random() * 10000)}`
      }]
    });
    number2 --;
  }

  let prod = {
    brandList: brandLists,
    godList: godLists
  }

  return prod;
}

fs.writeFileSync(
  "./public/db.json",
  JSON.stringify({ products: generatePersonsData(36), equal: equalDatas(30, 5) })
);