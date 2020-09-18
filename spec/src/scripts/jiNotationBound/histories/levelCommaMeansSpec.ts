import { Cents, Name, Pitch } from "../../../../../src/general"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { CommaMean } from "../../../../../src/scripts/jiNotationBound/histories"
import { computeJiNotationLevelCommaMeans } from "../../../../../src/scripts/jiNotationBound/histories/levelCommaMeans"

describe("computeJiNotationLevelCommaMeans", (): void => {
    it(
        "can return the comma means for the Medium JI notation level, both the positions and the bounded commas' symbols",
        (): void => {
            expect(computeJiNotationLevelCommaMeans(JiNotationLevel.MEDIUM)).toBeCloseToObject([
                { name: "| |(" as Name<CommaMean>, cents: 2.878901 as Cents },
                { name: "|( )|(" as Name<CommaMean>, cents: 7.722881 as Cents },
                { name: ")|( ~|(" as Name<CommaMean>, cents: 12.209187 as Cents },
                { name: "~|( /|" as Name<CommaMean>, cents: 18.118351 as Cents },
                { name: "/| |)" as Name<CommaMean>, cents: 24.385190 as Cents },
                { name: "|) (|" as Name<CommaMean>, cents: 30.206031 as Cents },
                { name: "(| (|(" as Name<CommaMean>, cents: 36.026872 as Cents },
                { name: "(|( //|" as Name<CommaMean>, cents: 40.959176 as Cents },
                { name: "//| /|)" as Name<CommaMean>, cents: 45.891480 as Cents },
                { name: "/|) /|\\" as Name<CommaMean>, cents: 51.021662 as Cents },
                { name: "/|\\ (|)" as Name<CommaMean>, cents: 56.842503 as Cents },
                { name: "(|) (|\\" as Name<CommaMean>, cents: 62.663343 as Cents },
            ])
        },
    )

    it(
        "can return the comma means for the High JI notation level, both the positions and the bounded commas' symbols",
        (): void => {
            expect(computeJiNotationLevelCommaMeans(JiNotationLevel.HIGH)).toBeCloseToObject([
                { name: "| )|" as Name<CommaMean>, cents: 1.689009 as Cents },
                { name: ")| |(" as Name<CommaMean>, cents: 4.567910 as Cents },
                { name: "|( ~|" as Name<CommaMean>, cents: 7.243699 as Cents },
                { name: "~| )|(" as Name<CommaMean>, cents: 9.208778 as Cents },
                { name: ")|( )~|" as Name<CommaMean>, cents: 10.876179 as Cents },
                { name: ")~| ~|(" as Name<CommaMean>, cents: 13.397405 as Cents },
                { name: "~|( |~" as Name<CommaMean>, cents: 15.637377 as Cents },
                { name: "|~ ~~|" as Name<CommaMean>, cents: 17.060236 as Cents },
                { name: "~~| )|~" as Name<CommaMean>, cents: 18.829061 as Cents },
                { name: ")|~ /|" as Name<CommaMean>, cents: 20.794140 as Cents },
                { name: "/| )/|" as Name<CommaMean>, cents: 23.195298 as Cents },
                { name: ")/| |)" as Name<CommaMean>, cents: 26.074200 as Cents },
                { name: "|) )|)" as Name<CommaMean>, cents: 28.953101 as Cents },
                { name: ")|) |\\" as Name<CommaMean>, cents: 31.204382 as Cents },
                { name: "|\\ (|" as Name<CommaMean>, cents: 32.457312 as Cents },
                { name: "(| ~|)" as Name<CommaMean>, cents: 34.422391 as Cents },
                { name: "~|) /|~" as Name<CommaMean>, cents: 36.873721 as Cents },
                { name: "/|~ (|(" as Name<CommaMean>, cents: 38.478202 as Cents },
                { name: "(|( ~|\\" as Name<CommaMean>, cents: 39.455062 as Cents },
                { name: "~|\\ //|" as Name<CommaMean>, cents: 41.508465 as Cents },
                { name: "//| )//|" as Name<CommaMean>, cents: 44.703261 as Cents },
                { name: ")//| /|)" as Name<CommaMean>, cents: 47.582162 as Cents },
                { name: "/|) (|~" as Name<CommaMean>, cents: 49.332652 as Cents },
                { name: "(|~ /|\\" as Name<CommaMean>, cents: 51.583933 as Cents },
                { name: "/|\\ (/|" as Name<CommaMean>, cents: 53.900563 as Cents },
                { name: "(/| )/|\\" as Name<CommaMean>, cents: 55.505043 as Cents },
                { name: ")/|\\ |\\)" as Name<CommaMean>, cents: 57.819363 as Cents },
                { name: "|\\) (|)" as Name<CommaMean>, cents: 59.784442 as Cents },
                { name: "(|) |\\\\" as Name<CommaMean>, cents: 62.101072 as Cents },
                { name: "|\\\\ (|\\" as Name<CommaMean>, cents: 64.352353 as Cents },
                { name: "(|\\ )|\\\\" as Name<CommaMean>, cents: 66.102843 as Cents },
            ])
        },
    )

    it(
        // tslint:disable-next-line max-line-length
        "can return the comma means for the Ultra JI notation level, both the positions and the bounded commas' symbols",
        (): void => {
            expect(computeJiNotationLevelCommaMeans(JiNotationLevel.ULTRA)).toBeCloseToObject([
                { name: "| .)|" as Name<CommaMean>, cents: 0.712148 as Cents },
                { name: ".)| '|" as Name<CommaMean>, cents: 1.689009 as Cents },
                { name: "'| )|" as Name<CommaMean>, cents: 2.665869 as Cents },
                { name: ")| |(" as Name<CommaMean>, cents: 4.567910 as Cents },
                { name: "|( .~|" as Name<CommaMean>, cents: 6.266838 as Cents },
                { name: ".~| '|(" as Name<CommaMean>, cents: 7.243699 as Cents },
                { name: "'|( ~|" as Name<CommaMean>, cents: 8.220559 as Cents },
                { name: "~| )|(" as Name<CommaMean>, cents: 9.208778 as Cents },
                { name: ")|( ')|(" as Name<CommaMean>, cents: 10.664821 as Cents },
                { name: "')|( )~|" as Name<CommaMean>, cents: 11.853039 as Cents },
                { name: ")~| .~|(" as Name<CommaMean>, cents: 12.420545 as Cents },
                { name: ".~|( ~|(" as Name<CommaMean>, cents: 13.753553 as Cents },
                { name: "~|( |~" as Name<CommaMean>, cents: 15.637377 as Cents },
                { name: "|~ ~~|" as Name<CommaMean>, cents: 17.060236 as Cents },
                { name: "~~| ./|" as Name<CommaMean>, cents: 18.564349 as Cents },
                { name: "./| )|~" as Name<CommaMean>, cents: 19.817280 as Cents },
                { name: ")|~ /|" as Name<CommaMean>, cents: 20.794140 as Cents },
                { name: "/| .)/|" as Name<CommaMean>, cents: 22.218438 as Cents },
                { name: ".)/| '/|" as Name<CommaMean>, cents: 23.195298 as Cents },
                { name: "'/| )/|" as Name<CommaMean>, cents: 24.172159 as Cents },
                { name: ")/| .|)" as Name<CommaMean>, cents: 25.097339 as Cents },
                { name: ".|) |)" as Name<CommaMean>, cents: 26.287231 as Cents },
                { name: "|) '|)" as Name<CommaMean>, cents: 28.240952 as Cents },
                { name: "'|) )|)" as Name<CommaMean>, cents: 29.929961 as Cents },
                { name: ")|) .(|" as Name<CommaMean>, cents: 30.918180 as Cents },
                { name: ".(| |\\" as Name<CommaMean>, cents: 31.480451 as Cents },
                { name: "|\\ (|" as Name<CommaMean>, cents: 32.457312 as Cents },
                { name: "(| '(|" as Name<CommaMean>, cents: 34.061792 as Cents },
                { name: "'(| ~|)" as Name<CommaMean>, cents: 35.336213 as Cents },
                { name: "~|) .(|(" as Name<CommaMean>, cents: 36.324432 as Cents },
                { name: ".(|( '~|)" as Name<CommaMean>, cents: 37.301292 as Cents },
                { name: "'~|) /|~" as Name<CommaMean>, cents: 37.850582 as Cents },
                { name: "/|~ (|(" as Name<CommaMean>, cents: 38.478202 as Cents },
                { name: "(|( ~|\\" as Name<CommaMean>, cents: 39.455062 as Cents },
                { name: "~|\\ .//|" as Name<CommaMean>, cents: 40.531605 as Cents },
                { name: ".//| //|" as Name<CommaMean>, cents: 42.035718 as Cents },
                { name: "//| '//|" as Name<CommaMean>, cents: 43.991112 as Cents },
                { name: "'//| )//|" as Name<CommaMean>, cents: 45.681795 as Cents },
                { name: ")//| /|)" as Name<CommaMean>, cents: 47.582162 as Cents },
                { name: "/|) (|~" as Name<CommaMean>, cents: 49.332652 as Cents },
                { name: "(|~ '/|)" as Name<CommaMean>, cents: 50.309513 as Cents },
                { name: "'/|) ./|\\" as Name<CommaMean>, cents: 51.021662 as Cents },
                { name: "./|\\ /|\\" as Name<CommaMean>, cents: 52.296082 as Cents },
                { name: "/|\\ (/|" as Name<CommaMean>, cents: 53.900563 as Cents },
                { name: "(/| '/|\\" as Name<CommaMean>, cents: 54.877423 as Cents },
                { name: "'/|\\ )/|\\" as Name<CommaMean>, cents: 55.854284 as Cents },
                { name: ")/|\\ .(|)" as Name<CommaMean>, cents: 57.470123 as Cents },
                { name: ".(|) |\\)" as Name<CommaMean>, cents: 58.807582 as Cents },
                { name: "|\\) (|)" as Name<CommaMean>, cents: 59.784442 as Cents },
                { name: "(|) '(|)" as Name<CommaMean>, cents: 61.388923 as Cents },
                { name: "'(|) .(|\\" as Name<CommaMean>, cents: 62.663343 as Cents },
                { name: ".(|\\ |\\\\" as Name<CommaMean>, cents: 63.375492 as Cents },
                { name: "|\\\\ (|\\" as Name<CommaMean>, cents: 64.352353 as Cents },
                { name: "(|\\ )|\\\\" as Name<CommaMean>, cents: 66.102843 as Cents },
            ])
        },
    )

    it(
        "can return the comma means for the Extreme JI notation level, both the positions and the bounded commas' symbols",
        (): void => {
            expect(computeJiNotationLevelCommaMeans(JiNotationLevel.EXTREME)).toBeCloseToObject([
                { name: "| `|" as Name<CommaMean>, cents: 0.211358 as Cents },
                { name: "`| ``|" as Name<CommaMean>, cents: 0.627620 as Cents },
                { name: "``| .)|" as Name<CommaMean>, cents: 1.128411 as Cents },
                { name: ".)| '|" as Name<CommaMean>, cents: 1.689009 as Cents },
                { name: "'| `'|" as Name<CommaMean>, cents: 2.165078 as Cents },
                { name: "`'| ,)|" as Name<CommaMean>, cents: 2.679349 as Cents },
                { name: ",)| )|" as Name<CommaMean>, cents: 3.180140 as Cents },
                { name: ")| `)|" as Name<CommaMean>, cents: 3.654088 as Cents },
                { name: "`)| ``)|" as Name<CommaMean>, cents: 4.216360 as Cents },
                { name: "``)| ,,|(" as Name<CommaMean>, cents: 4.713919 as Cents },
                { name: ",,|( ,|(" as Name<CommaMean>, cents: 5.186456 as Cents },
                { name: ",|( |(" as Name<CommaMean>, cents: 5.602718 as Cents },
                { name: "|( `|(" as Name<CommaMean>, cents: 6.118400 as Cents },
                { name: "`|( .~|" as Name<CommaMean>, cents: 6.627437 as Cents },
                { name: ".~| ,'|(" as Name<CommaMean>, cents: 7.045821 as Cents },
                { name: ",'|( '|(" as Name<CommaMean>, cents: 7.513645 as Cents },
                { name: "'|( ,~|" as Name<CommaMean>, cents: 8.072121 as Cents },
                { name: ",~| ~|" as Name<CommaMean>, cents: 8.581158 as Cents },
                { name: "~| ,)|(" as Name<CommaMean>, cents: 8.955683 as Cents },
                { name: ",)|( )|(" as Name<CommaMean>, cents: 9.434865 as Cents },
                { name: ")|( `)|(" as Name<CommaMean>, cents: 9.974162 as Cents },
                { name: "`)|( ``)|(" as Name<CommaMean>, cents: 10.534760 as Cents },
                { name: "``)|( ,')|(" as Name<CommaMean>, cents: 10.964502 as Cents },
                { name: ",')|( ')|(" as Name<CommaMean>, cents: 11.380764 as Cents },
                { name: "')|( )~|" as Name<CommaMean>, cents: 11.853039 as Cents },
                { name: ")~| .~|(" as Name<CommaMean>, cents: 12.420545 as Cents },
                { name: ".~|( `.~|(" as Name<CommaMean>, cents: 13.022641 as Cents },
                { name: "`.~|( ,,~|(" as Name<CommaMean>, cents: 13.531678 as Cents },
                { name: ",,~|( ,~|(" as Name<CommaMean>, cents: 13.992644 as Cents },
                { name: ",~|( ~|(" as Name<CommaMean>, cents: 14.460468 as Cents },
                { name: "~|( `~|(" as Name<CommaMean>, cents: 14.965054 as Cents },
                { name: "`~|( ,,|~" as Name<CommaMean>, cents: 15.474090 as Cents },
                { name: ",,|~ ,|~" as Name<CommaMean>, cents: 15.946365 as Cents },
                { name: ",|~ |~" as Name<CommaMean>, cents: 16.344292 as Cents },
                { name: "|~ `|~" as Name<CommaMean>, cents: 16.767008 as Cents },
                { name: "`|~ ~~|" as Name<CommaMean>, cents: 17.282903 as Cents },
                { name: "~~| `~~|" as Name<CommaMean>, cents: 17.794253 as Cents },
                { name: "`~~| ``~~|" as Name<CommaMean>, cents: 18.273435 as Cents },
                { name: "``~~| ,./|" as Name<CommaMean>, cents: 18.832173 as Cents },
                { name: ",./| ./|" as Name<CommaMean>, cents: 19.341210 as Cents },
                { name: "./| )|~" as Name<CommaMean>, cents: 19.817280 as Cents },
                { name: ")|~ ,,/|" as Name<CommaMean>, cents: 20.244851 as Cents },
                { name: ",,/| ,/|" as Name<CommaMean>, cents: 20.745641 as Cents },
                { name: ",/| /|" as Name<CommaMean>, cents: 21.294931 as Cents },
                { name: "/| `/|" as Name<CommaMean>, cents: 21.704167 as Cents },
                { name: "`/| ``/|" as Name<CommaMean>, cents: 22.113403 as Cents },
                { name: "``/| .)/|" as Name<CommaMean>, cents: 22.627674 as Cents },
                { name: ".)/| '/|" as Name<CommaMean>, cents: 23.195298 as Cents },
                { name: "'/| `'/|" as Name<CommaMean>, cents: 23.657888 as Cents },
                { name: "`'/| ,,)/|" as Name<CommaMean>, cents: 23.955448 as Cents },
                { name: ",,)/| ,)/|" as Name<CommaMean>, cents: 24.166806 as Cents },
                { name: ",)/| )/|" as Name<CommaMean>, cents: 24.581395 as Cents },
                { name: ")/| ,.|)" as Name<CommaMean>, cents: 24.885981 as Cents },
                { name: ",.|) .|)" as Name<CommaMean>, cents: 25.099012 as Cents },
                { name: ".|) `.|)" as Name<CommaMean>, cents: 25.659611 as Cents },
                { name: "`.|) ,,|)" as Name<CommaMean>, cents: 26.220209 as Cents },
                { name: ",,|) ,|)" as Name<CommaMean>, cents: 26.636471 as Cents },
                { name: ",|) |)" as Name<CommaMean>, cents: 27.052733 as Cents },
                { name: "|) `|)" as Name<CommaMean>, cents: 27.461969 as Cents },
                { name: "`|) ``|)" as Name<CommaMean>, cents: 28.022568 as Cents },
                { name: "``|) ,'|)" as Name<CommaMean>, cents: 28.590192 as Cents },
                { name: ",'|) '|)" as Name<CommaMean>, cents: 29.006454 as Cents },
                { name: "'|) `'|)" as Name<CommaMean>, cents: 29.415690 as Cents },
                { name: "`'|) ,)|)" as Name<CommaMean>, cents: 29.894872 as Cents },
                { name: ",)|) )|)" as Name<CommaMean>, cents: 30.409143 as Cents },
                { name: ")|) .(|" as Name<CommaMean>, cents: 30.918180 as Cents },
                { name: ".(| |\\" as Name<CommaMean>, cents: 31.480451 as Cents },
                { name: "|\\ `|\\" as Name<CommaMean>, cents: 31.978011 as Cents },
                { name: "`|\\ ,(|" as Name<CommaMean>, cents: 32.405582 as Cents },
                { name: ",(| (|" as Name<CommaMean>, cents: 32.884883 as Cents },
                { name: "(| `(|" as Name<CommaMean>, cents: 33.382611 as Cents },
                { name: "`(| ``(|" as Name<CommaMean>, cents: 33.950117 as Cents },
                { name: "``(| ,'(|" as Name<CommaMean>, cents: 34.489106 as Cents },
                { name: ",'(| '(|" as Name<CommaMean>, cents: 34.835422 as Cents },
                { name: "'(| ,~|)" as Name<CommaMean>, cents: 35.118091 as Cents },
                { name: ",~|) ~|)" as Name<CommaMean>, cents: 35.478690 as Cents },
                { name: "~|) `~|)" as Name<CommaMean>, cents: 35.966757 as Cents },
                { name: "`~|) ,.(|(" as Name<CommaMean>, cents: 36.482652 as Cents },
                { name: ",.(|( .(|(" as Name<CommaMean>, cents: 36.840326 as Cents },
                { name: ".(|( '~|)" as Name<CommaMean>, cents: 37.301292 as Cents },
                { name: "'~|) /|~" as Name<CommaMean>, cents: 37.850582 as Cents },
                { name: "/|~ ,,(|(" as Name<CommaMean>, cents: 38.061940 as Cents },
                { name: ",,(|( ,(|(" as Name<CommaMean>, cents: 38.307889 as Cents },
                { name: ",(|( (|(" as Name<CommaMean>, cents: 38.724151 as Cents },
                { name: "(|( `(|(" as Name<CommaMean>, cents: 39.117131 as Cents },
                { name: "`(|( ~|\\" as Name<CommaMean>, cents: 39.666420 as Cents },
                { name: "~|\\ ,.//|" as Name<CommaMean>, cents: 40.320247 as Cents },
                { name: ",.//| .//|" as Name<CommaMean>, cents: 40.847500 as Cents },
                { name: ".//| `.//|" as Name<CommaMean>, cents: 41.256736 as Cents },
                { name: "`.//| ,,//|" as Name<CommaMean>, cents: 41.724559 as Cents },
                { name: ",,//| ,//|" as Name<CommaMean>, cents: 42.292184 as Cents },
                { name: ",//| //|" as Name<CommaMean>, cents: 42.801221 as Cents },
                { name: "//| `//|" as Name<CommaMean>, cents: 43.210457 as Cents },
                { name: "`//| ``//|" as Name<CommaMean>, cents: 43.619693 as Cents },
                { name: "``//| ,'//|" as Name<CommaMean>, cents: 44.128729 as Cents },
                { name: ",'//| '//|" as Name<CommaMean>, cents: 44.698027 as Cents },
                { name: "'//| ,,)//|" as Name<CommaMean>, cents: 45.265533 as Cents },
                { name: ",,)//| ,)//|" as Name<CommaMean>, cents: 45.673096 as Cents },
                { name: ",)//| )//|" as Name<CommaMean>, cents: 46.089358 as Cents },
                { name: ")//| `)//|" as Name<CommaMean>, cents: 46.605302 as Cents },
                { name: "`)//| ``)//|" as Name<CommaMean>, cents: 47.125348 as Cents },
                { name: "``)//| ,,/|)" as Name<CommaMean>, cents: 47.685947 as Cents },
                { name: ",,/|) ,/|)" as Name<CommaMean>, cents: 48.142761 as Cents },
                { name: ",/|) /|)" as Name<CommaMean>, cents: 48.559023 as Cents },
                { name: "/|) `/|)" as Name<CommaMean>, cents: 48.968259 as Cents },
                { name: "`/|) (|~" as Name<CommaMean>, cents: 49.530530 as Cents },
                { name: "(|~ ,'/|)" as Name<CommaMean>, cents: 50.098155 as Cents },
                { name: ",'/|) '/|)" as Name<CommaMean>, cents: 50.512744 as Cents },
                { name: "'/|) `'/|)" as Name<CommaMean>, cents: 50.921980 as Cents },
                { name: "`'/|) ./|\\" as Name<CommaMean>, cents: 51.219540 as Cents },
                { name: "./|\\ `./|\\" as Name<CommaMean>, cents: 51.500844 as Cents },
                { name: "`./|\\ ,,/|\\" as Name<CommaMean>, cents: 51.928415 as Cents },
                { name: ",,/|\\ ,/|\\" as Name<CommaMean>, cents: 52.437451 as Cents },
                { name: ",/|\\ /|\\" as Name<CommaMean>, cents: 52.986741 as Cents },
                { name: "/|\\ `/|\\" as Name<CommaMean>, cents: 53.454565 as Cents },
                { name: "`/|\\ ,(/|" as Name<CommaMean>, cents: 53.870827 as Cents },
                { name: ",(/| (/|" as Name<CommaMean>, cents: 54.316825 as Cents },
                { name: "(/| `(/|" as Name<CommaMean>, cents: 54.746305 as Cents },
                { name: "`(/| '/|\\" as Name<CommaMean>, cents: 55.095545 as Cents },
                { name: "'/|\\ `'/|\\" as Name<CommaMean>, cents: 55.438022 as Cents },
                { name: "`'/|\\ ,)/|\\" as Name<CommaMean>, cents: 55.917204 as Cents },
                { name: ",)/|\\ )/|\\" as Name<CommaMean>, cents: 56.333466 as Cents },
                { name: ")/|\\ `)/|\\" as Name<CommaMean>, cents: 56.842503 as Cents },
                { name: "`)/|\\ ``)/|\\" as Name<CommaMean>, cents: 57.351539 as Cents },
                { name: "``)/|\\ ,.(|)" as Name<CommaMean>, cents: 57.767801 as Cents },
                { name: ",.(|) .(|)" as Name<CommaMean>, cents: 58.246983 as Cents },
                { name: ".(|) ,|\\)" as Name<CommaMean>, cents: 58.589460 as Cents },
                { name: ",|\\) |\\)" as Name<CommaMean>, cents: 58.938700 as Cents },
                { name: "|\\) `|\\)" as Name<CommaMean>, cents: 59.368180 as Cents },
                { name: "`|\\) ,(|)" as Name<CommaMean>, cents: 59.814178 as Cents },
                { name: ",(|) (|)" as Name<CommaMean>, cents: 60.230440 as Cents },
                { name: "(|) `(|)" as Name<CommaMean>, cents: 60.698264 as Cents },
                { name: "`(|) ``(|)" as Name<CommaMean>, cents: 61.247554 as Cents },
                { name: "``(|) ,'(|)" as Name<CommaMean>, cents: 61.756590 as Cents },
                { name: ",'(|) '(|)" as Name<CommaMean>, cents: 62.184161 as Cents },
                { name: "'(|) ,.(|\\" as Name<CommaMean>, cents: 62.465465 as Cents },
                { name: ",.(|\\ .(|\\" as Name<CommaMean>, cents: 62.763025 as Cents },
                { name: ".(|\\ `.(|\\" as Name<CommaMean>, cents: 63.172261 as Cents },
                { name: "`.(|\\ |\\\\" as Name<CommaMean>, cents: 63.586850 as Cents },
                { name: "|\\\\ ,(|\\" as Name<CommaMean>, cents: 64.154475 as Cents },
                { name: ",(|\\ (|\\" as Name<CommaMean>, cents: 64.716746 as Cents },
                { name: "(|\\ `(|\\" as Name<CommaMean>, cents: 65.125982 as Cents },
                { name: "`(|\\ ``(|\\" as Name<CommaMean>, cents: 65.542244 as Cents },
                { name: "``(|\\ ,,)|\\\\" as Name<CommaMean>, cents: 65.999058 as Cents },
                { name: ",,)|\\\\ ,)|\\\\" as Name<CommaMean>, cents: 66.559657 as Cents },
                { name: ",)|\\\\ )|\\\\" as Name<CommaMean>, cents: 67.079703 as Cents },
                { name: ")|\\\\ `)|\\\\" as Name<CommaMean>, cents: 67.595647 as Cents },
                { name: "`)|\\\\ ``)|\\\\" as Name<CommaMean>, cents: 68.011909 as Cents },
            ])
        },
    )
})
