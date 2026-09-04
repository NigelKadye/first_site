export const botPersonality = {
  name: 'GinBot',
  greeting: 'Welcome to GinBot. Choose a topic and I will guide you one step at a time.',
  fallback: 'Choose a topic below and I will take you there.',
}

export const promptFlow = {
  startResponse: 'Of course. Choose a new gin topic and I will guide you from there.',
  start: [
    { id: 'start-beginner', label: 'I am new to gin', next: 'beginner' },
    { id: 'start-styles', label: 'Compare gin styles', next: 'styles' },
    { id: 'start-made', label: 'How is gin made?', next: 'construction' },
    { id: 'start-serve', label: 'Build a better G&T', next: 'gt' },
    { id: 'start-pairing', label: 'Find a food pairing', next: 'pairing' },
    { id: 'start-cocktail', label: 'Find a cocktail', next: 'cocktails' },
    { id: 'start-date', label: 'Plan a gin date', next: 'date' },
  ],
  nodes: {
    beginner: {
      response: 'A gentle first step is a gin with a clear, friendly flavour. Hendrick’s brings cucumber and rose, Aviation is soft and floral, and Emini is a bright, approachable South African choice. Start with 50 ml gin, plenty of ice, and 150 ml of a dry tonic so you can taste what the bottle is doing.',
      prompts: [
        { id: 'beginner-smooth', label: 'Show me smooth gins', next: 'smooth' },
        { id: 'beginner-juniper', label: 'I want bold juniper', next: 'juniper' },
        { id: 'beginner-local', label: 'Explore South African gin', next: 'south-africa' },
        { id: 'beginner-styles', label: 'Compare gin styles', next: 'styles' },
        { id: 'beginner-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    smooth: {
      response: 'For a softer glass, look for floral, citrus-led, or fruit-supported botanicals. Hendrick’s, Aviation, and Gin Mare are useful comparisons: cucumber and rose feel gentle, lavender gives lift, and Mediterranean herbs add savoury freshness. Use a light tonic and a simple garnish so the delicate notes do not disappear.',
      prompts: [
        { id: 'smooth-floral', label: 'Build a floral G&T', next: 'floral-serve' },
        { id: 'smooth-tonic', label: 'Choose a tonic', next: 'tonic' },
        { id: 'smooth-taste', label: 'Learn how to taste gin', next: 'tasting' },
        { id: 'smooth-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    juniper: {
      response: 'Bold juniper-led gin tastes piney, resinous, dry, and often a little peppery. Beefeater, Sipsmith, and Tanqueray are useful classic references. These gins hold their shape in a Martini or Negroni, and they work best with a dry tonic and a clean lemon peel.',
      prompts: [
        { id: 'juniper-martini', label: 'Make a Martini', next: 'martini' },
        { id: 'juniper-negroni', label: 'Make a Negroni', next: 'negroni' },
        { id: 'juniper-construction', label: 'What creates juniper flavour?', next: 'botanicals' },
        { id: 'juniper-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    styles: {
      response: 'Gin style is a shortcut to the kind of experience you may enjoy. London Dry is dry and juniper-forward, New Western lets local botanicals lead, Old Tom is gently sweet, Genever is malty and historic, and Navy Strength is powerful at 57% ABV or more.',
      prompts: [
        { id: 'styles-london', label: 'Explore London Dry', next: 'london-dry' },
        { id: 'styles-contemporary', label: 'Explore New Western', next: 'new-western' },
        { id: 'styles-genever', label: 'What is Genever?', next: 'genever' },
        { id: 'styles-abv', label: 'Understand ABV', next: 'abv' },
        { id: 'styles-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'london-dry': {
      response: 'London Dry is a production style, not a promise that the gin was made in London. Botanicals are added during distillation, and the finished spirit is dry with juniper at the centre. Beefeater, Sipsmith, and Tanqueray are classic references. Try one neat, then in a 1:3 G&T or a Martini.',
      prompts: [
        { id: 'london-serve', label: 'Build its best G&T', next: 'gt' },
        { id: 'london-martini', label: 'Use it in a Martini', next: 'martini' },
        { id: 'london-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'new-western': {
      response: 'New Western, or contemporary, gin keeps juniper present but lets another idea lead. That might be cucumber and rose, Douglas fir, tea, tropical fruit, or a local herb. It is a good place to start if classic gin feels too piney or if you want a bottle that tastes like its landscape.',
      prompts: [
        { id: 'western-floral', label: 'Try a floral serve', next: 'floral-serve' },
        { id: 'western-regional', label: 'Explore regional botanicals', next: 'south-africa' },
        { id: 'western-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    genever: {
      response: 'Genever is the juniper spirit that sits behind modern gin. It can contain a malty spirit, so it feels closer to a light whisky than a crisp London Dry. Serve it chilled or in a simple cocktail where its grainy, earthy texture has room to show.',
      prompts: [
        { id: 'genever-history', label: 'Trace gin’s history', next: 'history' },
        { id: 'genever-taste', label: 'Learn how to taste gin', next: 'tasting' },
        { id: 'genever-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    construction: {
      response: 'Gin begins with a neutral agricultural spirit, then becomes gin through juniper and other botanicals. A distiller chooses the base, extraction method, still, distillation cuts, water, bottling strength, and whether to blend, filter, or age the result. Those choices explain why two gins can share juniper but taste completely different.',
      prompts: [
        { id: 'made-botanicals', label: 'What do botanicals do?', next: 'botanicals' },
        { id: 'made-extraction', label: 'Maceration or vapour infusion?', next: 'extraction' },
        { id: 'made-distillation', label: 'What happens in the still?', next: 'distillation' },
        { id: 'made-strength', label: 'What does ABV change?', next: 'abv' },
        { id: 'made-finish', label: 'Blending, filtering, or aging?', next: 'finishing' },
      ],
    },
    botanicals: {
      response: 'Juniper is the defining botanical: it brings pine, resin, and dry structure. Coriander adds lemony spice, angelica root adds earthy depth, and citrus peel brings lift. Local ingredients create a sense of place—buchu and rooibos in Southern Africa, tea and yuzu in Japan, or fir and sage in the United States.',
      prompts: [
        { id: 'botanicals-citrus', label: 'Use citrus botanicals', next: 'citrus-serve' },
        { id: 'botanicals-herbal', label: 'Use herbs and spice', next: 'herbal-serve' },
        { id: 'botanicals-taste', label: 'Learn how to taste them', next: 'tasting' },
        { id: 'botanicals-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    extraction: {
      response: 'Maceration rests botanicals in spirit so alcohol can draw out their oils and flavour. Vapour infusion passes spirit vapour through a basket of delicate ingredients, which can preserve lifted floral, citrus, and fresh-herb aromas. Many distillers combine both methods to get depth from roots and brightness from fragile aromatics.',
      prompts: [
        { id: 'extraction-still', label: 'What happens in distillation?', next: 'distillation' },
        { id: 'extraction-taste', label: 'Taste the difference', next: 'tasting' },
        { id: 'extraction-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    distillation: {
      response: 'The still concentrates volatile aromas and separates the run into heads, heart, and tails. The heart is usually the cleanest, most balanced portion. Copper can help soften certain unwanted compounds, while the still shape, heat, botanical placement, and distiller’s cuts all influence the final character.',
      prompts: [
        { id: 'distillation-strength', label: 'Understand proof and ABV', next: 'abv' },
        { id: 'distillation-blending', label: 'Why blend batches?', next: 'finishing' },
        { id: 'distillation-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    abv: {
      response: 'ABV means alcohol by volume. Most gin sits between 37.5% and 47% ABV, while Navy Strength is 57% or higher. A higher strength can carry more aroma and texture, but it also needs thoughtful dilution. Taste the gin with a little water before deciding whether its extra proof is a benefit in your serve.',
      prompts: [
        { id: 'abv-serve', label: 'Match ABV to a serve', next: 'serve-building' },
        { id: 'abv-navy', label: 'Try Navy Strength', next: 'navy-strength' },
        { id: 'abv-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    finishing: {
      response: 'Blending can combine batches or separate botanical distillates into a consistent recipe. Filtration removes particles and haze, although aggressive filtering can reduce texture. Aging is optional: oak can add vanilla, spice, tannin, and colour, but a gin does not need a barrel to be complete.',
      prompts: [
        { id: 'finishing-taste', label: 'Taste a finished gin', next: 'tasting' },
        { id: 'finishing-serve', label: 'Build a serve around it', next: 'serve-building' },
        { id: 'finishing-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    gt: {
      response: 'Use 50 ml gin, 150 ml chilled tonic, plenty of large ice, and one purposeful garnish as your baseline. Pour the gin over ice, add the tonic gently to protect the bubbles, and stir once. Then adjust one variable at a time: a drier tonic, more soda, less dilution, or a different garnish.',
      prompts: [
        { id: 'gt-tonic', label: 'Choose the right tonic', next: 'tonic' },
        { id: 'gt-floral', label: 'Build a floral G&T', next: 'floral-serve' },
        { id: 'gt-citrus', label: 'Build a citrus G&T', next: 'citrus-serve' },
        { id: 'gt-fix', label: 'Fix a bitter or weak G&T', next: 'troubleshooting' },
        { id: 'gt-zero', label: 'Make it zero-proof', next: 'zero-proof' },
      ],
    },
    tonic: {
      response: 'Pair the mixer to the gin’s intensity. A dry Indian tonic suits juniper-led gin, a lighter tonic supports floral bottles, and Mediterranean tonic works with citrus and savoury herbs. If a G&T is too sweet, change the tonic before adding more garnish. Start at 1:2 or 1:3 gin to tonic and adjust.',
      prompts: [
        { id: 'tonic-bubbles', label: 'Keep a drink fizzy', next: 'serve-building' },
        { id: 'tonic-bitter', label: 'Fix too much bitterness', next: 'troubleshooting' },
        { id: 'tonic-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'floral-serve': {
      response: 'For a floral gin, use a light tonic or soda, lots of cold ice, and cucumber, mint, or a restrained edible flower. Keep the garnish aromatic rather than sweet. The aim is to lift the floral note without turning the drink into perfume.',
      prompts: [
        { id: 'floral-pairing', label: 'Pair it with food', next: 'pairing' },
        { id: 'floral-taste', label: 'Learn how to taste it', next: 'tasting' },
        { id: 'floral-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'citrus-serve': {
      response: 'Citrus-led gin loves a dry tonic, grapefruit or orange peel, and a cold highball. Avoid piling on sweet fruit: a strip of peel adds aroma without burying the gin. Fresh lemon or lime can help when the drink needs sharper structure.',
      prompts: [
        { id: 'citrus-pairing', label: 'Pair it with food', next: 'pairing' },
        { id: 'citrus-cocktail', label: 'Make a citrus cocktail', next: 'cocktails' },
        { id: 'citrus-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'herbal-serve': {
      response: 'Herbal or savoury gin works with dry tonic, soda, ginger, rosemary, thyme, sage, or a small olive accent. Keep the drink long and cold. One savoury idea is enough—too many herbs can make the finish taste medicinal.',
      prompts: [
        { id: 'herbal-pairing', label: 'Find a savoury pairing', next: 'pairing' },
        { id: 'herbal-quirky', label: 'Try a quirky cocktail', next: 'quirky' },
        { id: 'herbal-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'serve-building': {
      response: 'Build a drink by balancing four forces: spirit, sweetness, acidity, and bitterness. Match intensity, control dilution with plenty of cold ice, and let garnish do one job—add aroma, freshness, or a botanical echo. Start simple so you can tell what each change contributes.',
      prompts: [
        { id: 'serve-baseline', label: 'Use the G&T baseline', next: 'gt' },
        { id: 'serve-tasting', label: 'Taste before mixing', next: 'tasting' },
        { id: 'serve-cocktail', label: 'Explore cocktails', next: 'cocktails' },
        { id: 'serve-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    tasting: {
      response: 'Taste in five passes: look at clarity and colour, smell for the first two or three aromas, sip neat, add a few drops of water, then try a little soda or tonic. Notice whether juniper is crisp or soft and whether the texture feels dry, oily, sweet, or light. There is no wrong vocabulary—specific curiosity is enough.',
      prompts: [
        { id: 'tasting-botanicals', label: 'Decode botanicals', next: 'botanicals' },
        { id: 'tasting-serve', label: 'Turn tasting into a serve', next: 'serve-building' },
        { id: 'tasting-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    pairing: {
      response: 'Pair by matching or contrasting intensity. Citrus gin likes ceviche, prawns, feta, and salted almonds. Floral or herbal gin suits goat cheese, halloumi, fresh herbs, and light salads. Spiced gin can handle tacos, chilli prawns, and smoky salsa. Keep the portion simple enough for the gin to remain visible.',
      prompts: [
        { id: 'pairing-citrus', label: 'Pair a citrus gin', next: 'citrus-pairing' },
        { id: 'pairing-herbal', label: 'Pair an herbal gin', next: 'herbal-pairing' },
        { id: 'pairing-quirky', label: 'Try an unexpected pairing', next: 'quirky' },
        { id: 'pairing-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'citrus-pairing': {
      response: 'Try a citrus G&T with grilled prawns, ceviche, olives, feta, or salted almonds. The shared brightness keeps the pairing clean, while salt and gentle richness make the citrus taste even more vivid.',
      prompts: [
        { id: 'citrus-pairing-cocktail', label: 'Use the pairing in a cocktail', next: 'quirky' },
        { id: 'citrus-pairing-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'herbal-pairing': {
      response: 'Herbal gin is excellent with goat cheese, grilled halloumi, rosemary flatbread, fresh herbs, mushrooms, and green vegetables. Echo one botanical in the food, then add a salty or creamy element to give the dry spirit contrast.',
      prompts: [
        { id: 'herbal-pairing-cocktail', label: 'Use the pairing in a cocktail', next: 'quirky' },
        { id: 'herbal-pairing-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    cocktails: {
      response: 'Start with the mood you want. A Martini is cold, dry, and focused; a Negroni is bitter, rich, and slow; a Tom Collins is bright and fizzy; and a Bee’s Knees is citrusy with honeyed softness. If you want a conversation starter, follow the quirky path for unusual but balanced combinations.',
      prompts: [
        { id: 'cocktails-martini', label: 'Make a Martini', next: 'martini' },
        { id: 'cocktails-negroni', label: 'Make a Negroni', next: 'negroni' },
        { id: 'cocktails-quirky', label: 'Show quirky cocktails', next: 'quirky' },
        { id: 'cocktails-zero', label: 'Choose zero-proof', next: 'zero-proof' },
      ],
    },
    martini: {
      response: 'Try 60 ml London Dry gin with 10 ml dry vermouth. Stir with ice for about 30 seconds, strain into a chilled glass, and choose either a lemon twist or an olive. If you want more vermouth, add it deliberately—the ratio is a preference, not a test.',
      prompts: [
        { id: 'martini-dirty', label: 'Make it dirty', next: 'dirty-martini' },
        { id: 'martini-taste', label: 'Taste gin before cocktails', next: 'tasting' },
        { id: 'martini-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'dirty-martini': {
      response: 'For a Dirty Martini, start with 60 ml gin, 10 ml dry vermouth, and 10 ml olive brine. Stir very cold with ice and strain. Add more brine only after tasting—the savoury note should frame the gin rather than erase it.',
      prompts: [
        { id: 'dirty-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    negroni: {
      response: 'Use equal parts gin, Campari, and sweet vermouth—25 ml of each is a friendly starting point. Stir with ice, strain over a large cube, and express an orange peel over the top. A bold London Dry has enough structure to stand up to the bitterness.',
      prompts: [
        { id: 'negroni-light', label: 'Make it lighter', next: 'negroni-light' },
        { id: 'negroni-pairing', label: 'Pair it with food', next: 'pairing' },
        { id: 'negroni-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'negroni-light': {
      response: 'For a lighter version, make a Negroni Sbagliato: use equal parts Campari and sweet vermouth, then top with sparkling wine instead of gin. It keeps the bitter-orange shape while lowering the spirit intensity.',
      prompts: [
        { id: 'negroni-light-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    quirky: {
      response: 'Here are three unusual combinations that still have balance: The Garden Goblin pairs gin with green apple, lime, basil, and tonic; Earl Greyhound combines tea, lemon, honey, and gin; and Beet the Juniper uses beetroot, lemon, and a dry gin. Quirky works when one ingredient is surprising and the rest provide structure.',
      prompts: [
        { id: 'quirky-garden', label: 'Make The Garden Goblin', next: 'garden-goblin' },
        { id: 'quirky-earl', label: 'Make Earl Greyhound', next: 'earl-greyhound' },
        { id: 'quirky-beet', label: 'Make Beet the Juniper', next: 'beet-juniper' },
        { id: 'quirky-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'garden-goblin': {
      response: 'The Garden Goblin: shake 50 ml dry gin with 20 ml green-apple juice, 10 ml lime, and two basil leaves. Pour over ice and top with chilled tonic. Pair it with whipped feta, cucumber, or a fresh herb salad.',
      prompts: [
        { id: 'garden-next', label: 'Try another quirky drink', next: 'quirky' },
        { id: 'garden-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'earl-greyhound': {
      response: 'Earl Greyhound: shake 50 ml gin, 25 ml chilled Earl Grey tea, 15 ml lemon, and 10 ml honey syrup with ice. Strain over fresh ice. It is excellent with shortbread, smoked trout, or sharp cheddar.',
      prompts: [
        { id: 'earl-next', label: 'Try another quirky drink', next: 'quirky' },
        { id: 'earl-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'beet-juniper': {
      response: 'Beet the Juniper: shake 45 ml gin, 20 ml fresh beet juice, 15 ml lemon, and 10 ml simple syrup with ice. Strain over fresh ice and pair with goat cheese or pickled vegetables. The lemon keeps the earthy beetroot bright.',
      prompts: [
        { id: 'beet-next', label: 'Try another quirky drink', next: 'quirky' },
        { id: 'beet-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    date: {
      response: 'A good gin date is curious rather than performative. Choose a bottle you genuinely enjoy, ask for a simple first round, and let the garnish or local botanical become a conversation prompt. A distillery tour, tasting, or blending workshop can also make the activity about craft rather than alcohol.',
      prompts: [
        { id: 'date-zero', label: 'I do not drink', next: 'zero-proof' },
        { id: 'date-approachable', label: 'Choose an easy first gin', next: 'smooth' },
        { id: 'date-quirky', label: 'Share a quirky cocktail', next: 'quirky' },
        { id: 'date-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'zero-proof': {
      response: 'A zero-proof serve can keep the ritual without the alcohol. Use a clearly labelled 0.0% botanical spirit or a juniper-forward tea, add 100–150 ml chilled dry tonic over ice, and finish with lemon peel, cucumber, or herbs. You can also choose a shrub, citrus spritz, or botanical soda.',
      prompts: [
        { id: 'zero-date', label: 'Plan an inclusive date', next: 'date' },
        { id: 'zero-serve', label: 'Build a zero-proof serve', next: 'serve-building' },
        { id: 'zero-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'south-africa': {
      response: 'Southern African gin is shaped by the Cape Floral Kingdom and other local landscapes. Inverroche brings fynbos, Hope Distillery uses buchu and citrus, Wilderer leans earthy and floral, Pienaar & Son is bright and citrus-led, and Six Dogs Blue adds a colour-changing botanical moment.',
      prompts: [
        { id: 'sa-botanicals', label: 'Learn about fynbos', next: 'botanicals' },
        { id: 'sa-visit', label: 'Plan a distillery visit', next: 'visit' },
        { id: 'sa-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    visit: {
      response: 'A distillery visit can include a tour, tasting, botanical lesson, or blending session. Check opening hours, age requirements, transport, and whether hands-on workshops need advance booking. The Plan a Visit guide on this site groups visitor leads by region so you can compare options before travelling.',
      prompts: [
        { id: 'visit-craft', label: 'Learn to craft your own gin', next: 'craft' },
        { id: 'visit-sa', label: 'Explore Southern Africa', next: 'south-africa' },
        { id: 'visit-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    craft: {
      response: 'Start with juniper, choose one anchor botanical and two supporting notes, then measure everything. A guided workshop is the best way to learn maceration, vapour infusion, dilution, filtration, and responsible tasting. Record each recipe so a lucky experiment can be repeated.',
      prompts: [
        { id: 'craft-botanicals', label: 'Choose botanicals', next: 'botanicals' },
        { id: 'craft-extraction', label: 'Learn extraction methods', next: 'extraction' },
        { id: 'craft-visit', label: 'Find a place to visit', next: 'visit' },
        { id: 'craft-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    history: {
      response: 'Gin grew from genever, a juniper-flavoured spirit made in the Low Countries. English soldiers encountered it in the late 16th century, and England’s gin boom followed. Modern distillers keep juniper at the centre while using local botanicals to give each region its own accent.',
      prompts: [
        { id: 'history-genever', label: 'Taste the genever style', next: 'genever' },
        { id: 'history-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    'navy-strength': {
      response: 'Navy Strength gin is bottled at 57% ABV or above. It has enough concentration to stay expressive in a cold, diluted drink, but it can taste hot neat. Use less in a cocktail or add dilution gradually, then taste again before adding more mixer.',
      prompts: [
        { id: 'navy-serve', label: 'Build a high-ABV serve', next: 'serve-building' },
        { id: 'navy-home', label: 'Choose another topic', next: 'start' },
      ],
    },
    troubleshooting: {
      response: 'Fix one variable at a time. Too sweet? Use a dry tonic or add soda. Too bitter? Increase dilution and simplify the garnish. Too strong? Add tonic 25 ml at a time. Watery? Chill the ingredients first and use fresh, large ice. Flat? Open a fresh tonic and pour it gently.',
      prompts: [
        { id: 'fix-gt', label: 'Rebuild the G&T baseline', next: 'gt' },
        { id: 'fix-tonic', label: 'Choose a better tonic', next: 'tonic' },
        { id: 'fix-home', label: 'Choose another topic', next: 'start' },
      ],
    },
  },
}
