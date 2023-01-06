const products = [
  {
    id: 1,
    name: 'albany sofa',
    image:
      'https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg',
    price: 39.95,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
  {
    id: 2,
    name: 'entertainment center',
    image:
      'https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg',
    price: 29.98,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
  {
    id: 3,
    name: 'albany sectional',
    image:
      'https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg',
    price: 10.99,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
  {
    id: 4,
    name: 'leather sofa',
    image:
      'https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg',
    price: 9.99,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
]
const people = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'susan' },
  { id: 4, name: 'anna' },
  { id: 5, name: 'emma' },
]
const phones =[
    {
    "name":"Pixel 5",
    "price":"$400",
    "description":"Experience smooth operation and brilliant user interface with the 5G-ready Google Pixel smartphone that comes loaded with innovative features.",
    "url":"https://m.media-amazon.com/images/I/7173p0j-mbL._AC_UY218_.jpg",
     "id":1,
     "img":"https://m.media-amazon.com/images/I/7173p0j-mbL._AC_SX466_.jpg",
     "cartimg":"https://i.imgur.com/QRwjbm5.jpg"
    },
    {
    "name":"Pixel 7",
    "price":"$600",
    "description":"Slim and sleek",
    "url":"https://m.media-amazon.com/images/I/71loUpMg0pL._AC_UY218_.jpg",
    "id":2,
    "img":"https://m.media-amazon.com/images/I/71loUpMg0pL._AC_SX466_.jpg",
    "cartimg":"https://i.imgur.com/QRwjbm5.jpg"
    },
    {
    "name":"Pixel 7a",
    "price":"$500",
    "description":"Slim and sleek",
    "url":"https://m.media-amazon.com/images/I/61ePWSuIfwL._AC_UY218_.jpg",
    "id":3,
    "img":"https://m.media-amazon.com/images/I/61ePWSuIfwL._AC_SX466_.jpg",
    "cartimg":"https://i.imgur.com/QRwjbm5.jpg"
    },
    {
    "name":"Pixel 4a",
    "price":"$300",
    "description":"Slim and sleek",
    "url":"https://m.media-amazon.com/images/I/81Uho2XBxQL._AC_UY218_.jpg",
    "id":4,
    "img":"https://m.media-amazon.com/images/I/81Uho2XBxQL._AC_SX679_.jpg",
    "cartimg":"https://i.imgur.com/QRwjbm5.jpg"
    }
]
const cart=[
    {
      id:1,
      name:"phone1",
      quantity:1,
      price:600,
      isActive:true
    },
    {
      id:2,
      name:"phone2",
      quantity:1,
      price:700,
      isActive:true
    },
    {
      id:3,
      name:"phone3",
      quantity:1,
      price:800,
      isActive:true
    }
  
]
module.exports = { products, people, phones, cart }
