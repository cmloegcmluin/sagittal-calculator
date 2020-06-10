const COMMAS = [
    {
        introducingLevel: "MEDIUM",
        position: 0.0000000000000,
        symbol: "|",
        unicode: "",
        mina: 0,
    },
    {
        introducingLevel: "EXTREME",
        position: 0.42271616595482,
        symbol: "`|",
        unicode: "",
        mina: 1,
    },
    {
        introducingLevel: "EXTREME",
        position: 0.83252420410159,
        symbol: "``|",
        unicode: "",
        mina: 2,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 1.4242979405308,
        symbol: ".)|",
        unicode: "",
        mina: 3,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 1.95372078793416,
        symbol: "'|",
        unicode: "",
        mina: 4,
    },
    {
        introducingLevel: "EXTREME",
        position: 2.37643695388898,
        symbol: "`'|",
        unicode: "",
        mina: 5,
    },
    {
        introducingLevel: "EXTREME",
        position: 2.98226285771248,
        symbol: ",)|",
        unicode: "",
        mina: 6,
    },
    {
        introducingLevel: "HIGH",
        position: 3.37801872846485,
        symbol: ")|",
        unicode: "",
        mina: 7,
    },
    {
        introducingLevel: "EXTREME",
        position: 3.93015843943305,
        symbol: "`)|",
        unicode: "",
        mina: 8,
    },
    {
        introducingLevel: "EXTREME",
        position: 4.50256183332916,
        symbol: "``)|",
        unicode: "",
        mina: 9,
    },
    {
        introducingLevel: "EXTREME",
        position: 4.92527799928397,
        symbol: ",,|(",
        unicode: "",
        mina: 10,
    },
    {
        introducingLevel: "EXTREME",
        position: 5.44763529181809,
        symbol: ",|(",
        unicode: "",
        mina: 11,
    },
    {
        introducingLevel: "MEDIUM",
        position: 5.7578022033852,
        symbol: "|(",
        unicode: "",
        mina: 12,
    },
    {
        introducingLevel: "EXTREME",
        position: 6.47899948482794,
        symbol: "`|(",
        unicode: "",
        mina: 13,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 6.77587576937045,
        symbol: ".~|",
        unicode: "",
        mina: 14,
    },
    {
        introducingLevel: "EXTREME",
        position: 7.31576712056731,
        symbol: ",'|(",
        unicode: "",
        mina: 15,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 7.71152299131971,
        symbol: "'|(",
        unicode: "",
        mina: 16,
    },
    {
        introducingLevel: "EXTREME",
        position: 8.43272027276221,
        symbol: ",~|",
        unicode: "",
        mina: 17,
    },
    {
        introducingLevel: "HIGH",
        position: 8.72959655730475,
        symbol: "~|",
        unicode: "",
        mina: 18,
    },
    {
        introducingLevel: "EXTREME",
        position: 9.18177118980167,
        symbol: ",)|(",
        unicode: "",
        mina: 19,
    },
    {
        introducingLevel: "MEDIUM",
        position: 9.6879606428187,
        symbol: ")|(",
        unicode: "",
        mina: 20,
    },
    {
        introducingLevel: "EXTREME",
        position: 10.2603640367144,
        symbol: "`)|(",
        unicode: "",
        mina: 21,
    },
    {
        introducingLevel: "EXTREME",
        position: 10.8091572266510,
        symbol: "``)|(",
        unicode: "",
        mina: 22,
    },
    {
        introducingLevel: "EXTREME",
        position: 11.1198485360183,
        symbol: ",')|(",
        unicode: "",
        mina: 23,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 11.6416814307528,
        symbol: "')|(",
        unicode: "",
        mina: 24,
    },
    {
        introducingLevel: "HIGH",
        position: 12.0643975967077,
        symbol: ")~|",
        unicode: "",
        mina: 25,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 12.7766930394100,
        symbol: ".~|(",
        unicode: "",
        mina: 26,
    },
    {
        introducingLevel: "EXTREME",
        position: 13.2685907694041,
        symbol: "`.~|(",
        unicode: "",
        mina: 27,
    },
    {
        introducingLevel: "EXTREME",
        position: 13.7947666053953,
        symbol: ",,~|(",
        unicode: "",
        mina: 28,
    },
    {
        introducingLevel: "EXTREME",
        position: 14.1905224761475,
        symbol: ",~|(",
        unicode: "",
        mina: 29,
    },
    {
        introducingLevel: "MEDIUM",
        position: 14.7304138273444,
        symbol: "~|(",
        unicode: "",
        mina: 30,
    },
    {
        introducingLevel: "EXTREME",
        position: 15.1996942033926,
        symbol: "`~|(",
        unicode: "",
        mina: 31,
    },
    {
        introducingLevel: "EXTREME",
        position: 15.7484873933296,
        symbol: ",,|~",
        unicode: "",
        mina: 32,
    },
    {
        introducingLevel: "EXTREME",
        position: 16.1442432640817,
        symbol: ",|~",
        unicode: "",
        mina: 33,
    },
    {
        introducingLevel: "HIGH",
        position: 16.5443420760908,
        symbol: "|~",
        unicode: "",
        mina: 34,
    },
    {
        introducingLevel: "EXTREME",
        position: 16.9896755959915,
        symbol: "`|~",
        unicode: "",
        mina: 35,
    },
    {
        introducingLevel: "HIGH",
        position: 17.5761311572815,
        symbol: "~~|",
        unicode: "",
        mina: 36,
    },
    {
        introducingLevel: "EXTREME",
        position: 18.0123750928310,
        symbol: "`~~|",
        unicode: "",
        mina: 37,
    },
    {
        introducingLevel: "EXTREME",
        position: 18.5344952427957,
        symbol: "``~~|",
        unicode: "",
        mina: 38,
    },
    {
        introducingLevel: "EXTREME",
        position: 19.1298526428258,
        symbol: ",./|",
        unicode: "",
        mina: 39,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 19.5525688087807,
        symbol: "./|",
        unicode: "",
        mina: 40,
    },
    {
        introducingLevel: "HIGH",
        position: 20.0819916561843,
        symbol: ")|~",
        unicode: "",
        mina: 41,
    },
    {
        introducingLevel: "EXTREME",
        position: 20.4077103668277,
        symbol: ",,/|",
        unicode: "",
        mina: 42,
    },
    {
        introducingLevel: "EXTREME",
        position: 21.0835734307600,
        symbol: ",/|",
        unicode: "",
        mina: 43,
    },
    {
        introducingLevel: "MEDIUM",
        position: 21.5062895967148,
        symbol: "/|",
        unicode: "",
        mina: 44,
    },
    {
        introducingLevel: "EXTREME",
        position: 21.9020454674670,
        symbol: "`/|",
        unicode: "",
        mina: 45,
    },
    {
        introducingLevel: "EXTREME",
        position: 22.3247616334221,
        symbol: "``/|",
        unicode: "",
        mina: 46,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 22.9305875372457,
        symbol: ".)/|",
        unicode: "",
        mina: 47,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 23.4600103846490,
        symbol: "'/|",
        unicode: "",
        mina: 48,
    },
    {
        introducingLevel: "EXTREME",
        position: 23.8557662554013,
        symbol: "`'/|",
        unicode: "",
        mina: 49,
    },
    {
        introducingLevel: "EXTREME",
        position: 24.0551306421097,
        symbol: ",,)/|",
        unicode: "",
        mina: 49.56756901073000,
    },
    {
        introducingLevel: "EXTREME",
        position: 24.2784824213563,
        symbol: ",)/|",
        unicode: "",
        mina: 50,
    },
    {
        introducingLevel: "HIGH",
        position: 24.8843083251798,
        symbol: ")/|",
        unicode: "",
        mina: 51,
    },
    {
        introducingLevel: "EXTREME",
        position: 24.8876548462113,
        symbol: ",.|)",
        unicode: "",
        mina: 51.45864857210600,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 25.3103710121659,
        symbol: ".|)",
        unicode: "",
        mina: 52,
    },
    {
        introducingLevel: "EXTREME",
        position: 26.0088514300439,
        symbol: "`.|)",
        unicode: "",
        mina: 53,
    },
    {
        introducingLevel: "EXTREME",
        position: 26.4315675959986,
        symbol: ",,|)",
        unicode: "",
        mina: 54,
    },
    {
        introducingLevel: "EXTREME",
        position: 26.8413756341454,
        symbol: ",|)",
        unicode: "",
        mina: 55,
    },
    {
        introducingLevel: "MEDIUM",
        position: 27.2640918001001,
        symbol: "|)",
        unicode: "",
        mina: 56,
    },
    {
        introducingLevel: "EXTREME",
        position: 27.6598476708525,
        symbol: "`|)",
        unicode: "",
        mina: 57,
    },
    {
        introducingLevel: "EXTREME",
        position: 28.3852883839327,
        symbol: "``|)",
        unicode: "",
        mina: 58,
    },
    {
        introducingLevel: "EXTREME",
        position: 28.7950964220796,
        symbol: ",'|)",
        unicode: "",
        mina: 59,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 29.2178125880342,
        symbol: "'|)",
        unicode: "",
        mina: 60,
    },
    {
        introducingLevel: "EXTREME",
        position: 29.6135684587868,
        symbol: "`'|)",
        unicode: "",
        mina: 61,
    },
    {
        introducingLevel: "EXTREME",
        position: 30.1761766735484,
        symbol: ",)|)",
        unicode: "",
        mina: 62,
    },
    {
        introducingLevel: "HIGH",
        position: 30.6421105285650,
        symbol: ")|)",
        unicode: "",
        mina: 63,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 31.1942502395332,
        symbol: ".(|",
        unicode: "",
        mina: 64,
    },
    {
        introducingLevel: "HIGH",
        position: 31.7666536334294,
        symbol: "|\\",
        unicode: "",
        mina: 65,
    },
    {
        introducingLevel: "EXTREME",
        position: 32.1893697993842,
        symbol: "`|\\",
        unicode: "",
        mina: 66,
    },
    {
        introducingLevel: "EXTREME",
        position: 32.6217951914765,
        symbol: ",(|",
        unicode: "",
        mina: 67,
    },
    {
        introducingLevel: "MEDIUM",
        position: 33.1479710274675,
        symbol: "(|",
        unicode: "",
        mina: 68,
    },
    {
        introducingLevel: "EXTREME",
        position: 33.6172514035158,
        symbol: "`(|",
        unicode: "",
        mina: 69,
    },
    {
        introducingLevel: "EXTREME",
        position: 34.2829826361251,
        symbol: "``(|",
        unicode: "",
        mina: 70,
    },
    {
        introducingLevel: "EXTREME",
        position: 34.6952302982867,
        symbol: ",'(|",
        unicode: "",
        mina: 71,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 34.9756147914198,
        symbol: "'(|",
        unicode: "",
        mina: 72,
    },
    {
        introducingLevel: "EXTREME",
        position: 35.2605681373132,
        symbol: ",~|)",
        unicode: "",
        mina: 72.40486810762850,
    },
    {
        introducingLevel: "HIGH",
        position: 35.6968120728623,
        symbol: "~|)",
        unicode: "",
        mina: 73,
    },
    {
        introducingLevel: "EXTREME",
        position: 36.2367034240592,
        symbol: "`~|)",
        unicode: "",
        mina: 74,
    },
    {
        introducingLevel: "EXTREME",
        position: 36.4483788522224,
        symbol: "``~|)",
        unicode: "",
        mina: 75,
    },
    {
        introducingLevel: "EXTREME",
        position: 36.7286011540533,
        symbol: ",.(|(",
        unicode: "",
        mina: 75.53838439606520,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 36.9520524429189,
        symbol: ".(|(",
        unicode: "",
        mina: 76,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 37.6505328607966,
        symbol: "'~|)",
        unicode: "",
        mina: 77,
    },
    {
        introducingLevel: "HIGH",
        position: 38.0506316728057,
        symbol: "/|~",
        unicode: "",
        mina: 78,
    },
    {
        introducingLevel: "EXTREME",
        position: 38.0732490267513,
        symbol: ",,(|(",
        unicode: "",
        mina: 78.39014554523920,
    },
    {
        introducingLevel: "EXTREME",
        position: 38.5425294027997,
        symbol: ",(|(",
        unicode: "",
        mina: 79,
    },
    {
        introducingLevel: "MEDIUM",
        position: 38.9057732308529,
        symbol: "(|(",
        unicode: "",
        mina: 80,
    },
    {
        introducingLevel: "EXTREME",
        position: 39.3284893968078,
        symbol: "`(|(",
        unicode: "",
        mina: 81,
    },
    {
        introducingLevel: "HIGH",
        position: 40.0043524607400,
        symbol: "~|\\",
        unicode: "",
        mina: 82,
    },
    {
        introducingLevel: "EXTREME",
        position: 40.6361422395406,
        symbol: ",.//|",
        unicode: "",
        mina: 83,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 41.0588584054956,
        symbol: ".//|",
        unicode: "",
        mina: 84,
    },
    {
        introducingLevel: "EXTREME",
        position: 41.4546142762478,
        symbol: "`.//|",
        unicode: "",
        mina: 85,
    },
    {
        introducingLevel: "EXTREME",
        position: 41.9945056274446,
        symbol: ",,//|",
        unicode: "",
        mina: 86,
    },
    {
        introducingLevel: "EXTREME",
        position: 42.5898630274750,
        symbol: ",//|",
        unicode: "",
        mina: 87,
    },
    {
        introducingLevel: "MEDIUM",
        position: 43.0125791934297,
        symbol: "//|",
        unicode: "",
        mina: 88,
    },
    {
        introducingLevel: "EXTREME",
        position: 43.4083350641820,
        symbol: "`//|",
        unicode: "",
        mina: 89,
    },
    {
        introducingLevel: "EXTREME",
        position: 43.8310512301367,
        symbol: "``//|",
        unicode: "",
        mina: 90,
    },
    {
        introducingLevel: "EXTREME",
        position: 44.4264086301669,
        symbol: ",'//|",
        unicode: "",
        mina: 91,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 44.9696465023956,
        symbol: "'//|",
        unicode: "",
        mina: 92,
    },
    {
        introducingLevel: "EXTREME",
        position: 45.5614202388245,
        symbol: ",,)//|",
        unicode: "",
        mina: 93,
    },
    {
        introducingLevel: "EXTREME",
        position: 45.7847720180709,
        symbol: ",)//|",
        unicode: "",
        mina: 94,
    },
    {
        introducingLevel: "HIGH",
        position: 46.3939444429262,
        symbol: ")//|",
        unicode: "",
        mina: 95,
    },
    {
        introducingLevel: "EXTREME",
        position: 46.8166606088810,
        symbol: "`)//|",
        unicode: "",
        mina: 96,
    },
    {
        introducingLevel: "EXTREME",
        position: 47.4340370239647,
        symbol: "``)//|",
        unicode: "",
        mina: 97,
    },
    {
        introducingLevel: "EXTREME",
        position: 47.9378571927136,
        symbol: ",,/|)",
        unicode: "",
        mina: 98,
    },
    {
        introducingLevel: "EXTREME",
        position: 48.3476652308603,
        symbol: ",/|)",
        unicode: "",
        mina: 99,
    },
    {
        introducingLevel: "MEDIUM",
        position: 48.7703813968149,
        symbol: "/|)",
        unicode: "",
        mina: 100,
    },
    {
        introducingLevel: "EXTREME",
        position: 49.1661372675673,
        symbol: "`/|)",
        unicode: "",
        mina: 101,
    },
    {
        introducingLevel: "HIGH",
        position: 49.8949245016792,
        symbol: "(|~",
        unicode: "",
        mina: 102,
    },
    {
        introducingLevel: "EXTREME",
        position: 50.3013860187944,
        symbol: ",'/|)",
        unicode: "",
        mina: 103,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 50.7241021847494,
        symbol: "'/|)",
        unicode: "",
        mina: 104,
    },
    {
        introducingLevel: "EXTREME",
        position: 51.1198580555015,
        symbol: "`'/|)",
        unicode: "",
        mina: 105,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 51.3192224422099,
        symbol: "./|\\",
        unicode: "",
        mina: 105.57202549664000,
    },
    {
        introducingLevel: "EXTREME",
        position: 51.6824662702631,
        symbol: "`./|\\",
        unicode: "",
        mina: 106,
    },
    {
        introducingLevel: "EXTREME",
        position: 52.1743640002570,
        symbol: ",,/|\\",
        unicode: "",
        mina: 107,
    },
    {
        introducingLevel: "EXTREME",
        position: 52.7005398362484,
        symbol: ",/|\\",
        unicode: "",
        mina: 108,
    },
    {
        introducingLevel: "MEDIUM",
        position: 53.2729432301441,
        symbol: "/|\\",
        unicode: "",
        mina: 109,
    },
    {
        introducingLevel: "EXTREME",
        position: 53.6361870581975,
        symbol: "`/|\\",
        unicode: "",
        mina: 110,
    },
    {
        introducingLevel: "EXTREME",
        position: 54.1054674342458,
        symbol: ",(/|",
        unicode: "",
        mina: 111,
    },
    {
        introducingLevel: "HIGH",
        position: 54.5281836002006,
        symbol: "(/|",
        unicode: "",
        mina: 112,
    },
    {
        introducingLevel: "EXTREME",
        position: 54.9644275357497,
        symbol: "`(/|",
        unicode: "",
        mina: 113,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 55.2266640180783,
        symbol: "'/|\\",
        unicode: "",
        mina: 113.45170990741700,
    },
    {
        introducingLevel: "EXTREME",
        position: 55.6493801840332,
        symbol: "`'/|\\",
        unicode: "",
        mina: 114,
    },
    {
        introducingLevel: "EXTREME",
        position: 56.1850281035923,
        symbol: ",)/|\\",
        unicode: "",
        mina: 115,
    },
    {
        introducingLevel: "HIGH",
        position: 56.4819043881346,
        symbol: ")/|\\",
        unicode: "",
        mina: 116,
    },
    {
        introducingLevel: "EXTREME",
        position: 57.2031016695774,
        symbol: "`)/|\\",
        unicode: "",
        mina: 117,
    },
    {
        introducingLevel: "EXTREME",
        position: 57.4999779541197,
        symbol: "``)/|\\",
        unicode: "",
        mina: 118,
    },
    {
        introducingLevel: "EXTREME",
        position: 58.0356258736789,
        symbol: ",.(|)",
        unicode: "",
        mina: 119,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 58.4583420396336,
        symbol: ".(|)",
        unicode: "",
        mina: 120,
    },
    {
        introducingLevel: "EXTREME",
        position: 58.7205785219622,
        symbol: ",|\\)",
        unicode: "",
        mina: 120.70032964758700,
    },
    {
        introducingLevel: "HIGH",
        position: 59.1568224575114,
        symbol: "|\\)",
        unicode: "",
        mina: 121,
    },
    {
        introducingLevel: "EXTREME",
        position: 59.5795386234664,
        symbol: "`|\\)",
        unicode: "",
        mina: 122,
    },
    {
        introducingLevel: "EXTREME",
        position: 60.0488189995148,
        symbol: ",(|)",
        unicode: "",
        mina: 123,
    },
    {
        introducingLevel: "MEDIUM",
        position: 60.4120628275676,
        symbol: "(|)",
        unicode: "",
        mina: 124,
    },
    {
        introducingLevel: "EXTREME",
        position: 60.9844662214638,
        symbol: "`(|)",
        unicode: "",
        mina: 125,
    },
    {
        introducingLevel: "EXTREME",
        position: 61.5106420574550,
        symbol: "``(|)",
        unicode: "",
        mina: 126,
    },
    {
        introducingLevel: "EXTREME",
        position: 62.0025397874486,
        symbol: ",'(|)",
        unicode: "",
        mina: 127,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 62.3657836155021,
        symbol: "'(|)",
        unicode: "",
        mina: 128,
    },
    {
        introducingLevel: "EXTREME",
        position: 62.5651480022103,
        symbol: ",.(|\\",
        unicode: "",
        mina: 128.58001405836400,
    },
    {
        introducingLevel: "VERY_HIGH",
        position: 62.9609038729626,
        symbol: ".(|\\",
        unicode: "",
        mina: 129,
    },
    {
        introducingLevel: "EXTREME",
        position: 63.3836200389176,
        symbol: "`.(|\\",
        unicode: "",
        mina: 130,
    },
    {
        introducingLevel: "HIGH",
        position: 63.7900815560325,
        symbol: "|\\\\",
        unicode: "",
        mina: 131,
    },
    {
        introducingLevel: "EXTREME",
        position: 64.5188687901447,
        symbol: ",(|\\",
        unicode: "",
        mina: 132,
    },
    {
        introducingLevel: "MEDIUM",
        position: 64.9146246608968,
        symbol: "(|\\",
        unicode: "",
        mina: 133,
    },
    {
        introducingLevel: "EXTREME",
        position: 65.3373408268518,
        symbol: "`(|\\",
        unicode: "",
        mina: 134,
    },
    {
        introducingLevel: "EXTREME",
        position: 65.7471488649985,
        symbol: "``(|\\",
        unicode: "",
        mina: 135,
    },
    {
        introducingLevel: "EXTREME",
        position: 66.2509690337472,
        symbol: ",,)|\\\\",
        unicode: "",
        mina: 136,
    },
    {
        introducingLevel: "EXTREME",
        position: 66.8683454488310,
        symbol: ",)|\\\\",
        unicode: "",
        mina: 137,
    },
    {
        introducingLevel: "HIGH",
        position: 67.2910616147857,
        symbol: ")|\\\\",
        unicode: "",
        mina: 138,
    },
    {
        introducingLevel: "EXTREME",
        position: 67.9002340396410,
        symbol: "`)|\\\\",
        unicode: "",
        mina: 139,
    },
    {
        introducingLevel: "EXTREME",
        position: 68.1235858189,
        symbol: "``)|\\\\",
        unicode: "",
        mina: 140,
    },
]

module.exports = {
    COMMAS,
}
