// Values taken from Census Data as well as CDC influenza dataset

const stateData = {
    "Alabama": {
    "ili_lag_1": 13.5716,
    "ili_lag_2": 14.7376,
    "ili_lag_3": 15.3305,
    "ili_lag_4": 19.4177,
    "ili_rolling_mean": 3.123022867
},
    "Alaska": {
    "ili_lag_1": 9.47277,
    "ili_lag_2": 9.7181,
    "ili_lag_3": 9.91974,
    "ili_lag_4": 11.7221,
    "ili_rolling_mean": 1.772256134
},
    "Arizona": {
    "ili_lag_1": 6.479,
    "ili_lag_2": 6.83056,
    "ili_lag_3": 7.2048,
    "ili_lag_4": 8.04104,
    "ili_rolling_mean": 1.841225905
},
    "Arkansas": {
    "ili_lag_1": 10.1826,
    "ili_lag_2": 10.5263,
    "ili_lag_3": 10.9495,
    "ili_lag_4": 11.0532,
    "ili_rolling_mean": 2.152679208
},
    "California": {
    "ili_lag_1": 8.20078,
    "ili_lag_2": 8.58924,
    "ili_lag_3": 8.85566,
    "ili_lag_4": 9.26194,
    "ili_rolling_mean": 2.466282224
},
    "Colorado": {
    "ili_lag_1": 8.97819,
    "ili_lag_2": 9.25633,
    "ili_lag_3": 9.44431,
    "ili_lag_4": 9.47875,
    "ili_rolling_mean": 1.745744856
},
    "Connecticut": {
    "ili_lag_1": 8.25718,
    "ili_lag_2": 8.98529,
    "ili_lag_3": 9.08556,
    "ili_lag_4": 10.2091,
    "ili_rolling_mean": 1.840237892
},
    "Delaware": {
    "ili_lag_1": 5.11518,
    "ili_lag_2": 5.16278,
    "ili_lag_3": 5.49981,
    "ili_lag_4": 6.28149,
    "ili_rolling_mean": 0.894892756
},
    "Florida": {
    "ili_lag_1": 6.93758,
    "ili_lag_2": 7.01684,
    "ili_lag_3": 7.12792,
    "ili_lag_4": 7.64227,
    "ili_rolling_mean": 2.110727607
},
    "Georgia": {
    "ili_lag_1": 12.4544,
    "ili_lag_2": 14.6076,
    "ili_lag_3": 15.1114,
    "ili_lag_4": 15.4536,
    "ili_rolling_mean": 2.644275207
},
    "Hawaii": {
    "ili_lag_1": 13.8313,
    "ili_lag_2": 15.5854,
    "ili_lag_3": 15.7855,
    "ili_lag_4": 16.1445,
    "ili_rolling_mean": 2.4703603
},
    "Idaho": {
    "ili_lag_1": 9.5219,
    "ili_lag_2": 9.56539,
    "ili_lag_3": 9.80296,
    "ili_lag_4": 9.83607,
    "ili_rolling_mean": 1.641968053
},
    "Illinois": {
    "ili_lag_1": 6.63845,
    "ili_lag_2": 6.72126,
    "ili_lag_3": 7.09147,
    "ili_lag_4": 7.402,
    "ili_rolling_mean": 1.943112151
},
    "Indiana": {
    "ili_lag_1": 7.84406,
    "ili_lag_2": 8.0998,
    "ili_lag_3": 8.36013,
    "ili_lag_4": 8.96499,
    "ili_rolling_mean": 1.740765025
},
    "Iowa": {
    "ili_lag_1": 6.56597,
    "ili_lag_2": 6.84535,
    "ili_lag_3": 8.09453,
    "ili_lag_4": 10.8216,
    "ili_rolling_mean": 1.139048692
},
    "Kansas": {
    "ili_lag_1": 10.7669,
    "ili_lag_2": 11.3333,
    "ili_lag_3": 11.6456,
    "ili_lag_4": 11.6555,
    "ili_rolling_mean": 1.800117866
},
    "Kentucky": {
    "ili_lag_1": 11.077,
    "ili_lag_2": 11.0917,
    "ili_lag_3": 11.1622,
    "ili_lag_4": 12.6047,
    "ili_rolling_mean": 1.585426587
},
    "Louisiana": {
    "ili_lag_1": 12.8926,
    "ili_lag_2": 13.5776,
    "ili_lag_3": 13.6597,
    "ili_lag_4": 14.2548,
    "ili_rolling_mean": 2.958021302
},
    "Maine": {
    "ili_lag_1": 7.92808,
    "ili_lag_2": 8.36395,
    "ili_lag_3": 8.77977,
    "ili_lag_4": 9.69729,
    "ili_rolling_mean": 1.118451956
},
   "Maryland": {
    "ili_lag_1": 8.07718,
    "ili_lag_2": 8.11639,
    "ili_lag_3": 8.52696,
    "ili_lag_4": 10.1205,
    "ili_rolling_mean": 2.090972019
   },
    "Massachusetts": {
        "ili_lag_1": 9.18334,
        "ili_lag_2": 10.1526,
        "ili_lag_3": 10.806,
        "ili_lag_4": 11.7557,
        "ili_rolling_mean": 1.508638828
    },
    "Michigan": {
        "ili_lag_1": 7.83332,
        "ili_lag_2": 8.02499,
        "ili_lag_3": 9.45598,
        "ili_lag_4": 10.7436,
        "ili_rolling_mean": 1.315638304
    },
    "Minnesota": {
        "ili_lag_1": 6.73487,
        "ili_lag_2": 6.93707,
        "ili_lag_3": 7.85111,
        "ili_lag_4": 9.71059,
        "ili_rolling_mean": 1.618216079
    },
    "Mississippi": {
        "ili_lag_1": 11.5652,
        "ili_lag_2": 12.2444,
        "ili_lag_3": 13.2534,
        "ili_lag_4": 14.1183,
        "ili_rolling_mean": 3.351489991
    },

    "Missouri": {
        "ili_lag_1": 10.7224,
        "ili_lag_2": 10.7473,
        "ili_lag_3": 11.1635,
        "ili_lag_4": 11.2224,
        "ili_rolling_mean": 1.698041362
    },
    "Montana": {
        "ili_lag_1": 4.68316,
        "ili_lag_2": 4.81586,
        "ili_lag_3": 4.87274,
        "ili_lag_4": 5.18821,
        "ili_rolling_mean": 0.8512998372
    },
    "Nebraska": {
        "ili_lag_1": 10.2772,
        "ili_lag_2": 10.3523,
        "ili_lag_3": 11.3675,
        "ili_lag_4": 11.5178,
        "ili_rolling_mean": 2.192203681
    },
    "Nevada": {
        "ili_lag_1": 5.62379,
        "ili_lag_2": 5.63882,
        "ili_lag_3": 6.31543 ,
        "ili_lag_4": 7.31942,
        "ili_rolling_mean": 1.414429253
    },
    "New Hampshire": {
        "ili_lag_1": 8.47092,
        "ili_lag_2": 10.0437,
        "ili_lag_3": 10.3945,
        "ili_lag_4": 10.8693,
        "ili_rolling_mean": 1.204616498
    },
    "New Jersey": {
        "ili_lag_1": 12.1513,
        "ili_lag_2": 13.0516,
        "ili_lag_3": 15.0992,
        "ili_lag_4": 16.1318,
        "ili_rolling_mean": 2.845785758
    },
    "New Mexico": {
        "ili_lag_1": 14.0904,
        "ili_lag_2": 15.4059,
        "ili_lag_3": 16.6005,
        "ili_lag_4": 16.9512,
        "ili_rolling_mean": 2.765714814
    },
    "New York": {
        "ili_lag_1": 9.81455,
        "ili_lag_2": 10.3037,
        "ili_lag_3": 10.6533,
        "ili_lag_4": 10.9383,
        "ili_rolling_mean": 1.868426584
    },
    "North Carolina": {
        "ili_lag_1": 8.65161,
        "ili_lag_2": 8.65292,
        "ili_lag_3": 8.8115,
        "ili_lag_4": 10.2671,
        "ili_rolling_mean": 1.736771675
    },
    "North Dakota": {
        "ili_lag_1": 9.03583,
        "ili_lag_2": 11.2766,
        "ili_lag_3": 12.3215,
        "ili_lag_4": 14.2703,
        "ili_rolling_mean": 2.224695069
    },
    "Ohio": {
        "ili_lag_1": 9.93038,
        "ili_lag_2": 10.2964,
        "ili_lag_3": 13.3242,
        "ili_lag_4": 13.6675,
        "ili_rolling_mean": 1.515273968
    },
    "Oklahoma": {
        "ili_lag_1": 12.8354,
        "ili_lag_2": 14.4065,
        "ili_lag_3": 14.9247,
        "ili_lag_4": 15.5039,
        "ili_rolling_mean": 2.526011885
    },
    "Oregon": {
        "ili_lag_1": 8.36457,
        "ili_lag_2": 9.11707,
        "ili_lag_3": 9.7709,
        "ili_lag_4": 11.6583,
        "ili_rolling_mean": 1.363688983
    },
    "Pennsylvania": {
        "ili_lag_1": 6.57262,
        "ili_lag_2": 6.65157,
        "ili_lag_3": 6.79669,
        "ili_lag_4": 7.0306,
        "ili_rolling_mean": 1.553710352
    },
    "Rhode Island": {
        "ili_lag_1": 7.81563,
        "ili_lag_2": 8.39862,
        "ili_lag_3": 9.02184,
        "ili_lag_4": 9.11474,
        "ili_rolling_mean": 1.066732533
    },
    "South Carolina": {
        "ili_lag_1": 16.1169,
        "ili_lag_2": 16.478,
        "ili_lag_3": 17.008,
        "ili_lag_4": 19.3284,
        "ili_rolling_mean": 2.167233096
    },
    "South Dakota": {
        "ili_lag_1": 4.74987,
        "ili_lag_2": 4.8319,
        "ili_lag_3": 4.90407,
        "ili_lag_4": 5.38455,
        "ili_rolling_mean": 1.182019997
    },
    "Tennessee": {
        "ili_lag_1": 12.7202,
        "ili_lag_2": 13.3386,
        "ili_lag_3": 13.4047,
        "ili_lag_4": 14.7676,
        "ili_rolling_mean": 2.101407479
    },
    "Texas": {
        "ili_lag_1": 13.449,
        "ili_lag_2": 13.9335,
        "ili_lag_3": 14.5657,
        "ili_lag_4": 15.2711,
        "ili_rolling_mean": 3.439220861
    },
    "Utah": {
        "ili_lag_1": 6.93167,
        "ili_lag_2": 7.27637,
        "ili_lag_3": 7.36565,
        "ili_lag_4": 7.49461,
        "ili_rolling_mean": 1.823324674
    },
    "Vermont": {
        "ili_lag_1": 5.94282,
        "ili_lag_2": 6.05428,
        "ili_lag_3": 6.78543,
        "ili_lag_4": 7.35488,
        "ili_rolling_mean": 1.513705692
    },
    "Virginia": {
        "ili_lag_1": 9.87439,
        "ili_lag_2": 10.5629,
        "ili_lag_3": 10.7374,
        "ili_lag_4": 10.929,
        "ili_rolling_mean": 2.352700073
    },
    "Washington": {
        "ili_lag_1": 9.03203,
        "ili_lag_2": 10.6642,
        "ili_lag_3": 11.7328,
        "ili_lag_4": 12.9332,
        "ili_rolling_mean": 1.289423268
    },
    "West Virginia": {
        "ili_lag_1": 6.77623,
        "ili_lag_2": 7.37364,
        "ili_lag_3": 8.15362,
        "ili_lag_4": 8.20925,
        "ili_rolling_mean": 1.428950976
    },
    "Wisconsin": {
        "ili_lag_1": 5.75515,
        "ili_lag_2": 5.76586,
        "ili_lag_3": 6.3458,
        "ili_lag_4": 7.27175,
        "ili_rolling_mean": 1.406271397
    },
    "Wyoming": {
        "ili_lag_1": 9.26488,
        "ili_lag_2": 9.84127,
        "ili_lag_3": 9.95826,
        "ili_lag_4": 10.1222,
        "ili_rolling_mean": 1.552816896
    }
};

export default stateData;