// Values taken from Census Data as well as CDC influenza dataset

const stateData = {
    "Alabama": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 13.5716,
    "ili_lag_2": 14.7376,
    "ili_lag_3": 15.3305,
    "ili_lag_4": 19.4177
    "ili_rolling_mean": 3.123022867
},
    "Alaska": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 9.47277,
    "ili_lag_2": 9.7181,
    "ili_lag_3": 9.91974,
    "ili_lag_4": 11.7221,
    "ili_rolling_mean": 1.772256134
},
    "Arizona": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 6.479,
    "ili_lag_2": 6.83056,
    "ili_lag_3": 7.2048,
    "ili_lag_4": 8.04104,
    "ili_rolling_mean": 1.841225905
},
    "Arkansas": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 10.1826,
    "ili_lag_2": 10.5263,
    "ili_lag_3": 10.9495,
    "ili_lag_4": 11.0532,
    "ili_rolling_mean": 2.152679208
},
    "California": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 8.20078,
    "ili_lag_2": 8.58924,
    "ili_lag_3": 8.85566,
    "ili_lag_4": 9.26194,
    "ili_rolling_mean": 2.466282224
},
    "Colorado": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 8.97819,
    "ili_lag_2": 9.25633,
    "ili_lag_3": 9.44431,
    "ili_lag_4": 9.47875,
    "ili_rolling_mean": 1.745744856
},
    "Connecticut": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 8.25718,
    "ili_lag_2": 8.98529,
    "ili_lag_3": 9.08556,
    "ili_lag_4": 10.2091,
    "ili_rolling_mean": 1.840237892
},
    "Delaware": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 5.11518,
    "ili_lag_2": 5.16278,
    "ili_lag_3": 5.49981,
    "ili_lag_4": 6.28149,
    "ili_rolling_mean": 0.894892756
},
    "Florida": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 6.93758,
    "ili_lag_2": 7.01684,
    "ili_lag_3": 7.12792,
    "ili_lag_4": 7.64227,
    "ili_rolling_mean": 2.110727607
},
    "Georgia": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 12.4544,
    "ili_lag_2": 14.6076,
    "ili_lag_3": 15.1114,
    "ili_lag_4": 15.4536,
    "ili_rolling_mean": 2.644275207
},
    "Hawaii": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 13.8313,
    "ili_lag_2": 15.5854,
    "ili_lag_3": 15.7855,
    "ili_lag_4": 16.1445,
    "ili_rolling_mean": 2.4703603
},
    "Idaho": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 9.5219,
    "ili_lag_2": 9.56539,
    "ili_lag_3": 9.80296,
    "ili_lag_4": 9.83607,
    "ili_rolling_mean": 1.641968053
},
    "Illinois": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 6.63845,
    "ili_lag_2": 6.72126,
    "ili_lag_3": 7.09147,
    "ili_lag_4": 7.402,
    "ili_rolling_mean": 1.943112151
},
    "Indiana": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 7.84406,
    "ili_lag_2": 8.0998,
    "ili_lag_3": 8.36013,
    "ili_lag_4": 8.96499,
    "ili_rolling_mean": 1.740765025
},
    "Iowa": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 6.56597,
    "ili_lag_2": 6.84535,
    "ili_lag_3": 8.09453,
    "ili_lag_4": 10.8216,
    "ili_rolling_mean": 1.139048692
},
    "Kansas": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 10.7669,
    "ili_lag_2": 11.3333,
    "ili_lag_3": 11.6456,
    "ili_lag_4": 11.6555,
    "ili_rolling_mean": 1.800117866
},
    "Kentucky": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 11.077,
    "ili_lag_2": 11.0917,
    "ili_lag_3": 11.1622,
    "ili_lag_4": 12.6047,
    "ili_rolling_mean": 1.585426587
},
    "Louisiana": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 12.8926,
    "ili_lag_2": 13.5776,
    "ili_lag_3": 13.6597,
    "ili_lag_4": 14.2548,
    "ili_rolling_mean": 2.958021302
},
    "Maine": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 7.92808,
    "ili_lag_2": 8.36395,
    "ili_lag_3": 8.77977,
    "ili_lag_4": 9.69729,
    "ili_rolling_mean": 1.118451956
},
   "Maryland": {
    "population": ,
    "median_income": ,
    "ili_lag_1": 8.07718,
    "ili_lag_2": 8.11639,
    "ili_lag_3": 8.52696,
    "ili_lag_4": 10.1205,
    "ili_rolling_mean": 2.090972019
   },
    "Massachusetts": {
        "population":,
        "median_income":,
        "ili_lag_1": 9.18334,
        "ili_lag_2": 10.1526,
        "ili_lag_3": 10.806,
        "ili_lag_4": 11.7557,
        "ili_rolling_mean": 1.508638828
    },
    "Michigan": {
        "population": ,
        "median_income": ,
        "ili_lag_1": 7.83332,
        "ili_lag_2": 8.02499,
        "ili_lag_3": 9.45598,
        "ili_lag_4": 10.7436,
        "ili_rolling_mean": 1.315638304
    },
    "Minnesota": {
        "population": ,
        "median_income": ,
        "ili_lag_1": 6.73487,
        "ili_lag_2": 6.93707,
        "ili_lag_3": 7.85111,
        "ili_lag_4": 9.71059,
        "ili_rolling_mean": 1.618216079
    },
    "Mississippi": {
        "population": ,
        "median_income": ,
        "ili_lag_1": 11.5652,
        "ili_lag_2": 12.2444,
        "ili_lag_3": 13.2534,
        "ili_lag_4": 14.1183,
        "ili_rolling_mean": 3.351489991
    },

    "Missouri": {
        "population": ,
        "median_income": ,
        "ili_lag_1": 10.7224,
        "ili_lag_2": 10.7473,
        "ili_lag_3": 11.1635,
        "ili_lag_4": 11.2224,
        "ili_rolling_mean": 1.698041362
    },
    "Montana": {
        "population": ,
        "median_income": ,
        "ili_lag_1": 4.68316,
        "ili_lag_2": 4.81586,
        "ili_lag_3": 4.87274,
        "ili_lag_4": 5.18821,
        "ili_rolling_mean": 0.8512998372
    },
    "Nebraska": {
        "population": ,
        "median_income": ,
        "ili_lag_1": 10.2772,
        "ili_lag_2": 10.3523,
        "ili_lag_3": 11.3675,
        "ili_lag_4": 11.5178,
        "ili_rolling_mean": 2.192203681
    },
    "Nevada": {
        "population": ,
        "median_income": ,
        "ili_lag_1": 5.62379,
        "ili_lag_2": 5.63882,
        "ili_lag_3": 6.31543 ,
        "ili_lag_4": 7.31942,
        "ili_rolling_mean": 1.414429253
    },
    "New Hampshire": {
        "population": ,
        "median_income": ,
        "ili_lag_1": 8.47092,
        "ili_lag_2": 10.0437,
        "ili_lag_3": 10.3945,
        "ili_lag_4": 10.8693,
        "ili_rolling_mean": 1.204616498
    },




};