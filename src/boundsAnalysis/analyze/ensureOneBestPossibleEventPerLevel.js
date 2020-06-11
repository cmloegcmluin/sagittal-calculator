const ensureOneBestPossibleEventPerLevel = structuredHistory => {
    Object.entries(structuredHistory).forEach(([level, events]) => {
        // TODO: is it really "structured"? or more like consolidated?
        const bestPossibleHistoryEvents = events.filter(event => event.isBestPossibleHistoryMember)

        if (bestPossibleHistoryEvents.length > 1) {
            throw new Error(`History had at the ${level} level more than one event marked as member of the best possible history.`)
        }
        if (bestPossibleHistoryEvents.length === 0) {
            throw new Error(`History had at the ${level} level no event marked as member of the best possible history.`)
        }
    })
}

module.exports = {
    ensureOneBestPossibleEventPerLevel,
}
