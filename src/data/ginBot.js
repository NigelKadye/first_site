// GinBot knowledge base — offline rule-based gin assistant

export const botPersonality = {
  name: 'GinBot',
  greeting: "Hello! I'm GinBot, your gin guide. Ask me anything about gins, botanicals, serving tips, food pairings, or help choosing the right bottle.",
  fallback: "I don't have a specific answer for that, but I'm happy to help with gin styles, botanicals, serving tips, food pairings, or recommendations. Try asking something like: 'What gin is good for a first date?' or 'What botanicals are in Hendrick's?'",
}

// Suggested prompts shown in the chat UI
export const suggestedPrompts = [
  "What gin should I try first?",
  "Best gin for a G&T?",
  "What are fynbos botanicals?",
  "Gin on a budget?",
  "What food pairs with gin?",
  "Difference between London Dry and New Western?",
  "How do I serve gin properly?",
  "What mixer should I use?",
  "Best South African gin?",
  "What makes a good first-date gin?",
]

// Each rule: array of trigger keywords/phrases + a response string
// The matcher checks if the user message contains ANY trigger (case-insensitive)
export const botRules = [
  // --- Greetings ---
  {
    triggers: ['hello', 'hi', 'hey', 'howdy', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    response: "Hello! I'm GinBot — your personal gin expert. Ask me anything: gin recommendations, botanicals, food pairings, how to serve, or the best budget bottle. What can I help you with today?",
  },

  // --- First gin / beginner ---
  {
    triggers: ['first gin', 'beginner', 'new to gin', 'start with', 'starting out', 'never had gin', 'never tried gin', 'get into gin'],
    response: "Starting your gin journey? Great choice. For beginners I recommend:\n\n• **Hendrick's** — cucumber and rose notes, very approachable, light on juniper\n• **Tanqueray No. TEN** — fresh and citrus-led, easy to enjoy\n• **Emini Gin (South Africa)** — zesty and affordable, perfect intro to African botanicals\n\nServe any of these in a balloon glass with premium tonic and a lemon or cucumber garnish. Don't rush it — gin rewards slow sipping.",
  },

  // --- London Dry ---
  {
    triggers: ['london dry', 'what is london dry', 'classic gin', 'traditional gin'],
    response: "**London Dry Gin** is the benchmark style. Key facts:\n\n• All botanicals are added during distillation — no artificial flavours after\n• Must be at least 37.5% ABV\n• Dominated by juniper — that classic piney, resinous bite\n• Great examples: Beefeater, Tanqueray, Sipsmith, Gordon's\n\nLondon Dry is the style that defines 'gin' for most people. It's dry, bold, and brilliant in a Negroni or Martini.",
  },

  // --- New Western / Contemporary ---
  {
    triggers: ['new western', 'contemporary gin', 'modern gin', 'american style gin', 'non-juniper'],
    response: "**New Western (Contemporary) Gin** breaks from tradition:\n\n• Juniper is present but not the lead botanical\n• Distillers highlight local, unusual, or seasonal ingredients\n• Styles range from floral and citrus-forward to spiced and vegetal\n• Examples: Hendrick's, Aviation, St. George Terroir, Monkey 47\n\nThese gins are ideal if you find classic London Dry too piney.",
  },

  // --- G&T ---
  {
    triggers: ['g&t', 'gin and tonic', 'gin tonic', 'tonic water', 'best tonic'],
    response: "The perfect G&T comes down to ratio and quality:\n\n• **Ratio**: 50 ml gin to 150 ml tonic (1:3) is the classic start. Adjust to taste.\n• **Tonic**: Use a premium tonic — Fever-Tree, 1724, Franklin & Sons, or Fentimans. The tonic is half the drink.\n• **Ice**: Loads of it. Large, clear cubes melt slowly and keep dilution low.\n• **Glass**: A balloon (copa de balon) glass concentrates aroma beautifully.\n• **Garnish**: Match the garnish to the gin's lead botanical — cucumber for floral, citrus for dry, rosemary for herbal.\n\nPour the gin first, then ice, then gently pour the tonic down the side of the glass. Stir once.",
  },

  // --- Martini ---
  {
    triggers: ['martini', 'gin martini', 'dirty martini'],
    response: "A classic Gin Martini is pure elegance:\n\n• **Classic recipe**: 60 ml London Dry gin + 10 ml dry vermouth + ice. Stir for 30 seconds. Strain into chilled coupe or martini glass.\n• **Garnish**: Lemon twist or green olive — pick one, not both.\n• **Dirty**: Add 10–15 ml olive brine for a savoury twist.\n• **Best gins for a Martini**: Beefeater, Sipsmith, Tanqueray, Hayman's — bold juniper-forward gins hold their own against vermouth.\n\nThe ratio of gin to vermouth is personal. Winston Churchill's method was to glance at the vermouth bottle — but 6:1 is a good starting point.",
  },

  // --- Negroni ---
  {
    triggers: ['negroni', 'campari', 'vermouth', 'classic cocktail'],
    response: "The **Negroni** is one of the greatest cocktails ever made:\n\n• **Recipe**: Equal parts (25 ml each) gin + Campari + sweet vermouth. Stir with ice. Strain over a large ice cube. Orange peel garnish.\n• **Best gins**: Bold London Dry works best — Beefeater, Tanqueray, Whitley Neill. The gin needs to hold up against Campari's bitterness.\n• **Variations**: Try a White Negroni (Lillet Blanc instead of vermouth) or a Negroni Sbagliato (prosecco instead of gin for something lighter).\n\nThe Negroni rewards patience — stir for at least 20 seconds.",
  },

  // --- South Africa gins ---
  {
    triggers: ['south african gin', 'south africa gin', 'african gin', 'sa gin', 'local gin', 'cape gin', 'fynbos gin', 'inverroche', 'hope on hopkins', 'pienaar', 'six dogs', 'wilderer'],
    response: "South Africa has an extraordinary gin scene:\n\n• **Inverroche** (Still Bay) — three styles (Classic, Verdant, Amber) each showcasing different fynbos botanicals. The benchmark SA gin.\n• **Hope on Hopkins** (Cape Town) — buchu and lemon peel forward, crisp and herbaceous.\n• **Wilderer Fynbos Gin** (Paarl) — earthy, floral, beautifully complex.\n• **Pienaar & Son** (Cape Town) — citrus-forward small batch, great with grapefruit tonic.\n• **Six Dogs Blue** (Karoo) — colour-changing, butterfly pea flower forward, a visual showstopper.\n• **Emini Gin** — fresh, zesty, exceptional value.\n\nThe Cape Floral Kingdom gives SA gins a flavour you simply can't find anywhere else in the world.",
  },

  // --- UK gins ---
  {
    triggers: ['uk gin', 'british gin', 'english gin', 'scottish gin', 'hendricks', "hendrick's", 'beefeater', 'sipsmith', 'tanqueray', 'gordons', 'bombay sapphire'],
    response: "The UK is the spiritual home of gin. Key bottles to know:\n\n• **Beefeater** (London) — the classic London Dry benchmark. Bold juniper, orange peel, angelica. Brilliant in a Negroni.\n• **Sipsmith London Dry** — copper pot distilled, beautifully balanced, the craft revival pioneer.\n• **Hendrick's** (Scotland) — cucumber and rose infused. Unusual, approachable, great for newcomers.\n• **Tanqueray No. TEN** — fresh citrus-led premium expression. Exceptional in a Martini.\n• **Bombay Sapphire** — lighter and more floral than most London Drys, 10 botanicals.\n• **Hayman's London Dry** — family-owned, traditional recipe, clean and honest.\n\nUK gin spans classic London Dry to wild Scottish botanicals — there's a style for every palate.",
  },

  // --- USA gins ---
  {
    triggers: ['american gin', 'usa gin', 'us gin', 'aviation gin', "st george", 'death', 'bluecoat', "barr hill", 'brooklyn gin', 'few gin'],
    response: "American gins are some of the most innovative in the world:\n\n• **St. George Terroir Gin** (California) — Douglas fir, California bay laurel, coastal sage. A forest in a glass.\n• **Aviation American Gin** (Oregon) — smooth, lavender-forward, low juniper. Great gateway gin.\n• **Barr Hill Gin** (Vermont) — raw honey infusion, floral and unique. Perfect in a Bee's Knees cocktail.\n• **Death's Door Gin** (Wisconsin) — minimalist: juniper, coriander, fennel. Clean and pure.\n• **Bluecoat American Dry** (Philadelphia) — bold citrus, organic botanicals, accessible price point.\n• **Brooklyn Gin** (New York) — fresh citrus peel, hand-crafted, city sophistication.\n\nAmerican gin embraces terroir — the best bottles taste like the place they came from.",
  },

  // --- Americas / Mexico / South America gins ---
  {
    triggers: ['mexican gin', 'latin gin', 'south american gin', 'agave gin', 'peru gin', 'brazil gin', 'amazonia', 'andean'],
    response: "Latin American gins are exciting and still under-explored:\n\n• **Agave Garden Gin** (Mexico) — agave-forward with citrus and wild herbs. Mezcal influence is subtle but present.\n• **Desert Citrus Gin** (Mexico) — prickly pear, lime, and desert botanicals. Vivid and warming.\n• **Amazonia Dry Gin** (Brazil) — açaí, cupuaçu, and tropical botanicals. Lush and distinctive.\n• **Andean Herb Gin** (South America) — quinoa-based spirit with high-altitude botanicals. Complex and earthy.\n\nThese gins pair brilliantly with chilli salt rims, lime, and fresh jalapeño garnishes.",
  },

  // --- Botanicals ---
  {
    triggers: ['botanical', 'botanicals', 'ingredients', 'what is in gin', 'juniper', 'fynbos', 'buchu', 'rooibos', 'angelica'],
    response: "Botanicals are what make gin, gin. Here are the key ones to know:\n\n**Must-Have**\n• **Juniper berries** — mandatory in all gin, gives that distinctive pine and resin character\n• **Coriander seed** — citrusy, spicy, almost the 'bass note' of most gins\n• **Angelica root** — earthy, dry, acts as a fixative that binds other flavours\n\n**South African Specials**\n• **Buchu** — blackcurrant depth, uniquely South African\n• **Rooibos** — earthy sweetness, adds soft warmth\n• **Fynbos** — broad term for Cape flora; each distillery picks different plants\n\n**UK & European**\n• **Elderflower** — light, floral, slightly honeyed\n• **Orris root** — violet-like, powdery, a classic component\n• **Sloe berry** — tart, plummy, used in sloe gin\n\nA gin's botanical bill is its fingerprint — no two are exactly alike.",
  },

  // --- Food pairing ---
  {
    triggers: ['food pairing', 'food with gin', 'what to eat', 'snack', 'snacks with gin', 'pairing'],
    response: "Gin and food are natural partners:\n\n• **Citrus gins** — ceviche, grilled prawns, feta and olives, salted almonds\n• **Floral and herbal gins** — goat cheese, grilled halloumi, rosemary flatbread, fresh herbs\n• **Spiced and bold gins** — tacos, chilli prawns, guacamole, smoky salsa\n• **Fruit-forward gins** — brie, fresh berries, shortbread, honey, charcuterie\n\n**Golden rule**: the food shouldn't compete with the gin. Keep strong chilli and heavy smoked items in small portions. The gin should remain the star.",
  },

  // --- Serving / glassware ---
  {
    triggers: ['how to serve', 'serving', 'glassware', 'glass', 'copa', 'balloon glass', 'highball', 'garnish'],
    response: "Serving gin well makes a real difference:\n\n**Glassware**\n• **Copa de Balon** — best for aromatic, floral gins. Wide rim traps botanicals.\n• **Highball** — for long coolers and tall G&Ts\n• **Coupe or Martini glass** — for stirred cocktails served up\n\n**Ice**\n• More is more. Large, clear cubes melt slowly.\n• Pre-chill your glass with ice water while you prepare the drink.\n\n**Garnish rules**\n• Match the garnish to the gin's lead botanical\n• Citrus gins: citrus peel or wedge\n• Floral gins: cucumber or edible flowers\n• Herbal gins: rosemary, thyme, or sage\n\n**The pour**: gin first, then ice, then tonic poured gently down the side. Stir once, garnish, serve immediately.",
  },

  // --- Budget gin ---
  {
    triggers: ['budget', 'cheap gin', 'affordable gin', 'value gin', 'best value', 'wallet', 'inexpensive'],
    response: "Great gin doesn't have to break the bank:\n\n**South Africa**\n• Emini Gin — fresh, zesty, exceptional value\n• Nottingham Road Gin — reliable classic dry style\n• Six Dogs Blue — colour-changing, fun, affordable\n\n**UK**\n• Beefeater London Dry — iconic, versatile, widely available\n• Hayman's London Dry — family-owned, clean and honest\n• Gordon's — the most-sold gin in the world for a reason\n\n**USA**\n• Bluecoat American Dry — citrus-forward, good price\n• Death's Door — minimalist, pure, affordable\n\n**Tip**: Budget gin shines brightest in a well-made G&T with quality tonic. The tonic does a lot of work.",
  },

  // --- First date gin ---
  {
    triggers: ['first date', 'date night', 'impress', 'romantic', 'date gin'],
    response: "Gin for a first date — this is important:\n\n**Safe, sophisticated choice**: Hendrick's — the quirky bottle opens conversation, the cucumber profile is approachable even for non-gin drinkers.\n\n**Confident, knowledgeable choice**: St. George Terroir or any local craft gin — shows adventurous taste and genuine curiosity.\n\n**Budget-smart move**: Emini Gin or Bluecoat — thoughtful and good quality without overspending.\n\n**The real rule**: Choose something *you* genuinely enjoy and can talk about with passion. Confidence in your choice is more impressive than the bottle itself.\n\nOrder it properly — balloon glass, loads of ice, quality tonic, matching garnish. Attention to detail is attractive.",
  },

  // --- Spirit coolers ---
  {
    triggers: ['spirit cooler', 'spirit coolers', 'gin cooler', 'long drink', 'summer drink', 'light drink'],
    response: "Gin spirit coolers are perfect for relaxed, easy-drinking sessions:\n\n• **Gin & Elderflower Cooler**: 50 ml gin + elderflower cordial + cucumber + soda water + ice\n• **Gin & Hibiscus**: 50 ml gin + hibiscus syrup + lime + soda + dried hibiscus garnish\n• **Jungle Bird Gin Riff**: 45 ml gin + 20 ml Campari + pineapple juice + lime + soda\n• **Mint & Citrus Cooler**: 50 ml gin + fresh mint + lime + soda + cucumber rounds\n\n**Key principle**: Keep it light, cold, and well-garnished. Spirit coolers are social drinks — build them in a large glass with plenty of ice.",
  },

  // --- Quick fixes ---
  {
    triggers: ['quick fix', 'no tonic', 'no ice', 'no citrus', 'no shaker', 'substitute', 'improvise', 'fix'],
    response: "Quick gin fixes — no specialist kit? No problem:\n\n• **No tonic**: Chilled soda water + squeeze of lemon/lime + small spoon of honey\n• **No fresh citrus**: Clear apple juice or a teaspoon of diluted vinegar for brightness\n• **No simple syrup**: Dissolve sugar or honey in warm water (1:1). Jam works too.\n• **No shaker**: Use a clean jar with a secure lid. Shake briefly, strain through a kitchen sieve.\n• **Not enough ice**: Chill gin, mixer, and glass in advance. Pour slowly.\n• **Too strong**: Add soda water 25 ml at a time, taste between each addition.\n\n**Home bar rule**: Gin + cold + citrus + fizz = a good drink. Everything else is refinement.",
  },

  // --- Gin styles overview ---
  {
    triggers: ['types of gin', 'gin styles', 'styles of gin', 'different gins', 'categories of gin', 'gin categories'],
    response: "The main gin styles to know:\n\n• **London Dry** — juniper-forward, dry, no post-distillation additives. The classic benchmark.\n• **Plymouth Gin** — slightly earthier and fuller than London Dry. Protected designation (only made in Plymouth).\n• **Old Tom** — slightly sweeter, bridges the gap between London Dry and genever. Great in classic cocktails.\n• **Sloe Gin** — London Dry steeped with sloe berries and sugar. Fruit-forward liqueur style.\n• **Navy Strength** — bottled at 57% ABV or above. Intense, bold, designed for tropical climates.\n• **New Western / Contemporary** — juniper in the background, local botanicals take the lead.\n• **Genever** — Dutch origin, malt wine base, more whisky-like. The ancestor of modern gin.\n\nWhich style interests you most?",
  },

  // --- ABV / strength ---
  {
    triggers: ['abv', 'alcohol', 'strength', 'how strong', 'percentage', 'navy strength', '57%'],
    response: "Gin strength — what to know:\n\n• **Standard gin**: 37.5%–47% ABV — most everyday bottles fall here\n• **London Dry minimum**: 37.5% ABV by regulation\n• **Navy Strength**: 57%+ ABV — historically bottled at this strength so gunpowder would still ignite if gin was spilled on it (true story)\n• **Cask-aged gin**: often 46–50% ABV\n\n**Higher ABV gins** hold their character better in ice-heavy drinks. A 47% gin will show more botanical complexity in a long G&T than a 37.5% one.\n\nFor cocktails, navy strength is brilliant — you need less volume to get the same flavour impact.",
  },

  // --- Cocktails ---
  {
    triggers: ['cocktail', 'cocktails', 'gin cocktail', 'what can i make', 'recipe', 'drink recipe'],
    response: "Classic gin cocktails worth mastering:\n\n• **G&T** — 50 ml gin + 150 ml tonic + ice + garnish. The foundation.\n• **Martini** — 60 ml gin + 10 ml dry vermouth + ice. Stir, strain, lemon twist.\n• **Negroni** — equal parts gin + Campari + sweet vermouth. Stir, strain, orange peel.\n• **Tom Collins** — 50 ml gin + 25 ml lemon juice + 15 ml sugar syrup + soda. Built over ice.\n• **Bee's Knees** — 50 ml gin + 25 ml lemon juice + 20 ml honey syrup. Shaken, served up.\n• **Gimlet** — 60 ml gin + 20 ml fresh lime juice + 10 ml sugar syrup. Clean and sharp.\n• **Clover Club** — gin + lemon + raspberry syrup + egg white. Shaken hard.\n\nStart with the G&T, master the Martini, then work your way through the classics.",
  },

  // --- Storage ---
  {
    triggers: ['store gin', 'storing gin', 'keep gin', 'how long', 'shelf life', 'expire', 'fridge'],
    response: "Gin storage is straightforward:\n\n• **Unopened**: Gin keeps indefinitely in a cool, dark place. Alcohol is its own preservative.\n• **Opened**: Consume within 12–18 months for best flavour. The botanicals will gradually fade after opening.\n• **Fridge**: Not necessary, but a cold gin does make a better G&T — less ice needed, less dilution.\n• **Sunlight**: The biggest enemy. UV light degrades botanicals and colour. Keep bottles out of direct sunlight.\n• **Upright**: Always store upright. Unlike wine, gin doesn't improve with time in the bottle once opened.\n\nA half-empty bottle loses flavour faster due to more air contact. Either finish it or transfer to a smaller bottle.",
  },

  // --- Gin vs Vodka ---
  {
    triggers: ['gin vs vodka', 'vodka', 'difference between gin and vodka', 'what makes gin different'],
    response: "Gin vs Vodka — the key distinction:\n\n• **Vodka** is a neutral spirit. By definition it should be odourless, colourless, and tasteless.\n• **Gin** is a flavoured spirit. It starts as a neutral spirit but is re-distilled with botanicals — juniper being mandatory.\n\nIn essence: if vodka is a blank canvas, gin is the painting.\n\nBoth start from the same base (grain or potato spirit), but gin's botanical bill gives it enormous flavour complexity. This is why gin cocktails can be so varied — the botanicals interact differently with each mixer.",
  },

  // --- Thank you ---
  {
    triggers: ['thank', 'thanks', 'cheers', 'perfect', 'helpful', 'great', 'awesome', 'brilliant'],
    response: "Cheers! Always happy to talk gin. Is there anything else you'd like to know — a specific bottle, a cocktail recipe, food pairing, or serving tip?",
  },
]
