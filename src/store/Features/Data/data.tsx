import arcade from '../../../assets/icon-arcade.svg'
import advanced from '../../../assets/icon-advanced.svg'
import pro from '../../../assets/icon-pro.svg'

export interface planprice{
  monthly: number
  yearly: number
}
export interface userplan{
  planName: string
  planImage: string
  planPrice: planprice
}


export interface useraddons{
  addonName:string
  addonSummary: string
  addonPrices: planprice
}


export const addondata: useraddons[] =[
  {
    addonName: 'Online Service',
    addonSummary: 'Access to multiplayer games',
    addonPrices: {
      monthly:1,
      yearly:10
    }
  },
  {
    addonName: 'Larger storage',
    addonSummary: 'Extra 1TB of clould save',
    addonPrices: {
      monthly:2,
      yearly:20
    }
  },
  {
    addonName: 'Customizable profile',
    addonSummary: 'Custom theme on your profile',
    addonPrices: {
      monthly:2,
      yearly:20
    }
  },
] 
 export const plandata: userplan[] = [
  {
    planName: 'Arcade',
    planImage: arcade,
    planPrice: {
      monthly:9,
      yearly:90,
    }
  },
  {
    planName: 'Advanced',
    planImage: advanced,
    planPrice: {
      monthly:12,
      yearly:120,
    }
  },
  {
    planName: 'Pro',
    planImage: pro,
    planPrice: {
      monthly:15,
      yearly:150,
    }
  },
]



