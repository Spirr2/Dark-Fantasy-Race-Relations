const RACES = ["Humans", "Elves", "Dwarves", "Halflings", "Dragonborn", "Gnomes", "Half-Elves", "Half-Orcs", "Tieflings"];

// Key: H = Hostile, N = Neutral/Wary, T = Tolerant/Pragmatic (will be green for "friendly enough")
const RELATIONS = {
    "Humans": {
        "Elves":      { status: 'H', description: "Humans resent elven aloofness and perceived power; often seeking to exploit their resources or fearing their magic. Elves are seen as arrogant and detached." },
        "Dwarves":    { status: 'N', description: "Humans are wary of dwarven stubbornness and insularity. They can be trade partners but also rivals for land and resources, with tensions easily flaring over perceived slights or greed." },
        "Halflings":  { status: 'T', description: "Humans often see Halflings as harmless, sometimes childlike, and easily overlooked or exploited for cheap labor. A patronizing tolerance is common." },
        "Dragonborn": { status: 'N', description: "Humans view Dragonborn with a mix of awe and fear due to their power and draconic appearance. They can be valuable allies or terrifying foes, leading to cautious interactions." },
        "Gnomes":     { status: 'N', description: "Humans often find Gnomish inventions curious but potentially dangerous or frivolous. They might be dismissed or underestimated." },
        "Half-Elves": { status: 'N', description: "Humans are often suspicious of Half-Elves' mixed heritage, rarely trusting them fully. They may be pitied or seen as 'lesser' versions of either parent race." },
        "Half-Orcs":  { status: 'H', description: "Humans hold deep-seated fear and revulsion towards Half-Orcs, seeing them as symbols of violence and savagery. They are heavily oppressed and often used as disposable soldiers." },
        "Tieflings":  { status: 'H', description: "Humans fear Tieflings' infernal lineage, actively persecuting or shunning them as harbingers of evil, bad luck, or demonic influence." }
    },
    "Elves": {
        "Humans":     { status: 'H', description: "Elves view humans with condescending disdain for their short lifespans, destructive nature, and rapid, often careless expansion. They see humans as upstarts encroaching on ancient lands and traditions." },
        "Dwarves":    { status: 'H', description: "Elves harbor ancient grudges against Dwarves, stemming from historical wars over territory and resources. They see Dwarves as greedy, destructive to the natural world, and culturally opposed." },
        "Halflings":  { status: 'N', description: "Elves are largely indifferent to Halflings, viewing them as inconsequential or perhaps occasionally amusing. They are not considered a threat or significant allies." },
        "Dragonborn": { status: 'N', description: "Elves maintain a cautious respect for Dragonborn power and ancient lineage, but are wary of their sometimes brutal honor codes and potential for destructive might." },
        "Gnomes":     { status: 'N', description: "Elves show mild amusement or dismissal towards Gnomish tinkering, but may sometimes value their unique insights if they align with elven interests, though Gnomes are not seen as equals." },
        "Half-Elves": { status: 'H', description: "Elves often view Half-Elves as a dilution of their pure bloodline, objects of pity, shame, or a reminder of regrettable unions. Full acceptance into elven society is exceedingly rare." },
        "Half-Orcs":  { status: 'H', description: "Elves feel disgust towards what they perceive as the 'brutish' nature of Half-Orcs, seeing them as products of a violent, lesser world, far removed from elven ideals." },
        "Tieflings":  { status: 'H', description: "Elves hold deep distrust for Tieflings due to their infernal taint, seeing them as antithetical to elven ideals of purity, light, and natural order." }
    },
    "Dwarves": {
        "Humans":     { status: 'N', description: "Dwarves are distrustful of human fickleness, ambition, and short memories. While trade is possible, Dwarves are quick to take offense and slow to forgive slights or broken bargains." },
        "Elves":      { status: 'H', description: "Dwarves view Elves as bitter rivals from ancient wars, seeing them as flighty, arrogant, and untrustworthy. They compete fiercely for resources and hold deep cultural animosity." },
        "Halflings":  { status: 'N', description: "Dwarves are largely indifferent to Halflings, sometimes finding their perceived shiftiness annoying. They might grudgingly accept them as traders if it serves dwarven interests." },
        "Dragonborn": { status: 'T', description: "Dwarves can respect Dragonborn strength and adherence to honor (when it aligns with dwarven values). They might find common ground in martial prowess, though territorial disputes are possible." },
        "Gnomes":     { status: 'N', description: "Dwarves are often dismissive of Gnomish 'flimsy' inventions, preferring their own robust traditions. They see Gnomes as less serious crafters but will trade pragmatically." },
        "Half-Elves": { status: 'N', description: "Dwarves are suspicious of Half-Elves' mixed blood. Judgment is usually based on actions and adherence to dwarven codes; trust is earned very slowly." },
        "Half-Orcs":  { status: 'H', description: "Dwarves distrust Half-Orcs due to their perceived savagery and orcish heritage, viewing them as inherent threats to their strongholds and way of life." },
        "Tieflings":  { status: 'H', description: "Dwarves harbor deep suspicion towards Tieflings' infernal nature, believing them to be inherently deceitful, unlucky, and dangerous agents of dark powers." }
    },
    "Halflings": {
        "Humans":     { status: 'T', description: "Halflings are wary of humans but adept at playing up their harmlessness to survive and exploit human blind spots. They resent the underlying patronization but use it to their advantage." },
        "Elves":      { status: 'N', description: "Halflings are generally awed by elven grace but prefer to keep their distance, trying to remain unnoticed or offer useful (if minor) services without drawing undue attention." },
        "Dwarves":    { status: 'N', description: "Halflings approach Dwarves with caution, respecting their craft but finding them overly stern and intimidating. Trade is possible if they can navigate dwarven moods." },
        "Dragonborn": { status: 'N', description: "Halflings are typically intimidated by Dragonborn size and power, generally choosing to avoid them unless absolutely necessary or a clear benefit is perceived." },
        "Gnomes":     { status: 'T', description: "Halflings often find common ground with Gnomes as fellow smaller folk. They can form cooperative communities or engage in mutually beneficial trading partnerships." },
        "Half-Elves": { status: 'T', description: "Halflings are often sympathetic to Half-Elves' outsider status, being more accepting and willing to form bonds of friendship or alliance due to shared marginalization." },
        "Half-Orcs":  { status: 'N', description: "Halflings generally fear Half-Orcs' strength and fierce reputation, trying to stay out of their way to avoid conflict or becoming targets." },
        "Tieflings":  { status: 'N', description: "While Halflings understand being outcasts, the intense fear surrounding Tieflings' infernal power often outweighs empathy. Wary alliances might form only in dire desperation." }
    },
    "Dragonborn": {
        "Humans":     { status: 'N', description: "Dragonborn see humans as disorganized and prone to weakness, but acknowledge their numbers and adaptability. Alliances are pragmatic, based on clan interests and respect earned." },
        "Elves":      { status: 'N', description: "Dragonborn respect elven ancient lineage but dislike their perceived arrogance and subtlety. They are wary of potent elven magic that defies straightforward confrontation." },
        "Dwarves":    { status: 'T', description: "Dragonborn can respect dwarven craftsmanship and martial prowess, often finding common ground in codes of honor. However, territorial disputes or conflicting loyalties can arise." },
        "Halflings":  { status: 'N', description: "Dragonborn largely overlook Halflings unless they become a significant nuisance or prove to be a surprisingly valuable asset to their clan's goals." },
        "Gnomes":     { status: 'N', description: "Dragonborn find Gnomish tinkering strange but generally harmless. They might value their inventions if they prove useful in battle or for infrastructure." },
        "Half-Elves": { status: 'N', description: "Dragonborn judge Half-Elves based on their individual deeds and adherence to honor codes, being less prejudiced by blood than some other races." },
        "Half-Orcs":  { status: 'N', description: "Dragonborn can respect Half-Orc strength if proven in honorable combat, but are often wary of their perceived lack of discipline or the taint of their orcish heritage." },
        "Tieflings":  { status: 'H', description: "Dragonborn often hold strong ideological opposition to Tieflings. Their infernal heritage is seen as a direct affront to draconic honor or the tenets of their deities." }
    },
    "Gnomes": {
        "Humans":     { status: 'N', description: "Gnomes find humans fascinating but dangerously unpredictable and often short-sighted. They are wary of human destructive potential and their tendency to misuse gnomish inventions." },
        "Elves":      { status: 'T', description: "Gnomes admire elven longevity and magical traditions, though they find them overly serious. They can share knowledge if mutual benefit and respect are established." },
        "Dwarves":    { status: 'N', description: "Gnomes hold a grudging respect for dwarven resilience and craft, but find their rigid traditionalism stifling to innovation. Trade is usually pragmatic and focused on specific needs." },
        "Halflings":  { status: 'T', description: "Gnomes see Halflings as natural allies and fellow small folk. They often form integrated communities, sharing resources, ideas, and a love for comfort and cleverness." },
        "Dragonborn": { status: 'N', description: "Gnomes are intrigued by Dragonborn physiology and inherent power, but also significantly intimidated. They prefer to observe and study from a safe distance if possible." },
        "Half-Elves": { status: 'T', description: "Gnomes are generally accepting and curious towards Half-Elves, seeing them as interesting blends of cultures and often appreciating their adaptability." },
        "Half-Orcs":  { status: 'H', description: "Gnomes are fearful of Half-Orcs' physical power and perceived lack of intellect or finesse. They actively avoid direct confrontation, relying on wit or traps if threatened." },
        "Tieflings":  { status: 'N', description: "Gnomish curiosity about Tieflings is mixed with significant apprehension. The infernal aspect is a source of both morbid fascination and genuine fear of corrupting influence." }
    },
    "Half-Elves": {
        "Humans":     { status: 'N', description: "Half-Elves strive for acceptance within human society but are often met with suspicion, pity, or are never fully seen as equals. They navigate a precarious social standing." },
        "Elves":      { status: 'N', description: "Half-Elves yearn for acceptance from their elven kin but frequently face disdain, exclusion, or are treated as reminders of impurity. Full integration is exceptionally rare." },
        "Dwarves":    { status: 'N', description: "Half-Elves see Dwarves as gruff and suspicious, but potentially fair if one can prove their worth through deeds and reliability." },
        "Halflings":  { status: 'T', description: "Half-Elves often find easy camaraderie with Halflings, another marginalized group. They are more likely to form trusting relationships and find mutual understanding." },
        "Dragonborn": { status: 'N', description: "Half-Elves know that the Dragonborn can be surprisingly fair judges, valuing merit over blood, offering a path to respect denied elsewhere. showing less inherent prejudice based on mixed blood compared to humans or elves." },
        "Gnomes":     { status: 'T', description: "Half-Elves are generally well-disposed towards Gnomes, their natural curiosity often overriding prejudice in refreshing. They appreciate the unique perspective Gnomes can offer." },
        "Half-Orcs":  { status: 'N', description: "Half-Elves can find some common ground with Half-Orcs as fellow outcasts due to mixed heritage, though the Half-Orc's rougher nature and reputation can still be a barrier." },
        "Tieflings":  { status: 'N', description: "Half-Elves understand being an outcast, but the palpable infernal aspect of Tieflings often creates a line of fear or distrust, though wary alliances of shared hardship are possible." }
    },
    "Half-Orcs": {
        "Humans":     { status: 'H', description: "Half-Orcs face constant oppression and fear from humans. They often react with internalized hatred, violent defiance, or a desperate, usually futile, desire for acceptance." },
        "Elves":      { status: 'H', description: "Elves are fragile, arrogant targets who think they're superior. Their lands and possessions are ripe for taking by the strong. Interactions are almost universally hostile, dismissive, or based on exploitation." },
        "Dwarves":    { status: 'H', description: "Half-Orcs see Dwarves as stubborn, greedy hoarders sitting on valuable territory/resources. Obstacles to be overcome by strength. They are met with violence or deep suspicion, rarely offered any quarter." },
        "Halflings":  { status: 'N', description: "Half-Orcs easily intimidate Halflings, who usually try to avoid them or placate them if interaction is unavoidable. Exploitation can go both ways if a Half-Orc is cunning." },
        "Dragonborn": { status: 'T', description: "Half-Orcs can earn a measure of respect from Dragonborn through proven strength and martial prowess, though their orcish blood may still be a point of contention or distrust for some clans." },
        "Gnomes":     { status: 'H', description: "Half-Orcs often unintentionally intimidate Gnomes, leading to Gnomes fleeing or reacting with panicked (and usually ineffective) defenses. Misunderstandings are frequent." },
        "Half-Elves": { status: 'N', description: "Half-Orcs might find a sliver of understanding with Half-Elves due to their shared 'half-blood' status, but cultural differences and ingrained societal prejudices are vast." },
        "Tieflings":  { status: 'T', description: "Half-Orcs often see Tieflings as fellow outcasts. While not always friendly, they are less likely to be immediately hostile, and pragmatic alliances of shared misery or brute force can form." }
    },
    "Tieflings": {
        "Humans":     { status: 'H', description: "Tieflings face universal persecution from humans, who hunt, fear, and scapegoat them for their infernal heritage. Survival often means constant vigilance and hiding their nature." },
        "Elves":      { status: 'H', description: "Tieflings see Elves as hypocritical purists, quick to judge and persecute based on bloodline while claiming enlightenment. Their arrogance is galling. There is no tolerance, only condemnation." },
        "Dwarves":    { status: 'H', description: "Tieflings see Dwarves as superstitious, stubborn fools blinded by tradition, quick to persecute based on appearance. Their judgment is worthless." },
        "Halflings":  { status: 'H', description: "Tieflings, despite sharing marginalization, often see Halflings join the chorus of fear and superstition. Their betrayal of shared status stings." },
        "Dragonborn": { status: 'H', description: "Dragonborn wrap their prejudice in self-righteous codes of honor. Their judgment is rigid, unforgiving, and hypocritical. They are seen as fundamentally flawed." },
        "Gnomes":     { status: 'H', description: "Gnomes' intense curiosity feels like being treated as a specimen, potentially leading to dangerous experiments or unwanted attention. Wary." },
        "Half-Elves": { status: 'N', description: "Half-Elves get a taste of prejudice but can often pass or find niches. They rarely understand the true depth of fear Tieflings face and often prioritize their own safety over solidarity." },
        "Half-Orcs":  { status: 'T', description: "Tieflings may find the least judgment among Half-Orcs, as both are heavily feared and ostracized. This can lead to brutal, pragmatic alliances born of shared desperation rather than true friendship." }
    }
};
