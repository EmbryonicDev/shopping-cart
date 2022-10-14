import astonMartin from './assets/images/astonMartinVulcan.jpeg';
import goldBars from './assets/images/goldBars.jpeg';
import jet from './assets/images/gulfstreamJet.jpeg';
import house from './assets/images/house.jpeg';
import island from './assets/images/island.jpeg';
import yacht from './assets/images/yacht.jpeg';

const shopItems = [];

const newShopItem = (name, image, price, inCart = false, quantity = 0) => {
  return {
    name,
    image,
    price,
    inCart,
    quantity
  }
}

const temp = [
  ['Aston Martin Vulcan', astonMartin, 23000000],
  ['100kg Gold Bars', goldBars, 5363710],
  ['Gulfstream Jet G650ER', jet, 60000000],
  ['Secret Location Off-Grid House', house, 25000000],
  ['Secret Location Off-Grid Island', island, 80000000],
  ['Super Yacht', yacht, 300000000]
]

temp.forEach(element => {
  shopItems.push(newShopItem(...element))
});

export default shopItems;